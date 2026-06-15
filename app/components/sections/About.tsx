import Image from "next/image";
import { Brain, Code2, GraduationCap, Workflow } from "lucide-react";
import Reveal from "../Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Entwicklung",
    text: "Skalierbare Web-Apps von der Datenbank bis zur UI – mit Next.js, React, TypeScript & Supabase.",
  },
  {
    icon: Brain,
    title: "KI-Integration",
    text: "Intelligente Features durch moderne KI-Schnittstellen für automatisierte Content- & Prozessoptimierung.",
  },
  {
    icon: Workflow,
    title: "Enterprise-Erfahrung",
    text: "Als SAP Product Owner steuere ich komplexe ERP-Landschaften im Konzernumfeld – ich kenne beide Welten.",
  },
  {
    icon: GraduationCap,
    title: "Fundiertes Studium",
    text: "Bachelor of Arts in BWL (Fachrichtung Wirtschaftsinformatik), dual absolviert bei der Friedhelm Loh Group – mit Thesis zu AI Governance & dem EU AI Act.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Animierter Monogramm-Avatar */}
          <Reveal className="flex justify-center lg:justify-start">
            <div className="relative h-56 w-56 sm:h-64 sm:w-64">
              {/* Rotierender Glow-Ring */}
              <div
                aria-hidden="true"
                className="animate-spin-slow absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(124,58,237,0.6),rgba(34,211,238,0.6),rgba(16,185,129,0.5),rgba(124,58,237,0.6))] blur-[2px]"
              />
              {/* Pulsierender Außen-Glow */}
              <div
                aria-hidden="true"
                className="animate-pulse-glow absolute -inset-4 -z-10 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.25),rgba(0,0,0,0))]"
              />
              {/* Profilfoto im inneren Kreis */}
              <div className="absolute inset-1.5 overflow-hidden rounded-full bg-zinc-950">
                <Image
                  src="/cfw.jpg"
                  alt="Constantin-Felix Weib"
                  fill
                  sizes="(min-width: 640px) 256px, 224px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                Über mich
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Constantin-Felix Weib
              </h2>
              <p className="mt-2 text-base font-medium text-cyan-300/90">
                Wirtschaftsinformatiker · Full-Stack Developer · Solo-Founder
              </p>
            </Reveal>

            <Reveal delay={1}>
              <p className="mt-6 text-base leading-7 text-white/70">
                Ich kenne beide Welten: die agile Steuerung komplexer ERP-Landschaften im
                Konzernumfeld (als SAP Product Owner) und die enormen Möglichkeiten moderner,
                leichtgewichtiger Web-Technologien. Durch meine pragmatische Hands-on-Mentalität
                schließe ich die Lücke zwischen strategischem Prozessdesign und echter
                Softwareentwicklung – und bringe Lösungen selbst auf die Straße.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={((i % 3) + 1) as 1 | 2 | 3}
                  as="article"
                  className="group rounded-2xl border border-white/5 bg-zinc-900/50 p-5 backdrop-blur-xl transition-all duration-500 ease-out hover:md:-translate-y-1 hover:md:border-white/20"
                >
                  <item.icon className="h-5 w-5 text-cyan-300" />
                  <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
