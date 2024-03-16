import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const apiKey = request.nextUrl.searchParams.get("API_KEY");

  if (apiKey !== process.env.API_KEY_REVALIDATE) {
    return Response.json({ error: "Invalid API_KEY" }, { status: 401 });
  }

  if (!tag) {
    return Response.json({ error: "tag is required" }, { status: 400 });
  }

  revalidateTag("companies");

  return Response.json({ revalidated: true, now: Date.now() });
}
