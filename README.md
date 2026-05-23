# ekguitarist

Production-grade foundation for a cinematic immersive guitar-learning platform built with Next.js 15, TypeScript, TailwindCSS, Prisma, PostgreSQL, Clerk/Auth.js, Zustand, Socket.io, Stripe, Razorpay, Three.js, and React Three Fiber.

This repository intentionally contains architecture and foundation only. It does not include final pages, full course content, or complete feature implementations.

## Quick Start

```bash
pnpm install
cp .env.example .env
pnpm db:generate
pnpm dev
```

## Architecture Goals

- Scale to marketplace, community, subscriptions, live classes, AI practice feedback, and mobile clients.
- Keep domain modules isolated under `src/features`.
- Keep server-only infrastructure under `src/server`.
- Keep product UI reusable through design tokens, Tailwind variables, and shadcn-compatible primitives.
- Prefer typed contracts, schema validation, role gates, and explicit service boundaries.

## Documentation

- [Architecture](./docs/ARCHITECTURE.md)
- [Folder Structure](./docs/FOLDER_STRUCTURE.md)
- [Conventions](./docs/CONVENTIONS.md)
- [API Strategy](./docs/API_STRATEGY.md)
- [Scalability](./docs/SCALABILITY.md)
- [Design System](./docs/DESIGN_SYSTEM.md)
