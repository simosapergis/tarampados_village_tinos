import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Culture | Tarampados Village",
  description:
    "Cultural programming, residencies and creative workshops hosted in Tarampados.",
};

const pigeonHouseImages = Array.from(
  { length: 6 },
  (_, index) => `/images/pidgeon_houses/h_${index + 1}.avif`
);

export default function CultureEn() {
  return (
    <PageShell
      title="Culture"
      heroImage="/images/hero/culture.webp"
      heroFit="cover"
      introduction={[
        "In the valley of Tarambados and on the plateaus to its right and left, there are most and some of the oldest and best decorated dovecotes on the island.",    
      ]}
      sections={[
        {
          heading: "Doves' houses",
          paragraphs: [
            "Originating as a type of building from the Apulian region in southeastern Italy, they are a true cultural monument and treasure, as is the whole area.",
            "During the Venetian occupation, according to the law in force at the time, the ownership of dovecotes was the exclusive prerogative of the 69 feudal lords of the island, so the locals did not have this right.",
            "We do not know from sources whether pigeon breeding existed on the island before the Venetian rule. However, apart from the meat of their pigeons, pigeons also fertilise the soil with their droppings, which are considered first-class fertiliser, which is why the locals continued to breed them after liberation.",
            "The dovecotes themselves, made of local slate, consist of two floors. Agricultural tools and fodder or fertiliser are kept on the lower floor, while the pigeons live on the upper floor.",
            <div
              key="gallery-en"
              className="mt-8 grid gap-4 rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-lg backdrop-blur"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-400">
                Dovecote gallery
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
                        alt={`Dovecote ${index + 1}`}
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
      locale="en"
    />
  );
}

