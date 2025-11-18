import { locales, type Locale } from "@/i18n/config";

type LocalePaths = Record<Locale, string>;

export type RouteKey =
  | "home"
  | "village"
  | "heritage"
  | "religion"
  | "culture"
  | "contact"
  | "privacy"
  | "terms"
  | "cookies";

const localeRoutes: Record<RouteKey, LocalePaths> = {
  home: { el: "/", en: "/en", fr: "/fr" },
  village: {
    el: "/to-xorio-mas",
    en: "/en/our-village",
    fr: "/fr/notre-village",
  },
  heritage: {
    el: "/klironomia",
    en: "/en/heritage",
    fr: "/fr/patrimoine",
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
  cookies: {
    el: "/politiki-cookies",
    en: "/en/cookie-policy",
    fr: "/fr/politique-de-cookies",
  },
};

const navOrder: RouteKey[] = [
  "home",
  "village",
  "heritage",
  "religion",
  "culture",
  "contact",
];

const navLabels: Record<Locale, Record<RouteKey, string>> = {
  el: {
    home: "Αρχική",
    village: "Το χωριό μας",
    heritage: "Κληρονομιά",
    religion: "Θρησκεία",
    culture: "Πολιτισμός",
    contact: "Επικοινωνία",
    privacy: "Πολιτική Απορρήτου",
    terms: "Πολιτική Χρήσης",
    cookies: "Πολιτική Cookies",
  },
  en: {
    home: "Home",
    village: "Our Village",
    heritage: "Heritage",
    religion: "Religion",
    culture: "Culture",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    cookies: "Cookie Policy",
  },
  fr: {
    home: "Accueil",
    village: "Notre village",
    heritage: "Patrimoine",
    religion: "Religion",
    culture: "Culture",
    contact: "Contact",
    privacy: "Politique de confidentialité",
    terms: "Conditions d’utilisation",
    cookies: "Politique de cookies",
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

