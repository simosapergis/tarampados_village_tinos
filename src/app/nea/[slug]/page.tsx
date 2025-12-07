import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { getAllNewsSlugs, getNewsArticle, getNewsIndexPath } from "@/lib/news";

type Params = {
  slug: string;
};

type PageProps = {
  params: Promise<Params>;
};

export async function generateStaticParams() {
  const slugs = await getAllNewsSlugs("el");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await getNewsArticle("el", slug);
    return {
      title: `${article.title} | Tarampados Village`,
      description: article.summary,
    };
  } catch {
    return {
      title: "Νέα | Tarampados Village",
    };
  }
}

export default async function NewsArticleElPage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getNewsArticle("el", slug).catch(() => null);

  if (!article) {
    notFound();
  }

  const formattedDate = new Intl.DateTimeFormat("el-GR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(article.date));

  return (
    <PageShell
      title={article.title}
      heroImage={article.heroDesktop ?? article.hero}
      heroImageMobile={article.heroMobile ?? article.heroDesktop ?? article.hero}
      heroFit="cover"
      introduction={[article.summary]}
      locale="el"
      sections={[]}
      afterSections={
        <div className="space-y-8">
          <div className="text-sm uppercase tracking-[0.3em] text-stone-400">
            {formattedDate}
          </div>
          <article className="space-y-4 text-lg leading-8 text-stone-700 [&_img]:rounded-3xl [&_img]:border [&_img]:border-stone-200 [&_img]:shadow-sm">
            {article.content}
          </article>
          <div className="flex flex-col gap-4 border-t border-dashed border-stone-200 pt-4 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-stone-400">
              {article.tags?.map((tag) => (
                <span key={tag} className="rounded-full border border-stone-200 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4">
              <time dateTime={article.date}>{formattedDate}</time>
              <Link
                href={getNewsIndexPath("el")}
                className="inline-flex items-center gap-2 rounded-full border border-stone-900 px-4 py-2 text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-900 hover:text-white"
              >
                ← Επιστροφή στα νέα
              </Link>
            </div>
          </div>
        </div>
      }
    />
  );
}

