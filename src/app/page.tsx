import Image from "next/image";
import Link from "next/link";
import { localeLabels, locales } from "@/i18n/config";

export default function Home() {
  const localeOptions = locales.map((locale) => (
    <Link
      key={locale}
      href="/"
      locale={locale}
      className="flex items-center gap-2 rounded-full border border-black/[.08] px-5 py-2 text-sm font-medium transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
    >
      <span className="inline-flex h-3 w-3 rounded-full bg-foreground opacity-70" />
      <span>{localeLabels[locale]}</span>
    </Link>
  ));

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Tarampados Village on Vercel
          </h1>
          <div className="flex flex-col gap-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            <p>
              This starter is wired for Turbopack-powered development, Tailwind
              CSS v4, and built-in Next.js i18n routing so we can migrate
              content from Wix to Vercel with confidence.
            </p>
            <p>
              Use the locale toggles below to preview the automatic routing that
              Next.js provides. Each link renders this page under its localized
              route without any custom middleware.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">{localeOptions}</div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
