import type { MetadataRoute } from "next";

const baseUrl = "https://cloudbeats.ai";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/v1/", "/v2/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
