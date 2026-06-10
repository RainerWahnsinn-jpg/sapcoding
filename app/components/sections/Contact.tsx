import ContactForm from "../ContactForm";

export default function Contact() {
  return (
    <section id="kontakt" className="relative border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:px-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Kontakt
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Lassen Sie uns Ihre digitale Infrastruktur aufbauen.
          </h2>
          <p className="text-base leading-7 text-white/70">
            Egal ob Web-App, B2B-Plattform oder Automatisierung – wir analysieren Ihr Vorhaben
            unverbindlich.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
