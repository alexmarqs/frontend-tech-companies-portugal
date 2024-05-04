import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { createDailyBucket, registerView } from "./lib/analytics";

export const config = {
  matcher: ["/", "/company/:slug*"],
};

export default function middleware(
  req: NextRequest,
  event: NextFetchEvent,
): NextResponse {
  // use waitUntil too avoid blocking the response
  if (
    req.nextUrl.pathname.startsWith("/company/") ||
    req.nextUrl.pathname === "/"
  ) {
    event.waitUntil(registerView(req.nextUrl.pathname, createDailyBucket()));
  }

  return NextResponse.next();
}
