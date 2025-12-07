'use client';

import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { NewsListItem } from "@/lib/news-types";

type Props = {
  posts: NewsListItem[];
  locale: Locale;
};

const dateLocales: Record<Locale, string> = {
  el: "el-GR",
  en: "en-GB",
  fr: "fr-FR",
};

const newsIndexPaths: Record<Locale, string> = {
  el: "/nea",
  en: "/en/news",
  fr: "/fr/actualites",
};

export function NewsPreviewList({ posts, locale }: Props) {
  const dateFormatter = new Intl.DateTimeFormat(dateLocales[locale], {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  if (!posts.length) {
    return (
      <div className="rounded-3xl border border-stone-200 bg-white/80 p-8 text-center shadow-lg">
        <p className="text-base text-stone-500">
          {locale === "el"
            ? "Δεν υπάρχουν ακόμα αναρτήσεις."
            : locale === "fr"
              ? "Aucun article n’a encore été publié."
              : "No news posts yet."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition"
        >
          <div className="flex flex-col gap-6 p-6 md:flex-row">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-stone-100 md:w-1/3">
              <Image
                src={post.heroPreview ?? post.heroDesktop ?? post.hero}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-4">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
                  {dateFormatter.format(new Date(post.date))}
                </p>
                <h3 className="text-2xl font-serif text-stone-900">{post.title}</h3>
                <p className="text-base leading-7 text-stone-600">{post.summary}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-stone-400">
                  {post.tags?.map((tag) => (
                    <span key={tag} className="rounded-full border border-stone-200 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`${newsIndexPaths[locale]}/${post.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-900 px-4 py-2 text-sm font-semibold text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-900 hover:text-white"
                >
                  {locale === "el" ? "Διαβάστε" : locale === "fr" ? "Lire" : "Read"}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
