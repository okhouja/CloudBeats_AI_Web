import type { MetadataRoute } from "next";

const baseUrl = "https://cloudbeats.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl + "/", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: baseUrl + "/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: baseUrl + "/impressum", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
