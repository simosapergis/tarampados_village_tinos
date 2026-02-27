import Image from "next/image";
import type { Locale } from "@/i18n/config";

type GalleryImage = {
  src: string;
  alt: string;
};

type NewsGalleryProps = {
  locale: Locale;
  title: string;
  images: GalleryImage[];
};

export function NewsGallery({ locale: _locale, title, images }: NewsGalleryProps) {
  void _locale;
  return (
    <div className="space-y-4 rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-lg">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
        {title}
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {(images || []).map((image) => (
          <div
            key={image.src}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-100 bg-stone-50"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

