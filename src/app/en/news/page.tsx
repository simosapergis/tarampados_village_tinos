import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import heroHistory from "@public/images/hero/history.webp";
import { getLatestNews } from "@/lib/news";
import { NewsPreviewList } from "@/components/news-preview-list";

export const metadata: Metadata = {
  title: "News | Tarampados Village",
  description:
    "Latest announcements, community updates, and cultural highlights from Tarampados.",
};

export default async function NewsEnPage() {
  const posts = await getLatestNews("en", 5);
  const lastUpdated = posts[0]?.date ? new Date(posts[0].date) : null;

  return (
    <PageShell
      title="News"
      heroImage={heroHistory}
      heroFit="cover"
      introduction={[
        "Follow the pulse of Tarampados through the latest announcements, restoration efforts, and cultural gatherings from the association.",
      ]}
      sections={[]}
      locale="en"
      afterSections={
        <div className="space-y-6">
          <NewsPreviewList posts={posts} locale="en" />
          {lastUpdated && (
            <p className="text-right text-sm text-stone-500">
              Last updated: {new Intl.DateTimeFormat("en-GB").format(lastUpdated)}
            </p>
          )}
        </div>
      }
    />
  );
}


