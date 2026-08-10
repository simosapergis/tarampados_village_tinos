import type { Locale } from "@/i18n/config";
import type { ReactElement } from "react";

export type NewsFrontmatter = {
  title: string;
  summary: string;
  date: string;
  hero: string;
  heroDesktop?: string;
  heroMobile?: string;
  heroPreview?: string;
  heroFit?: "cover" | "contain";
  heroOverlay?: "default" | "mobile-only" | "none";
  tags?: string[];
};

export type NewsListItem = NewsFrontmatter & {
  slug: string;
  locale: Locale;
};

export type NewsArticle = NewsListItem & {
  content: ReactElement;
};
