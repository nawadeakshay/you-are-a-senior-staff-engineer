import type { ReactNode } from "react";

import { RoleGate } from "@/features/auth/components/role-gate";
import { DashboardShell } from "@/features/dashboard/components/dashboard-shell";

export default function DashboardLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <RoleGate roles={["student", "instructor", "admin", "superadmin"]}>
      <DashboardShell>{children}</DashboardShell>
    </RoleGate>
  );
}
