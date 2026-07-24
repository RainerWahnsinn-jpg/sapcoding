"use client";

import dynamic from "next/dynamic";
import ContactForm from "../ContactForm";

// Hydrations-Fix: Die Canvas-Simulation rendert ausschließlich im Browser.
// ssr: false ist nur in Client-Komponenten erlaubt – daher ist Hero selbst 'use client'.
const HeroVisual = dynamic(() => import("./HeroVisual"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black">
      {/* Ebene 0: Immersive Partikel-Simulation – rein dekorativ, fängt keine Events */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HeroVisual />
      </div>

      {/* Ebene 10: UI-Content – vollständig interaktiv */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 py-28 sm:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Linke Spalte: Majestätische Headline */}
          <div className="flex flex-col">
            <p className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.3em] text-white/60 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-violet-400 to-cyan-300" />
              SAP Development Expert — 15+ Jahre Erfahrung
            </p>

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tighter text-white md:text-6xl lg:text-7xl">
              Ihre Expertin für{" "}
              <span className="bg-linear-to-r from-violet-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                maßgeschneiderte SAP-Entwicklung
              </span>
              , die Ihnen den Tag rettet.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
              Unabhängige Spezialistin für ABAP, EDI-Schnittstellen und Adobe Forms.
              Langjährige Expertise in den Modulen SD, MM und FI.
            </p>

            <div className="mt-10 flex flex-wrap gap-2.5 sm:gap-3">
              {[
                { label: "ABAP & ABAP OO", dot: "bg-white", glow: "hover:border-white/40 hover:shadow-[0_0_24px_-4px_rgba(255,255,255,0.35)]" },
                { label: "Adobe Forms", dot: "bg-emerald-400", glow: "hover:border-emerald-400/50 hover:shadow-[0_0_24px_-4px_rgba(52,211,153,0.45)]" },
                { label: "EDI & IDoc", dot: "bg-violet-400", glow: "hover:border-violet-400/50 hover:shadow-[0_0_24px_-4px_rgba(167,139,250,0.45)]" },
                { label: "SD / MM / FI", dot: "bg-cyan-400", glow: "hover:border-cyan-400/50 hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.45)]" },
              ].map((tech) => (
                <span
                  key={tech.label}
                  className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3.5 py-1.5 text-sm text-white/60 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-white ${tech.glow}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${tech.dot}`} />
                  {tech.label}
                </span>
              ))}
            </div>
          </div>

          {/* Rechte Spalte: Schwebende Glassmorphism-Karte mit Kontaktformular.
              State-Isolation: ContactForm verwaltet seinen Zustand intern,
              HeroVisual ist memoisiert – Tippen re-rendert die Szene nicht. */}
          <div
            id="kontakt"
            className="scroll-mt-24 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] p-5 sm:p-8 lg:p-12 relative z-10"
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
              Kontakt aufnehmen
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Erzählen Sie mir von Ihrem SAP-Projekt.
            </h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
