# `.rag`

Governed, versioned retrieval surface for the Whostler Services workspace orientation files.

This directory is **not cache**. It is part of the repository, and every change here is reviewed and committed like any other governed artifact.

## What it stores

| Path | Purpose |
| --- | --- |
| `source-index.md` | Registry of the orientation sources (`AGENTS.md`, `README.md`, `docs/`, `.instructions/`) |
| `repository-baseline.md` | Baseline snapshot of the orientation surface |

## Rules

- Every orientation source must be registered in `source-index.md`.
- Changing an orientation file without updating this registry is drift.
- `.instructions/` files are the normative instructions; `.rag/` indexes and mirrors them.
- Validation is manual until tooling exists: `git diff --check` and internal link checks.
