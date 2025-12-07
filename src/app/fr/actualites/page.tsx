import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import heroHistory from "@public/images/hero/history.webp";
import { getLatestNews } from "@/lib/news";
import { NewsPreviewList } from "@/components/news-preview-list";

export const metadata: Metadata = {
  title: "Actualités | Tarampados Village",
  description:
    "Annonces, événements et initiatives culturelles de Tarampados réunis dans un même espace.",
};

export default async function NewsFrPage() {
  const posts = await getLatestNews("fr", 5);
  const lastUpdated = posts[0]?.date ? new Date(posts[0].date) : null;

  return (
    <PageShell
      title="Actualités"
      heroImage={heroHistory}
      heroFit="cover"
      introduction={[
        "Cette page réunit les annonces, chantiers et rencontres culturelles afin que la communauté reste informée où qu’elle se trouve.",
      ]}
      sections={[]}
      locale="fr"
      afterSections={
        <div className="space-y-6">
          <NewsPreviewList posts={posts} locale="fr" />
          {lastUpdated && (
            <p className="text-right text-sm text-stone-500">
              Dernière mise à jour : {new Intl.DateTimeFormat("fr-FR").format(lastUpdated)}
            </p>
          )}
        </div>
      }
    />
  );
}


