import Image, { type StaticImageData } from "next/image";
import type { Locale } from "@/i18n/config";
import { SiteFooter } from "@/components/site-footer";

import type { ReactNode } from "react";

type Section = {
  heading: string;
  paragraphs: ReactNode[];
};

type PageShellProps = {
  title: string;
  introduction: string[];
  sections?: Section[];
  highlights?: string[];
  footerNote?: string;
  heroImage?: string | StaticImageData;
  heroImageMobile?: string | StaticImageData;
  heroFit?: "repeat" | "cover" | "contain";
  heroOverlay?: "default" | "mobile-only" | "none";
  locale: Locale;
  showFooter?: boolean;
  afterHero?: ReactNode;
  afterSections?: ReactNode;
};

const eyebrowCopy: Record<Locale, string> = {
  el: "Ταραμπάδος · Τήνος",
  en: "Tarampados · Tinos",
  fr: "Tarampados · Tinos",
};

export function PageShell({
  title,
  introduction,
  sections = [],
  highlights: _highlights = [],
  footerNote,
  heroImage,
  heroImageMobile,
  heroFit = "repeat",
  heroOverlay = "default",
  locale,
  showFooter = true,
  afterHero,
  afterSections,
}: PageShellProps) {
  void _highlights;
  const showHeroOverlay = heroOverlay !== "none";
  const showHeroOverlayOnDesktop = heroOverlay === "default";
  const overlayVisibilityClass = showHeroOverlayOnDesktop ? "" : "md:hidden";
  const showHeaderAfterHero = Boolean(heroImage && heroOverlay === "mobile-only");
  const headerAfterHeroClass =
    heroOverlay === "mobile-only" ? "hidden px-6 pt-12 md:block" : "px-6 pt-12";
  const heroImageHeightClass = showHeroOverlay ? "!h-[85%] lg:!h-full" : "!h-full";
  const contentWrapperClass =
    heroImage && !showHeroOverlay
      ? "flex justify-center px-6 pb-16 pt-8 md:py-16"
      : "flex justify-center px-6 py-16";
  const eyebrowClass = heroImage
    ? "hidden md:block text-xs font-semibold uppercase tracking-[0.35em] text-white/80"
    : "text-xs font-semibold uppercase tracking-[0.35em] text-stone-500";
  const titleClass = heroImage
    ? "text-[1.5625rem] md:text-4xl font-serif text-white"
    : "text-4xl font-serif text-stone-900";
  const introClass = heroImage
    ? "space-y-3 md:space-y-4 text-base md:text-lg leading-7 md:leading-8 text-white/90"
    : "space-y-4 text-lg leading-8 text-stone-700";

  return (
    <div className="bg-stone-50 text-stone-900">
      {heroImage && (
        <section className="relative w-full overflow-hidden">
          {heroFit === "repeat" ? (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${typeof heroImage === "string" ? heroImage : heroImage.src})`,
                backgroundRepeat: "repeat",
                backgroundSize: "auto 100%",
                backgroundPosition: "center",
              }}
            />
          ) : (
            <>
              {heroImageMobile ? (
                <>
                  <Image
                    src={heroImage}
                    alt=""
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 768px) 0px, 100vw"
                    className={`hidden md:block ${heroImageHeightClass} ${heroFit === "contain" ? "object-contain" : "object-cover"}`}
                    style={{ objectFit: heroFit === "contain" ? "contain" : "cover" }}
                    {...(typeof heroImage === "object" && "blurDataURL" in heroImage && heroImage.blurDataURL
                      ? { placeholder: "blur", blurDataURL: heroImage.blurDataURL }
                      : { placeholder: "empty" })}
                  />
                  <Image
                    src={heroImageMobile}
                    alt=""
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 767px) 100vw, 0px"
                    className={`md:hidden ${heroImageHeightClass} ${heroFit === "contain" ? "object-contain" : "object-cover"}`}
                    style={{ objectFit: heroFit === "contain" ? "contain" : "cover" }}
                    {...(typeof heroImageMobile === "object" &&
                    "blurDataURL" in heroImageMobile &&
                    heroImageMobile.blurDataURL
                      ? { placeholder: "blur", blurDataURL: heroImageMobile.blurDataURL }
                      : { placeholder: "empty" })}
                  />
                </>
              ) : (
                <Image
                  src={heroImage}
                  alt=""
                  fill
                  priority
                  fetchPriority="high"
                  sizes="100vw"
                  className={`${heroImageHeightClass} ${heroFit === "contain" ? "object-contain" : "object-cover"}`}
                  style={{ objectFit: heroFit === "contain" ? "contain" : "cover" }}
                  {...(typeof heroImage === "object" && "blurDataURL" in heroImage && heroImage.blurDataURL
                    ? { placeholder: "blur", blurDataURL: heroImage.blurDataURL }
                    : { placeholder: "empty" })}
                />
              )}
            </>
          )}
          {showHeroOverlay && (
            <>
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent ${overlayVisibilityClass}`}
              />
              <div
                className={`relative z-10 mx-auto flex min-h-[80svh] w-full max-w-6xl items-end px-4 pb-6 pt-10 md:px-6 md:py-12 ${overlayVisibilityClass}`}
              >
                <div className="w-full rounded-3xl border border-white/20 bg-black/40 p-4 md:p-10 shadow-2xl backdrop-blur-lg">
                  <p className={eyebrowClass}>{eyebrowCopy[locale]}</p>
                  <h1 className={`${titleClass} py-2 md:py-5`}>{title}</h1>
                  <div className={introClass}>
                    {introduction.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
          {showHeroOverlay && !showHeroOverlayOnDesktop && (
            <div className="hidden min-h-[80svh] md:block" />
          )}
          {!showHeroOverlay && <div className="min-h-[80svh]" />}
        </section>
      )}

      {showHeaderAfterHero && (
        <div className={headerAfterHeroClass}>
          <header className="mx-auto w-full max-w-4xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
              {eyebrowCopy[locale]}
            </p>
            <h1 className="text-4xl font-serif text-stone-900">{title}</h1>
            <div className="space-y-4 text-lg leading-8 text-stone-700">
              {introduction.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </header>
        </div>
      )}

      {afterHero && <div className="px-6 pb-12">{afterHero}</div>}

      <div className={contentWrapperClass}>
        <article className="w-full max-w-4xl space-y-12">
          {!heroImage && (
            <header className="space-y-4">
              <p className={eyebrowClass}>{eyebrowCopy[locale]}</p>
              <h1 className={titleClass}>{title}</h1>
              <div className={introClass}>
                {introduction.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </header>
          )}

          {sections.map((section) => (
            <section key={section.heading as string} className="space-y-3">
              <h2 className="text-2xl font-serif text-stone-900">
                <span className="relative inline-flex">
                  <span className="relative z-10">{section.heading}</span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-2 rounded-full bg-gradient-to-r from-amber-200/80 via-amber-100/40 to-transparent"
                  />
                </span>
              </h2>
              <div className="space-y-3 text-lg leading-8 text-stone-700">
                {section.paragraphs.map((paragraph, index) =>
                  typeof paragraph === "string" ? (
                    <p key={index}>{paragraph}</p>
                  ) : (
                    <div key={index}>{paragraph}</div>
                  )
                )}
              </div>
            </section>
          ))}

          {afterSections && <div>{afterSections}</div>}

          {(footerNote || showFooter) && (
            <div className="space-y-4 border-t border-dashed border-stone-200 pt-6">
              {footerNote && <p className="text-sm text-stone-500">{footerNote}</p>}
              {showFooter && <SiteFooter locale={locale} />}
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
