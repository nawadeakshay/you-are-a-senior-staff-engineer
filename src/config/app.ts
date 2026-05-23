import { env } from "@/config/env";

export const appConfig = {
  name: "ekguitarist",
  url: env.NEXT_PUBLIC_APP_URL,
  description:
    "A cinematic immersive guitar-learning ecosystem for courses, live classes, creators, community, and AI-assisted practice.",
  supportEmail: "support@ekguitarist.com",
  links: {
    dashboard: "/dashboard",
    admin: "/admin",
    courses: "/courses",
    community: "/community"
  }
} as const;
