import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Accueil | Tarampados Village",
  description:
    "Version française du site Tarampados Village avec navigation dédiée.",
};

const frenchMenu = [
  { href: "/fr/notre-village", label: "Notre village" },
  { href: "/fr/patrimoine", label: "Patrimoine" },
  { href: "/fr/religion", label: "Religion" },
  { href: "/fr/culture", label: "Culture" },
  { href: "/fr/contact", label: "Contact" },
];

export default function HomeFr() {
  return (
    <div className="space-y-12">
      <PageShell
        title="Accueil"
        introduction={[
          "Bienvenue sur l’aperçu français de Tarampados Village. Nous reprenons les contenus du site Wix et les réorganisons autour d’itinéraires thématiques.",
          "Les URLs suivent la logique `/fr/...` afin que les guides de voyage et les partenaires culturels puissent les référencer facilement.",
        ]}
        highlights={[
          "Parcours bilingues pour les visiteurs internationaux.",
          "Contenus multimédias optimisés pour le réseau Edge de Vercel.",
          "Formulaires adaptés aux demandes de presse et aux séjours.",
        ]}
        footerLocale="fr"
      />
      <section className="mx-auto flex w-full max-w-4xl flex-wrap gap-3 rounded-2xl border border-zinc-200 bg-white/60 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
        {frenchMenu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium transition hover:border-transparent hover:bg-zinc-900 hover:text-white dark:border-white/20 dark:hover:bg-white dark:hover:text-black"
          >
            {item.label}
          </Link>
        ))}
      </section>
    </div>
  );
}

