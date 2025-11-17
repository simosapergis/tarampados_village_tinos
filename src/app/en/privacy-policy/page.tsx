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
        "At tarampados.gr, the protection of your personal data is of utmost importance to us. This Privacy Policy describes how we collect, use and protect the information you provide to us.",
      ]}
      sections={[
        {
          heading: "What data do we collect?",
          paragraphs: [
            "Personal information such as your name, email and phone number if you choose to provide them.",
            "Browsing data including IP address, browser type, pages you visit and time spent.",
          ],
        },
        {
          heading: "How we use your data",
          paragraphs: [
            "To provide you with our services and answer your questions.",
            "To improve the user experience of our website.",
            "To send you informational emails, if you have opted in to receive them.",
          ],
        },
        {
          heading: "Sharing your data",
          paragraphs: [
            "We do not share your personal data with third parties unless required by law or to provide our services.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "You have the right to request access, correction or deletion of your data at any time.",
            "To exercise your rights, please contact us at tarampados@gmail.com.",
          ],
        },
        {
          heading: "Data security",
          paragraphs: [
            "We take all necessary technical and organizational measures to ensure that your data is protected.",
          ],
        },
      ]}
      footerLocale="en"
    />
  );
}

