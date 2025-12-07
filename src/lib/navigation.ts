import { locales, type Locale } from "@/i18n/config";

type LocalePaths = Record<Locale, string>;

export type RouteKey =
  | "home"
  | "history"
  | "religion"
  | "culture"
  | "contact"
  | "news"
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
  news: {
    el: "/nea",
    en: "/en/news",
    fr: "/fr/actualites",
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
  "news",
];

const navLabels: Record<Locale, Record<RouteKey, string>> = {
  el: {
    home: "Το Χωριό μας",
    history: "Ιστορία",
    religion: "Θρησκεία",
    culture: "Πολιτισμός",
    contact: "Επικοινωνία",
    news: "Νέα",
    privacy: "Πολιτική Απορρήτου",
    terms: "Πολιτική Χρήσης",
  },
  en: {
    home: "Our Village",
    history: "History",
    religion: "Religion",
    culture: "Culture",
    contact: "Contact",
    news: "News",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
  fr: {
    home: "Notre Village",
    history: "Histoire",
    religion: "Religion",
    culture: "Culture",
    contact: "Contact",
    news: "Actualités",
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

function normalizePath(value: string): string {
  if (!value) {
    return "/";
  }
  if (value === "/") {
    return "/";
  }
  return value.replace(/\/+$/, "") || "/";
}

function joinPaths(base: string, remainder: string): string {
  if (!remainder) {
    return base || "/";
  }

  if (base === "/") {
    return remainder.startsWith("/") ? remainder : `/${remainder}`;
  }

  return `${base}${remainder}`;
}

export function translatePathname(
  pathname: string,
  targetLocale: Locale
): string {
  const normalizedPath = normalizePath(pathname);

  const entries = (
    Object.keys(localeRoutes) as RouteKey[]
  ).flatMap((key) =>
    locales.map((locale) => ({
      key,
      path: normalizePath(localeRoutes[key][locale]),
    }))
  );

  entries.sort((a, b) => b.path.length - a.path.length);

  for (const entry of entries) {
    const { key, path } = entry;

    if (path === "/") {
      if (normalizedPath !== "/") {
        continue;
      }
      const targetBase = normalizePath(localeRoutes[key][targetLocale]);
      return targetBase || "/";
    }

    if (normalizedPath === path) {
      const targetBase = normalizePath(localeRoutes[key][targetLocale]);
      return targetBase || "/";
    }

    if (normalizedPath.startsWith(`${path}/`)) {
      const remainder = normalizedPath.slice(path.length);
      const targetBase = normalizePath(localeRoutes[key][targetLocale]);
      return joinPaths(targetBase, remainder);
    }
  }

  if (targetLocale === "el") {
    return "/";
  }
  return `/${targetLocale}`;
}

