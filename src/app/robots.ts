import type { MetadataRoute } from "next";

import { getPublicSiteUrl } from "@/lib/publicSiteUrl";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${getPublicSiteUrl()}/sitemap.xml`,
  };
}

