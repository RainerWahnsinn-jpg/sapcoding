# 🤖 AI Assistant Guidelines & Project Context (Constantin-Felix.de)

> **CRITICAL:** The AI must strictly adhere to these rules when modifying or generating code for this repository.

---

## 🏛️ Core Directives (Verhaltensregeln)

### Rule 1: Think before coding
- Read every involved file before touching anything.
- Check how similar features are already built within the project and match the existing style.
- Never assume the project structure, state, or logic. Verify first.
- If something is unclear or missing context, STOP and ask the user.

### Rule 2: Simplicity first
- Fewer lines always win. No premature abstractions, no over-engineering.
- Do not create a 12-file architecture for a simple 2-file problem.
- Write readable, maintainable code. If a junior developer couldn't read it, rewrite it.

### Rule 3: Surgical changes only
- Edit ONLY what is broken or explicitly requested. Nothing else.
- Never rewrite entire files just to fix one function or update a single variable.
- Do NOT touch imports, formatting, or unrelated logic that you weren't asked about.
- Keep diffs as small and highly focused as possible.

### Rule 4: Goal-driven execution
- Understand the "Why" before writing the "How".
- If the user's task is ambiguous or lacks constraints, STOP and ask for clarification.
- Do not build what you *think* the user might want in the future. Build exactly what was requested today.

### Rule 5: Leverage existing stack
- Never suggest adding a new `npm` package unless absolutely necessary.
- Always try to solve UI problems with Tailwind v4, standard React hooks, and existing shadcn/ui components first.
- No `framer-motion` if standard Tailwind transitions can do the job.

### Rule 6: Loud errors, friendly UI
- Never swallow errors silently (e.g., `catch (e) { console.error(e) }`).
- Always inform the user using a localized German `toast.error()` (Sonner) if an action fails.
- Strictly type errors; no `any` types allowed in new TypeScript code.

### Rule 7: Strict Next.js Boundaries
- Maintain strict separation between Server Components and Client Components (`"use client"`).
- Never leak server secrets or DB logic (like `supabase.ts`) into Client Components.
- Use Server Actions for data mutations, not API routes, unless requested otherwise (e.g., for external Webhooks/B2B Endpoints).

### Rule 8: Strict Clean Code & Maintainability (Stufe 10)
- **Single Responsibility (SRP):** Jede Komponente hat genau EINE Aufgabe. Die `Hero.tsx` baut nur die Hero-Sektion, das `ContactForm.tsx` validiert nur die Eingaben. Keine fetten Monolithen.
- **RSC by Default:** Jede neue Komponente wird als React Server Component (ohne `"use client"`) gebaut, um die JavaScript-Last gegen 0 KB zu drücken. Nur interaktive Blätter (Buttons mit Klick-Logik, Formular-Inputs) werden in separate `"use client"`-Dateien ausgelagert.
- **Self-Documenting TypeScript:** Nutze ausdrucksstarke Variablen- und Funktionsnamen (z.B. `submitCraftsmanLead` statt `sendData`). Keine kryptischen Abkürzungen. Jede Prop-Schnittstelle (`interface Props`) muss explizit und ohne `any` typisiert sein.
- **Tailwind Code-Hygiene (v4):** Keine redundanten CSS-Klassen oder verschachtelte Inline-Styles. Nutze die native Kaskadierung von Tailwind v4. Nutze für wiederkehrende UI-Muster (wie deine Glassmorphism-Karten) konsistente Klassen-Kombinationen ohne Abweichungen.

---

## 💼 Portfolio & Freelancing Context (Agency Blueprint)

### 1. Positioning & Tone
- High-converting portfolio website offering web development and smart automation to German KMUs (Handwerk, Mittelstand) and startups.
- Professional yet accessible. No over-complicated tech jargon. We speak on eye-level with small business owners and solve real-world efficiency/growth problems.
- Visual Style: Clean typography, premium glassmorphism effects (`backdrop-blur-xl`), dark mode with subtle background glows.

### 2. Flagship Projects (Showcase)
- **OmniContent (omnicontent.de):** complex B2B SaaS architecture (Next.js App Router, Clerk Auth, Supabase DB/Storage, Upstash Redis Rate-Limiting, advanced AI integrations like GPT-4o Vision visual audits).
- **ProstaTalk (prostatalk.de):** Highly optimized, accessible web platform in the healthcare/informational sector. Proves versatility beyond just AI tools.

---

## 🛠️ Tech Architecture & WaaS-Hub Rules

### 1. Centralized B2B Lead Infrastructure
- This repository handles incoming API requests from external, standardized Next.js customer websites (WaaS - Website-as-a-Service for local craftsmen).
- **DSGVO Guardrail:** Never send raw personal identifiable information (PII) of applicants or customers over unencrypted third-party channels like WhatsApp. WhatsApp is ONLY an anonymous notification trigger.

### 2. Database & Data-Flow (`leads` Table in Supabase)
- **Table Structure:** `id` (UUID), `company_id` (Text), `type` ('job' | 'customer'), `payload` (JSONB for dynamic form data), `created_at` (Timestamp).
- **Flow:** 1. External site POSTs to `/api/v1/leads`.
  2. Serverless handler validates and saves data into the JSONB payload.
  3. Handler generates a signed JWT token (expires in 7 days).
  4. Trigger sends anonymous WhatsApp notification with a Magic-Link to the boss: `/secure-lead?token=[JWT]`.
- **Retention:** DB cronjob automatically purges leads after exactly 6 months (compliance with German AGG-Klageschutz).

### 3. Hidden Admin Access
- Access to internal client overviews is gated behind an invisible link (`•` inside the copyright text in the footer). 
- Route: `/admin/login` -> Uses passwordless Magic-Link / OTP only authorized for the owner's e-mail address.