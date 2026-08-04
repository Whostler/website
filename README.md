# Whostler Services Website

> Backend Engineering • Cloud Infrastructure • AI Agentic Systems • Blockchain • Technical Operations

Institutional website for **Whostler Services**, a backend-first software engineering company. The site communicates the company's technical services — backend engineering, cloud infrastructure, AI agentic systems, relays and integrations, blockchain and smart contracts, technical support SLA, website development, and technical documentation — and invites qualified visitors to start a project conversation.

## Institutional Objective

Position Whostler Services as a backend-first software engineering company. The site is entirely in English, uses credible and professional copy, and does **not** position the company as a marketing, advertising, social media, influencer, or paid traffic agency. No unsupported facts, metrics, clients, certifications, or guarantees are present.

The visual design is based on the UI reference in `docs/design/whostler-services` (design tokens, hero system map, service grids, contact form, and footer).

## Technology Stack

- [Vite](https://vitejs.dev/) (fast dev server and production build)
- React 19
- TypeScript (strict)
- Plain CSS with design tokens (no CSS framework)
- ESLint (`@eslint/js` + `typescript-eslint` + `eslint-plugin-react-hooks`)

## Requirements

- Node.js 22.13 or newer
- pnpm, npm, or yarn

## Installation

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

Open the local URL printed by Vite (default http://localhost:5173).

## Production Build

```bash
pnpm build      # type-checks, then builds to dist/
pnpm preview    # serves the production build locally
```

## Validation Commands

```bash
pnpm lint        # ESLint
pnpm typecheck   # tsc --noEmit
pnpm build       # type check + production build
```

## Environment Variables

Copy `.env.example` to `.env.local` and adjust values. See `.env.example` for the full list:

| Variable | Purpose |
| --- | --- |
| `VITE_SITE_URL` | Public site URL used for canonical and Open Graph references |
| `VITE_CONTACT_EMAIL` | Contact placeholder shown in the form fallback and footer |
| `VITE_CONTACT_ENDPOINT` | Delivery endpoint (`/api/contact` on Vercel); empty = documented mailto fallback (no fake delivery) |
| `VITE_GITHUB_URL` | Optional GitHub link in the footer (empty hides it) |
| `VITE_LINKEDIN_URL` | Optional LinkedIn link in the footer (empty hides it) |

`VITE_` variables are embedded in the client bundle, so never place secrets there. Server-side variables for the contact function (`RESEND_API_KEY`, `CONTACT_RECIPIENT_EMAIL`, `CONTACT_FROM_EMAIL`) are defined in `.env.example` and must be set in the Vercel project's Environment Variables — never as `VITE_*`.

## Directory Structure

```text
.
├── docs/                      # Public content corpus + UI reference (docs/design/)
├── .instructions/             # Normative workspace, agent, and execution instructions
├── .rag/                      # Governed retrieval surface (source index, baseline)
├── public/
│   ├── whostler-logo.png      # Brand logo (from the UI reference)
│   ├── favicon.png
│   ├── robots.txt
│   └── sitemap.xml
├── assets/
│   └── css/globals.css        # Design tokens and component styles
├── src/
│   ├── components/
│   │   ├── forms/             # ContactForm (validation, honest submission)
│   │   ├── layout/            # Header (accessible mobile menu), Footer
│   │   └── sections/          # Hero, Services, Approach, Technologies, About, Contact
│   ├── config/site.ts         # Central site and contact configuration
│   ├── content/               # Typed institutional content
│   ├── lib/validation/        # Contact validation shared with the form
│   └── types/                 # Content types
├── index.html                 # Metadata, fonts, app mount
└── .env.example
```

## Content Customization

Institutional copy lives in `src/content/` and is typed:

- `company.ts` — hero, signals, about, mission, differentiators
- `services.ts` — service cards (name, description, capabilities, note)
- `technologies.ts` — technology groups
- `process.ts` — engineering approach steps

Site-wide metadata lives in `index.html`. Contact placeholders are centralized in `src/config/site.ts`.

## Contact Configuration

The contact form validates on the client (`src/lib/validation/contact.ts`) and submits only when a delivery endpoint is configured:

- With `VITE_CONTACT_ENDPOINT` empty, the form shows a clear "not configured" state with a mailto fallback — it never fakes a successful submission.
- With `VITE_CONTACT_ENDPOINT` set (default `/api/contact`), the form POSTs JSON to that endpoint and shows success only when the endpoint returns `2xx`.
- The endpoint is the Vercel serverless function in `api/contact.ts`, deployed alongside the frontend. It re-validates the payload with the same validator used by the client, rejects oversized bodies (32 KB), rate-limits per IP (5 per 10 minutes, per instance), checks the honeypot, and delivers the inquiry by email through Resend. It responds `2xx` only when Resend confirms acceptance; missing server configuration returns `503` and the client shows an honest error state.
- The form includes required-field and email validation, a honeypot spam check, and preserves input on failure.

Official contact details (email, phone, address, social profiles) are placeholders in `src/config/site.ts` until provided.

## Deployment

This is a static single-page application with one serverless function, deployed to Vercel:

```bash
pnpm install
pnpm build
```

1. Push the repository to GitHub and import it in Vercel (Root Directory: repo root). Vercel detects Vite for the frontend and serves `api/contact.ts` as a serverless function; no `vercel.json` is required.
2. In the Vercel project, set Environment Variables: the `VITE_*` values used by the build plus the server-side `RESEND_API_KEY` (from https://resend.com/api-keys), `CONTACT_RECIPIENT_EMAIL` (the inbox that receives inquiries), and `CONTACT_FROM_EMAIL` (a verified sender for the domain, e.g. `Whostler Services <contact@whostler.country>`).
3. Deploy. The form on the live site posts to `/api/contact` on the same origin.

For local development with the function, use `vercel dev` (serves the Vite app and `api/` together). Plain `vite dev` does not serve `/api/contact`; leave `VITE_CONTACT_ENDPOINT` empty locally to keep the honest mailto fallback. The existing GitHub Actions in `.github/workflows/` are pre-existing repository configuration and were not modified by this implementation.

## Placeholders and Known Limitations

- Official domain, email, phone, address, GitHub, and LinkedIn values are placeholders.
- Contact delivery works once the Vercel function is deployed with `RESEND_API_KEY` and `CONTACT_RECIPIENT_EMAIL` set; until then the form intentionally does not fake delivery. Rate limiting is per function instance, not a global quota.
- The site is a client-side rendered SPA: SEO relies on the static metadata in `index.html` plus `robots.txt`/`sitemap.xml`. For stronger SEO, add a prerendering step or host the built HTML with injected metadata.
- No privacy policy or legal pages yet.
- No unit/E2E test framework is installed; validation is via lint, type check, and production build.

## Related Documentation

- `.instructions/workspace.instructions.md` — workspace orientation and institutional positioning
- `.instructions/agents.instructions.md` — agent behavior and engineering rules
- `.instructions/website-execution.instructions.md` — website execution spec
- `.rag/source-index.md` — registry of all orientation sources
