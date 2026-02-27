import Link from "next/link";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import heroHome from "@public/images/hero/home_1.webp";

const HomeCarousel = dynamic(() => import("@/components/home-carousel").then((mod) => mod.HomeCarousel));

export const metadata: Metadata = {
  title: "Notre Village | Tarampados Village",
  description:
    "Découvrez la beauté, la tradition et la culture de Tarampados en français.",
};

export default function HomeFr() {
  const moreLinkClass =
    "ml-2 inline-flex items-center text-sm font-semibold text-amber-700 transition hover:text-amber-600";
  const moreArrow = (
    <span aria-hidden className="ml-1">
      →
    </span>
  );

  return (
    <div className="space-y-12">
      <PageShell
        title="Notre Village"
        heroImage={heroHome}
        heroFit="cover"
        introduction={[
          "Découvrez la beauté, la tradition et la culture de notre village.",
        ]}
        sections={[
          {
            heading: "Histoire & Racines",
            paragraphs: [
              (
                <p key="history">
                  Le village de Tarabados, l’un des derniers construits à Tinos, s’est développé progressivement après des événements tragiques comme des
                  épidémies. Avec ses racines au XVIIe siècle, il a remplacé des colonies plus anciennes, combinant histoire et tradition à travers
                  l’architecture et l’organisation féodale.
                  <Link href="/fr/histoire" className={moreLinkClass} aria-label="En savoir plus sur l’histoire de Tarampados">
                    En savoir plus
                    {moreArrow}
                  </Link>
                </p>
              ),
            ],
          },
          {
            heading: "Pigeonniers & Paysage",
            paragraphs: [
              (
                <p key="dovecotes">
                  Les pigeonniers de la vallée de Tarambados sont des monuments du patrimoine culturel. Fabriqués en ardoise, ils servent de pigeonniers
                  fournissant du compost et de lieux de stockage. Leur art vient d’Italie et s’est épanoui particulièrement à l’époque vénitienne.
                  <Link href="/fr/culture" className={moreLinkClass} aria-label="En savoir plus sur les pigeonniers de Tarampados">
                    En savoir plus
                    {moreArrow}
                  </Link>
                </p>
              ),
            ],
          },
          {
            heading: "Coutumes & Fêtes",
            paragraphs: [
              (
                <p key="customs">
                  « Bébum Karum » est une coutume de Noël qui associe repas familial et Divine Liturgie. Le saucisson grillé, symbole de la chair, et la
                  soupe de poisson accompagnent la fête spirituelle de l’Incarnation.
                  <Link href="/fr/culture" className={moreLinkClass} aria-label="En savoir plus sur les coutumes de Tarampados">
                    En savoir plus
                    {moreArrow}
                  </Link>
                </p>
              ),
            ],
          },
          {
            heading: "Églises & Spiritualité",
            paragraphs: [
              (
                <p key="churches">
                  Les églises de la région, telles qu’Agios Michael et Panagia Vrysiotissa, sont des symboles de valeur religieuse et culturelle. Avec une
                  histoire de plusieurs siècles, elles relient la foi aux traditions comme les processions et les bénédictions.
                  <Link href="/fr/religion" className={moreLinkClass} aria-label="En savoir plus sur les églises de Tarampados">
                    En savoir plus
                    {moreArrow}
                  </Link>
                </p>
              ),
            ],
          },
        ]}
        afterSections={<HomeCarousel locale="fr" />}
        locale="fr"
      />
    </div>
  );
}

