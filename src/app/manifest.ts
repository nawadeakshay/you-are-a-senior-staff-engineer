import type { MetadataRoute } from "next";

import { appConfig } from "@/config/app";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: appConfig.name,
    short_name: appConfig.name,
    description: appConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#020617"
  };
}
