"use client";

import { useState } from "react";
import { Send, Copy, Check, Mail } from "lucide-react";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// KONFIGURATION – Hier die Ziel-E-Mail-Adresse anpassen
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const TARGET_EMAIL = "Sabrina.Knaup@SAPCoding.de";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// STYLING KONSTANTEN
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const fieldClass =
  "min-h-12 w-full rounded-md border border-slate-700 bg-slate-950/60 px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-slate-600 focus:border-cyan-500 focus:bg-slate-950";

const wrapperClass =
  "block space-y-2 text-sm text-slate-400 transition-colors duration-200 focus-within:text-slate-200";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// BETREFF-OPTIONEN
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const SUBJECT_OPTIONS = [
  { value: "", label: "Bitte auswählen" },
  { value: "ABAP Entwicklung", label: "ABAP Entwicklung" },
  { value: "Formulare", label: "Formulare (Adobe Forms / Smart Forms)" },
  { value: "Schnittstellen", label: "Schnittstellen (EDI / IDoc / RFC)" },
  { value: "S/4 HANA", label: "S/4 HANA Transformation" },
  { value: "Consulting", label: "Consulting (EDI / SD / Zoll & Außenhandel)" },
  { value: "Sonstiges", label: "Sonstiges SAP-Projekt" },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FORMULAR-STATE TYPEN
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  // Formular-State
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Validierungs-Fehler
  const [errors, setErrors] = useState<FormErrors>({});

  // UI-State für "E-Mail kopiert" Feedback
  const [copied, setCopied] = useState(false);

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // VALIDIERUNG
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Bitte geben Sie Ihren Namen ein.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }

    if (!formData.subject) {
      newErrors.subject = "Bitte wählen Sie einen Betreff.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Bitte beschreiben Sie Ihr Anliegen.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // MAILTO-LINK GENERIEREN
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const generateMailtoUrl = (): string => {
    // Betreff formatieren: [Anfrage] {Betreff} - von {Name}
    const subject = `[Anfrage] ${formData.subject} - von ${formData.name}`;

    // Body formatieren
    const body = `Hallo,

Name: ${formData.name}
E-Mail: ${formData.email}

Nachricht:
${formData.message}`;

    // URL-enkodieren und mailto-Link bauen
    return `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FORMULAR ABSENDEN (öffnet Mail-Programm)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Mailto-Link öffnen
    window.location.href = generateMailtoUrl();
  };

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // E-MAIL-ADRESSE IN ZWISCHENABLAGE KOPIEREN
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(TARGET_EMAIL);
      setCopied(true);
      // Nach 2 Sekunden zurücksetzen
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback für ältere Browser
      const textArea = document.createElement("textarea");
      textArea.value = TARGET_EMAIL;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // INPUT CHANGE HANDLER
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Fehler für dieses Feld löschen wenn der User tippt
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // RENDER
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name & E-Mail */}
      <div className="grid gap-5 md:grid-cols-2">
        <label className={wrapperClass}>
          Name *
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            className={`${fieldClass} ${errors.name ? "!border-red-400/60" : ""}`}
            placeholder="Ihr Name"
          />
          {errors.name && (
            <span className="text-xs text-red-400">{errors.name}</span>
          )}
        </label>

        <label className={wrapperClass}>
          E-Mail-Adresse *
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            className={`${fieldClass} ${errors.email ? "!border-red-400/60" : ""}`}
            placeholder="ihre@email.de"
          />
          {errors.email && (
            <span className="text-xs text-red-400">{errors.email}</span>
          )}
        </label>
      </div>

      {/* Betreff / Anlass */}
      <label className={wrapperClass}>
        Worum geht es? *
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`${fieldClass} appearance-none cursor-pointer ${errors.subject ? "!border-red-400/60" : ""}`}
        >
          {SUBJECT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value} className="bg-slate-900">
              {option.label}
            </option>
          ))}
        </select>
        {errors.subject && (
          <span className="text-xs text-red-400">{errors.subject}</span>
        )}
      </label>

      {/* Nachricht */}
      <label className={wrapperClass}>
        Ihr Anliegen *
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`${fieldClass} resize-none ${errors.message ? "!border-red-400/60" : ""}`}
          placeholder="Beschreiben Sie kurz Ihr SAP-Entwicklungsprojekt..."
        />
        {errors.message && (
          <span className="text-xs text-red-400">{errors.message}</span>
        )}
      </label>

      {/* Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Haupt-Button: Anfrage via E-Mail */}
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-cyan-500 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 sm:w-auto"
        >
          <Send className="h-4 w-4" />
          Anfrage via E-Mail
        </button>

        {/* Sekundär-Button: E-Mail kopieren */}
        <button
          type="button"
          onClick={copyEmailToClipboard}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:bg-slate-800/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 sm:w-auto"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-emerald-400" />
              <span className="text-emerald-400">Kopiert!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              E-Mail-Adresse kopieren
            </>
          )}
        </button>
      </div>

      {/* Hinweis für Nutzer ohne Mail-Programm */}
      <p className="flex items-start gap-2 text-xs leading-5 text-slate-500">
        <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        <span>
          Der Button öffnet Ihr Standard-E-Mail-Programm. Alternativ schreiben Sie direkt an{" "}
          <a
            href={`mailto:${TARGET_EMAIL}`}
            className="text-cyan-400 underline decoration-cyan-500/30 underline-offset-2 transition hover:decoration-cyan-400"
          >
            {TARGET_EMAIL}
          </a>
        </span>
      </p>
    </form>
  );
}
