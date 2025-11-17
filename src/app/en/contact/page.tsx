import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Contact | Tarampados Village",
  description:
    "How to reach the Tarampados Village committee for visits, press, or collaborations.",
};

export default function ContactEn() {
  return (
    <PageShell
      title="Contact"
      introduction={[
        "We are refreshing all contact entries before launch. Until then, please use the placeholder details below or reach out via social media.",
      ]}
      highlights={[
        "Email: hello@tarampados-village.gr",
        "Press & partnerships: partners@tarampados-village.gr",
        "Phone (UTC+2): +30 22830 00000",
      ]}
      sections={[
        {
          heading: "Visit planning",
          paragraphs: [
            "Guided tours, accommodation tips and transfers from Tinos town will be listed here, including forms that sync with Vercel Functions for automated replies.",
          ],
        },
      ]}
      footerLocale="en"
    />
  );
}

