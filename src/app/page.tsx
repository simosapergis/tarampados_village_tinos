import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { HomeCarousel } from "@/components/home-carousel";
import heroHome from "@public/images/hero/home_1.webp";

export const metadata = {
  title: "Το Χωριό μας | Tarampados Village",
  description:
    "Επίσημο ψηφιακό σπίτι του Ταραμπάδου, με έμφαση στους περιστεριώνες, την παράδοση και την φιλοξενία του χωριού.",
};

export default function Home() {
  const moreLinkClass =
    "ml-2 inline-flex items-center text-sm font-semibold text-amber-600 transition hover:text-amber-500";

  const moreArrow = (
    <span aria-hidden className="ml-1">
      →
    </span>
  );

  return (
    <div className="space-y-12">
      <PageShell
        title="Το Χωριό μας"
        heroImage={heroHome}
        heroFit="cover"
        introduction={[
          "Ανακαλύψτε την ομορφιά, την παράδοση και τον πολιτισμό του Ταραμπάδου μέσα από τις διαδρομές, τα έθιμα και τις φωτογραφικές συλλογές που κρατούν ζωντανή τη μνήμη του χωριού.",
        ]}
        sections={[
          {
            heading: "Ιστορία & Θεμέλια",
            paragraphs: [
              (
                <p>
                  Το χωριό Ταραμπάδος, ένα από τα τελευταία που χτίστηκαν στην Τήνο, αναπτύχθηκε σταδιακά μετά από τραγικά γεγονότα όπως επιδημίες. Με
                  ρίζες στον 17ο αιώνα, αντικατέστησε παλαιότερους οικισμούς, συνδυάζοντας ιστορία και παράδοση μέσα από την αρχιτεκτονική και τη
                  φεουδαρχική οργάνωση.
                  <Link href="/istoria" className={moreLinkClass} aria-label="Περισσότερα για την ιστορία του Ταραμπάδου">
                    Περισσότερα
                    {moreArrow}
                  </Link>
                </p>
              ),
            ],
          },
          {
            heading: "Περιστεριώνες & Τοπίο",
            paragraphs: [
              (
                <p>
                  Οι περιστεριώνες της κοιλάδας Ταραμπάδου είναι μνημεία πολιτιστικής κληρονομιάς. Κατασκευασμένοι από σχιστόλιθο, λειτουργούν ως
                  κατοικίες περιστεριών που προσφέρουν λίπασμα και ως χώροι αποθήκευσης, με τέχνη που άνθησε ιδιαίτερα στην Ενετοκρατία.
                  <Link href="/politismos" className={moreLinkClass} aria-label="Περισσότερα για τους περιστεριώνες">
                    Περισσότερα
                    {moreArrow}
                  </Link>
                </p>
              ),
            ],
          },
          {
            heading: "Έθιμα & Γιορτές",
            paragraphs: [
              (
                <p>
                  Το χριστουγεννιάτικο έθιμο «Μπέμπουμ Κάρουμ» συνδυάζει την οικογενειακή συνάθροιση με τη Θεία Λειτουργία, όπου το ψητό λουκάνικο και η
                  ψαρόσουπα συνοδεύουν την πνευματική γιορτή της Ενσάρκωσης.
                  <Link href="/politismos" className={moreLinkClass} aria-label="Περισσότερα για τα έθιμα του χωριού">
                    Περισσότερα
                    {moreArrow}
                  </Link>
                </p>
              ),
            ],
          },
          {
            heading: "Ναοί & Πνευματικότητα",
            paragraphs: [
              (
                <p>
                  Οι ναοί της περιοχής, όπως του Αγίου Μιχαήλ και της Παναγίας Βρυσιώτισσας, είναι σύμβολα θρησκευτικής και πολιτιστικής αξίας, ενώ οι
                  λιτανείες και οι ευλογίες οδηγών συνεχίζουν την παράδοση αιώνων.
                  <Link href="/thriskeia" className={moreLinkClass} aria-label="Περισσότερα για τους ναούς του Ταραμπάδου">
                    Περισσότερα
                    {moreArrow}
                  </Link>
                </p>
              ),
            ],
          },
        ]}
        locale="el"
      />
      <div className="px-6 pb-12">
        <HomeCarousel locale="el" />
      </div>
    </div>
  );
}
