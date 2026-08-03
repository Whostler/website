# Repository Baseline

Snapshot of the orientation surface after rebuild (2026-08-03).

- Root orientation: `AGENTS.md`, `README.md`
- Documentation corpus: `docs/` (index + company + technologies + 8 service files)
- Instruction corpus: `.instructions/` (index + workspace + agents + website execution)
- Governed surface: `.rag/` (this directory)

State: Vite + React + TypeScript institutional website implemented in `src/`
(single-page app, CSS design tokens based on `docs/design/` reference, honest
contact form with mailto fallback). Validation available: `pnpm lint`,
`pnpm typecheck`, `pnpm build`. Markdown content has no linter.

Framework decision (2026-08-03): Vite + React 19 + TypeScript; Next.js evaluated
and rejected for slow development/build feedback. Visual reference (read-only):
`docs/design/whostler-services/`; its `.openai/` hosting config and the bundled
`.zip` are not tracked because this repository is public.
