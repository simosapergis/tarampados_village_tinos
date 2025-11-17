import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Culture | Tarampados Village",
  description:
    "Programmation culturelle, ateliers et collaborations artistiques à Tarampados.",
};

export default function CultureFr() {
  return (
    <PageShell
      title="Culture"
      introduction={[
        "Entre tradition et création contemporaine, Tarampados accueille des projections, des résidences d’artistes et des ateliers de marbrerie.",
      ]}
      sections={[
        {
          heading: "Mise en avant",
          paragraphs: [
            "Calendrier des événements (été, automne, hiver).",
            "Focus sur les colombiers et leur influence architecturale.",
            "Idées de collaborations avec des écoles d’art francophones.",
          ],
        },
      ]}
      footerLocale="fr"
    />
  );
}

