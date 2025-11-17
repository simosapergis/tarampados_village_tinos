import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Επικοινωνία | Tarampados Village",
  description:
    "Τρόποι επικοινωνίας με τη διαχειριστική ομάδα του Tarampados Village και πληροφορίες επίσκεψης.",
};

export default function ContactPage() {
  return (
    <PageShell
      title="Επικοινωνία"
      introduction={[
        "Χρειαζόμαστε νέα στοιχεία φιλοξενίας, ωράρια ξενάγησης και ενημερωμένα τηλέφωνα συλλόγων. Μέχρι τότε χρησιμοποιούμε προσωρινά στοιχεία, που μπορείτε να επικαιροποιήσετε μέσω email.",
      ]}
      highlights={[
        "Email: hello@tarampados-village.gr",
        "Τηλέφωνο γραμμής υποδοχής: +30 22830 00000",
        "Ώρες επικοινωνίας: 10:00 – 18:00",
      ]}
      sections={[
        {
          heading: "Επίσκεψη στο χωριό",
          paragraphs: [
            "Το site θα φιλοξενεί οδηγίες πρόσβασης, parking, μεταφορές από Χώρα Τήνου και συνδέσεις με τοπικούς ξεναγούς. Επίσης θα υπάρχει φόρμα για αιτήματα συνεργασίας.",
          ],
        },
        {
          heading: "Social & ενημερώσεις",
          paragraphs: [
            "Οι ειδοποιήσεις για εκδηλώσεις θα συνδέονται με το newsletter. Οι σύνδεσμοι προς Facebook και Instagram θα περαστούν μόλις ολοκληρωθεί η εναρμόνιση με τις πολιτικές απορρήτου.",
          ],
        },
      ]}
      footerLocale="el"
    />
  );
}

