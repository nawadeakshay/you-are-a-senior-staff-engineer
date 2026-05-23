import type { Role } from "@/types/roles";

export type AdminUserRow = {
  id: string;
  email: string;
  name: string | null;
  role: Role;
  createdAt: string;
};
