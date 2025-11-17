import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Culture | Tarampados Village",
  description:
    "Cultural programming, residencies and creative workshops hosted in Tarampados.",
};

export default function CultureEn() {
  return (
    <PageShell
      title="Culture"
      introduction={[
        "This section showcases how Tarampados blends traditional crafts with contemporary expression: film screenings, artist residencies, gastronomy pop-ups and more.",
      ]}
      sections={[
        {
          heading: "Upcoming features",
          paragraphs: [
            "Modular grid for events with filters by season.",
            "Stories about the dovecotes and how architects reinterpret them.",
            "Opportunities for collaborations with schools and cultural institutes.",
          ],
        },
      ]}
      footerLocale="en"
    />
  );
}

