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

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Tarampados.official/?locale=el_GR",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          fill="currentColor"
          d="M22 12.07C22 6.485 17.523 2 12 2S2 6.486 2 12.07c0 5 3.657 9.143 8.438 9.879v-6.988H8.078v-2.89h2.36v-2.205c0-2.33 1.392-3.619 3.523-3.619 1.021 0 2.09.183 2.09.183v2.3h-1.177c-1.16 0-1.523.72-1.523 1.458v1.883h2.59l-.414 2.89h-2.176v6.988C18.343 21.213 22 17.07 22 12.07Z"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tarampados.official/",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          fill="currentColor"
          d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm9 1a1 1 0 100 2 1 1 0 000-2zm-4 2.5A4.5 4.5 0 007.5 12 4.5 4.5 0 0012 16.5 4.5 4.5 0 0016.5 12 4.5 4.5 0 0012 7.5zm0 2A2.5 2.5 0 0114.5 12 2.5 2.5 0 0112 14.5 2.5 2.5 0 019.5 12 2.5 2.5 0 0112 9.5z"
        />
      </svg>
    ),
  },
];

export function SiteFooter({ locale }: { locale: Locale }) {
  const content = footerContent[locale];

  return (
    <footer className="rounded-2xl border border-stone-200 bg-white p-6 text-sm text-stone-700 shadow-sm">
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
          Tarampados Village
        </p>
        <h2 className="text-xl font-semibold text-stone-900">
          {content.heading}
        </h2>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            {content.contactLabel}
          </h3>
          <a
            href="mailto:tarampados@gmail.com"
            className="text-base font-semibold text-stone-900 underline-offset-2 hover:underline"
          >
            {content.contactLines[0]}
          </a>
          <div className="text-base leading-6 text-stone-700">
            {content.contactLines.slice(1).map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            {content.policiesLabel}
          </h3>
          <ul className="space-y-1 text-base leading-6 text-stone-700">
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
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            {content.legalLabel}
          </h3>
          <div className="text-base leading-6 text-stone-700">
            {content.legalLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-stone-200 text-stone-700 transition hover:-translate-y-0.5 hover:text-amber-700"
          >
            <span className="sr-only">{link.label}</span>
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}

