import path from "node:path";
import fs from "node:fs/promises";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import type { Locale } from "@/i18n/config";
import type { NewsArticle, NewsFrontmatter, NewsListItem } from "@/lib/news-types";
import { NewsGallery } from "@/components/news-gallery";

export type { NewsArticle, NewsListItem } from "@/lib/news-types";

const BASE_ROUTE: Record<Locale, string> = {
  el: "/nea",
  en: "/en/news",
  fr: "/fr/actualites",
};

const NEWS_DIRECTORY = path.join(process.cwd(), "content/news");

function getLocaleDirectory(locale: Locale) {
  return path.join(NEWS_DIRECTORY, locale);
}

function ensureFrontmatter(data: Record<string, unknown>): NewsFrontmatter {
  const { title, summary, date, hero, heroDesktop, heroMobile, heroPreview, tags } = data;
  if (
    typeof title !== "string" ||
    typeof summary !== "string" ||
    typeof date !== "string" ||
    typeof hero !== "string"
  ) {
    throw new Error("News frontmatter missing required fields");
  }

  const resolvedHeroDesktop =
    typeof heroDesktop === "string" && heroDesktop.length > 0 ? heroDesktop : hero;
  const resolvedHeroMobile =
    typeof heroMobile === "string" && heroMobile.length > 0 ? heroMobile : resolvedHeroDesktop;
  const resolvedHeroPreview =
    typeof heroPreview === "string" && heroPreview.length > 0 ? heroPreview : resolvedHeroMobile;

  return {
    title,
    summary,
    date,
    hero,
    heroDesktop: resolvedHeroDesktop,
    heroMobile: resolvedHeroMobile,
    heroPreview: resolvedHeroPreview,
    tags: Array.isArray(tags) ? (tags as string[]) : undefined,
  };
}

export function getNewsIndexPath(locale: Locale) {
  return BASE_ROUTE[locale];
}

export function getNewsPath(locale: Locale, slug: string) {
  return `${getNewsIndexPath(locale)}/${slug}`;
}

export async function getAllNews(locale: Locale): Promise<NewsListItem[]> {
  const directory = getLocaleDirectory(locale);
  let entries: string[];

  try {
    entries = await fs.readdir(directory);
  } catch {
    return [];
  }

  const items = await Promise.all(
    entries
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const filePath = path.join(directory, file);
        const slug = file.replace(/\.mdx$/, "");
        const source = await fs.readFile(filePath, "utf8");
        const { data } = matter(source);
        const frontmatter = ensureFrontmatter(data);
        return {
          ...frontmatter,
          slug,
          locale,
        };
      })
  );

  return items.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export async function getLatestNews(locale: Locale, count = 5) {
  const items = await getAllNews(locale);
  return items.slice(0, count);
}

export async function getNewsArticle(locale: Locale, slug: string): Promise<NewsArticle> {
  const filePath = path.join(getLocaleDirectory(locale), `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");
  const { content, frontmatter } = await compileMDX<NewsFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
    },
    components: {
      NewsGallery,
    },
  });

  const fm = ensureFrontmatter(frontmatter as Record<string, unknown>);

  return {
    ...fm,
    slug,
    locale,
    content,
  };
}

export async function getAllNewsSlugs(locale: Locale) {
  const items = await getAllNews(locale);
  return items.map((item) => item.slug);
}

