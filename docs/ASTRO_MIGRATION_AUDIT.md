# Codebase Audit & Astro.js Migration Analysis

This document provides a comprehensive codebase audit and migration roadmap for transitioning **Attenomy** platforms from **Next.js 15** to **Astro.js**.

---

## ⏱️ Executive Summary: Time & Effort

| Project | Total Pages | React Components | Migration Effort | Estimated Time |
| :--- | :---: | :---: | :---: | :---: |
| **`attenomy-website`** | 10 Pages / 1 API | 57 Components | **LOW** | **3 – 5 Hours** |
| **`attenomy-people`** | 9 Pages / 5 APIs | 2 Components | **MEDIUM** | **4 – 6 Hours** |
| **Combined Both** | 19 Pages / 6 APIs | 59 Components | **LOW to MEDIUM** | **1 Day (7 – 10 Hours)** |

---

## 💡 Key Architectural Advantage: Zero React Code Rewrite Needed

The primary advantage when migrating from Next.js to Astro is Astro’s **`@astrojs/react` integration**.

### You do NOT need to rewrite your 57 React components!
Astro allows you to keep **100% of your existing React components (`.tsx`)**, Framer Motion animations, Lucide React icons, Three.js 3D canvas (`Beams.tsx`), and TailwindCSS styles as-is.

In Astro, you simply import your existing React components into `.astro` page files and specify island hydration directives:

```astro
---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
import Navbar from '../components/ui/resizable-navbar.tsx';
import Hero from '../components/landing/hero.tsx';
import Footer from '../components/landing/footer.tsx';
---
<Layout title="Attenomy | Innovative Solutions">
  <Navbar client:load />
  <Hero client:visible />
  <Footer />
</Layout>
```

---

## 🔍 Codebase Component Audit & Astro Mapping

### 1. `attenomy-website` (Flagship Site)

- **Total UI Components**: **57 React components (`.tsx`)**
  - All 57 React components can be moved to `src/components/` and reused **100% unmodified** using Astro Island directives (`client:load` / `client:visible`).
- **Pages to Convert (10 Pages)**:
  - `/` (`src/pages/index.astro`)
  - `/about`, `/contact`, `/blog`, `/products`, `/services`, `/cookies`, `/privacy`, `/terms`
- **Layout & SEO**:
  - Convert `src/app/layout.tsx` metadata to `src/layouts/Layout.astro`.
- **API Routes**:
  - `src/app/api/newsletter/route.js` ➔ `src/pages/api/newsletter.ts` (`export const POST: APIRoute = async ({ request }) => ...`).
- **AdSense Integration**:
  - Add the AdSense script tag directly into `src/layouts/Layout.astro` `<head>`.

---

### 2. `attenomy-people` (HR & Talent Portal)

- **Pages & Server Routes (9 Pages & 5 APIs)**:
  - Requires setting `output: 'server'` in `astro.config.mjs` (using `@astrojs/node` or `@astrojs/vercel` SSR adapter) to support server-side cookies (`attenomy_admin_token`) and dynamic API routes.
- **API Route Migration**:
  - Next.js `NextRequest`/`NextResponse` ➔ Astro `APIRoute` handlers (`Response.json(...)`).
  - Native Node.js `fs` reads (`certificates.json`, `candidates.json`) work identically in Astro server mode.
- **Interactive Apps**:
  - Admin ATS Dashboard (`/admin/candidates`) and Certificate Generator (`/admin/issue-certificate`) run as React Islands (`client:load`).

---

## 📋 Step-by-Step Migration Roadmap

### Phase 1: Setup Astro Project (30 mins)
1. Initialize Astro: `npm create astro@latest`
2. Add React & Tailwind integrations:
   ```bash
   npx astro add react tailwind
   ```

### Phase 2: Migrate Components & Assets (1 to 2 hours)
1. Copy `public/` assets (logos, icons, `ads.txt`).
2. Copy all 57 React components from `src/components/` into Astro's `src/components/`.

### Phase 3: Create Astro Layouts & Pages (2 to 3 hours)
1. Create `src/layouts/Layout.astro` with global `<head>`, SEO tags, Google AdSense script, and fonts.
2. Create `.astro` page files inside `src/pages/` mounting React components.

### Phase 4: Adapt API Routes & Deploy (1 to 2 hours)
1. Convert API routes to Astro `APIRoute` syntax.
2. Deploy to Vercel/Netlify with Astro build adapter (`@astrojs/vercel`).

---

## ⚖️ Framework Feature Comparison Matrix

| Feature | Current (Next.js 15) | Proposed (Astro.js) | Impact / Effort |
| :--- | :--- | :--- | :--- |
| **Routing** | File-based `src/app/**/page.tsx` | File-based `src/pages/*.astro` | Wrappers only |
| **React Components** | React 19 Client/Server Components | React Islands (`@astrojs/react`) | **0% Code Change** |
| **Styling** | TailwindCSS v4 | TailwindCSS | Minimal |
| **Dynamic Server** | `output: 'standalone'` / Serverless | `output: 'server'` (Vercel/Node) | Adapter config |
| **Static Build** | `npm run build` (16 routes) | `npm run build` | Fast & lightweight |

---

<div align="center">
  <sub>Documented for Attenomy Architecture Team • September 2026</sub>
</div>
