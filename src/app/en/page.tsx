import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { HomeCarousel } from "@/components/home-carousel";
import heroHome from "@public/images/hero/home_1.webp";

export const metadata: Metadata = {
  title: "Our Village | Tarampados Village",
  description:
    "Discover the beauty, tradition and culture of Tarampados Village in English.",
};

export default function HomeEn() {
  const moreLinkClass =
    "ml-2 inline-flex items-center text-sm font-semibold text-amber-600 transition hover:text-amber-500";
  const moreArrow = (
    <span aria-hidden className="ml-1">
      →
    </span>
  );

  return (
    <div className="space-y-12">
      <PageShell
        title="Our Village"
        heroImage={heroHome}
        heroFit="cover"
        introduction={[
          "Discover the beauty, tradition and culture of our village. Tarambados invites international visitors to explore its ravines, dovecotes and living customs.",
        ]}
        sections={[
          {
            heading: "History & Foundations",
            paragraphs: [
              (
                <p key="history">
                  The village of Tarambados, one of the last to be built on Tinos, developed gradually after tragic events such as epidemics. With roots in
                  the 17th century, it replaced older settlements, combining history and tradition through architecture and feudal organization.
                  <Link href="/en/history" className={moreLinkClass} aria-label="Learn more about the history of Tarampados">
                    More
                    {moreArrow}
                  </Link>
                </p>
              ),
            ],
          },
          {
            heading: "Dovecotes & Landscape",
            paragraphs: [
              (
                <p key="dovecotes">
                  The dovecotes of the Tarambados Valley are cultural heritage monuments. Made of slate, they serve as pigeon houses that provide fertilizer,
                  as well as storage spaces. Their art originates from Italy and flourished particularly during the Venetian occupation.
                  <Link href="/en/culture" className={moreLinkClass} aria-label="Learn more about Tarampados dovecotes">
                    More
                    {moreArrow}
                  </Link>
                </p>
              ),
            ],
          },
          {
            heading: "Customs & Celebrations",
            paragraphs: [
              (
                <p key="customs">
                  &ldquo;Bebum Karum&rdquo; is a Christmas custom that combines family gatherings with the Divine Liturgy. Grilled sausage, symbolizing the flesh, and fish
                  soup are characteristic meals that accompany the spiritual celebration of the Incarnation.
                  <Link href="/en/culture" className={moreLinkClass} aria-label="Learn more about Tarampados customs">
                    More
                    {moreArrow}
                  </Link>
                </p>
              ),
            ],
          },
          {
            heading: "Churches & Spiritual Life",
            paragraphs: [
              (
                <p key="churches">
                  The area’s churches, such as Agios Michael and Panagia Vrysiotissa, are symbols of religious and cultural value. With a history spanning
                  centuries, they connect faith with traditions such as processions and blessings of guides.
                  <Link href="/en/religion" className={moreLinkClass} aria-label="Learn more about churches in Tarampados">
                    More
                    {moreArrow}
                  </Link>
                </p>
              ),
            ],
          },
        ]}
        afterSections={<HomeCarousel locale="en" />}
        locale="en"
      />
    </div>
  );
}

