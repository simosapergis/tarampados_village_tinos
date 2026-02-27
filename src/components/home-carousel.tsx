'use client';

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";
import type { Locale } from "@/i18n/config";

type Slide = {
  src: string;
  captions: Record<Locale, string>;
  label: Record<Locale, string>;
};

const slides: Slide[] = [
  {
    src: "/images/home_carousel/air_view.webp",
    captions: {
      el: "Αεροφωτογραφία της κοιλάδας Ταραμπάδου με θέα τα χωριά της Μεσαριάς.",
      en: "Aerial perspective of the Tarampados valley and the villages of Mesaria.",
      fr: "Vue aérienne de la vallée de Tarampados et des villages de la Mesaria.",
    },
    label: {
      el: "Αεροφωτογραφία",
      en: "Aerial view",
      fr: "Vue aérienne",
    },
  },
  {
    src: "/images/home_carousel/church_pigeon_houses.webp",
    captions: {
      el: "Η εκκλησία και οι περιστεριώνες συνθέτουν τοπία πίστης και λαϊκής αρχιτεκτονικής.",
      en: "Church facades and dovecotes highlight the blend of faith and folk architecture.",
      fr: "Façades d’églises et pigeonniers illustrent l’alliance de la foi et de l’architecture populaire.",
    },
    label: {
      el: "Ναός και περιστεριώνες",
      en: "Church & dovecotes",
      fr: "Église & pigeonniers",
    },
  },
  {
    src: "/images/home_carousel/party.webp",
    captions: {
      el: "Το καλοκαίρι αποτελεί περίοδο ζωντανών και εντυπωσιακών εκδηλώσεων.",
      en: "The village celebrates every summer with vibrant events.",
      fr: "Le village fête chaque été avec des événements animés.",
    },
    label: {
      el: "Γιορτή χωριού",
      en: "Village feast",
      fr: "Fête du village",
    },
  },
  {
    src: "/images/home_carousel/pidgeon_house.webp",
    captions: {
      el: "Λεπτομέρεια από παραδοσιακό περιστεριώνα με σχιστόλιθο και γεωμετρικά μοτίβα.",
      en: "Detail of a traditional slate dovecote with geometric motifs.",
      fr: "Détail d’un pigeonnier traditionnel en schiste avec motifs géométriques.",
    },
    label: {
      el: "Περιστεριώνας",
      en: "Dovecote detail",
      fr: "Détail de pigeonnier",
    },
  },
  {
    src: "/images/home_carousel/sunset.webp",
    captions: {
      el: "Δειλινό πάνω από τους θόλους και τα μονοπάτια του Ταραμπάδου.",
      en: "Sunset over Tarampados domes and paths.",
      fr: "Coucher de soleil sur les coupoles et sentiers de Tarampados.",
    },
    label: {
      el: "Δειλινό",
      en: "Sunset glow",
      fr: "Lueur du soir",
    },
  },
  {
    src: "/images/home_carousel/village_center.webp",
    captions: {
      el: "Το κέντρο του χωριού με τις καμάρες και τα ασβεστωμένα σπίτια.",
      en: "The village center with arches and whitewashed houses.",
      fr: "Le centre du village avec arcades et maisons blanchies.",
    },
    label: {
      el: "Κέντρο χωριού",
      en: "Village center",
      fr: "Centre du village",
    },
  },
  {
    src: "/images/home_carousel/village_map.webp",
    captions: {
      el: "Τοπική σήμανση που καθοδηγεί τους επισκέπτες στις διαδρομές.",
      en: "Wayfinding signage that guides visitors along the trails.",
      fr: "Signalétique locale guidant les visiteurs sur les parcours.",
    },
    label: {
      el: "Σήμανση διαδρομών",
      en: "Trail signage",
      fr: "Signalétique",
    },
  },
];

const copy = {
  el: {
    heading: "Φωτογραφική περιήγηση",
    prev: "Προηγούμενη φωτογραφία",
    next: "Επόμενη φωτογραφία",
    close: "Κλείσιμο",
  },
  en: {
    heading: "Photo gallery",
    prev: "Previous photo",
    next: "Next photo",
    close: "Close",
  },
  fr: {
    heading: "Galerie photo",
    prev: "Photo précédente",
    next: "Photo suivante",
    close: "Fermer",
  },
} satisfies Record<Locale, { heading: string; prev: string; next: string; close: string }>;

type HomeCarouselProps = {
  locale: Locale;
};

export function HomeCarousel({ locale }: HomeCarouselProps) {
  const [active, setActive] = useState(0);
  const total = slides.length;
  const [viewerOpen, setViewerOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});

  const headingId = useMemo(
    () => `home-carousel-${locale}-heading`,
    [locale]
  );
  const activeSlide = slides[active];
  const isChurchSlide =
    activeSlide?.src.includes("church_pigeon_houses.webp") ?? false;

  function goTo(index: number) {
    setActive((index + total) % total);
  }

  function handleImageLoad(index: number) {
    setImageLoaded((prev) => ({ ...prev, [index]: true }));
  }

  useEffect(() => {
    if (viewerOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [viewerOpen]);

  function openViewer(currentIndex: number) {
    setActive(currentIndex);
    setViewerOpen(true);
  }

  function closeViewer() {
    setViewerOpen(false);
  }

  return (
    <section aria-labelledby={headingId} className="space-y-4">
      <div>
        <h2 id={headingId} className="text-2xl font-serif text-stone-900">
          <span className="relative inline-flex">
            <span className="relative z-10">{copy[locale].heading}</span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-2 rounded-full bg-gradient-to-r from-amber-200/80 via-amber-100/40 to-transparent"
            />
          </span>
        </h2>
      </div>

      <div className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl">
        <button
          type="button"
          onClick={() => openViewer(active)}
          className="relative block h-[360px] w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <LazyMotion features={domAnimation}>
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={activeSlide.src}
                className="absolute inset-0 bg-stone-100"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {!imageLoaded[active] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-stone-300 border-t-amber-600" />
                  </div>
                )}
                <Image
                  src={activeSlide.src}
                  alt={activeSlide.captions[locale]}
                  fill
                  className={[
                    "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
                    isChurchSlide ? "lg:!h-auto" : "",
                    !imageLoaded[active] ? "opacity-0" : "opacity-100",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px"
                  priority
                  onLoad={() => handleImageLoad(active)}
                />
                <div className="absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 text-left text-white sm:block">
                  <m.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                      {activeSlide.label[locale]}
                    </p>
                    <p className="mt-2 text-lg leading-relaxed">
                      {activeSlide.captions[locale]}
                    </p>
                  </m.div>
                </div>
              </m.div>
            </AnimatePresence>
          </LazyMotion>
        </button>
        <div className="space-y-4 border-t border-stone-200 bg-white/80 px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-stone-600">
              {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div className="flex">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={slide.label[locale]}
                  className="group p-2"
                >
                  <span
                    className={[
                      "block h-2.5 w-2.5 rounded-full transition",
                      index === active
                        ? "bg-stone-900"
                        : "bg-stone-300 group-hover:bg-stone-500",
                    ].join(" ")}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              aria-label={copy[locale].prev}
              className="h-12 w-12 rounded-full border border-stone-200 bg-white text-stone-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-stone-50"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              aria-label={copy[locale].next}
              className="h-12 w-12 rounded-full border border-stone-200 bg-white text-stone-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-stone-50"
            >
              →
            </button>
          </div>
        </div>
      </div>
      {viewerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${headingId}-viewer`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
        >
          <div className="absolute inset-0" onClick={closeViewer} aria-hidden />
          <div className="relative z-10 w-full max-w-5xl space-y-4 text-white">
            <div className="flex items-center justify-between pb-2 sm:pb-3 lg:pb-4">
              <span id={`${headingId}-viewer`} className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                {copy[locale].heading}
              </span>
              <button
                type="button"
                onClick={closeViewer}
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-white sm:text-sm lg:text-base"
              >
                {copy[locale].close}
              </button>
            </div>
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl border border-white/10 bg-black">
              {!imageLoaded[active] && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/20 border-t-white" />
                </div>
              )}
              <Image
                key={`${activeSlide.src}-viewer`}
                src={activeSlide.src}
                alt={activeSlide.captions[locale]}
                fill
                className={["object-contain transition-opacity duration-300", !imageLoaded[active] ? "opacity-0" : "opacity-100"].join(" ")}
                sizes="(max-width: 1600px) 100vw, 1600px"
                priority
                onLoad={() => handleImageLoad(active)}
              />
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label={copy[locale].prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-3 text-white transition hover:bg-black/60"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label={copy[locale].next}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-3 text-white transition hover:bg-black/60"
              >
                →
              </button>
            </div>
            <p className="text-center text-sm text-white/80">
              {activeSlide.label[locale]} · {activeSlide.captions[locale]}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

