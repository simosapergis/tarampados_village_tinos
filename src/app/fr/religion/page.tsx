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
        "L’église catholique de Saint-Michel remonte à 1810 et constitue l’une des 30 paroisses de l’archidiocèse catholique de Naxos-Tinos-Andros-Mykonos. La paroisse date de 1789 et renferme des objets liturgiques encore plus anciens.",
        "La chapelle de Saint-Charalambos apparaît dans les archives de 1828 comme lieu de culte orthodoxe, avec un linteau en marbre indiquant qu’elle était déjà paroissiale en 1726.",
      ]}
      sections={[
        {
          heading: "Saint-Michel",
          paragraphs: [
            "Chaque 29 septembre, le village célèbre l’archange avec vêpres solennelles et rassemblement communautaire.",
          ],
        },
        {
          heading: "Saint-Charalambos",
          paragraphs: [
            "D’abord listée comme chapelle rattachée au village de Kambos, elle devint un point de repère pour les orthodoxes qui l’ont restaurée et ornée au fil des siècles.",
          ],
        },
        {
          heading: "Panagia Vrysiotissa",
          paragraphs: [
            "L’icône est conservée dans l’église paroissiale et portée en procession vers Vrysi au mois de mai pour des bénédictions, notamment en faveur des conducteurs depuis 1967.",
          ],
        },
        {
          heading: "« Bébum Karum »",
          paragraphs: [
            "Cette coutume de Noël, inspirée du “Verbum Caro Factum Est”, associe repas familial, messe de minuit et dégustation de soupe de poisson et de saucisse grillée pour rappeler l’Incarnation.",
          ],
        },
      ]}
      footerLocale="fr"
    />
  );
}

