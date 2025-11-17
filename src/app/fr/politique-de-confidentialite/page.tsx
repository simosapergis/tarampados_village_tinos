import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Tarampados Village",
  description:
    "Résumé provisoire de la politique de confidentialité pour le public francophone.",
};

export default function PrivacyFr() {
  return (
    <PageShell
      title="Politique de confidentialité"
      introduction={[
        "Chez tarampados.gr, la protection de vos données personnelles est de la plus haute importance pour nous. Cette politique décrit la manière dont nous collectons, utilisons et protégeons les informations que vous nous fournissez.",
      ]}
      sections={[
        {
          heading: "Quelles données collectons-nous ?",
          paragraphs: [
            "Informations personnelles : nom, email et téléphone si vous choisissez de nous les communiquer.",
            "Données de navigation : adresse IP, type de navigateur, pages visitées et temps passé.",
          ],
        },
        {
          heading: "Comment nous utilisons vos données",
          paragraphs: [
            "Pour vous fournir nos services et répondre à vos questions.",
            "Pour améliorer l’expérience utilisateur de notre site.",
            "Pour vous envoyer des emails d’information si vous avez choisi de les recevoir.",
          ],
        },
        {
          heading: "Partage de vos données",
          paragraphs: [
            "Nous ne partageons pas vos données personnelles avec des tiers, sauf si la loi l’exige ou pour fournir nos services.",
          ],
        },
        {
          heading: "Vos droits",
          paragraphs: [
            "Vous pouvez demander à tout moment l’accès, la rectification ou la suppression de vos données.",
            "Pour exercer vos droits, contactez-nous à l’adresse tarampados@gmail.com.",
          ],
        },
        {
          heading: "Sécurité des données",
          paragraphs: [
            "Nous prenons toutes les mesures techniques et organisationnelles nécessaires pour garantir la protection de vos données.",
          ],
        },
      ]}
      footerLocale="fr"
    />
  );
}

