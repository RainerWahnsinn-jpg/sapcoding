import { Quote } from "lucide-react";
import Reveal from "../Reveal";

export default function Testimonial() {
  return (
    <section className="relative border-t border-white/10">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Kundenstimme
          </p>
        </Reveal>

        <Reveal delay={1}>
          <figure className="relative mt-10">
            {/* Dekoratives Glow hinter dem Zitat */}
            <div
              aria-hidden="true"
              className="animate-pulse-glow pointer-events-none absolute left-1/2 top-0 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.18),rgba(0,0,0,0))]"
            />
            <Quote className="mx-auto h-10 w-10 text-emerald-300/70" />

            <blockquote className="mt-8 text-2xl font-medium leading-relaxed tracking-tight text-white sm:text-3xl">
              <span className="bg-linear-to-r from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent">
                „Ich bin jedes Mal aufs Neue begeistert, wie viele Klicks die Seite schon
                bekommt. Die Umsetzung von ProstaTalk hat alle meine Erwartungen übertroffen.“
              </span>
            </blockquote>

            <figcaption className="mt-8 flex items-center justify-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-emerald-400/30 to-teal-300/20 text-sm font-semibold text-emerald-200 ring-1 ring-white/10">
                PW
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white">Dr. Peter Weib</p>
                <p className="text-xs text-white/50">
                  ProstaTalk – Digitales Gesundheitsportal
                </p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
