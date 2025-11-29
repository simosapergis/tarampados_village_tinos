'use client';

import { useState } from "react";
import type { Locale } from "@/i18n/config";

type FormState = "idle" | "loading" | "success" | "error";

type ContactFormCopy = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  submitting: string;
  success: string;
  fallbackError: string;
  genericError: string;
};

const copy: Record<Locale, ContactFormCopy> = {
  el: {
    nameLabel: "Ονοματεπώνυμο",
    namePlaceholder: "Πληκτρολογήστε το όνομά σας",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    subjectLabel: "Θέμα",
    subjectPlaceholder: "Περιγράψτε σύντομα το αίτημα",
    messageLabel: "Μήνυμα",
    messagePlaceholder: "Γράψτε το μήνυμά σας",
    submit: "Αποστολή",
    submitting: "Αποστολή...",
    success: "Το μήνυμά σας εστάλη με επιτυχία!",
    fallbackError: "Αδυναμία αποστολής μηνύματος.",
    genericError: "Κάτι πήγε στραβά.",
  },
  en: {
    nameLabel: "Full name",
    namePlaceholder: "Type your full name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "Briefly describe your request",
    messageLabel: "Message",
    messagePlaceholder: "Write your message",
    submit: "Send message",
    submitting: "Sending...",
    success: "Your message has been sent!",
    fallbackError: "Unable to send message.",
    genericError: "Something went wrong.",
  },
  fr: {
    nameLabel: "Nom complet",
    namePlaceholder: "Indiquez votre nom complet",
    emailLabel: "Email",
    emailPlaceholder: "votre@email.com",
    subjectLabel: "Sujet",
    subjectPlaceholder: "Décrivez brièvement votre demande",
    messageLabel: "Message",
    messagePlaceholder: "Écrivez votre message",
    submit: "Envoyer",
    submitting: "Envoi...",
    success: "Votre message a été envoyé !",
    fallbackError: "Impossible d’envoyer le message.",
    genericError: "Un problème est survenu.",
  },
};

type ContactFormProps = {
  locale: Locale;
};

export function ContactForm({ locale }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const localeCopy = copy[locale];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const payload = {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      subject: formData.get("subject")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
    };

    setFormState("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error?.error ?? localeCopy.fallbackError);
      }

      setFormState("success");
      formElement.reset();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : localeCopy.genericError
      );
      setFormState("error");
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="text-sm font-semibold text-stone-600">
          {localeCopy.nameLabel}
        </label>
        <input
          type="text"
          name="name"
          className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:border-emerald-500 focus:outline-none"
          placeholder={localeCopy.namePlaceholder}
          required
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-stone-600">
          {localeCopy.emailLabel}
        </label>
        <input
          type="email"
          name="email"
          className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:border-emerald-500 focus:outline-none"
          placeholder={localeCopy.emailPlaceholder}
          required
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-stone-600">
          {localeCopy.subjectLabel}
        </label>
        <input
          type="text"
          name="subject"
          className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:border-emerald-500 focus:outline-none"
          placeholder={localeCopy.subjectPlaceholder}
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-stone-600">
          {localeCopy.messageLabel}
        </label>
        <textarea
          name="message"
          rows={4}
          className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:border-emerald-500 focus:outline-none"
          placeholder={localeCopy.messagePlaceholder}
          required
        />
      </div>
      <button
        type="submit"
        disabled={formState === "loading"}
        className="w-full rounded-2xl bg-emerald-600 px-6 py-3 text-center font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {formState === "loading" ? localeCopy.submitting : localeCopy.submit}
      </button>
      {formState === "success" && (
        <p className="text-sm text-emerald-600">{localeCopy.success}</p>
      )}
      {errorMessage && (
        <p className="text-sm text-rose-500">{errorMessage}</p>
      )}
    </form>
  );
}

