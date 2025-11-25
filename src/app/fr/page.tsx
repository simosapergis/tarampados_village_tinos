import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { HomeCarousel } from "@/components/home-carousel";

export const metadata: Metadata = {
  title: "Accueil | Tarampados Village",
  description:
    "Découvrez la beauté, la tradition et la culture de Tarampados en français.",
};

export default function HomeFr() {
  return (
    <div className="space-y-12">
      <PageShell
        title="Accueil"
        heroImage="/images/hero/home_1.webp"
        introduction={[
          "Découvrez la beauté, la tradition et la culture de notre village.",
          "Chaque section reflète la hiérarchie grecque afin de guider les visiteurs francophones vers les mêmes itinéraires et archives.",
          "Le village de Tarabados, l'un des derniers construits à Tinos, s'est développé progressivement après des événements tragiques comme des épidémies. Avec ses racines au XVIIe siècle, il a remplacé des colonies plus anciennes, combinant histoire et tradition à travers l'architecture et l'organisation féodale.",
          "Les pigeonniers de la vallée de Tarambados sont des monuments du patrimoine culturel. Fabriqués en ardoise, ils servent de pigeonniers fournissant du compost et de lieux de stockage. Leur art vient d’Italie et s’est épanoui particulièrement à l’époque vénitienne.",
          "« Bébum Karum » est une coutume de Noël qui associe repas familial et Divine Liturgie. Le saucisson grillé, symbole de la chair, et la soupe de poisson accompagnent la fête spirituelle de l’Incarnation.",
          "Les églises de la région, telles qu’Agios Michael et Panagia Vrysiotissa, sont des symboles de valeur religieuse et culturelle. Avec une histoire de plusieurs siècles, elles relient la foi aux traditions comme les processions et les bénédictions.",
        ]}
        afterHero={<HomeCarousel locale="fr" />}
        locale="fr"
      />
    </div>
  );
}

