import { appConfig } from "@/config/app";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: appConfig.name,
    url: appConfig.url
  };
}
