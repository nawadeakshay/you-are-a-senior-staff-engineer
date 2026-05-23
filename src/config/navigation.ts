export const navigation = {
  public: [
    { title: "Courses", href: "/courses" },
    { title: "Live", href: "/live" },
    { title: "Community", href: "/community" },
    { title: "Pricing", href: "/pricing" }
  ],
  app: [
    { title: "Dashboard", href: "/dashboard" },
    { title: "My Learning", href: "/dashboard/learning" },
    { title: "Practice", href: "/dashboard/practice" },
    { title: "Community", href: "/community" }
  ],
  admin: [
    { title: "Admin", href: "/admin" },
    { title: "Courses", href: "/admin/courses" },
    { title: "Payments", href: "/admin/payments" },
    { title: "Users", href: "/admin/users" }
  ]
} as const;
