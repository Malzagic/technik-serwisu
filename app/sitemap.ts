// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.technik-serwisu.pl", // Zmieniono na wersję z www
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
