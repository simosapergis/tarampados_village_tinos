import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import heroHistory from "@public/images/hero/history.webp";

export const metadata: Metadata = {
  title: "Histoire | Tarampados Village",
  description:
    "Présentation de l’histoire du village de Tarampados pour le public francophone.",
};

export default function HistoireFr() {
  return (
    <PageShell
      title="Histoire"
      heroImage={heroHistory}
      heroFit="cover"
      introduction={[
        "De petites ruelles étroites, des arcades, des étables et des caves sous les maisons. Des habitants gentils, simples, accueillants et souriants forment la signature de Tarampados.",
      ]}
      sections={[
        {
          heading: "Mesaria et migrations",
          paragraphs: [
            "Village agricole comme la plupart, il jouxte aujourd’hui ceux de Kambos et de Smardakito. Autrefois, la région de Mesaria (le centre de l’île de Tinos) regroupait Mesarea, Karados et Kouroupados avant qu’une épidémie de peste au XVIIe siècle ne pousse leurs habitants à émigrer. Tarampados est alors devenu le dernier village construit sur l’île.",
          ],
        },
        {
          heading: "Construction & chronologie",
          paragraphs: [
            "Les archives catholiques indiquent que la construction a débuté dans la seconde moitié du XVIIe siècle et s’est achevée au début du XVIIIe. L’absence de références antérieures, combinée aux nombreuses mentions du voisin Potamos (disparu aujourd’hui), confirme qu’un événement tragique a forcé les habitants à bâtir un nouveau village plus en hauteur.",
          ],
        },
        {
          heading: "Nom & organisation sociale",
          paragraphs: [
            "On ignore si cette migration était due à une nouvelle épidémie ou à une invasion, mais elle fut massive : Potamos n’est plus cité que comme zone agricole. Tarambados doit son nom au surnom « Tarambas », sans doute celui d’un propriétaire terrien local.",
            "La terminaison –ados caractérise de nombreux villages érigés durant les périodes génoise (1207-1390) et vénitienne (1390-1715), selon l’organisation féodale regroupant les agriculteurs autour des demeures aristocratiques.",
          ],
        },
        {
          heading: "Sources & témoignages",
          paragraphs: [
            "Le père Markos Foskolos, dans « Tinos au-delà des murs », mentionne la disparition définitive de Mesarea en 1728, le déplacement des habitants de Karados vers Xinara en 1753 et l’intégration de Potamos à la paroisse de Smardakito dès 1642, avec la naissance progressive de Tarampados.",
            "Les archives évoquent également un testament rédigé à Kouroupados en 1769 pendant une épidémie de peste : les malades étaient isolés derrière des murs ne laissant qu’une petite ouverture pour l’eau et la nourriture.",
          ],
        },
      ]}
      locale="fr"
    />
  );
}

