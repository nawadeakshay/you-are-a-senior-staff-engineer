export const roles = ["student", "instructor", "admin", "superadmin"] as const;

export type Role = (typeof roles)[number];

export const roleRank: Record<Role, number> = {
  student: 10,
  instructor: 20,
  admin: 80,
  superadmin: 100
};
