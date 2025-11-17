import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Conditions d’utilisation | Tarampados Village",
  description:
    "Principes d’utilisation du site tarampados-village.gr pour les visiteurs francophones.",
};

export default function TermsFr() {
  return (
    <PageShell
      title="Conditions d’utilisation"
      introduction={[
        "En naviguant sur ce site, vous acceptez les règles de bonne conduite décrites ci-dessous. Le texte définitif sera mis à jour avant la mise en production.",
      ]}
      sections={[
        {
          heading: "Propriété intellectuelle",
          paragraphs: [
            "Les photos, vidéos et textes sont protégés. Toute utilisation doit être accompagnée d’une autorisation écrite.",
          ],
        },
        {
          heading: "Sécurité",
          paragraphs: [
            "Veuillez éviter toute tentative d’accès non autorisé. Chaque déploiement est tracé via GitHub et Vercel.",
          ],
        },
      ]}
      footerLocale="fr"
    />
  );
}

