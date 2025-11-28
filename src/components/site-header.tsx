'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks, translatePathname } from "@/lib/navigation";
import { localeLabels, locales, type Locale } from "@/i18n/config";

function resolveLocale(pathname: string): Locale {
  if (pathname.startsWith("/en")) {
    return "en";
  }
  if (pathname.startsWith("/fr")) {
    return "fr";
  }
  return "el";
}

const localeBadge: Record<Locale, string> = {
  el: "Κυκλάδες · Τήνος",
  en: "Cyclades · Tinos",
  fr: "Cyclades · Tinos",
};

const localeLabel: Record<Locale, string> = {
  el: "Ταραμπάδος",
  en: "Tarampados",
  fr: "Tarampados",
};

const localeHeadline: Record<Locale, string> = {
  el: "Χωριό της Τήνου με ιστορία & φιλοξενία",
  en: "Tinos village with history & hospitality",
  fr: "Village de Tinos avec histoire et hospitalité",
};

const localeDescriptionCopy: Record<Locale, string> = {
  el: "Ψηφιακό αρχείο για τις διαδρομές, τις παραδόσεις και τις γλώσσες του Ταραμπάδου.",
  en: "Digital archive for the routes, traditions, and languages of Tarampados.",
  fr: "Archive numérique des itinéraires, des traditions et des langues de Tarampados.",
};

function LocaleDropdown({
  activeLocale,
  pathname,
}: {
  activeLocale: Locale;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {localeLabels[activeLocale]}
        <svg
          className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 z-30 mt-2 w-44 rounded-2xl border border-white/15 bg-slate-900/90 p-1 text-sm shadow-2xl backdrop-blur">
          {locales.map((locale) => (
            <Link
              key={locale}
              href={translatePathname(pathname, locale)}
              className={[
                "block rounded-xl px-3 py-2 font-medium transition",
                locale === activeLocale
                  ? "bg-white text-slate-900"
                  : "text-white hover:bg-white/10",
              ].join(" ")}
              onClick={() => setOpen(false)}
            >
              {localeLabels[locale]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const activeLocale = resolveLocale(pathname);
  const links = navLinks[activeLocale];

  return (
    <header className="relative z-20 border-b border-white/10 bg-[conic-gradient(at_top,_#0f172a,_#020617)] text-white shadow-lg">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-6 md:py-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-200">
              {localeLabel[activeLocale]}
            </p>
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              {localeHeadline[activeLocale]}
            </h1>
            <p className="text-sm text-slate-200">
              {localeDescriptionCopy[activeLocale]}
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sky-100">
            {localeBadge[activeLocale]}
          </div>
        </div>
        <nav className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {links.map((link) => {
              const exactMatch = pathname === link.href;
              const childMatch =
                link.key !== "home" && pathname.startsWith(`${link.href}/`);
              const isActive = exactMatch || childMatch;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "rounded-full border px-4 py-2 text-sm font-medium transition",
                    isActive
                      ? "border-white bg-white text-slate-900"
                      : "border-white/30 text-white hover:border-white hover:bg-white/10",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <LocaleDropdown activeLocale={activeLocale} pathname={pathname} />
        </nav>
      </div>
    </header>
  );
}

