import { siteMetadata } from "./site-metadata";
import type { Locale } from "@/i18n/config";

/**
 * Generates the full canonical URL for a given pathname
 * @param pathname - The relative path (e.g., "/nea", "/en/news")
 * @returns The full canonical URL
 */
export function getCanonicalUrl(pathname: string): string {
  const baseUrl = siteMetadata.siteUrl;
  const normalizedPath = pathname.startsWith("/")
    ? pathname
    : `/${pathname}`;
  return `${baseUrl}${normalizedPath}`;
}

/**
 * Generates hreflang alternates for multilingual pages
 * @param paths - Object mapping locale to its path
 * @returns Alternates object for Next.js metadata
 */
export function getAlternates(paths: Record<Locale, string>) {
  const baseUrl = siteMetadata.siteUrl;
  return {
    languages: {
      el: `${baseUrl}${paths.el}`,
      en: `${baseUrl}${paths.en}`,
      fr: `${baseUrl}${paths.fr}`,
    },
  };
}

