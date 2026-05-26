import { NextResponse } from "next/server";

/** Ensures Next.js writes middleware-manifest.json (avoids dev errors on some Windows setups). */
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
