import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Heritage | Tarampados Village",
  description:
    "Introduction to the heritage assets of Tarampados and the links to Religion and Culture detail pages.",
};

export default function HeritageEn() {
  return (
    <PageShell
      title="Heritage"
      introduction={[
        "This overview offers the narrative arc for Tarampados: from the first dovecotes to the layered cultural influences of Catholic and Orthodox communities.",
        "Religion and Culture get their own dedicated pages, while this hub will present itineraries and curated media.",
      ]}
      highlights={[
        "Timeline widget for major restoration milestones.",
        "Map of dovecotes and chapels.",
        "Gallery sourced from the Wix archive, optimized for the Vercel Edge Network.",
      ]}
      footerLocale="en"
    />
  );
}

