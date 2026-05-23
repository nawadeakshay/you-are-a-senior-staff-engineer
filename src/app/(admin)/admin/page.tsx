import { RoleGate } from "@/features/auth/components/role-gate";

export default function AdminPage() {
  return (
    <RoleGate roles={["admin", "superadmin"]}>
      <main className="container py-10">
        <h1 className="font-display text-3xl font-semibold">Admin foundation</h1>
      </main>
    </RoleGate>
  );
}
