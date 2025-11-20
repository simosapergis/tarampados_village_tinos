import { siteMetadata } from "@/lib/site-metadata";

export default function robots() {
  const baseUrl = siteMetadata.siteUrl.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

