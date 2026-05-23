import type { Role } from "@/types/roles";

export const protectedRoutes = [
  {
    matcher: "/dashboard(.*)",
    roles: ["student", "instructor", "admin", "superadmin"] satisfies Role[]
  },
  {
    matcher: "/admin(.*)",
    roles: ["admin", "superadmin"] satisfies Role[]
  }
] as const;

export function canAccessRole(userRole: Role | undefined, allowedRoles: readonly Role[]) {
  return Boolean(userRole && allowedRoles.includes(userRole));
}
