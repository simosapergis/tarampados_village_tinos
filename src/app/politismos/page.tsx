import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Πολιτισμός | Tarampados Village",
  description:
    "Πολιτιστικές δράσεις, εργαστήρια και έθιμα του Ταραμπάδου με επίκεντρο τους περιστεριώνες και τη σύγχρονη δημιουργία.",
};

export default function CulturePage() {
  return (
    <PageShell
      title="Πολιτισμός"
      introduction={[
        "Ο πολιτισμός του χωριού είναι ένας ζωντανός διάλογος μεταξύ παράδοσης και σύγχρονης δημιουργίας. Οι περιστεριώνες, η γαστρονομία και οι ιστορίες των κατοίκων αποτελούν το υλικό της νέας ψηφιακής εμπειρίας.",
      ]}
      highlights={[
        "Προβολές ταινιών στον παλιό μύλο.",
        "Ξεναγήσεις στους περιστεριώνες με εθελοντές.",
        "Workshops μαρμαροτεχνίας για παιδιά.",
      ]}
      sections={[
        {
          heading: "Ψηφιακές συλλογές",
          paragraphs: [
            "Η σελίδα θα φιλοξενεί φωτογραφικές σειρές, συνεντεύξεις, playlists και σύντομα βίντεο που μπορεί να ενσωματωθούν από το Vercel Storage.",
          ],
        },
      ]}
      footerLocale="el"
    />
  );
}

