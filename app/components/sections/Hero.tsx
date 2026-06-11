"use client";

import dynamic from "next/dynamic";
import ContactForm from "../ContactForm";

// Hydrations-Fix: Die Canvas-Simulation rendert ausschließlich im Browser.
// ssr: false ist nur in Client-Komponenten erlaubt – daher ist Hero selbst 'use client'.
const HeroVisual = dynamic(() => import("./HeroVisual"), { ssr: false });

export default function Hero() {
  return (
    <section id="kontakt" className="relative isolate min-h-screen overflow-hidden bg-black">
      {/* Ebene 0: Immersive Partikel-Simulation – rein dekorativ, fängt keine Events */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <HeroVisual />
      </div>

      {/* Ebene 10: UI-Content – vollständig interaktiv */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-28 sm:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Linke Spalte: Majestätische Headline */}
          <div className="flex flex-col">
            <p className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.3em] text-white/60 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-violet-400 to-cyan-300" />
              Web + KI Agentur — Siegen
            </p>

            <h1 className="text-5xl font-semibold leading-[1.04] tracking-tighter text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Lassen Sie uns Ihre{" "}
              <span className="bg-linear-to-r from-violet-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                digitale Infrastruktur
              </span>{" "}
              aufbauen.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
              Egal ob Web-App, B2B-Plattform oder Automatisierung – wir analysieren Ihr
              Vorhaben unverbindlich und liefern messbare Ergebnisse.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/40">
              <span>Next.js</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>Supabase</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>KI-Integrationen</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>Tailwind v4</span>
            </div>
          </div>

          {/* Rechte Spalte: Schwebende Glassmorphism-Karte mit Kontaktformular.
              State-Isolation: ContactForm verwaltet seinen Zustand intern,
              HeroVisual ist memoisiert – Tippen re-rendert die Szene nicht. */}
          <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] p-8 lg:p-12 relative z-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
              Projektanfrage
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Erzählen Sie uns von Ihrem Vorhaben.
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
