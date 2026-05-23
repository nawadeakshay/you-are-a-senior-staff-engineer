export const apiRoutes = {
  health: "/api/health",
  courses: "/api/courses",
  enrollments: "/api/enrollments",
  payments: "/api/payments",
  webhooks: {
    clerk: "/api/webhooks/clerk",
    stripe: "/api/webhooks/stripe",
    razorpay: "/api/webhooks/razorpay"
  }
} as const;
