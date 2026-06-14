"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="border-t border-white/5 bg-black py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 text-sm sm:px-6 md:grid-cols-[2fr_1fr] md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/30">
            Entwickelt in Siegen, Südwestfalen
          </p>
          <p
            onDoubleClick={() => router.push("/admin/login")}
            className="mt-4 select-none text-white/50"
          >
            © 2026 Constantin-Felix Weib
          </p>
        </div>
        <div className="flex items-center gap-8 text-xs tracking-wider md:justify-end">
          <Link className="text-white/40 transition hover:text-white" href="/impressum">
            Impressum
          </Link>
          <Link className="text-white/40 transition hover:text-white" href="/datenschutz">
            Datenschutz
          </Link>
          <a
            className="text-white/40 transition hover:text-white"
            href="https://www.linkedin.com/in/constantin-felix-weib-824b0116a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn-Profil von Constantin-Felix Weib"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
