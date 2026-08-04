# AGENTS.md

Guidance for AI agents and contributors working in this repository.

## What this repository is

The Whostler Services public website workspace. It currently holds the base
Markdown documentation structure and a Vite + React + TypeScript institutional
website (single-page app with CSS design tokens), plus repository configuration
(GitHub Actions, Codacy, OSV scanner). The website build is specified in
`.instructions/website-execution.instructions.md`.

## Repository structure

- `README.md` — repository overview
- `AGENTS.md` — this file
- `docs/` — public website content corpus (company, technologies, services)
- `.instructions/` — normative orientation and execution instructions
- `.rag/` — governed retrieval surface (source index, baseline)
- `.github/` — CI and repository configuration
- `.codacy/` — generated security and quality rules
- `src/` — website source (components, config, content, lib, styles)
- `public/` — static assets (logo, favicon, robots.txt, sitemap.xml)
- `docs/design/` — UI reference model for the visual system
- `api/` — Vercel serverless function for contact delivery (Resend)

## Normative sources

- `.instructions/workspace.instructions.md` — workspace orientation rules
- `.instructions/agents.instructions.md` — agent behavior and output rules
- `.instructions/website-execution.instructions.md` — website build execution spec
- `.rag/source-index.md` — registry of every orientation source

## Content rules

- Keep service and technology terminology consistent with `docs/`; these terms
  feed the public website copy.
- Position Whostler as a backend-first software engineering company. Never
  position it as marketing, advertising, social media, or paid traffic agency.
- Public copy must be truthful: no invented clients, metrics, certifications,
  partnerships, or guarantees.
- AI systems are described with validation, permissions, logging, and human
  review; never as infallible or fully autonomous.
- Keep documentation separate from execution tracking. Do not use service
  documents as a task or backlog tracker.

## Workflow

- Scope changes to a single request. Complete and validate before committing.
- Create one scoped local commit per change. Do not push automatically.
- Preflight before creating or editing `AGENTS.md`; never overwrite an existing file.
- When changing orientation files, update `.rag/source-index.md` together.
- Website copy lives in `src/content/` and `src/config/site.ts`; edit content
  there, not inside components.

## Validation

- `git diff --check` for whitespace errors.
- Internal Markdown links must resolve.
- Website validation: `pnpm lint`, `pnpm typecheck`, `pnpm build`.
- The design system lives in `assets/css/globals.css`; keep new UI consistent
  with its tokens and the `docs/design/` reference.
- Markdown content has no linter yet; it is validated by review.
