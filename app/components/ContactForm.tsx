"use client";

import { useRef, useTransition } from "react";
import { toast } from "sonner";
import { sendEmail } from "../actions/sendEmail";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      const result = await sendEmail(formData);

      if (result.ok) {
        toast.success("Danke! Deine Anfrage ist angekommen.");
        formRef.current?.reset();
        return;
      }

      toast.error(result.error ?? "Senden fehlgeschlagen.");
    });
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm text-white/70">
          Name *
          <input
            required
            name="name"
            type="text"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white/40"
          />
        </label>
        <label className="space-y-2 text-sm text-white/70">
          E-Mail-Adresse *
          <input
            required
            name="email"
            type="email"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white/40"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm text-white/70">
        Unternehmen (optional)
        <input
          name="company"
          type="text"
          className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white/40"
        />
      </label>

      <label className="space-y-2 text-sm text-white/70">
        Dein Vorhaben / Anliegen *
        <textarea
          required
          name="message"
          maxLength={1000}
          rows={5}
          className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-white/40"
        />
      </label>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(59,130,246,0.45)] transition hover:brightness-110 hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "Wird gesendet..." : "Projekt anfragen"}
      </button>
    </form>
  );
}
