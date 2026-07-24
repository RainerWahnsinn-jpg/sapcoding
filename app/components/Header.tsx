"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#about", label: "Über mich" },
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#projekte", label: "Projekte" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/5 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6">
        <Link
          className="text-sm font-semibold tracking-tight text-white"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          SAPCoding.de
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden items-center gap-10 text-sm tracking-wider md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-white/50 transition-colors hover:text-white"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold tracking-wide text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            href="/#kontakt"
            onClick={() => setIsOpen(false)}
          >
            Kontakt aufnehmen
          </Link>

          {/* Mobile-Menü-Button */}
          <button
            type="button"
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 md:hidden"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Klick-Overlay: schließt das Menü bei Klick irgendwo auf der Seite */}
      {isOpen && (
        <button
          type="button"
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 top-16 -z-10 h-screen w-full cursor-default md:hidden"
        />
      )}

      {/* Mobile-Navigation (eingeblendet) */}
      <nav
        className={`overflow-hidden border-t border-white/5 transition-all duration-300 ease-out md:hidden ${
          isOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pt-2 pb-1 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm tracking-wider text-white/60 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
