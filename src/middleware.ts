import { Redis } from "@upstash/redis";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { VIEWS_REDIS_KEY, getDailyBucket } from "./lib/utils";

const redis = Redis.fromEnv();

export const config = {
  matcher: ["/", "/company/:slug*((?!sitemap.xml).*)"],
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
    event.waitUntil(
      redis.zincrby(
        [VIEWS_REDIS_KEY, getDailyBucket()].join(":"),
        1,
        req.nextUrl.pathname,
      ),
    );
  }

  return NextResponse.next();
}
