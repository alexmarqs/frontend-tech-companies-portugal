import { NextFetchEvent, NextResponse } from "next/server";
import { createDailyBucket, registerPageView } from "./lib/analytics";

export const config = {
  matcher: [
    {
      source: "/",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
    {
      source: "/company/:slug*",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

export default function middleware(
  req: Request,
  event: NextFetchEvent,
): NextResponse {
  const url = new URL(req.url);

  // just a double check to make sure we are tracking the right pages
  // use waitUntil too avoid blocking the response
  if (url.pathname.startsWith("/company/") || url.pathname === "/") {
    event.waitUntil(registerPageView(url.pathname, createDailyBucket()));
  }

  return NextResponse.next();
}
