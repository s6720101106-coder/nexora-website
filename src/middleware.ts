import { NextRequest, NextResponse } from "next/server";
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/_next") || pathname.includes(".")) return NextResponse.next();
  if (pathname === "/") return NextResponse.redirect(new URL("/th", request.url));
  return NextResponse.next();
}
export const config = { matcher: ["/"] };
