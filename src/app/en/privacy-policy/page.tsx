import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy | Tarampados Village",
  description:
    "Summary of how Tarampados Village handles personal information for English-speaking visitors.",
};

export default function PrivacyPolicyEn() {
  return (
    <PageShell
      title="Privacy Policy"
      introduction={[
        "This is a working draft that will be replaced by the final legal copy. It outlines the principles we already follow while migrating content.",
      ]}
      sections={[
        {
          heading: "Data we collect",
          paragraphs: [
            "Contact forms (name, email, message), newsletter subscriptions and anonymized analytics. No payment data is processed on this site.",
          ],
        },
        {
          heading: "Usage",
          paragraphs: [
            "We reply to inquiries, manage visit requests and measure how users interact with the new experience so we can improve it.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "Visitors may request access, correction or deletion at any time. A dedicated GDPR form will launch alongside the production release.",
          ],
        },
      ]}
      footerNote="Effective date and legal representative will be inserted with the finalized document."
      footerLocale="en"
    />
  );
}

