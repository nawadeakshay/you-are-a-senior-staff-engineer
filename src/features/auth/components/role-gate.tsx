import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import { canAccessRole } from "@/features/auth/auth.policy";
import type { Role } from "@/types/roles";

type RoleGateProps = {
  roles: readonly Role[];
  children: ReactNode;
};

export async function RoleGate({ roles, children }: RoleGateProps) {
  const session = await auth();
  const role = session.sessionClaims?.metadata?.role as Role | undefined;

  if (!session.userId) {
    redirect("/sign-in");
  }

  if (!canAccessRole(role ?? "student", roles)) {
    redirect("/dashboard");
  }

  return children;
}
