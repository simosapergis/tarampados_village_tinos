import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { HomeCarousel } from "@/components/home-carousel";

export const metadata: Metadata = {
  title: "Home | Tarampados Village",
  description:
    "Discover the beauty, tradition and culture of Tarampados Village in English.",
};

export default function HomeEn() {
  return (
    <div className="space-y-12">
      <PageShell
        title="Home"
        heroImage="/images/hero/home_1.webp"
        introduction={[
          "Discover the beauty, tradition and culture of our village. Tarambados invites international visitors to explore its ravines, dovecotes and living customs.",
          "These sections mirror the organization of the Greek site so that all audiences can follow the same routes and stories.",
          "The village of Tarambados, one of the last to be built on Tinos, developed gradually after tragic events such as epidemics. With roots in the 17th century, it replaced older settlements, combining history and tradition through architecture and feudal organization.",
          "The dovecotes of the Tarambados Valley are cultural heritage monuments. Made of slate, they serve as pigeon houses that provide fertilizer, as well as storage spaces. Their art originates from Italy and flourished particularly during the Venetian occupation.",
          "\"Bebum Karum\" is a Christmas custom that combines family gatherings with the Divine Liturgy. Grilled sausage, symbolizing the flesh, and fish soup are characteristic meals that accompany the spiritual celebration of the Incarnation.",
          "The area's churches, such as Agios Michael and Panagia Vrysiotissa, are symbols of religious and cultural value. With a history spanning centuries, they connect faith with traditions such as processions and blessings of guides.",
        ]}
        afterHero={<HomeCarousel locale="en" />}
        locale="en"
      />
    </div>
  );
}

