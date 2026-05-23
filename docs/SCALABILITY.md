# Scalability

## First Principles

- Keep the product as a modular monolith until data, traffic, or team ownership forces extraction.
- Use Postgres indexes around access patterns, not guesses.
- Keep payments and auth as provider-integrated modules with local canonical state.
- Treat realtime as transport, not storage.
- Treat AI as async by default when work is slow, expensive, or retryable.

## Millions of Users Later

Recommended growth path:

1. Add read replicas for heavy course and community reads.
2. Add Redis for rate limits, sessions, live presence, and hot counters.
3. Add object storage and CDN for lesson assets.
4. Move AI processing, email, media encoding, and webhook retries to queues.
5. Split creator marketplace, realtime classrooms, and AI practice into services only when ownership and scale demand it.

## Performance Foundation

- Server Components by default.
- Client Components only for interactivity, state, animation, and Three.js.
- `next/image` for product imagery.
- `optimizePackageImports` for heavy UI and animation packages.
- Route groups to keep admin and app bundles isolated.
- Prisma singleton to avoid dev connection exhaustion.

## Mobile Apps Later

Keep domain APIs typed and versionable. Avoid coupling mobile behavior to web route-group assumptions. Auth token exchange and entitlement APIs should become stable `/api/v1` contracts.
