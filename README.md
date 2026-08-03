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
| `VITE_CONTACT_ENDPOINT` | Optional delivery endpoint; empty = documented mailto fallback (no fake delivery) |
| `VITE_GITHUB_URL` | Optional GitHub link in the footer (empty hides it) |
| `VITE_LINKEDIN_URL` | Optional LinkedIn link in the footer (empty hides it) |

`VITE_` variables are embedded in the client bundle, so never place secrets there. Any real contact delivery backend must be server-side or an external service configured by you.

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
- With `VITE_CONTACT_ENDPOINT` set, the form POSTs JSON to that endpoint and shows success only when the endpoint returns `2xx`. The endpoint must validate and protect the data server-side; the client bundle cannot hold secrets.
- The form includes required-field and email validation, a honeypot spam check, and preserves input on failure.

Official contact details (email, phone, address, social profiles) are placeholders in `src/config/site.ts` until provided.

## Deployment

This is a static single-page application:

```bash
pnpm install
pnpm build
```

Deploy the `dist/` directory to any static host (Vercel, Cloudflare Pages, Netlify, a Linux web server, etc.) with a fallback to `index.html` for unknown routes. Set the `VITE_*` variables at build time. The existing GitHub Actions in `.github/workflows/` are pre-existing repository configuration and were not modified by this implementation.

## Placeholders and Known Limitations

- Official domain, email, phone, address, GitHub, and LinkedIn values are placeholders.
- No contact delivery backend is configured; the form intentionally does not fake delivery.
- The site is a client-side rendered SPA: SEO relies on the static metadata in `index.html` plus `robots.txt`/`sitemap.xml`. For stronger SEO, add a prerendering step or host the built HTML with injected metadata.
- No privacy policy or legal pages yet.
- No unit/E2E test framework is installed; validation is via lint, type check, and production build.

## Related Documentation

- `.instructions/workspace.instructions.md` — workspace orientation and institutional positioning
- `.instructions/agents.instructions.md` — agent behavior and engineering rules
- `.instructions/website-execution.instructions.md` — website execution spec
- `.rag/source-index.md` — registry of all orientation sources
