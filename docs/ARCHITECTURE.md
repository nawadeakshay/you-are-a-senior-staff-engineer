# Architecture

ekguitarist is organized as a modular monolith first. That gives the product startup speed while keeping clean seams for future service extraction when traffic or team boundaries justify it.

## System Layers

1. `src/app`
   Next.js App Router entrypoints, route groups, metadata, route handlers, and shell layouts.

2. `src/features`
   Product domains such as auth, courses, payments, dashboard, community, AI, and admin. Each feature owns its types, policies, UI, hooks, and server-facing functions.

3. `src/server`
   Infrastructure that must not leak into client bundles: Prisma, payment SDKs, realtime server setup, SEO utilities, API response helpers, and future queue/search adapters.

4. `src/components`
   Shared UI primitives, layout components, and immersive Three.js components. Feature-specific UI should stay inside its feature until reuse is proven.

5. `src/config`
   App config, navigation, environment validation, and stable product constants.

6. `src/stores`
   Zustand stores for client state that is not server truth. User, course, payment, and enrollment records stay server-owned.

## Auth

Clerk is wired as the primary auth provider through `ClerkProvider` and `src/middleware.ts`. Auth.js is included as a future compatibility layer for alternate auth providers or native mobile token exchange, but Clerk remains the default identity source.

Roles are modeled in both TypeScript and Prisma:

- `student`
- `instructor`
- `admin`
- `superadmin`

Server routes and pages should enforce roles through middleware, `RoleGate`, or server-side policy functions. Client checks are only UX hints.

## Data

Prisma with PostgreSQL is the system of record. The schema supports:

- users and instructor profiles
- courses, modules, and lessons
- enrollments and lesson progress
- subscription plans and provider subscriptions
- one-time payments
- achievements and streaks
- comments and community posts

Soft deletes are included where product recovery and moderation flows matter.

## Payments

Stripe and Razorpay are intentionally abstracted behind server modules. Checkout creation, webhook validation, subscription syncing, and entitlement updates should live under `src/features/payments` and `src/server/payments`.

## Realtime

Socket.io is staged behind `src/server/realtime/socket.ts`. Use it for live classes, chat, presence, instructor moderation, and collaborative practice rooms. Persist important events to Postgres; do not rely on sockets as durable state.

## AI

AI features are isolated under `src/features/ai`. Practice signals, recommendations, transcription, fingering feedback, and personalized learning paths should use typed inputs and queue-backed jobs before being written into user-facing records.

## SEO

SEO starts in `src/app/layout.tsx`, `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/manifest.ts`, and `src/components/seo/json-ld-script.tsx`. Course pages should later emit Course schema, instructor profile schema, canonical URLs, and dynamic sitemap entries.
