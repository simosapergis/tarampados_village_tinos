import { navLinks } from "@/lib/navigation";
import { siteMetadata } from "@/lib/site-metadata";

export default function sitemap() {
  const urls = new Set<string>(["/"]);

  Object.values(navLinks).forEach((links) => {
    links.forEach((link) => urls.add(link.href));
  });

  const baseUrl = siteMetadata.siteUrl.replace(/\/$/, "");
  const lastModified = new Date();

  return Array.from(urls).map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified,
  }));
}

