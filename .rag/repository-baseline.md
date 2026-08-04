# Repository Baseline

Snapshot of the orientation surface after rebuild (2026-08-03).

- Root orientation: `AGENTS.md`, `README.md`
- Documentation corpus: `docs/` (index + company + technologies + 8 service files)
- Instruction corpus: `.instructions/` (index + workspace + agents + website execution)
- Governed surface: `.rag/` (this directory)

State: Vite + React + TypeScript institutional website implemented in `src/`
(single-page app, CSS design tokens based on `docs/design/` reference, honest
contact form with mailto fallback). Contact delivery: Vercel serverless function
in `api/contact.ts` (validates server-side, rate-limits, sends via Resend) when
deployed with `RESEND_API_KEY`/`CONTACT_RECIPIENT_EMAIL` set. Validation
available: `pnpm lint`, `pnpm typecheck`, `pnpm build`. Markdown content has no
linter.

Vercel transpiles `api/` functions per file as ESM (`"type": "module"`), so
relative imports in `api/` must use explicit `.js` extensions (e.g.
`"../src/lib/validation/contact.js"`); extensionless imports fail at runtime
with `ERR_MODULE_NOT_FOUND` (fixed 2026-08-04).

Framework decision (2026-08-03): Vite + React 19 + TypeScript; Next.js evaluated
and rejected for slow development/build feedback. Visual reference (read-only):
`docs/design/whostler-services/`; its `.openai/` hosting config and the bundled
`.zip` are not tracked because this repository is public.
