import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

const contactDetails = [
  { label: "Email", value: "tarampados@gmail.com", href: "mailto:tarampados@gmail.com" },
  { label: "Διεύθυνση", value: "Ταραμπάδος, Κυκλάδες, Ελλάδα" },
  { label: "Τ.Κ.", value: "842 00" },
];

const policyLinks = [
  { label: "Πολιτική Απορρήτου", href: "/politiki-aporritou" },
  { label: "Πολιτική Χρήσης", href: "/politiki-chrisis" },
  { label: "Πολιτική Cookies", href: "/politiki-cookies" },
];

export const metadata: Metadata = {
  title: "Επικοινωνία | Tarampados Village",
  description:
    "Φόρμα επικοινωνίας και στοιχεία του Συλλόγου Ταραμπάδου Τήνου.",
};

export default function ContactPage() {
  return (
    <div className="space-y-12 px-6 py-16 text-zinc-900 dark:text-zinc-50">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl">
        <div className="grid gap-10 p-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-sky-200">
              Σύλλογος Ταραμπάδου Τήνου
            </p>
            <h1 className="text-4xl font-semibold leading-tight">
              Ελάτε σε επαφή μαζί μας για οποιαδήποτε πληροφορία ή ερώτηση.
            </h1>
            <p className="text-base text-slate-300">
              Συμπληρώστε τη φόρμα ή χρησιμοποιήστε τα στοιχεία επικοινωνίας για
              να μοιραστείτε ερωτήσεις, σχόλια ή ιδέες σχετικά με το χωριό και
              τα πολιτιστικά του δρώμενα.
            </p>
            <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              {contactDetails.map((item) => (
                <div key={item.label}>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </p>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-lg font-semibold text-white underline-offset-2 hover:underline"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="text-lg font-semibold text-white">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Σύλλογος Ταραμπάδου Τήνου
          </h2>
          <p className="mt-3 text-lg font-semibold">
            Ταραμπάδος, Κυκλάδες, Ελλάδα
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-300">Τ.Κ. 842 00</p>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-300">
            Εξωραϊστικός & Εκπολιτιστικός Σύλλογος Ταραμπάδου Τήνου
            <br />
            ΑΦΜ: 099053786 · ΔΟΥ: Σύρου
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Πολιτικές & πόροι
          </h2>
          <ul className="mt-4 space-y-2">
            {policyLinks.map((policy) => (
              <li key={policy.label}>
                <Link
                  href={policy.href}
                  className="text-base font-medium text-slate-900 underline-offset-2 hover:underline dark:text-white"
                >
                  {policy.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Social
          </h2>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-300">
            Μείνετε συντονισμένοι για ενημερώσεις σχετικά με εκδηλώσεις,
            προγράμματα και νέες καταχωρίσεις.
          </p>
          <Link
            href="https://www.facebook.com"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-zinc-900 hover:text-white dark:border-white/20 dark:hover:bg-white dark:hover:text-black"
          >
            Facebook
          </Link>
        </div>
      </section>
    </div>
  );
}

