import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Patrimoine | Tarampados Village",
  description:
    "Vue d’ensemble du patrimoine de Tarampados, avec liens vers Religion et Culture.",
};

export default function PatrimoineFr() {
  return (
    <PageShell
      title="Patrimoine"
      introduction={[
        "Nous regroupons ici les récits majeurs: naissance des colombiers, influences religieuses multiples et transmission familiale des savoir-faire.",
      ]}
      sections={[
        {
          heading: "Modules prévus",
          paragraphs: [
            "Chronologie interactive des restaurations.",
            "Carte des sites remarquables avec téléchargement en PDF.",
            "Section « focus » qui renvoie vers Religion et Culture.",
          ],
        },
      ]}
      footerLocale="fr"
    />
  );
}

