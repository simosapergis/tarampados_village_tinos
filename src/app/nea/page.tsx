import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import heroHistory from "@public/images/hero/history.webp";
import { getLatestNews } from "@/lib/news";
import { NewsPreviewList } from "@/components/news-preview-list";

export const metadata: Metadata = {
  title: "Νέα | Tarampados Village",
  description:
    "Όλες οι ανακοινώσεις, οι συναντήσεις και τα τελευταία νέα του Ταραμπάδου συγκεντρωμένα σε μία ενότητα.",
};

export default async function NewsElPage() {
  const posts = await getLatestNews("el", 5);
  const lastUpdated = posts[0]?.date ? new Date(posts[0].date) : null;

  return (
    <PageShell
      title="Νέα"
      heroImage={heroHistory}
      heroFit="cover"
      introduction={[
        "Οι πιο πρόσφατες δράσεις του Συλλόγου, οι επόμενες εκδηλώσεις και οι πρωτοβουλίες της κοινότητας συγκεντρώνονται εδώ.",
      ]}
      sections={[]}
      locale="el"
      afterSections={
        <div className="space-y-6">
          <NewsPreviewList posts={posts} locale="el" />
          {lastUpdated && (
            <p className="text-right text-sm text-stone-500">
              Τελευταία ενημέρωση: {new Intl.DateTimeFormat("el-GR").format(lastUpdated)}
            </p>
          )}
        </div>
      }
    />
  );
}


