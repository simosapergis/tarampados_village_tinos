import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Terms of Use | Tarampados Village",
  description:
    "Guidelines for browsing the Tarampados Village website and using its content.",
};

export default function TermsEn() {
  return (
    <PageShell
      title="Terms of Use"
      introduction={[
        "Using tarampados-village.gr implies acceptance of the principles described below. The final legal wording will be reviewed before launch.",
      ]}
      sections={[
        {
          heading: "Content rights",
          paragraphs: [
            "Photographs, texts and audio belong to their respective authors. Republishing requires written permission and attribution.",
          ],
        },
        {
          heading: "Responsible browsing",
          paragraphs: [
            "Do not attempt to interfere with the infrastructure or probe private endpoints. Changes are audited through Git and Vercel deployments.",
          ],
        },
      ]}
      footerNote="Reach the coordination team if you need a formal license or API access."
      footerLocale="en"
    />
  );
}

