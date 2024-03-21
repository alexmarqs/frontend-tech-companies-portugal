import { APP_URL } from "@/lib/metadata";
import { MetadataRoute } from "next/types";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: [`${APP_URL}/sitemap.xml`, `${APP_URL}/company/sitemap.xml`],
    host: `${APP_URL}`,
  };
}
