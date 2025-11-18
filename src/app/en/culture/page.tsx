import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Culture | Tarampados Village",
  description:
    "Cultural programming, residencies and creative workshops hosted in Tarampados.",
};

export default function CultureEn() {
  return (
    <PageShell
      title="Culture"
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
          ],
        },
      ]}
      footerLocale="en"
    />
  );
}

