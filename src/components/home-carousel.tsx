'use client';

import Image from "next/image";
import { useMemo, useState } from "react";
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
      el: "Γιορτινό τραπέζι με μαγειρέματα που συνοδεύουν κάθε πανηγύρι.",
      en: "Festive table with homemade dishes for village celebrations.",
      fr: "Table festive avec plats maison pour les célébrations du village.",
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
  },
  en: {
    heading: "Photo gallery",
    prev: "Previous photo",
    next: "Next photo",
  },
  fr: {
    heading: "Galerie photo",
    prev: "Photo précédente",
    next: "Photo suivante",
  },
} satisfies Record<Locale, { heading: string; prev: string; next: string }>;

type HomeCarouselProps = {
  locale: Locale;
};

export function HomeCarousel({ locale }: HomeCarouselProps) {
  const [active, setActive] = useState(0);
  const total = slides.length;

  const headingId = useMemo(
    () => `home-carousel-${locale}-heading`,
    [locale]
  );

  function goTo(index: number) {
    setActive((index + total) % total);
  }

  return (
    <section
      aria-labelledby={headingId}
      className="mx-auto w-full max-w-6xl space-y-4"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-400">
            Tarampados
          </p>
          <h2
            id={headingId}
            className="text-2xl font-serif text-stone-900 dark:text-white"
          >
            {copy[locale].heading}
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label={copy[locale].prev}
            className="h-11 w-11 rounded-full border border-stone-200 bg-white text-stone-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-stone-50"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label={copy[locale].next}
            className="h-11 w-11 rounded-full border border-stone-200 bg-white text-stone-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-stone-50"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl">
        <div className="relative h-[360px] w-full">
          <Image
            key={slides[active].src}
            src={slides[active].src}
            alt={slides[active].captions[locale]}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 text-white hidden sm:block">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              {slides[active].label[locale]}
            </p>
            <p className="mt-2 text-lg leading-relaxed">
              {slides[active].captions[locale]}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-stone-200 bg-white/80 px-6 py-4">
          <span className="text-sm font-medium text-stone-600">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActive(index)}
                aria-label={slide.label[locale]}
                className={[
                  "h-2.5 w-2.5 rounded-full transition",
                  index === active
                    ? "bg-stone-900"
                    : "bg-stone-300 hover:bg-stone-500",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

