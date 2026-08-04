# Website Execution Instructions

Version: 1.0

Status: active

Source: Whostler Services Website — Execution Specification

## Task

Build or refactor the institutional website inside `./website`. The result must be production-ready, responsive, accessible, technically credible, and written entirely in English.

## Execution rules

- Work only inside `./website`.
- Inspect all existing files before changing anything; preserve useful code, assets, dependencies, and conventions.
- Use the package manager already configured in the workspace.
- Avoid unnecessary dependencies; avoid rewriting working code without a technical reason.
- Never add real credentials; use environment variables for configurable or sensitive values; create or update `.env.example`.
- Run all available validation commands before finishing; fix errors introduced by the implementation.
- Document unresolved placeholders or external dependencies; do not simulate integrations that do not exist.
- If the workspace is empty, initialize a modern TypeScript web application with a stable, well-supported framework.

Framework decision (2026-08-03): this workspace uses **Vite + React 19 + TypeScript**.
Next.js was evaluated and rejected because of slow development/build feedback for this
single-page institutional site. Do not reintroduce Next.js without a new decision.

Recommended baseline:

* Vite (dev server and production build)
* React 19
* TypeScript (strict)
* Plain CSS with design tokens (no CSS framework)
* ESLint (`@eslint/js` + `typescript-eslint` + `eslint-plugin-react-hooks`)
* Static metadata in `index.html`; env-driven values via `VITE_*` variables

## Product objective

Communicate Whostler's positioning immediately, explain core technical services, build confidence with technical and business decision-makers, encourage qualified visitors to start a conversation, and provide a maintainable foundation for future pages and localization. The website is not an application dashboard, customer portal, or marketing campaign landing page.

## Information architecture

Primary navigation: Services, Technologies, Approach, About, Contact. A single-page layout is acceptable for the initial release with stable section identifiers: `#services`, `#technologies`, `#approach`, `#about`, `#contact`.

## Required sections

- **Header**: brand, desktop navigation, keyboard-accessible mobile menu (Escape closes, focus managed, links close menu), primary contact action ("Start a Project"), visible focus, non-obstructive sticky behavior.
- **Hero**: headline "Backend systems engineered for production.", supporting copy, primary action to `#contact`, secondary action to `#services`, and three or four credibility signals (backend-first architecture, cloud-native infrastructure, security-conscious engineering, long-term technical operations). Abstract technical visual only; no stock photography.
- **Services**: overview plus detailed service groups: Cloud and Web Infrastructure, Backend Engineering, AI Agentic Systems, Relay and Integration Services, Blockchain and Smart Contracts, Technical Support SLA, Website Development (complementary), Technical Documentation. Each card: name, short description, representative capabilities, decorative icon.
- **Engineering approach**: visual process section (Discovery, Assessment, Requirements, Architecture and Scope, Delivery Planning, Implementation, Testing and Security Validation, Deployment, Documentation, Monitoring and Continuous Improvement) with concise explanations; clarify that the process adapts to project size, complexity, risk, and budget.
- **Technologies**: organized by category (Cloud, Backend, Infrastructure, Data, Blockchain, Artificial Intelligence). No badges or logos implying partnerships or certifications. Store technology content in structured data.
- **Why Whostler**: differentiators (backend-first architecture, cloud-native engineering, production-focused delivery, security-conscious development, maintainable systems, AI integration expertise, blockchain experience, enterprise integrations, observability and operational readiness, long-term technical support). No fake metrics, logos, testimonials, or certifications.
- **About**: heading "Technical foundations for long-term growth.", adapted institutional copy, and the mission statement.
- **Contact**: heading "Let's discuss your next technical challenge." Fields: name, work email, company, service interest, project summary, optional budget range, consent acknowledgment. Semantic labels, validation, accessible errors, preserved input on failure, duplicate-submission prevention, clear loading/success/failure states, basic spam prevention.
- **Footer**: brand, short positioning statement, navigation links, contact placeholder, GitHub/LinkedIn placeholders when configured, programmatic current year.

## Contact integration

Preferred order: existing backend endpoint; server action or API route; configurable third-party provider; mailto fallback; documented non-functional placeholder. Never claim a message was delivered unless the provider confirms delivery or acceptance. Validate inputs server-side, normalize input, apply rate limiting and spam mitigation, protect provider credentials, return structured errors, and limit field lengths. Centralize integration configuration and document required variables in `.env.example`.

Vercel transpiles `api/` functions per file as ESM (`"type": "module"`): relative imports must use explicit `.js` extensions (e.g. `"../src/lib/validation/contact.js"`), otherwise the deployed function fails at runtime with `ERR_MODULE_NOT_FOUND`.

## Visual design

Modern, technical, minimal, premium but restrained, appropriate for infrastructure and engineering services. Strong typography, clear hierarchy, generous spacing, consistent grids, subtle depth, high contrast. Visual language: abstract nodes, infrastructure diagrams, API paths, data flows, grid systems, technical line illustrations. Avoid stock photography, excessive neon/gradients/glassmorphism, heavy animation, fake dashboards, and distracting fake code. Define semantic color tokens with accessible contrast; one primary sans-serif family with optional monospace for technical labels; consistent spacing scale (4, 8, 12, 16, 24, 32, 48, 64, 96, 128); maximum content width 1120–1280px; service grids adapt 1/2/3–4 columns.

## Responsive, accessibility, performance

- Support 320px through large desktop; no horizontal scrolling at standard viewports; fluid typography and spacing.
- Target practical WCAG 2.1 AA: semantic HTML, landmarks, one page-level heading, logical heading hierarchy, keyboard navigation, visible focus, skip-to-content link, accessible mobile menu and forms, programmatic error association, sufficient contrast, meaningful link text, alt text for meaningful images and empty alt for decorative, reduced-motion support, no keyboard traps, no hover-only interaction, minimum touch targets, correct language attribute. Use ARIA only where native HTML is insufficient.
- Performance: minimize client-side JavaScript, prefer server-rendered or static content, optimize and lazy-load images, avoid layout shifts, optimize fonts, avoid heavy animation libraries, remove unused dependencies, avoid unnecessary hydration, ensure the production build completes. Lighthouse targets (not public claims): Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+.
- SEO: unique title, meta description, canonical configuration, Open Graph and social metadata, favicon, semantic headings, robots configuration, sitemap when supported, descriptive URLs, and Organization/Website structured data only where accurate.

## Content architecture

Separate institutional content from UI components. Recommended structure: `src/app`, `src/components` (layout, navigation, sections, ui, forms), `src/config/site.ts`, `src/content` (services, technologies, process, company), `src/lib`, `src/styles`, `src/types`. Content records typed when TypeScript is available; no repeated content across components; prepare for future localization without unnecessary complexity.

## Error handling and security

Handle missing optional configuration, broken contact integration, network errors, validation errors, missing assets, unknown routes, and server errors. Provide user-friendly errors and developer-readable logs; no sensitive stack traces in production; not-found page and error boundary or equivalent when supported. Required security practices: no secrets in client bundles, input validation, output encoding, safe external links, dependency review, least-privilege integrations, secure server-side environment variables, appropriate HTTP headers where supported, restricted payload sizes, rate limiting for public mutation endpoints, error messages without sensitive details.

## Analytics and privacy

No analytics unless already configured or explicitly configured. If support is prepared, keep it optional, disabled without configuration, documented via environment variables, and compliant with consent requirements. No tracking pixels by default.

## Testing and validation

Use the existing test framework when configured. At minimum run static checks (formatting, linting, type checking, production build). Add unit tests for critical logic (contact form validation, content helpers, URL normalization, metadata helpers) and component/integration tests when infrastructure exists (mobile menu, navigation, contact validation, mocked submission success/failure, keyboard interactions). Do not add a large testing framework solely for minimal coverage unless justified.

## Implementation phases

1. **Audit** — inspect workspace, framework, package manager, dependencies, assets, commands.
2. **Foundation** — site config, typed content structures, design tokens, metadata, global styles, layout primitives, navigation.
3. **Main content** — hero, services, technologies, approach, differentiators, about, contact, footer.
4. **Interaction** — mobile navigation, contact validation, honest submission behavior, restrained motion, loading/error states.
5. **Technical quality** — accessibility, responsive, SEO, image optimization, security, performance, error handling.
6. **Validation** — formatter, linter, type checker, tests, production build, manual QA.
7. **Documentation** — README, `.env.example`, content customization, deployment, placeholders and limitations.

## Environment variables

Only those required by the implementation. Server-side secrets (e.g., `CONTACT_PROVIDER_API_KEY`) must never be exposed through public environment variables.

Client-side variables used by this implementation (see `.env.example`):

* `VITE_SITE_URL` — public site URL for canonical and Open Graph references
* `VITE_CONTACT_EMAIL` — contact placeholder shown in the form fallback and footer
* `VITE_CONTACT_ENDPOINT` — optional delivery endpoint; empty = documented mailto fallback (never fake delivery)
* `VITE_GITHUB_URL`, `VITE_LINKEDIN_URL` — optional social links (empty hides them)

`VITE_*` variables are embedded in the client bundle, so never place secrets there.

## Acceptance criteria

- All changes are contained inside `./website`.
- The site installs and runs with documented commands and renders all required sections.
- The layout is responsive; the interface is keyboard accessible.
- Public copy follows Whostler's backend-first positioning; no unsupported facts or guarantees; no paid traffic or advertising content.
- The contact flow does not fake delivery.
- Metadata and SEO foundations are present; security-sensitive values remain server-side.
- Formatting, linting, type checking, tests, and build executed where available, with introduced errors fixed.
- README accurately describes setup, customization, validation, and deployment.

## Final agent report

Report summary, files changed, architecture, design decisions, every executed validation command and its result, accessibility and responsive review, configuration/placeholders, and remaining work. Never state that checks passed unless they were actually executed successfully.
