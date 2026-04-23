import type { MetadataRoute } from "next";

import { items } from "@/lib/items";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.siteUrl;

  const staticRoutes = [
    "/",
    "/about",
    "/items",
    "/patterns",
    "/works",
    "/journal",
    "/faq",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));

  const itemRoutes = items.map((i) => ({
    url: `${base}/items/${i.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...itemRoutes];
}

