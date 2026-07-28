// app/robots.ts
import { MetadataRoute } from "next";

/**
 * Generates dynamic robots.txt configuration for search engine crawlers
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.technik-serwisu.pl";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // Protect internal API routes (like geolocation or contact forms)
          "/_next/", // Block Next.js build assets from redundant indexing
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
