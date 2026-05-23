# API Strategy

## Route Handlers

Use Next.js route handlers for browser and mobile clients:

```text
src/app/api/courses/route.ts
src/app/api/payments/checkout/route.ts
src/app/api/webhooks/stripe/route.ts
```

## Contracts

Each endpoint should have:

- Zod request schema
- typed response model
- server-side auth policy
- structured error response
- idempotency strategy for writes where needed

Use `src/server/api/response.ts` for consistent JSON response envelopes.

## Versioning

Public mobile-facing APIs should move behind `/api/v1/*` once native apps begin. Internal web-only endpoints can remain colocated while the product is young.

## Webhooks

Payment and auth webhooks must verify signatures, be idempotent, and write durable state before returning success. Store provider ids on local records to support retries.

## Realtime

Socket.io events should be small and explicit:

- `live:join`
- `live:leave`
- `chat:message`
- `presence:update`
- `practice:signal`

Durable outcomes must still be persisted through server services.
