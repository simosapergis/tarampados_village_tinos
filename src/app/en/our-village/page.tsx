import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Our Village | Tarampados Village",
  description:
    "Discover the history, people and walking routes of Tarampados in English.",
};

export default function OurVillageEn() {
  return (
    <PageShell
      title="Our Village"
      introduction={[
        "Small narrow streets, arches, stables and cellars under the houses define Tarampados. People here are kind, simple, hospitable and always smiling.",
        "It is an agricultural village bordering Kampos and Smardakitou. Decades ago the wider Mesaria area gathered the villages of Mesarea, Karados and Kouroupados until a plague in the mid‑17th century forced residents to flee or perish. Tarampados is the last village built on the island.",
        "Catholic Archives suggest construction began in the second half of the 17th century and concluded in the early 18th. No earlier references exist, while records about the neighboring Potamos (now gone) suggest a tragic event pushed families to rebuild higher up.",
        "We do not know if the resettlement was caused by epidemic or invasion, but it must have been massive. Tarambados takes its name from the nickname “Tarambas”, probably a local landowner.",
      ]}
      sections={[
        {
          heading: "Origins and evolution",
          paragraphs: [
            "The suffix -ados is typical of most settlements built during the Gizokrazia (1207‑1390) and the Venetian rule (1390‑1715), when poor farmers clustered around estates of wealthy landowners.",
            "Fr. Markos Foskolos notes the disappearance of Mesarea in 1728, the move of Karados residents to Xinara in 1753, and the incorporation of Potamos into the Smardaitos parish in 1642. Documents also describe a 1769 will in Kurupado during a plague outbreak where the sick were walled in with only small openings for food and water.",
          ],
        },
      ]}
      footerLocale="en"
    />
  );
}

