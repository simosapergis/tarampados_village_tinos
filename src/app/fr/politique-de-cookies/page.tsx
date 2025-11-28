import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Politique de cookies | Tarampados Village",
  description:
    "Informations sur l’utilisation des cookies pour la version française du site.",
};

export default function CookiesFr() {
  return (
    <PageShell
      title="Politique de cookies"
      introduction={[
        "Le site utilise uniquement des cookies essentiels durant la phase de migration. Un bandeau de consentement multilingue arrivera prochainement.",
      ]}
      sections={[
        {
          heading: "Types de cookies",
          paragraphs: [
            "Essentiels : mémorisation de la langue et sécurité de session.",
            "Statistiques : mesure anonyme de la fréquentation via l’outil d’analyse retenu.",
          ],
        },
        {
          heading: "Gestion",
          paragraphs: [
            "Les visiteurs pourront modifier leurs préférences à tout moment via un centre de consentement.",
          ],
        },
      ]}
      locale="fr"
    />
  );
}

