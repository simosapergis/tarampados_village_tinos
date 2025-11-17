import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Cookie Policy | Tarampados Village",
  description:
    "Information about the cookies used on the English version of Tarampados Village.",
};

export default function CookiesEn() {
  return (
    <PageShell
      title="Cookie Policy"
      introduction={[
        "We only use a minimal set of cookies while rebuilding the site. The consent banner will go live before production.",
      ]}
      sections={[
        {
          heading: "Categories",
          paragraphs: [
            "Essential cookies to remember the selected language and keep basic navigation running.",
            "Analytics cookies to understand how international visitors explore the new structure.",
          ],
        },
        {
          heading: "Control",
          paragraphs: [
            "Visitors will be able to update their preferences at any time. Consent logs will be stored securely on Vercel.",
          ],
        },
      ]}
      footerLocale="en"
    />
  );
}

