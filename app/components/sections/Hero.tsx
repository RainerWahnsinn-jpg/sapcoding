"use client";

import Image from "next/image";
import { ArrowRight, ArrowDown, ShieldCheck } from "lucide-react";

/**
 * Hero – Enterprise-Tech-Look.
 * Kein Partikel-Canvas mehr: dezentes Raster + weicher Deep-Blue-Verlauf.
 * Rechts ein Portrait-Panel mit angedeuteten Prozess-Layern.
 */
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-800 bg-slate-950">
      {/* Ebene 0: feines Tech-Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-size-[64px_64px]"
      />
      {/* Ebene 0: Deep-Blue-Aura + Vignette, blendet das Raster zum Rand aus */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_20%_0%,rgba(0,91,148,0.30),transparent_70%),radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(6,182,212,0.10),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgb(2,6,23)_100%)]"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-5 py-28 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-36">
        {/* ── Linke Spalte: Positionierung + Aktionen ─────────────────── */}
        <div className="flex flex-col">
          <p className="inline-flex w-fit items-center gap-2.5 rounded-md border border-slate-700/70 bg-slate-900/60 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400 backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            SAP-Entwicklung &amp; Consulting · seit 2008 im SAP-Umfeld
          </p>

          <h1 className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            SAP-Entwicklung, die
            <br className="hidden sm:block" />{" "}
            <span className="text-cyan-400">im Produktivsystem hält</span>.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
            Senior-Expertin für ABAP&nbsp;OO, EDI-Schnittstellen und Adobe&nbsp;Forms –
            Entwicklung und Consulting aus einer Hand. Ich übernehme die Themen, die im
            S/4&nbsp;HANA-Projekt liegenbleiben – vom Konzept bis zum Go-live.
          </p>

          {/* Kennzahlen als nüchterne Leiste statt Neon-Pills */}
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-lg border border-slate-800 bg-slate-800">
            {[
              { value: "15+", label: "Jahre SAP" },
              { value: "25+", label: "Projekte" },
              { value: "SD·MM·FI", label: "Modul-Fokus" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col bg-slate-950/80 px-4 py-4 text-center"
              >
                <dd className="order-1 text-lg font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
                <dt className="order-2 mt-1 text-[11px] uppercase tracking-[0.14em] text-slate-500">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cyan-500 px-7 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Projekt anfragen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#about"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 px-7 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
            >
              Expertise ansehen
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* ── Rechte Spalte: Portrait-Panel ───────────────────────────── */}
        <div className="relative">
          {/* Angedeuteter Datenfluss hinter der Card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-6 -inset-y-8 -z-10 hidden lg:block"
          >
            <div className="absolute left-0 top-1/4 h-px w-full bg-linear-to-r from-transparent via-cyan-500/25 to-transparent" />
            <div className="absolute left-0 top-2/4 h-px w-full bg-linear-to-r from-transparent via-slate-600/40 to-transparent" />
            <div className="absolute left-0 top-3/4 h-px w-full bg-linear-to-r from-transparent via-cyan-500/15 to-transparent" />
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-2 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9)] backdrop-blur-sm">
            {/* Fensterleiste – signalisiert Systemumgebung statt Portfolio-Selfie */}
            <div className="flex items-center gap-2 px-3 pb-2 pt-1">
              <span className="h-2 w-2 rounded-full bg-slate-700" />
              <span className="h-2 w-2 rounded-full bg-slate-700" />
              <span className="h-2 w-2 rounded-full bg-slate-700" />
              <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                sabrina_knaup · sap_dev
              </span>
            </div>

            <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-slate-950 sm:aspect-3/4">
              <Image
                src="/Sabrina.jpg"
                alt="Sabrina Knaup, freiberufliche SAP-Entwicklerin"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-base font-semibold tracking-tight text-white">
                  Sabrina Knaup
                </p>
                <p className="mt-0.5 text-xs tracking-wide text-cyan-400/90">
                  SAP Development Expert · EDI &amp; Zoll Consultant
                </p>
              </div>
            </div>

            {/* Tech-Stack-Footer der Card */}
            <div className="flex flex-wrap gap-1.5 px-3 pb-2 pt-3">
              {["ABAP OO", "IDoc", "Adobe Forms", "OData", "S/4 HANA"].map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-slate-800 bg-slate-900/80 px-2 py-1 font-mono text-[10px] tracking-wide text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
