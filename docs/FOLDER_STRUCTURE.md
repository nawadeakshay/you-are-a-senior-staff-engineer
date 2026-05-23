# Folder Structure

```text
.
├── prisma/
│   └── schema.prisma
├── docs/
├── src/
│   ├── app/
│   │   ├── (admin)/
│   │   ├── (app)/
│   │   ├── (marketing)/
│   │   └── api/
│   ├── components/
│   │   ├── layout/
│   │   ├── three/
│   │   └── ui/
│   ├── config/
│   ├── features/
│   │   ├── admin/
│   │   ├── ai/
│   │   ├── auth/
│   │   ├── community/
│   │   ├── courses/
│   │   ├── dashboard/
│   │   └── payments/
│   ├── lib/
│   │   └── validators/
│   ├── server/
│   │   ├── api/
│   │   ├── db/
│   │   ├── payments/
│   │   ├── realtime/
│   │   └── seo/
│   ├── stores/
│   ├── styles/
│   └── types/
```

## Rules

- Use `src/features/<domain>` for business domains.
- Use `src/server` for server-only SDKs, persistence, webhooks, and adapters.
- Use `src/components/ui` for shadcn-compatible primitives.
- Use `src/components/three` for reusable immersive rendering primitives.
- Use `src/lib` only for domain-neutral utilities.
- Use route groups to separate marketing, authenticated app, and admin experiences.
