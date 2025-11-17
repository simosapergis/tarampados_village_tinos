export const locales = ["en", "el", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  el: "Ελληνικά",
  fr: "Français",
};

