/**
 * Zentrale Basis-URL für absolute Links (OG-Bilder, canonical, sitemap, JSON-LD).
 *
 * Reihenfolge:
 *  1. NEXT_PUBLIC_SITE_URL – explizit gesetzte Wunsch-Domain (z. B. Produktion).
 *  2. VERCEL_PROJECT_PRODUCTION_URL – die stabile Produktions-Domain des Projekts.
 *  3. VERCEL_URL – die aktuelle Deployment-/Preview-URL.
 *  4. Fallback auf die geplante Wunsch-Domain / localhost.
 *
 * So zeigen OG-Tags und Bilder immer auf eine Domain, unter der die Seite
 * tatsächlich erreichbar ist – auch auf Vercel-Preview-Deployments.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://www.sapcoding.de";
