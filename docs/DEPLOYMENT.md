# Deployment

## Required Services

- PostgreSQL
- Clerk
- Stripe
- Razorpay
- Node.js 20+

## Build

```bash
pnpm install --frozen-lockfile
pnpm db:generate
pnpm build
pnpm db:deploy
```

## Environment

Start from `.env.example`. Production must set:

- `NEXT_PUBLIC_APP_URL`
- `DATABASE_URL`
- Clerk keys
- payment provider keys
- webhook secrets
- `AUTH_SECRET`

## Notes

Socket.io may require a custom server or a dedicated realtime service depending on hosting. On serverless platforms, prefer managed realtime infrastructure or deploy Socket.io separately.
