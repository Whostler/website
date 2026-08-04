import type { IncomingMessage, ServerResponse } from "node:http";
import { validateContactPayload } from "../src/lib/validation/contact.js";

const MAX_BODY_BYTES = 32 * 1024;
const RESEND_API_URL = "https://api.resend.com/emails";

// Simple per-instance rate limit: 5 submissions per IP per 10 minutes.
// Honest limitation: this is per warm instance, not a global quota.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateBuckets = new Map<string, number[]>();

interface JsonErrorBody {
  ok: false;
  error: string;
  details?: unknown;
}

function writeJson(
  res: ServerResponse,
  status: number,
  body: { ok: true } | JsonErrorBody,
): void {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(body));
}

function clientIp(req: IncomingMessage): string {
  const forwarded = req.headers["x-forwarded-for"];
  const value = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  return (value ?? "unknown").split(",")[0].trim();
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (rateBuckets.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT_MAX) {
    rateBuckets.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateBuckets.set(ip, recent);
  return false;
}

async function readBody(
  req: IncomingMessage,
): Promise<{ ok: true; raw: string } | { ok: false; status: number; error: string }> {
  const chunks: Buffer[] = [];
  let size = 0;
  for await (const chunk of req) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += buffer.length;
    if (size > MAX_BODY_BYTES) {
      return { ok: false, status: 413, error: "payload_too_large" };
    }
    chunks.push(buffer);
  }
  return { ok: true, raw: Buffer.concat(chunks).toString("utf8") };
}

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void> {
  if (req.method !== "POST") {
    res.writeHead(405, {
      Allow: "POST",
      "Content-Type": "application/json; charset=utf-8",
    });
    res.end(JSON.stringify({ ok: false, error: "method_not_allowed" }));
    return;
  }

  if (isRateLimited(clientIp(req))) {
    writeJson(res, 429, { ok: false, error: "rate_limited" });
    return;
  }

  const body = await readBody(req);
  if (!body.ok) {
    writeJson(res, body.status, { ok: false, error: body.error });
    return;
  }

  let payload: unknown;
  try {
    payload = JSON.parse(body.raw);
  } catch {
    writeJson(res, 400, { ok: false, error: "invalid_json" });
    return;
  }

  const result = validateContactPayload(payload);
  if (!result.ok) {
    writeJson(res, 400, {
      ok: false,
      error: "validation_failed",
      details: result.errors,
    });
    return;
  }

  const data = result.data;

  // Honeypot: silently accept so bots do not learn the field exists.
  if (data.honeypot) {
    writeJson(res, 200, { ok: true });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Whostler Services <onboarding@resend.dev>";

  if (!apiKey || !recipient) {
    console.error("contact: missing RESEND_API_KEY or CONTACT_RECIPIENT_EMAIL");
    writeJson(res, 503, { ok: false, error: "not_configured" });
    return;
  }

  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company || "Not provided"}`,
    `Service: ${data.service}`,
    data.budget ? `Budget range: ${data.budget}` : "",
    "",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const delivery = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [recipient],
        reply_to: data.email,
        subject: `Project inquiry — ${data.service}`,
        text,
      }),
    });

    if (delivery.ok) {
      writeJson(res, 200, { ok: true });
      return;
    }

    console.error(`contact: resend rejected delivery (${delivery.status})`);
    writeJson(res, 502, { ok: false, error: "delivery_failed" });
  } catch (error) {
    console.error(
      "contact: delivery request failed",
      error instanceof Error ? error.message : "unknown error",
    );
    writeJson(res, 502, { ok: false, error: "delivery_failed" });
  }
}
