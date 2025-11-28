import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import heroHistory from "@public/images/hero/history.webp";

export const metadata: Metadata = {
  title: "History | Tarampados Village",
  description:
    "Discover the history, people and walking routes of Tarampados in English.",
};

export default function HistoryEn() {
  return (
    <PageShell
      title="History"
      heroImage={heroHistory}
      heroFit="cover"
      introduction={[
        "Small narrow streets, arches, stables and cellars under the houses define Tarampados. People here are kind, simple, hospitable and always smiling.",
      ]}
      sections={[
        {
          heading: "Mesaria & Relocation",
          paragraphs: [
            "It is an agricultural village bordering Kampos and Smardakitou. Decades ago the wider Mesaria area gathered the villages of Mesarea, Karados and Kouroupados until a plague in the mid‑17th century forced residents to flee or perish. Tarampados is the last village built on the island.",
          ],
        },
        {
          heading: "Construction Timeline",
          paragraphs: [
            "Catholic Archives suggest construction began in the second half of the 17th century and concluded in the early 18th. No earlier references exist, while records about the neighboring Potamos (now gone) suggest a tragic event pushed families to rebuild higher up.",
          ],
        },
        {
          heading: "Name & Social Fabric",
          paragraphs: [
            "We do not know if the resettlement was caused by epidemic or invasion, but it must have been massive. Tarambados takes its name from the nickname “Tarambas”, probably a local landowner.",
            "The suffix -ados is typical of most settlements built during the Gizokrazia (1207‑1390) and the Venetian rule (1390‑1715), when poor farmers clustered around estates of wealthy landowners.",
          ],
        },
        {
          heading: "Records & Testimonies",
          paragraphs: [
            "Fr. Markos Foskolos notes the disappearance of Mesarea in 1728, the move of Karados residents to Xinara in 1753, and the incorporation of Potamos into the Smardaitos parish in 1642. Documents also describe a 1769 will in Kurupado during a plague outbreak where the sick were walled in with only small openings for food and water.",
          ],
        },
      ]}
      locale="en"
    />
  );
}

