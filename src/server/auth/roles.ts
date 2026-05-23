import { roleRank, type Role } from "@/types/roles";

export function hasMinimumRole(role: Role | undefined, minimumRole: Role) {
  if (!role) {
    return false;
  }

  return roleRank[role] >= roleRank[minimumRole];
}
