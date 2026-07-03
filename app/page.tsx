import Image from "next/image";
import { ArrowUpRight, LayoutDashboard, Sparkles, Zap } from "lucide-react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Process from "./components/sections/Process";
import Testimonial from "./components/sections/Testimonial";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <Hero />
      <About />
      <section id="services" className="relative border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Leistungen
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Lösungen, die Ihr Business digital skalieren.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Maßgeschneiderte Infrastruktur für Unternehmen im Kreis Siegen-Wittgenstein.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8 md:grid md:grid-cols-3">
            <article className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 p-6 backdrop-blur-xl transition-all duration-500 ease-out hover:md:-translate-y-2 hover:md:border-white/20">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),rgba(0,0,0,0))] opacity-0 transition-opacity duration-500 ease-out group-hover:md:opacity-100"
              />
              <Zap className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-6 text-xl font-semibold">B2B-Wachstumsplattformen</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Professionelle Webentwicklung, die lokalen Handwerksbetrieben planbare
                Neukundengewinnung bringt. Bewerber bewerben sich digital direkt aus der Hosentasche
                – ganz ohne Papierkram im Büro.
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-transparent bg-zinc-900/50 p-6 backdrop-blur-xl transition-all duration-500 ease-out [background:linear-gradient(rgba(24,24,27,0.5),rgba(24,24,27,0.5))_padding-box,linear-gradient(135deg,rgba(99,102,241,0.5),rgba(56,189,248,0.4))_border-box] hover:md:-translate-y-2">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),rgba(0,0,0,0))] opacity-0 transition-opacity duration-500 ease-out group-hover:md:opacity-100"
              />
              <LayoutDashboard className="h-6 w-6 text-indigo-300" />
              <h3 className="mt-6 text-xl font-semibold">Interne Workflow-Tools</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Smarte Web-Apps mit Supabase zentralisieren Ihre Daten an einem sicheren Ort. Schluss
                mit Zettelwirtschaft und Excel-Chaos – klare Workflows ersetzen das tägliche
                Durcheinander im Büro.
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 p-6 backdrop-blur-xl transition-all duration-500 ease-out hover:md:-translate-y-2 hover:md:border-white/20">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),rgba(0,0,0,0))] opacity-0 transition-opacity duration-500 ease-out group-hover:md:opacity-100"
              />
              <Sparkles className="h-6 w-6 text-violet-300" />
              <h3 className="mt-6 text-xl font-semibold">KI-Automatisierungen</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Übergeben Sie Routineaufgaben an moderne LLMs: von der Content-Erstellung bis zur
                automatisierten E-Mail-Klassifizierung. KI-Automatisierung verschafft dem Mittelstand
                in Siegen massive Zeitersparnis.
              </p>
            </article>
          </div>
        </div>
      </section>
      <Process />
      <section id="cases" className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Showcase
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Technische Tiefe, echter Business-Impact.
            </h2>
          </div>

          <div className="mt-12 space-y-16 md:space-y-24">
            <article className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:gap-12">
              <div className="flex-1">
                <a
                  href="https://www.omnicontent.de"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <Image
                    src="https://image.thum.io/get/width/1200/crop/800/maxAge/12/https://www.omnicontent.de/?v=2026070301"
                    alt="OmniContent – B2B KI-Lead-Maschine Plattform Screenshot"
                    width={1200}
                    height={800}
                    unoptimized
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:md:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 hidden bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 md:block"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-5 left-5 hidden translate-y-3 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white opacity-0 backdrop-blur-md transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 md:inline-flex"
                  >
                    Case Study ansehen
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                  OmniContent
                </p>
                <h3 className="mt-4 bg-linear-to-r from-white via-indigo-200 to-cyan-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
                  Die B2B KI-Lead-Maschine
                </h3>
                <p className="mt-4 text-base leading-7 text-white/70">
                  Eine SaaS-Plattform, die aus Firmen-Webseiten heiße B2B-Leads macht: Der
                  Regional-Radar zieht über die Google Places API passende Unternehmen, ein
                  Mängel-Scanner deckt Webseiten-Schwächen auf (Ladezeit, fehlendes SSL,
                  DSGVO-Lücken) und Claude Opus schreibt daraus den psychologisch perfekten Pitch –
                  gebaut auf Next.js und Supabase, Serverstandort Deutschland.
                </p>
              </div>
            </article>

            <article className="flex flex-col-reverse gap-8 md:flex-row-reverse md:items-center md:gap-12">
              <div className="flex-1">
                <a
                  href="https://www.prostatalk.de"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <Image
                    src="https://image.thum.io/get/width/1200/crop/800/maxAge/12/https://www.prostatalk.de/?v=2026070301"
                    alt="ProstaTalk – Barrierefreie Healthcare-Plattform Screenshot"
                    width={1200}
                    height={800}
                    unoptimized
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:md:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 hidden bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 md:block"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-5 left-5 hidden translate-y-3 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white opacity-0 backdrop-blur-md transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 md:inline-flex"
                  >
                    Case Study ansehen
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                  ProstaTalk
                </p>
                <h3 className="mt-4 bg-linear-to-r from-white via-emerald-200 to-teal-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
                  Barrierefreie Healthcare-Plattform
                </h3>
                <p className="mt-4 text-base leading-7 text-white/70">
                  Eine Gesundheitsplattform mit kompromisslosem Fokus auf maximale Zugänglichkeit.
                  Extreme Ladezeiten-Optimierung sorgt für sofortige Verfügbarkeit, während ein
                  klares, ruhiges UI-Design hohes Nutzervertrauen schafft – barrierefrei gedacht
                  und performance-optimiert umgesetzt.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Testimonial />
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
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_48px_rgba(59,130,246,0.45)] transition hover:brightness-110 hover:shadow-[0_0_64px_rgba(59,130,246,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
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
