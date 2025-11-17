import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Πολιτική Cookies | Tarampados Village",
  description:
    "Πληροφορίες για τη χρήση cookies και παρόμοιων τεχνολογιών στο tarampados-village.gr.",
};

export default function CookiesEl() {
  return (
    <PageShell
      title="Πολιτική Cookies"
      introduction={[
        "Χρησιμοποιούμε cookies για βασική λειτουργικότητα (session, προτιμήσεις γλώσσας) και για ανώνυμες μετρήσεις επισκεψιμότητας.",
      ]}
      sections={[
        {
          heading: "Κατηγορίες",
          paragraphs: [
            "Απαραίτητα cookies για την πλοήγηση και την επιλογή γλώσσας.",
            "Cookies στατιστικών από την πλατφόρμα ανάλυσης που θα επιλεγεί (Vercel Web Analytics ή άλλο εργαλείο).",
          ],
        },
        {
          heading: "Έλεγχος επισκεπτών",
          paragraphs: [
            "Οι χρήστες θα μπορούν να αποδέχονται ή να απορρίπτουν μη απαραίτητα cookies μέσα από banner που θα ενσωματωθεί πριν το λανσάρισμα.",
          ],
        },
      ]}
      footerNote="Οι λεπτομέρειες θα προσαρμοστούν σύμφωνα με την τελική λύση διαχείρισης consent."
      footerLocale="el"
    />
  );
}

