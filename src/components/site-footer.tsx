import Link from "next/link";
import type { Locale } from "@/i18n/config";

type FooterContent = {
  heading: string;
  contactLabel: string;
  contactLines: string[];
  policiesLabel: string;
  policyLinks: { label: string; href: string }[];
  legalLabel: string;
  legalLines: string[];
};

const footerContent: Record<Locale, FooterContent> = {
  el: {
    heading: "Σύλλογος Ταραμπάδου Τήνου",
    contactLabel: "Επικοινωνία",
    contactLines: [
      "tarampados@gmail.com",
      "Ταραμπάδος, Κυκλάδες, Ελλάδα",
      "Τ.Κ. 842 00",
    ],
    policiesLabel: "Πολιτικές",
    policyLinks: [
      { label: "Πολιτική Απορρήτου", href: "/politiki-aporritou" },
      { label: "Πολιτική Χρήσης", href: "/politiki-chrisis" },
    ],
    legalLabel: "Νομικά στοιχεία",
    legalLines: [
      "Εξωραϊστικός & Εκπολιτιστικός Σύλλογος Ταραμπάδου Τήνου",
      "ΑΦΜ: 099053786",
      "ΔΟΥ: Σύρου",
      "Έδρα: Ταραμπάδος Τήνου",
    ],
  },
  en: {
    heading: "Tarampados Association of Tinos",
    contactLabel: "Contact",
    contactLines: [
      "tarampados@gmail.com",
      "Tarampados, Cyclades, Greece",
      "Postal code 842 00",
    ],
    policiesLabel: "Policies",
    policyLinks: [
      { label: "Privacy Policy", href: "/en/privacy-policy" },
      { label: "Terms of Use", href: "/en/terms-of-use" },
    ],
    legalLabel: "Legal details",
    legalLines: [
      "Cultural Association of Tarampados Tinos",
      "VAT: 099053786",
      "Tax Office: Syros",
      "Registered in Tarampados, Tinos",
    ],
  },
  fr: {
    heading: "Association de Tarampados Tinos",
    contactLabel: "Contact",
    contactLines: [
      "tarampados@gmail.com",
      "Tarampados, Cyclades, Grèce",
      "Code postal 842 00",
    ],
    policiesLabel: "Politiques",
    policyLinks: [
      {
        label: "Politique de confidentialité",
        href: "/fr/politique-de-confidentialite",
      },
      {
        label: "Conditions d’utilisation",
        href: "/fr/conditions-d-utilisation",
      },
    ],
    legalLabel: "Mentions légales",
    legalLines: [
      "Association culturelle de Tarampados Tinos",
      "N° TVA : 099053786",
      "Service des impôts : Syros",
      "Siège social : Tarampados, Tinos",
    ],
  },
};

export function SiteFooter({ locale }: { locale: Locale }) {
  const content = footerContent[locale];

  return (
    <footer className="rounded-2xl border border-zinc-200 bg-white/60 p-6 text-sm shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
          Tarampados Village
        </p>
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          {content.heading}
        </h2>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            {content.contactLabel}
          </h3>
          <a
            href="mailto:tarampados@gmail.com"
            className="text-base font-medium text-zinc-900 underline-offset-2 hover:underline dark:text-zinc-50"
          >
            {content.contactLines[0]}
          </a>
          <div className="text-base leading-6 text-zinc-700 dark:text-zinc-300">
            {content.contactLines.slice(1).map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            {content.policiesLabel}
          </h3>
          <ul className="space-y-1 text-base leading-6 text-zinc-700 dark:text-zinc-300">
            {content.policyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="underline-offset-2 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            {content.legalLabel}
          </h3>
          <div className="text-base leading-6 text-zinc-700 dark:text-zinc-300">
            {content.legalLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

