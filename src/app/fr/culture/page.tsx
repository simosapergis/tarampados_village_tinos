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
        "Dans la vallée de Tarabados et sur les plateaux de chaque côté se trouvent certains des plus anciens et des mieux décorés colombiers de l'île.",    
      ]}
      sections={[
        {
          heading: "Les colombiers",
          paragraphs: [
            "D'origine italienne (région des Pouilles), ces constructions sont de véritables monuments culturels.",
        "Sous la domination vénitienne, la propriété des colombiers était réservée aux 69 seigneurs féodaux de l'île. On ignore si l'élevage de pigeons existait avant cette période.",
            "Cependant, les pigeons, en plus de leur viande, enrichissent les sols grâce à leurs excréments, considérés comme un excellent engrais. Après l'indépendance, les habitants de l'île continuèrent cette pratique.",
            "Les colombiers, construits en schiste local, comportent deux étages : l'inférieur servait à stocker les outils agricoles, les aliments pour les animaux ou les engrais, tandis que les pigeons habitaient l'étage supérieur.",
          ],
        },
      ]}
      footerLocale="fr"
    />
  );
}

