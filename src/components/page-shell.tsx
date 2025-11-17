import type { Locale } from "@/i18n/config";
import { SiteFooter } from "@/components/site-footer";

type Section = {
  heading: string;
  paragraphs: string[];
};

type PageShellProps = {
  title: string;
  introduction: string[];
  sections?: Section[];
  highlights?: string[];
  footerNote?: string;
  footerLocale?: Locale;
};

export function PageShell({
  title,
  introduction,
  sections = [],
  highlights = [],
  footerNote,
  footerLocale,
}: PageShellProps) {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <article className="w-full max-w-4xl space-y-12">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Tarampados Village
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
          <div className="space-y-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            {introduction.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </header>

        {highlights.length > 0 && (
          <section className="rounded-2xl border border-zinc-200 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              Key Points
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-zinc-700 dark:text-zinc-300">
              {highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {sections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">
              {section.heading}
            </h2>
            <div className="space-y-3 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        {(footerNote || footerLocale) && (
          <div className="space-y-4 border-t border-dashed border-zinc-200 pt-6 dark:border-white/10">
            {footerNote && (
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {footerNote}
              </p>
            )}
            {footerLocale && <SiteFooter locale={footerLocale} />}
          </div>
        )}
      </article>
    </div>
  );
}

