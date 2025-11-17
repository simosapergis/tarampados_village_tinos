import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Our Village | Tarampados Village",
  description:
    "Discover the history, people and walking routes of Tarampados in English.",
};

export default function OurVillageEn() {
  return (
    <PageShell
      title="Our Village"
      introduction={[
        "Tarampados lies on the slopes of a green ravine, surrounded by dovecotes and terraced fields. The English section will mirror the Greek narrative while highlighting practical insights for international visitors.",
      ]}
      sections={[
        {
          heading: "What we highlight",
          paragraphs: [
            "Short itineraries that combine local gastronomy with architecture.",
            "Profiles of residents who host guests or preserve the craft of marble carving.",
            "Downloadable fact sheets for travel writers and tour operators.",
          ],
        },
      ]}
      footerLocale="en"
    />
  );
}

