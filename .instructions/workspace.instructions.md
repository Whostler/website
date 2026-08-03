# Workspace Orientation Instructions

Version: 1.1

Status: active

Sources: Whostler Services project instructions and website execution specification

## Purpose

Define the workspace orientation surface: repository structure, institutional positioning, content rules, and acceptance criteria for the Whostler Services public website.

## Institutional positioning

Whostler Services is a **backend-first software engineering company**. Core areas:

- Backend engineering
- Cloud infrastructure
- AI agentic systems
- API, relay, and integration services
- Blockchain and smart contracts
- Technical operations
- Technical support SLA
- Technical documentation
- Website development (complementary)

### Tagline

> Backend Engineering • Cloud Infrastructure • AI Agentic Systems • Blockchain • Technical Operations

### Mission

> To engineer reliable backend systems, cloud infrastructures, AI solutions, and blockchain technologies that enable businesses to scale with confidence.

### Preferred summary

> Whostler Services is a software engineering company specialized in backend systems, cloud infrastructure, AI agentic solutions, blockchain applications, integrations, and technical operations. We design, build, deploy, and maintain production-ready platforms adapted to each organization's business, security, scalability, and operational requirements.

## Prohibited positioning

Do not describe Whostler Services as providing:

- Paid traffic management
- Advertising campaign management
- Influencer prospecting
- Social media management
- General digital marketing
- Media buying
- Marketing automation as a primary agency service
- Guaranteed SEO rankings, lead generation, or sales growth

Website development is complementary and must never be presented as the primary capability. Technical SEO may be mentioned only as part of website engineering and performance work.

## Structure

- `README.md` — repository overview.
- `AGENTS.md` — contributor and agent guidance.
- `docs/` — public content corpus: `README.md`, `company.md`, `technologies.md`, `services/` (one file per service, indexed).
- `.instructions/` — normative instructions (this directory).
- `.rag/` — governed retrieval surface: `source-index.md`, `repository-baseline.md`.

## Content rules

- Terminology must match the canonical Whostler Services copy; do not rename services or technologies.
- Public copy must be truthful: no invented clients, metrics, certifications, partnerships, testimonials, or availability guarantees.
- Use placeholders (`[Add official website]`, `[Add business email]`) when verified information is unavailable.
- AI systems are described responsibly: validation, permissions, logging, and human review where appropriate; never infallible or fully autonomous.
- Blockchain work uses security-conscious language; no guaranteed security or independent audit claims unless verified.
- Keep documentation separate from execution tracking.

## Standard project workflow

1. Discovery
2. Business assessment
3. Technical assessment
4. Requirements definition
5. Architecture proposal
6. Scope definition
7. Delivery planning
8. Development or infrastructure implementation
9. Testing
10. Security validation
11. Deployment
12. Documentation
13. Monitoring
14. Technical support
15. Continuous improvement

Adapt the workflow to project size, complexity, risk, budget, existing infrastructure, delivery constraints, and operational responsibility.

## Acceptance criteria

- All internal Markdown links resolve.
- `git diff --check` passes for changed files.
- New or renamed services update `docs/services/README.md` and `.rag/source-index.md`.
- Orientation changes keep the `.rag` registry in sync.
