import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Religion | Tarampados Village",
  description:
    "Fêtes, chapelles et traditions spirituelles de Tarampados en français.",
};

export default function ReligionFr() {
  return (
    <PageShell
      title="Religion"
      introduction={[
        "Cette section décrira les célébrations catholiques et orthodoxes, les pèlerinages locaux et le rôle des bénévoles.",
      ]}
      sections={[
        {
          heading: "Contenu à publier",
          paragraphs: [
            "Calendrier des fêtes avec descriptions en français.",
            "Galerie photo des processions et de la chapelle de la Sainte-Trinité.",
            "Témoignages audio (chants, cloches, prières).",
          ],
        },
      ]}
      footerLocale="fr"
    />
  );
}

