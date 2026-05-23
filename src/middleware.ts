import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { protectedRoutes } from "@/features/auth/auth.policy";
import type { Role } from "@/types/roles";

const isProtectedRoute = createRouteMatcher(protectedRoutes.map((route) => route.matcher));
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  if (!isProtectedRoute(request)) {
    return NextResponse.next();
  }

  const session = await auth();

  if (!session.userId) {
    return session.redirectToSignIn();
  }

  const role = (session.sessionClaims?.metadata?.role as Role | undefined) ?? "student";

  if (isAdminRoute(request) && !["admin", "superadmin"].includes(role)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|png|gif|svg|webp|ico|ttf|woff2?)).*)"]
};
