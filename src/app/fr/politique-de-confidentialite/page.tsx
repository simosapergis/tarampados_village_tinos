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
        "Ce texte sera remplacé par la version validée par notre conseil juridique. Il décrit dès maintenant les principes suivis pendant la migration.",
      ]}
      sections={[
        {
          heading: "Collecte",
          paragraphs: [
            "Formulaires de contact, inscriptions à la newsletter et données analytiques anonymisées. Aucun paiement n’est traité ici.",
          ],
        },
        {
          heading: "Usage",
          paragraphs: [
            "Réponse aux demandes, organisation de visites et amélioration continue de l’expérience en ligne.",
          ],
        },
        {
          heading: "Droits",
          paragraphs: [
            "Chaque visiteur peut demander l’accès, la rectification ou la suppression de ses données via un formulaire dédié.",
          ],
        },
      ]}
      footerNote="Date d’effet et coordonnées officielles seront ajoutées ultérieurement."
      footerLocale="fr"
    />
  );
}

