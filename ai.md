## 🤖 AI Assistant Guidelines (Core Directives)

> **CRITICAL:** The AI must strictly adhere to these rules when modifying or generating code for OmniContent.

**Rule 1: Think before coding**
* Read every involved file before touching anything.
* Check how similar features are already built within the project and match the existing style.
* Never assume the project structure, state, or logic. Verify first.
* If something is unclear or missing context, STOP and ask the user.

**Rule 2: Simplicity first**
* Fewer lines always win. No premature abstractions, no over-engineering.
* Do not create a 12-file architecture for a simple 2-file problem.
* Write readable, maintainable code. If a junior developer couldn't read it, rewrite it.

**Rule 3: Surgical changes only**
* Edit ONLY what is broken or explicitly requested. Nothing else.
* Never rewrite entire files just to fix one function or update a single variable.
* Do NOT touch imports, formatting, or unrelated logic that you weren't asked about.
* Keep diffs as small and highly focused as possible.

**Rule 4: Goal-driven execution**
* Understand the "Why" before writing the "How".
* If the user's task is ambiguous or lacks constraints, STOP and ask for clarification.
* Do not build what you *think* the user might want in the future. Build exactly what was requested today.

**Rule 5: Leverage existing stack**
* Never suggest adding a new `npm` package unless absolutely necessary.
* Always try to solve UI problems with Tailwind v4, standard React hooks, and existing shadcn/ui components first.
* No `framer-motion` if standard Tailwind transitions can do the job.

**Rule 6: Loud errors, friendly UI**
* Never swallow errors silently (e.g., `catch (e) { console.error(e) }`).
* Always inform the user using a localized German `toast.error()` (Sonner) if an action fails.
* Strictly type errors; no `any` types allowed in new TypeScript code.

**Rule 7: Strict Next.js Boundaries**
* Maintain strict separation between Server Components and Client Components (`"use client"`).
* Never leak server secrets or DB logic (like `supabase.ts` or `credits.ts`) into Client Components.
* Use Server Actions for data mutations, not API routes, unless requested otherwise.

## 💼 Portfolio & Freelancing Context (Agency Blueprint)

> **Context:** The developer is building a high-converting portfolio website to offer web development and smart application services to businesses.

### 1. Core Services (What we offer)
* **Modern Web Development:** Ultra-fast, SEO-optimized, conversion-focused Next.js websites for local businesses (Handwerk, Mittelstand) and startups.
* **Custom Web Applications:** Custom dashboards, internal workflow tools, automated workflows, and relational database systems using Supabase.
* **AI Integrations:** Production-ready implementation of OpenAI & Anthropic APIs to automate business processes, generate content, and analyze data.

### 2. Flagship Projects (Showcase)
* **OmniContent (omnicontent.de):** The prime example of complex, full-stack B2B SaaS architecture. Showcases Next.js App Router, Clerk Auth, Supabase DB/Storage, Upstash Redis Rate-Limiting, and advanced AI integrations (GPT-4o Vision visual audits, AI personas, automated A/B testing).
* **ProstaTalk (prostatalk.de):** Demonstrates the ability to build user-centric, accessible, and highly optimized web platforms in the healthcare/informational sector. Proves versatility beyond just AI tools.

### 3. Website Architecture Rules (Portfolio One-Pager)
* **Tech Stack:** Next.js, React, Tailwind CSS (v4), shadcn/ui, hosted on Vercel. Fully static or server-rendered for maximum speed and SEO.
* **Simplicity:** High-converting modern One-Pager. Clean typography, premium glassmorphism effects (`backdrop-blur-xl`), dark mode with subtle background glows.
* **Zero Overhead:** No heavy state management or heavy libraries unless required. Contact requests are routed cleanly via lightweight, serverless solutions.
* **Tone & Positioning:** Professional yet accessible. No over-complicated tech jargon. We speak on eye-level with small business owners and solve real-world efficiency and growth problems.