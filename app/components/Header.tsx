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
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6">
        <Link
          className="text-sm font-semibold tracking-tight text-white"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          SAPCoding<span className="text-cyan-400">.de</span>
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden items-center gap-10 text-sm tracking-wider md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-slate-400 transition-colors hover:text-white"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-5 py-2 text-xs font-semibold tracking-wide text-slate-950 transition hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
            href="/#kontakt"
            onClick={() => setIsOpen(false)}
          >
            Projekt anfragen
          </a>

          {/* Mobile-Menü-Button */}
          <button
            type="button"
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 bg-slate-900/60 text-white transition hover:border-slate-500 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 md:hidden"
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
        className={`overflow-hidden border-t border-slate-800 transition-all duration-300 ease-out md:hidden ${
          isOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pt-2 pb-1 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-3 text-sm tracking-wider text-slate-400 transition-colors hover:bg-slate-800/60 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
