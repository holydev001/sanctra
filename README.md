# Sanctra Public Website

Faithful Next.js migration of the original `sanct-proto` TanStack public-site prototype. Sanctra is a GitHub-connected DevOps platform that analyzes repositories and delivers production-ready infrastructure as reviewable pull requests.

## Scope

This repository contains the public marketing experience:

- Homepage
- How it works
- Integrations
- Security
- Roadmap
- Documentation
- Waitlist
- Sitemap, robots, metadata, and custom 404

The authenticated product, GitHub App, repository analysis engine, billing, and production waitlist persistence are intentionally outside this migration.

## Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React
- pnpm

## Local setup

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Validation

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Project structure

```text
src/
├── app/                 # App Router pages, metadata routes, global CSS
├── components/          # Shared public-site and design-system components
├── config/              # Machine-readable design tokens
├── hooks/               # Client reveal and responsive hooks
└── lib/                 # Shared utilities
docs/
├── design-system.md
├── component-inventory.md
├── migration-notes.md
└── Sanctra_Design_System_v1.docx
```

## Design-system sources

- `src/app/globals.css` is the runtime authority for themes, utilities, and motion.
- `src/config/design-tokens.ts` exposes extracted tokens to TypeScript.
- `docs/design-system.md` explains usage and design rules.
- `docs/Sanctra_Design_System_v1.docx` is the complete shareable guide.

## Waitlist architecture

The form intentionally retains the source prototype’s local-browser storage behavior to preserve UI/UX exactly. It is not production persistence. Before launch, replace it with a server-side adapter, database or managed waitlist service, duplicate-email handling, consent records, and transactional confirmation email.

## Environment variables

Copy `.env.example` to `.env.local` when environment-backed services are introduced. No secrets are required for the current static migration.

## Deployment

The project is statically prerendered by Next.js and can be deployed to any compatible Node or Next.js hosting provider. Run `pnpm build` as the production release gate.

## Known limitations

- Waitlist entries are not persisted server-side.
- Legal, security, integration, availability, and queue-position copy must be reviewed before public launch.
- Final production domain and social metadata assets are not yet configured.

## Contribution workflow

Create changes on a `codex/` or feature branch, keep UI changes aligned with the extracted design system, and require typecheck, lint, and production build before merge.
