import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Notre village | Tarampados Village",
  description:
    "Présentation du village de Tarampados pour le public francophone.",
};

export default function NotreVillageFr() {
  return (
    <PageShell
      title="Notre village"
      introduction={[
        "Tarampados est un hameau accroché aux collines, entouré de champs en terrasses et de colombiers sculptés. Cette page détaillera l’histoire, les familles et les promenades incontournables.",
      ]}
      sections={[
        {
          heading: "Objectifs",
          paragraphs: [
            "Proposer des itinéraires de 30 ou 60 minutes avec points de vue.",
            "Partager des interviews de résidents et de gardiens de colombiers.",
            "Mettre à disposition des dossiers pour journalistes et agences.",
          ],
        },
      ]}
      footerLocale="fr"
    />
  );
}

