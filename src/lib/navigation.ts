import { locales, type Locale } from "@/i18n/config";

type LocalePaths = Record<Locale, string>;

export type RouteKey =
  | "home"
  | "history"
  | "religion"
  | "culture"
  | "contact"
  | "privacy"
  | "terms";

const localeRoutes: Record<RouteKey, LocalePaths> = {
  home: { el: "/", en: "/en", fr: "/fr" },
  history: {
    el: "/istoria",
    en: "/en/history",
    fr: "/fr/histoire",
  },
  religion: {
    el: "/thriskeia",
    en: "/en/religion",
    fr: "/fr/religion",
  },
  culture: {
    el: "/politismos",
    en: "/en/culture",
    fr: "/fr/culture",
  },
  contact: {
    el: "/epikoinonia",
    en: "/en/contact",
    fr: "/fr/contact",
  },
  privacy: {
    el: "/politiki-aporritou",
    en: "/en/privacy-policy",
    fr: "/fr/politique-de-confidentialite",
  },
  terms: {
    el: "/politiki-chrisis",
    en: "/en/terms-of-use",
    fr: "/fr/conditions-d-utilisation",
  },
};

const navOrder: RouteKey[] = [
  "home",
  "history",
  "religion",
  "culture",
  "contact",
];

const navLabels: Record<Locale, Record<RouteKey, string>> = {
  el: {
    home: "Το Χωριό μας",
    history: "Ιστορία",
    religion: "Θρησκεία",
    culture: "Πολιτισμός",
    contact: "Επικοινωνία",
    privacy: "Πολιτική Απορρήτου",
    terms: "Πολιτική Χρήσης",
  },
  en: {
    home: "Our Village",
    history: "History",
    religion: "Religion",
    culture: "Culture",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
  fr: {
    home: "Notre Village",
    history: "Histoire",
    religion: "Religion",
    culture: "Culture",
    contact: "Contact",
    privacy: "Politique de confidentialité",
    terms: "Conditions d’utilisation",
  },
};

export type NavLink = {
  key: RouteKey;
  href: string;
  label: string;
};

export const navLinks: Record<Locale, NavLink[]> = locales.reduce(
  (acc, locale) => {
    acc[locale] = navOrder.map((key) => ({
      key,
      href: localeRoutes[key][locale],
      label: navLabels[locale][key],
    }));
    return acc;
  },
  {} as Record<Locale, NavLink[]>
);

export function translatePathname(
  pathname: string,
  targetLocale: Locale
): string {
  for (const key of Object.keys(localeRoutes) as RouteKey[]) {
    const routes = localeRoutes[key];
    if (
      routes.el === pathname ||
      routes.en === pathname ||
      routes.fr === pathname
    ) {
      return routes[targetLocale];
    }
  }

  if (targetLocale === "el") {
    return "/";
  }
  return `/${targetLocale}`;
}

