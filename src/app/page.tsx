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
          "Καλωσορίσατε στο νέο site του Ταραμπάδου. Ετοιμάζουμε μια εμπειρία που θα αναδείξει την ιστορία του χωριού, τους περιστεριώνες και τις διαδρομές που ενώνουν τους επισκέπτες με τη φύση της Τήνου.",
          "Το περιεχόμενο μεταφέρεται από το Wix και θα φιλοξενηθεί στο Vercel ώστε να έχουμε ταχύτητα, σταθερότητα και ευελιξία σε τρεις γλώσσες.",
        ]}
        highlights={[
          "Προβολή του οικισμού και των παραδοσιακών κατοικιών.",
          "Αφιερώματα στην κληρονομιά, τη θρησκεία και τον πολιτισμό.",
          "Επικαιροποιημένες πληροφορίες επικοινωνίας και φιλοξενίας.",
        ]}
        sections={[
          {
            heading: "Τι να περιμένετε",
            paragraphs: [
              "Κάθε ενότητα θα συνοδεύεται από φωτογραφίες, ιστορίες κατοίκων και πρακτικές συμβουλές για επισκέπτες. Οι σελίδες διατηρούν τις ίδιες διευθύνσεις που χρησιμοποιούμε σήμερα στο ελληνικό site, ώστε να μην επηρεαστούν ήδη κοινοποιημένοι σύνδεσμοι.",
              "Επιπλέον, οι αγγλικές και γαλλικές εκδόσεις έχουν δικές τους φιλικές slugs για πιο φυσική ανάγνωση από τους επισκέπτες του εξωτερικού.",
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
