import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { defaultLocale } from "@/i18n/config";
import { SiteHeader } from "@/components/site-header";
import { PageTransition } from "@/components/page-transition";
import { siteMetadata } from "@/lib/site-metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.name,
    template: `%s | ${siteMetadata.shortName}`,
  },
  description: siteMetadata.description,
  alternates: {
    canonical: "/",
    languages: {
      el: "/",
      en: "/en",
      fr: "/fr",
    },
  },
  openGraph: {
    title: siteMetadata.name,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.shortName,
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tarampados",
    title: siteMetadata.name,
    description: siteMetadata.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteMetadata.name,
    url: siteMetadata.siteUrl,
    email: siteMetadata.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteMetadata.address.street,
      addressRegion: siteMetadata.address.region,
      postalCode: siteMetadata.address.postalCode,
      addressCountry: siteMetadata.address.country,
    },
    sameAs: [siteMetadata.social.facebook],
  };

  return (
    <html lang={defaultLocale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
          <SiteHeader />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
