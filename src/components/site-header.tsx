'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
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
              Χωριό των Κυκλάδων με ιστορία &amp; φιλοξενία
            </h1>
            <p className="text-sm text-slate-200">
              Ψηφιακό αρχείο για τις διαδρομές, τις παραδόσεις και τις
              γλώσσες του Ταραμπάδου.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sky-100">
            {localeBadge[activeLocale]}
          </div>
        </div>
        <nav className="flex flex-wrap gap-2">
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
        </nav>
        <div className="flex flex-wrap gap-2">
          {locales.map((locale) => {
            const isActive = activeLocale === locale;
            return (
              <Link
                key={locale}
                href={translatePathname(pathname, locale)}
                className={[
                  "rounded-full px-3 py-1.5 text-sm font-medium transition",
                  isActive
                    ? "bg-white text-slate-900"
                    : "bg-white/10 text-white hover:bg-white/20",
                ].join(" ")}
              >
                {localeLabels[locale]}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}

