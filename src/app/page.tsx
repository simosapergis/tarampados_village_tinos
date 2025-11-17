import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Αρχική | Tarampados Village",
  description:
    "Επίσημο ψηφιακό σπίτι του Ταραμπάδου, με έμφαση στους περιστεριώνες, την παράδοση και την φιλοξενία του χωριού.",
};

const greekMenu = [
  { href: "/to-xorio-mas", label: "Το χωριό μας" },
  { href: "/klironomia", label: "Κληρονομιά" },
  { href: "/thriskeia", label: "Θρησκεία" },
  { href: "/politismos", label: "Πολιτισμός" },
  { href: "/epikoinonia", label: "Επικοινωνία" },
];

const localizedHomes = [
  { href: "/en", label: "English" },
  { href: "/fr", label: "Français" },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <PageShell
        title="Αρχική"
        introduction={[
          "Ανακαλύψτε την ομορφιά, την παράδοση και τον πολιτισμό του Ταραμπάδου μέσα από τις διαδρομές, τα έθιμα και τις φωτογραφικές συλλογές που κρατούν ζωντανή τη μνήμη του χωριού.",
          "Ο Ταραμπάδος, με ρίζες στον 17ο αιώνα, αντικατέστησε παλαιότερους οικισμούς μετά από τραγικά γεγονότα όπως οι επιδημίες και συνεχίζει να συνδυάζει ιστορία και φεουδαρχική αρχιτεκτονική μέσα σε ένα καταπράσινο τοπίο.",
        ]}
        highlights={[
          "Το χωριό Ταραμπάδος: τελευταίος οικισμός που χτίστηκε στην Τήνο με ρίζες στον 17ο αιώνα.",
          "Περιστεριώνες από σχιστόλιθο που αποτελούν μνημεία πολιτιστικής κληρονομιάς.",
          "Το χριστουγεννιάτικο έθιμο «Μπέμπουμ Κάρουμ» και οι ναοί που συνδέουν πίστη και παράδοση.",
        ]}
        sections={[
          {
            heading: "Τι να περιμένετε",
            paragraphs: [
              "Κάθε ενότητα συγκεντρώνει αυθεντικά κείμενα από την κοινότητα, ώστε να αφηγείται πώς το χωριό αναπτύχθηκε μέσα από δοκιμασίες και πώς τα κτίρια, οι περιστεριώνες και τα έθιμα παραμένουν ζωντανά σήμερα.",
              "Οι ελληνικές, αγγλικές και γαλλικές εκδόσεις μοιράζονται την ίδια δομή, προσφέροντας γρήγορη πρόσβαση στις ιστορίες, τις πολιτιστικές ενότητες και τα στοιχεία επικοινωνίας του Συλλόγου Ταραμπάδου.",
            ],
          },
          {
            heading: "Το χωριό μας",
            paragraphs: [
              "Το χωριό Ταραμπάδος, ένα από τα τελευταία που χτίστηκαν στην Τήνο, αναπτύχθηκε σταδιακά μετά από τραγικά γεγονότα όπως επιδημίες. Με ρίζες στον 17ο αιώνα, αντικατέστησε παλαιότερους οικισμούς, συνδυάζοντας ιστορία και παράδοση μέσα από την αρχιτεκτονική και τη φεουδαρχική οργάνωση.",
            ],
          },
          {
            heading: "Περιστεριώνες",
            paragraphs: [
              "Οι περιστεριώνες της κοιλάδας Ταραμπάδου είναι μνημεία πολιτιστικής κληρονομιάς. Κατασκευασμένοι από σχιστόλιθο, λειτουργούν ως κατοικίες περιστεριών που προσφέρουν λίπασμα και ως χώροι αποθήκευσης, με τέχνη που άνθησε ιδιαίτερα στην Ενετοκρατία.",
            ],
          },
          {
            heading: "Έθιμα και Θρησκεία",
            paragraphs: [
              "Το χριστουγεννιάτικο έθιμο «Μπέμπουμ Κάρουμ» συνδυάζει την οικογενειακή συνάθροιση με τη Θεία Λειτουργία, όπου το ψητό λουκάνικο και η ψαρόσουπα συνοδεύουν την πνευματική γιορτή της Ενσάρκωσης.",
              "Οι ναοί της περιοχής, όπως του Αγίου Μιχαήλ και της Παναγίας Βρυσιώτισσας, είναι σύμβολα θρησκευτικής και πολιτιστικής αξίας, ενώ οι λιτανείες και οι ευλογίες οδηγών συνεχίζουν την παράδοση αιώνων.",
            ],
          },
        ]}
        footerNote="Πρόσθετες ενότητες (διαμονή, εκδηλώσεις, γαστρονομία) μπορούν να ενταχθούν μόλις έχουμε το τελικό περιεχόμενο από την ομάδα."
        footerLocale="el"
      />

      <section className="mx-auto flex w-full max-w-4xl flex-col gap-8 rounded-2xl border border-zinc-200 bg-white/60 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Κύριο μενού
          </h2>
          <p className="text-sm text-zinc-500">
            Οι ελληνικές σελίδες διατηρούν slugs χωρίς πρόθεμα.
          </p>
        </div>
        <nav className="flex flex-wrap gap-3">
          {greekMenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium transition hover:border-transparent hover:bg-zinc-900 hover:text-white dark:border-white/20 dark:hover:bg-white dark:hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-dashed border-zinc-200 pt-6 dark:border-white/10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            International Access
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {localizedHomes.map((locale) => (
              <Link
                key={locale.href}
                href={locale.href}
                className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium transition hover:border-transparent hover:bg-zinc-900 hover:text-white dark:border-white/20 dark:hover:bg-white dark:hover:text-black"
              >
                {locale.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
