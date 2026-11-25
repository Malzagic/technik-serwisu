// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.technik-serwisu.pl", // Updated to the www version
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
