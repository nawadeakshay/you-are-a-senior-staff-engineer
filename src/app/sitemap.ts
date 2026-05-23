import type { MetadataRoute } from "next";

import { appConfig } from "@/config/app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: appConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
