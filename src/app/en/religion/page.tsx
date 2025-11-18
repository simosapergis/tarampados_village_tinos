import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Religion | Tarampados Village",
  description:
    "Stories about the chapels, feasts and volunteer groups that shape the spiritual life of Tarampados.",
};

export default function ReligionEn() {
  return (
    <PageShell
      title="Religion"
      introduction={[
        "The Catholic church of Saint Michael in Tarampados dates back to 1810 and is one of the 30 parishes of the Catholic Archdiocese of Naxos-Tinos-Andros-Mykonos. The parish itself was founded in 1789, with earlier liturgical objects dating to 1532.",
        "The chapel of Saint Charalambos appears in 1828 records as an Orthodox sanctuary serving nearby villages, with a marble lintel indicating it was already parish territory by 1726.",
      ]}
      sections={[
        {
          heading: "Saint Michael",
          paragraphs: [
            "Each year on September 29 the village celebrates Saint Michael with a solemn Vespers and community gathering.",
          ],
        },
        {
          heading: "Saint Charalambos",
          paragraphs: [
            "Originally listed as a chapel of Kambos parish, it became a focal point for Orthodox communities who continued to restore and adorn it through the 18th and 19th centuries.",
          ],
        },
        {
          heading: "Panagia Vrysiotissa",
          paragraphs: [
            "The revered icon is housed in the parish church and carried to Vrysi every May for blessings, including special prayers for drivers since 1967.",
          ],
        },
        {
          heading: "“Bebum Karum”",
          paragraphs: [
            "A Christmas tradition rooted in the Latin “Verbum Caro Factum Est”, combining family meals, Midnight Mass, and the sharing of fish soup and grilled sausage to symbolize the Incarnation.",
          ],
        },
      ]}
      footerLocale="en"
    />
  );
}

