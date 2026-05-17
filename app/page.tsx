import Image from "next/image";
import { LayoutDashboard, Sparkles, Zap } from "lucide-react";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      <section className="relative">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),rgba(0,0,0,0))] blur-2xl" />
          <div className="absolute top-24 right-[-120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.28),rgba(0,0,0,0))] blur-3xl" />
          <div className="absolute bottom-[-160px] left-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),rgba(0,0,0,0))] blur-3xl" />
        </div>

        <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center px-6 py-24 sm:px-10">
          <p className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            Web + KI Agentur
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Maßgeschneiderte Webentwicklung & KI-Tools für Unternehmen in Siegen – schnell, klar,
            messbar.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Wir bauen performante, conversion-starke Websites und Automationen, die Prozesse
            vereinfachen, Leads steigern und Teams entlasten.
          </p>

          <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_48px_rgba(59,130,246,0.5)] transition hover:brightness-110 hover:shadow-[0_0_64px_rgba(59,130,246,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
              href="#kontakt"
            >
              Projekt besprechen
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/70 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              href="#cases"
            >
              Referenzen ansehen
            </a>
          </div>

          <p className="mt-8 text-sm text-white/50">
            Next.js, Tailwind v4, Supabase, AI Integrationen - sauber umgesetzt für Wachstum.
          </p>
        </div>
      </section>
      <section id="services" className="relative border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Klar positioniert. Technisch kompromisslos.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Drei Angebote, die Ergebnisse liefern - von schneller Sichtbarkeit bis zu echten
              Automatisierungen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <Zap className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-6 text-xl font-semibold">High-Performance Webseiten</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Next.js Websites, blitzschnell und SEO-optimiert für lokales Business und
                nachhaltige Conversion.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <LayoutDashboard className="h-6 w-6 text-indigo-300" />
              <h3 className="mt-6 text-xl font-semibold">Smarte Web-Apps</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Custom Dashboards, Automatisierungen und Supabase Datenbanken für klare Prozesse
                und messbare Effizienz.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <Sparkles className="h-6 w-6 text-violet-300" />
              <h3 className="mt-6 text-xl font-semibold">KI-Integrationen</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                OpenAI und Anthropic Anbindungen für echte Business-Use-Cases, die Teams sofort
                entlasten.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section id="cases" className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Showcase
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Show, don&apos;t tell. Zwei Projekte, echte Resultate.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Ausgewählte Leuchttürme, die technische Tiefe und Business Impact kombinieren.
            </p>
          </div>

          <div className="mt-12 space-y-16">
            <article className="flex flex-col gap-8 md:flex-row md:items-center">
              <div className="flex-1">
                <a
                  href="https://www.omnicontent.de"
                  target="_blank"
                  rel="noreferrer"
                  className="block overflow-hidden rounded-xl border border-white/10 bg-white/5"
                >
                  <Image
                    src="https://image.thum.io/get/width/1200/crop/800/https://www.omnicontent.de"
                    alt="OmniContent Screenshot"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </a>
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                  OmniContent
                </p>
                <h3 className="mt-4 text-2xl font-semibold">Full-Stack SaaS mit KI-Backbone</h3>
                <p className="mt-4 text-base leading-7 text-white/70">
                  Komplexe SaaS Architektur mit Next.js, Supabase und sicherer Auth. Dazu
                  fortgeschrittene KI-Features wie GPT-4o Vision Audits und automatisiertes
                  A/B Testing für kontinuierliche Optimierung.
                </p>
              </div>
            </article>

            <article className="flex flex-col gap-8 md:flex-row-reverse md:items-center">
              <div className="flex-1">
                <a
                  href="https://www.prostatalk.de"
                  target="_blank"
                  rel="noreferrer"
                  className="block overflow-hidden rounded-xl border border-white/10 bg-white/5"
                >
                  <Image
                    src="https://image.thum.io/get/width/1200/crop/800/https://www.prostatalk.de"
                    alt="ProstaTalk Screenshot"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </a>
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                  ProstaTalk
                </p>
                <h3 className="mt-4 text-2xl font-semibold">Gesundheitsplattform mit Fokus auf Zugang</h3>
                <p className="mt-4 text-base leading-7 text-white/70">
                  Nutzerzentrierte, schnelle Informationsportale im Health-Sektor. Barrierefrei
                  gedacht, performance-optimiert umgesetzt und inhaltlich auf Vertrauen gebaut.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id="kontakt" className="relative border-t border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Kontakt
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Erzähl kurz, was du bauen willst.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Ich melde mich persönlich mit einer klaren Einschätzung, ob und wie wir dein
              Vorhaben schnell umsetzen können.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="relative border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:px-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Bereit, dein Business zu digitalisieren? Lass uns quatschen.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">
            Ein kurzes Gespräch reicht, um Chancen und nächste Schritte zu identifizieren.
          </p>
          <div className="mt-8">
            <a
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_48px_rgba(59,130,246,0.45)] transition hover:brightness-110 hover:shadow-[0_0_64px_rgba(59,130,246,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
              href="#kontakt"
            >
              Projekt anfragen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
