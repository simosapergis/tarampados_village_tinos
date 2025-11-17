import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Πολιτική Χρήσης | Tarampados Village",
  description:
    "Όροι χρήσης του tarampados-village.gr και οι βασικές κατευθυντήριες γραμμές για τους επισκέπτες.",
};

export default function TermsEl() {
  return (
    <PageShell
      title="Πολιτική Χρήσης"
      introduction={[
        "Η χρήση του site συνεπάγεται αποδοχή των παρακάτω κανόνων. Οι τελικοί όροι θα προσυπογραφούν από τον σύλλογο πριν το λανσάρισμα.",
      ]}
      sections={[
        {
          heading: "Σεβασμός περιεχομένου",
          paragraphs: [
            "Οι φωτογραφίες, τα κείμενα και τα πολυμέσα προστατεύονται από πνευματικά δικαιώματα. Οποιαδήποτε αναδημοσίευση επιτρέπεται μόνο με αναφορά πηγής και άδεια των δημιουργών.",
          ],
        },
        {
          heading: "Ασφαλής χρήση",
          paragraphs: [
            "Απαγορεύεται η προσπάθεια αλλοίωσης ή μη εξουσιοδοτημένης πρόσβασης στο διαχειριστικό περιβάλλον. Οι τεχνικές αλλαγές καταγράφονται μέσω auditing στο Vercel και στο GitHub.",
          ],
        },
      ]}
      footerNote="Για ερωτήσεις σχετικές με τους όρους, επικοινωνήστε με την ομάδα διαχείρισης."
      footerLocale="el"
    />
  );
}

