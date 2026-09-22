# MK Associates — Complete Technology & File Architecture Map

This document lists **every single file** in the project, mapped directly to the **Technology, Framework, and Language** that powers it, along with its specific functional role and client value.

---

## 1. React 19 & Next.js 16 App Router (TSX — Frontend UI & Pages)
**Technology:** React 19 · Next.js 16.3 · JSX/TSX · Server & Client Components

These files form the interactive visual layer of the website. They are written in TSX (TypeScript XML), allowing high-performance UI rendering, state management, and mobile responsiveness.

| File Path | Technology | Functional Role & Client Value |
| :--- | :--- | :--- |
| [`app/layout.tsx`](file:///Users/deep/Advocate/advocate-site/app/layout.tsx) | Next.js Root Layout (React 19) | The master frame that wraps all 22 pages. Injects Google Fonts (Cinzel Serif, Outfit Sans), global metadata for SEO, sticky Navbar, floating WhatsApp button, and global Footer. |
| [`app/page.tsx`](file:///Users/deep/Advocate/advocate-site/app/page.tsx) | React Server/Client Component | **The Homepage:** High-converting landing page with 40-year legacy stats, advocate spotlight cards, legal practice highlights, client trust badges, and appointment CTAs. |
| [`app/about/page.tsx`](file:///Users/deep/Advocate/advocate-site/app/about/page.tsx) | React Server Component | **About Us & Panel Overview:** Displays the full 4-advocate panel ordered by seniority, featured portrait of Adv. Madan Kumar Upadhyay, and direct profile links. |
| [`app/about/[slug]/page.tsx`](file:///Users/deep/Advocate/advocate-site/app/about/[slug]/page.tsx) | Next.js Dynamic SSG Route (`[slug]`) | **Dedicated Advocate Profiles:** Statically generates individual portfolio dossiers for each advocate with custom court practice areas, quotes, and direct social profile badges (Facebook, X, WhatsApp). |
| [`app/services/page.tsx`](file:///Users/deep/Advocate/advocate-site/app/services/page.tsx) | React Component (TSX) | **Legal Practice Areas:** Exhaustive directory of legal services across Civil, Criminal, Family, Revenue, Military, and Corporate tribunals. |
| [`app/contact/page.tsx`](file:///Users/deep/Advocate/advocate-site/app/contact/page.tsx) | Interactive Client Component (`"use client"`) | **Appointment & Location Center:** Contact details for Delhi, Varanasi, and Kaimur offices, plus interactive booking form that validates client details. |
| [`app/portal/page.tsx`](file:///Users/deep/Advocate/advocate-site/app/portal/page.tsx) | Interactive Client Component (`"use client"`) | **Client Case Intake Portal:** Form where prospective clients choose case type, attach case urgency, and initiate consultation directly with the firm. |
| [`app/blog/page.tsx`](file:///Users/deep/Advocate/advocate-site/app/blog/page.tsx) | React Server Component (TSX) | **Legal Knowledge Hub:** Curated library of authoritative legal analyses, BNS updates, and case precedents that establish legal authority on search engines. |
| [`app/blog/[slug]/page.tsx`](file:///Users/deep/Advocate/advocate-site/app/blog/[slug]/page.tsx) | Next.js Dynamic SSG Route (`[slug]`) | **Full Article Reader:** Dynamic page template that renders detailed legal articles with reading-time calculators, author bylines, and consultation CTAs. |
| [`components/Navbar.tsx`](file:///Users/deep/Advocate/advocate-site/components/Navbar.tsx) | React Client Component (`"use client"`) | **Global Header:** Features responsive mobile drawer menu, scroll detection, gold emblem branding, and instant one-click calling buttons. |
| [`components/Footer.tsx`](file:///Users/deep/Advocate/advocate-site/components/Footer.tsx) | React Component (TSX) | **Global Footer:** Contains 3 office physical addresses, Bar Council of India disclaimer, navigation sitemap, and verified Facebook & X links. |
| [`components/WhatsAppButton.tsx`](file:///Users/deep/Advocate/advocate-site/components/WhatsAppButton.tsx) | React Client Component (`"use client"`) | **Floating Lead Engine:** Sticky WhatsApp launcher button that follows the user as they scroll, pre-populating consultation messages to `+91 9305592322`. |

---

## 2. Next.js Serverless API & Node.js (Backend Microservices)
**Technology:** Node.js Runtime · Next.js Route Handlers (`route.ts`) · HTTP POST Handlers

These files run on the cloud server side, handling form submissions securely without exposing private database credentials or keys to the public browser.

| File Path | Technology | Functional Role & Client Value |
| :--- | :--- | :--- |
| [`app/api/contact/route.ts`](file:///Users/deep/Advocate/advocate-site/app/api/contact/route.ts) | Next.js Serverless Route Handler | Receives appointment requests from the website, sanitizes input, validates phone numbers, and formats consultation data for delivery to WhatsApp / database. |
| [`app/api/newsletter/route.ts`](file:///Users/deep/Advocate/advocate-site/app/api/newsletter/route.ts) | Next.js Serverless Route Handler | Processes email newsletter subscriptions for legal news and BNS updates. |

---

## 3. TypeScript 5 (Data Models & Type Safety)
**Technology:** TypeScript (`.ts`)

TypeScript ensures that all data flowing through the website is strictly structured, eliminating runtime crashes and bugs before code is deployed.

| File Path | Technology | Functional Role & Client Value |
| :--- | :--- | :--- |
| [`data/articles.ts`](file:///Users/deep/Advocate/advocate-site/data/articles.ts) | TypeScript Object Array & Schema | Central database containing all 6 legal articles, metadata, tags, author credentials, and full content bodies. |
| [`next-env.d.ts`](file:///Users/deep/Advocate/advocate-site/next-env.d.ts) | TypeScript Next.js Ambient Declaration | Automatically maintained TypeScript type definitions ensuring Next.js and React types remain compatible. |

---

## 4. Tailwind CSS 3 & PostCSS (Styling & Design System)
**Technology:** Tailwind CSS 3.4 · PostCSS · CSS3 Variables · Glassmorphism

Powers the signature **Midnight Black (`#050505`)** and **Antique Gold (`#D4AF37`)** luxury aesthetic.

| File Path | Technology | Functional Role & Client Value |
| :--- | :--- | :--- |
| [`app/globals.css`](file:///Users/deep/Advocate/advocate-site/app/globals.css) | Custom CSS3 + Tailwind Directives | Contains design tokens: custom scrollbars, frosted-glass cards (`glass-card`), gold glowing borders, button animations, and typography rules. |
| [`postcss.config.mjs`](file:///Users/deep/Advocate/advocate-site/postcss.config.mjs) | PostCSS Configuration (JavaScript) | Optimizes and minifies CSS styles during compilation, purging unused styles to achieve sub-second load times. |

---

## 5. Static Media & Brand Assets
**Technology:** PNG · JPEG · SVG Vector Graphics · ICO

High-definition visual assets optimized for mobile retina and 4K desktop screens.

| File Path | Technology | Functional Role & Client Value |
| :--- | :--- | :--- |
| [`public/logo.png`](file:///Users/deep/Advocate/advocate-site/public/logo.png) | PNG (Lossless Alpha) | The official gold emblem seal featuring scales of justice, wheat wreath, 3 stars, and bilingual text. |
| [`app/icon.png`](file:///Users/deep/Advocate/advocate-site/app/icon.png) & [`app/favicon.ico`](file:///Users/deep/Advocate/advocate-site/app/favicon.ico) | PNG / Favicon Binary | Browser tab icon displayed on Google search results and browser bookmarks. |
| [`public/manoj-chaubey.jpg`](file:///Users/deep/Advocate/advocate-site/public/manoj-chaubey.jpg) | JPEG | Genuine courtroom portrait of Senior Partner Adv. Manoj Kumar Chaubey (40 Yrs Exp). |
| [`public/ashok-seth.png`](file:///Users/deep/Advocate/advocate-site/public/ashok-seth.png) | PNG | Genuine portrait of Senior Counsel Adv. Ashok Kumar Seth (30 Yrs Exp). |
| [`public/madan-upadhyay.jpg`](file:///Users/deep/Advocate/advocate-site/public/madan-upadhyay.jpg) | JPEG | Genuine courtroom portrait of Lead Multi-Domain Counsel Adv. Madan Kumar Upadhyay (20 Yrs Exp). |
| [`public/nand-jee-upadhyay.jpg`](file:///Users/deep/Advocate/advocate-site/public/nand-jee-upadhyay.jpg) | JPEG | Professional portrait of Adv. Nand Jee Kumar Upadhyay (10 Yrs Exp). |
| [`public/courtroom-panel.jpg`](file:///Users/deep/Advocate/advocate-site/public/courtroom-panel.jpg) | JPEG | Legal panel courtroom banner photo. |
| [`public/hero-bg.jpg`](file:///Users/deep/Advocate/advocate-site/public/hero-bg.jpg) | JPEG | High-resolution atmospheric background used in homepage hero section. |
| [`public/blog/*.jpg`](file:///Users/deep/Advocate/advocate-site/public/blog/) | JPEG (6 Images) | Professional editorial cover images for each of the 6 legal articles (`bns.jpg`, `gst.jpg`, `trademark.jpg`, `pil.jpg`, `cyber.jpg`, `property.jpg`). |
| [`public/*.svg`](file:///Users/deep/Advocate/advocate-site/public/) | Scalable Vector Graphics (SVG) | Lightweight system icons (`file.svg`, `globe.svg`, `window.svg`, `next.svg`, `vercel.svg`). |

---

## 6. Build Systems & Package Manifests
**Technology:** JSON · npm (Node Package Manager) · Turbopack

Manages external libraries, build scripts, and compiler rules.

| File Path | Technology | Functional Role & Client Value |
| :--- | :--- | :--- |
| [`package.json`](file:///Users/deep/Advocate/advocate-site/package.json) | JSON | Defines project identity, versions, build commands (`npm run dev`, `npm run build`), and external packages (`lucide-react`, `next`, `react`). |
| [`package-lock.json`](file:///Users/deep/Advocate/advocate-site/package-lock.json) | JSON | Lockfile that records exact dependency versions to guarantee 100% reproducible builds on production servers. |
| [`tsconfig.json`](file:///Users/deep/Advocate/advocate-site/tsconfig.json) | JSON with Comments (JSONC) | Configures strict TypeScript compilation flags, JSX runtime settings, and `@/*` clean path aliases. |
| [`next.config.ts`](file:///Users/deep/Advocate/advocate-site/next.config.ts) | TypeScript Configuration | Next.js system configuration (enables Turbopack compiler, server actions, and image caching rules). |
| [`eslint.config.mjs`](file:///Users/deep/Advocate/advocate-site/eslint.config.mjs) | JavaScript Module (ESLint 9) | Automated code linter enforcing clean code formatting and preventing memory leaks. |

---

## 7. Cloud Deployment, DevOps & Infrastructure
**Technology:** Git · Netlify TOML · Docker · DNS / SSL

Handles automatic deployment to global servers and connecting the custom domain `newzenadvocate.com`.

| File Path | Technology | Functional Role & Client Value |
| :--- | :--- | :--- |
| [`netlify.toml`](file:///Users/deep/Advocate/advocate-site/netlify.toml) | TOML (Tom's Obvious Minimal Language) | Configuration for Netlify CI/CD pipeline, specifying build output directory and redirect rules. |
| [`Dockerfile`](file:///Users/deep/Advocate/advocate-site/Dockerfile) | Docker Containerfile | Enables containerized deployment to Google Cloud Run, AWS ECS, or DigitalOcean if enterprise scaling is required. |
| [`.gitignore`](file:///Users/deep/Advocate/advocate-site/.gitignore) | Git Ignore Rules | Prevents uploading heavy cache files, build logs, or sensitive files to GitHub. |

---

## 8. Permanent Documentation & Memory
**Technology:** GitHub Flavored Markdown (GFM)

Maintains full transparency, technical history, and instructions for firm partners and future developers.

| File Path | Technology | Functional Role & Client Value |
| :--- | :--- | :--- |
| [`PROJECT_MEMORY.md`](file:///Users/deep/Advocate/advocate-site/PROJECT_MEMORY.md) | Markdown | **Master Knowledge Base:** Complete firm history, advocate bios, phone numbers, domain DNS records, and specialization records. |
| [`TECHNOLOGY.md`](file:///Users/deep/Advocate/advocate-site/TECHNOLOGY.md) | Markdown | **This Document:** Complete mapping of every project file to its underlying technology. |
| [`README.md`](file:///Users/deep/Advocate/advocate-site/README.md) | Markdown | Quickstart guide for running and previewing the project locally. |
| [`DEPLOYMENT.md`](file:///Users/deep/Advocate/advocate-site/DEPLOYMENT.md) | Markdown | Step-by-step instructions for DNS setup (A Record, CNAME) and cloud hosting. |
