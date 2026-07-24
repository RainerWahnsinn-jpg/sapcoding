import { Code2, FileText, Link2, Briefcase } from "lucide-react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-zinc-50">
      <Hero />
      <About />
      <Pricing />
      
      {/* Projekte Section */}
      <section id="projekte" className="relative border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Projekterfahrung
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ausgewählte Projekt-Highlights
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Ein Auszug aus über 15 Jahren SAP-Entwicklungserfahrung bei namhaften Unternehmen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "S/4 HANA Einführung",
                description: "Migration und Anpassung von ABAP-Entwicklungen für S/4 HANA, inklusive Formularmigration und Schnittstellenanpassungen.",
                accent: "cyan",
              },
              {
                icon: Link2,
                title: "EDI-Anbindungen",
                description: "Implementierung kompletter EDI-Landschaften mit EDIFACT, VDA und kundenspezifischen Formaten für internationale Lieferketten.",
                accent: "indigo",
              },
              {
                icon: FileText,
                title: "IDoc Monitor",
                description: "Entwicklung eines umfassenden IDoc-Monitoring-Tools zur Überwachung und Fehleranalyse von Nachrichtenflüssen.",
                accent: "violet",
              },
              {
                icon: Briefcase,
                title: "Brexit Umstellung",
                description: "Anpassung von Zoll- und Außenhandelsprozessen für den Brexit, inklusive neuer Dokumentationen und Behördenschnittstellen.",
                accent: "cyan",
              },
              {
                icon: FileText,
                title: "Adobe Forms Suite",
                description: "Komplette Neugestaltung der Formularlandschaft mit Adobe Forms für SD, MM und FI-Module.",
                accent: "indigo",
              },
              {
                icon: Code2,
                title: "Custom ABAP Solutions",
                description: "Individuelle ABAP-Entwicklungen für spezifische Geschäftsprozesse, von Reports bis zu komplexen Erweiterungen.",
                accent: "violet",
              },
            ].map((project, i) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 p-6 backdrop-blur-xl transition-all duration-500 ease-out hover:md:-translate-y-2 hover:md:border-white/20"
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(${
                    project.accent === "cyan" ? "56,189,248" : project.accent === "indigo" ? "99,102,241" : "168,85,247"
                  },0.12),rgba(0,0,0,0))] opacity-0 transition-opacity duration-500 ease-out group-hover:md:opacity-100`}
                />
                <project.icon className={`h-6 w-6 ${
                  project.accent === "cyan" ? "text-cyan-300" : project.accent === "indigo" ? "text-indigo-300" : "text-violet-300"
                }`} />
                <h3 className="mt-6 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      
      {/* CTA Section */}
      <section className="relative border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:px-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Haben Sie ein SAP-Projekt? Lassen Sie uns sprechen.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">
            Ein kurzes Gespräch reicht, um Ihre Anforderungen zu verstehen und die nächsten Schritte zu planen.
          </p>
          <div className="mt-8">
            <a
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_48px_rgba(59,130,246,0.45)] transition hover:brightness-110 hover:shadow-[0_0_64px_rgba(59,130,246,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
              href="#kontakt"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
