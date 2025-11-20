'use client';

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
        throw new Error(error?.error ?? "Αδυναμία αποστολής μηνύματος.");
      }

      setFormState("success");
      formElement.reset();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Κάτι πήγε στραβά."
      );
      setFormState("error");
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="text-sm font-semibold text-stone-600">
          Ονοματεπώνυμο
        </label>
        <input
          type="text"
          name="name"
          className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:border-emerald-500 focus:outline-none"
          placeholder="Πληκτρολογήστε το όνομά σας"
          required
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-stone-600">Email</label>
        <input
          type="email"
          name="email"
          className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:border-emerald-500 focus:outline-none"
          placeholder="your@email.com"
          required
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-stone-600">Θέμα</label>
        <input
          type="text"
          name="subject"
          className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:border-emerald-500 focus:outline-none"
          placeholder="Περιγράψτε σύντομα το αίτημα"
        />
      </div>
      <div>
        <label className="text-sm font-semibold text-stone-600">Μήνυμα</label>
        <textarea
          name="message"
          rows={4}
          className="mt-2 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:border-emerald-500 focus:outline-none"
          placeholder="Γράψτε το μήνυμά σας"
          required
        />
      </div>
      <button
        type="submit"
        disabled={formState === "loading"}
        className="w-full rounded-2xl bg-emerald-600 px-6 py-3 text-center font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {formState === "loading" ? "Αποστολή..." : "Αποστολή"}
      </button>
      {formState === "success" && (
        <p className="text-sm text-emerald-600">
          Το μήνυμά σας εστάλη με επιτυχία!
        </p>
      )}
      {errorMessage && (
        <p className="text-sm text-rose-500">{errorMessage}</p>
      )}
    </form>
  );
}

