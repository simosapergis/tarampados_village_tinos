import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";

const contactDetails = [
  {
    label: "Email",
    value: "tarampados@gmail.com",
    href: "mailto:tarampados@gmail.com",
  },
  { label: "Adresse", value: "Tarampados, Cyclades, Grèce" },
  { label: "Code postal", value: "842 00" },
];

export const metadata: Metadata = {
  title: "Contact | Tarampados Village",
  description:
    "Coordonnées et informations pratiques pour contacter Tarampados Village en français.",
};

export default function ContactFr() {
  return (
    <div className="bg-stone-50 text-stone-900">
      <div className="mx-auto space-y-16 px-6 py-16">
        <section className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-white via-stone-50 to-stone-100 p-10 shadow-lg">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-stone-400">
                Association culturelle de Tarampados
              </p>
              <h1 className="text-4xl font-serif text-stone-900">
                Contactez l’équipe pour toute information ou proposition.
              </h1>
              <p className="text-base text-stone-600">
                Utilisez le formulaire ou les coordonnées ci-dessous pour nous
                transmettre vos questions, initiatives ou collaborations autour
                du village.
              </p>
              <div className="grid gap-4 rounded-2xl border border-stone-200 bg-white/80 p-6 shadow-inner">
                {contactDetails.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                      {item.label}
                    </p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-lg font-semibold text-stone-900 underline-offset-2 transition duration-300 hover:underline"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-lg font-semibold text-stone-900">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white/90 p-6 shadow-lg">
              <ContactForm locale="fr" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-stone-400">
                Localisation
              </p>
              <h2 className="text-3xl font-serif text-stone-900">
                Tarampados, Tinos
              </h2>
              <p className="text-sm text-stone-600">
                Découvrez l’emplacement exact du village et préparez votre
                itinéraire vers Tarampados grâce à Google Maps.
              </p>
              <Link
                href="https://www.google.com/maps/dir/37.9199132,23.7283557/%CE%A4%CE%B1%CF%81%CE%B1%CE%BC%CF%80%CE%B1%CE%B4%CE%BF%CF%82,+842+00/@37.7711106,23.1293091,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14a2ec4b07a63d33:0xdfb341d843d6579b!2m2!1d25.1439932!2d37.5797967?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-2 text-sm font-medium text-stone-900 transition duration-300 hover:-translate-y-0.5 hover:bg-stone-100"
              >
                Ouvrir dans Google Maps
              </Link>
            </div>
            <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-inner">
              <iframe
                title="Carte de Tarampados"
                src="https://maps.google.com/maps?q=37.5797967,25.1439932&z=14&output=embed"
                width="100%"
                height="320"
                className="w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="px-6 pb-12">
        <div className="mx-auto max-w-4xl space-y-4 border-t border-dashed border-stone-200 pt-6">
          <SiteFooter locale="fr" />
        </div>
      </div>
    </div>
  );
}

