import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = req.nextUrl;

  // 🔓 Public routes
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/register")
  ) {
    // Sudah login → jangan ke login lagi
    if (token) {
      if (token.user?.onboardingCompleted) {
        return NextResponse.redirect(
          new URL("/dashboard", req.url)
        );
      }
      return NextResponse.redirect(
        new URL("/onboarding", req.url)
      );
    }
    return NextResponse.next();
  }

  // ❌ Belum login
  if (!token) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }

  // 🚧 Login tapi belum onboarding
  if (
    !token.user?.onboardingCompleted &&
    !pathname.startsWith("/onboarding")
  ) {
    return NextResponse.redirect(
      new URL("/onboarding", req.url)
    );
  }

  // ✅ Sudah onboarding tapi masih buka onboarding
  if (
    token.user?.onboardingCompleted &&
    pathname.startsWith("/onboarding")
  ) {
    return NextResponse.redirect(
      new URL("/dashboard", req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/onboarding/:path*",
    "/login",
  ],
};
