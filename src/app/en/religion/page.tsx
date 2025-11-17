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
        "Pilgrims and visitors often combine a trip to Tarampados with the major celebrations of Tinos. This page will share practical details and the symbolism behind each local feast.",
      ]}
      sections={[
        {
          heading: "Content ideas",
          paragraphs: [
            "Profiles of volunteers that keep the liturgies organized.",
            "Photo essays of the Holy Trinity chapel and the surrounding terraces.",
            "Audio snippets capturing hymns and bells.",
          ],
        },
      ]}
      footerLocale="en"
    />
  );
}

