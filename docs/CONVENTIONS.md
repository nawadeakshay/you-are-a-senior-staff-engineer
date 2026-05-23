# Conventions

## Naming

- Components: `PascalCase`
- Hooks: `useThing`
- Server functions: verb-first, for example `getPublishedCourses`
- Files: kebab-case, for example `role-gate.tsx`
- Prisma models: singular `PascalCase`
- Route groups: product area names, for example `(app)` and `(admin)`

## Imports

Use absolute imports from `@/*`. Avoid deep relative imports across domains.

```ts
import { prisma } from "@/server/db/prisma";
import { Button } from "@/components/ui/button";
```

## Feature Modules

Recommended feature shape as complexity grows:

```text
src/features/courses/
├── api.ts
├── components/
├── hooks/
├── queries.ts
├── schemas.ts
├── services.ts
├── types.ts
└── utils.ts
```

## Validation

All incoming route handler payloads should use Zod schemas. Prisma models are not request validation.

## Client State

Zustand is for UI state, optimistic interactions, and ephemeral session state. Server state should be loaded through server components, route handlers, or future query libraries.

## Authorization

Authorize on the server. Client role checks may hide UI but must never be the only guard.
