import { RoleGate } from "@/features/auth/components/role-gate";

export default function DashboardPage() {
  return (
    <RoleGate roles={["student", "instructor", "admin", "superadmin"]}>
      <main className="container py-10">
        <h1 className="font-display text-3xl font-semibold">Dashboard foundation</h1>
      </main>
    </RoleGate>
  );
}
