import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Home | Tarampados Village",
  description:
    "English overview for Tarampados Village with direct access to heritage, religion, culture and contact information.",
};

const englishMenu = [
  { href: "/en/our-village", label: "Our Village" },
  { href: "/en/heritage", label: "Heritage" },
  { href: "/en/religion", label: "Religion" },
  { href: "/en/culture", label: "Culture" },
  { href: "/en/contact", label: "Contact" },
];

export default function HomeEn() {
  return (
    <div className="space-y-12">
      <PageShell
        title="Home"
        introduction={[
          "Welcome to the English preview of Tarampados Village. This area mirrors the structure of the Greek site while using slugs and copy that make sense for international visitors.",
          "As we migrate from Wix to Vercel, we will keep the same hierarchy: an overview, a heritage hub with Religion and Culture detail pages, and a refreshed contact section.",
        ]}
        highlights={[
          "Static routes optimized for `/en` prefixes.",
          "Support for heritage storytelling with photo essays and interviews.",
          "Contact details tailored for travel partners and media.",
        ]}
        sections={[
          {
            heading: "Navigation",
            paragraphs: [
              "Use the buttons below to jump into the sections that will soon host the reworked content. Each page exposes the final slug so we can update menus, QR codes, and third-party references in advance.",
            ],
          },
        ]}
        footerLocale="en"
      />
      <section className="mx-auto flex w-full max-w-4xl flex-wrap gap-3 rounded-2xl border border-zinc-200 bg-white/60 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
        {englishMenu.map((item) => (
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

