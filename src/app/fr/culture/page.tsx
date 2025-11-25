import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Culture | Tarampados Village",
  description:
    "Programmation culturelle, ateliers et collaborations artistiques à Tarampados.",
};

const pigeonHouseImages = Array.from(
  { length: 6 },
  (_, index) => `/images/pidgeon_houses/h_${index + 1}.avif`
);

export default function CultureFr() {
  return (
    <PageShell
      title="Culture"
      heroImage="/images/hero/culture.webp"
      heroFit="cover"
      introduction={[
        "Dans la vallée de Tarabados et sur les plateaux de chaque côté se trouvent certains des plus anciens et des mieux décorés colombiers de l'île.",    
      ]}
      sections={[
        {
          heading: "Les colombiers",
          paragraphs: [
            "D'origine italienne (région des Pouilles), ces constructions sont de véritables monuments culturels.",
        "Sous la domination vénitienne, la propriété des colombiers était réservée aux 69 seigneurs féodaux de l'île. On ignore si l'élevage de pigeons existait avant cette période.",
            "Cependant, les pigeons, en plus de leur viande, enrichissent les sols grâce à leurs excréments, considérés comme un excellent engrais. Après l'indépendance, les habitants de l'île continuèrent cette pratique.",
            "Les colombiers, construits en schiste local, comportent deux étages : l'inférieur servait à stocker les outils agricoles, les aliments pour les animaux ou les engrais, tandis que les pigeons habitaient l'étage supérieur.",
            <div
              key="gallery-fr"
              className="mt-8 grid gap-4 rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-lg backdrop-blur"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-400">
                Galerie des colombiers
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pigeonHouseImages.map((src, index) => (
                  <figure
                    key={src}
                    className="overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={src}
                        alt={`Colombier ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 320px"
                        priority={index < 2}
                      />
                    </div>
                  </figure>
                ))}
              </div>
            </div>,
          ],
        },
      ]}
      locale="fr"
    />
  );
}

