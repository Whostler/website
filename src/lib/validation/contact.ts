export const CONTACT_CONSTRAINTS = {
  nameMin: 2,
  nameMax: 100,
  emailMax: 254,
  companyMax: 150,
  messageMin: 20,
  messageMax: 5000,
} as const;

export const SERVICE_OPTIONS = [
  "Backend Engineering",
  "Cloud Infrastructure",
  "AI Agentic Systems",
  "Integration Services",
  "Blockchain",
  "Technical Support SLA",
  "Website Development",
  "Technical Documentation",
  "Other",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];

export interface ContactInput {
  name: string;
  email: string;
  company: string;
  service: ServiceOption;
  message: string;
  budget?: string;
  consent: boolean;
  honeypot?: string;
}

export interface ContactErrors {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
  consent?: string;
}

export type ContactValidationResult =
  | { ok: true; data: ContactInput }
  | { ok: false; errors: ContactErrors };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function toStringValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isServiceOption(value: string): value is ServiceOption {
  return (SERVICE_OPTIONS as readonly string[]).includes(value);
}

export function validateContactPayload(input: unknown): ContactValidationResult {
  const raw = (input ?? {}) as Record<string, unknown>;
  const errors: ContactErrors = {};

  const name = toStringValue(raw.name);
  if (name.length < CONTACT_CONSTRAINTS.nameMin || name.length > CONTACT_CONSTRAINTS.nameMax) {
    errors.name = "Please enter your name (2–100 characters).";
  }

  const email = toStringValue(raw.email);
  if (
    email.length === 0 ||
    email.length > CONTACT_CONSTRAINTS.emailMax ||
    !EMAIL_RE.test(email)
  ) {
    errors.email = "Please enter a valid work email.";
  }

  const company = toStringValue(raw.company);
  if (company.length > CONTACT_CONSTRAINTS.companyMax) {
    errors.company = "Company name must be 150 characters or fewer.";
  }

  const serviceCandidate = toStringValue(raw.service);
  const service = isServiceOption(serviceCandidate) ? serviceCandidate : null;
  if (!service) {
    errors.service = "Please select a service.";
  }

  const message = toStringValue(raw.message);
  if (
    message.length < CONTACT_CONSTRAINTS.messageMin ||
    message.length > CONTACT_CONSTRAINTS.messageMax
  ) {
    errors.message = "Please describe your project (20–5000 characters).";
  }

  if (raw.consent !== true) {
    errors.consent = "Please acknowledge the consent statement.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      company,
      // Non-null here because the guard above sets errors.service, which
      // triggers the early return before this point.
      service: service ?? "Other",
      message,
      budget: toStringValue(raw.budget) || undefined,
      consent: true,
      honeypot: typeof raw.honeypot === "string" ? raw.honeypot : "",
    },
  };
}
