import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Contact | Tarampados Village",
  description:
    "Coordonnées et informations pratiques pour contacter Tarampados Village en français.",
};

export default function ContactFr() {
  return (
    <PageShell
      title="Contact"
      introduction={[
        "Nous finalisons l’annuaire francophone. En attendant, voici les points de contact généraux.",
      ]}
      highlights={[
        "Email général : hello@tarampados-village.gr",
        "Presse / partenariats : media@tarampados-village.gr",
        "Téléphone (UTC+2) : +30 22830 00000",
      ]}
      sections={[
        {
          heading: "Préparer votre visite",
          paragraphs: [
            "Cette page inclura un formulaire pour réserver des visites guidées, obtenir des conseils sur l’hébergement ou organiser des tournages.",
          ],
        },
      ]}
      footerLocale="fr"
    />
  );
}

