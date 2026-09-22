# MK Associates — Complete Source Code Dossier & Handover Compendium

> **Firm:** MK Associates (Advocates & Legal Consultants)
> **Live Production Website:** [https://www.newzenadvocate.com](https://www.newzenadvocate.com)
> **Domain:** `newzenadvocate.com`
> **Total Code Base:** 22 Handcrafted Files · 5,169+ Lines of Code
> **Tech Stack:** Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS · Node.js Serverless

---

## Table of Contents

### Configuration & Build Setup
- [package.json](#packagejson) — *npm dependencies and scripts* (`34 lines`)
- [tsconfig.json](#tsconfigjson) — *TypeScript compiler configuration* (`34 lines`)
- [next.config.ts](#nextconfigts) — *Next.js 16 compiler options & optimizations* (`20 lines`)
- [postcss.config.mjs](#postcssconfigmjs) — *PostCSS & Tailwind CSS build configuration* (`7 lines`)
- [netlify.toml](#netlifytoml) — *Cloud deployment & redirect rules* (`13 lines`)
- [Dockerfile](#dockerfile) — *Containerized deployment definition* (`45 lines`)

### Global Architecture & Design System
- [app/layout.tsx](#applayouttsx) — *Root layout, font injection & shell wrapper* (`70 lines`)
- [app/globals.css](#appglobalscss) — *Midnight Gold CSS design tokens & animations* (`435 lines`)
- [components/Navbar.tsx](#componentsnavbartsx) — *Sticky header, navigation drawer & call CTAs* (`115 lines`)
- [components/Footer.tsx](#componentsfootertsx) — *3 office addresses, disclaimer & social links* (`247 lines`)
- [components/WhatsAppButton.tsx](#componentswhatsappbuttontsx) — *Floating WhatsApp appointment launcher* (`22 lines`)

### Frontend Pages & Legal Dossiers
- [app/page.tsx](#apppagetsx) — *Homepage with stats, hero, panel preview & testimonials* (`621 lines`)
- [app/about/page.tsx](#appaboutpagetsx) — *About page with 4 advocates & Madan featured card* (`429 lines`)
- [app/about/[slug]/page.tsx](#appaboutslugpagetsx) — *Dynamic advocate dossier template (All 4 advocates)* (`1076 lines`)
- [app/services/page.tsx](#appservicespagetsx) — *Exhaustive legal practice areas catalog* (`236 lines`)
- [app/contact/page.tsx](#appcontactpagetsx) — *Contact information, maps & appointment booking form* (`547 lines`)
- [app/portal/page.tsx](#appportalpagetsx) — *Client case intake & triage portal* (`344 lines`)
- [app/blog/page.tsx](#appblogpagetsx) — *Legal thought leadership publication hub* (`174 lines`)
- [app/blog/[slug]/page.tsx](#appblogslugpagetsx) — *Full legal article reader & analysis renderer* (`259 lines`)

### Backend API Microservices & Data Layer
- [app/api/contact/route.ts](#appapicontactroutets) — *Serverless appointment intake & validation* (`71 lines`)
- [app/api/newsletter/route.ts](#appapinewsletterroutets) — *Serverless newsletter subscription handler* (`36 lines`)
- [data/articles.ts](#dataarticlests) — *Complete legal database with all 6 articles* (`334 lines`)

---

## Configuration & Build Setup

### `package.json`
**Purpose:** npm dependencies and scripts | **Language:** `json` | **Lines:** 34

```json
{
  "name": "advocate-site",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.9.1",
    "date-fns": "^4.4.0",
    "framer-motion": "^13.4.0",
    "lucide-react": "^1.47.0",
    "next": "16.3.5",
    "nodemailer": "^10.0.10",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "react-hook-form": "^7.88.0",
    "zod": "^3.25.76"
  },
  "devDependencies": {
    "@netlify/plugin-nextjs": "^5.16.0",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.3.5",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

```

---

### `tsconfig.json`
**Purpose:** TypeScript compiler configuration | **Language:** `json` | **Lines:** 34

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

```

---

### `next.config.ts`
**Purpose:** Next.js 16 compiler options & optimizations | **Language:** `typescript` | **Lines:** 20

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"],
    },
  },
};

export default nextConfig;

```

---

### `postcss.config.mjs`
**Purpose:** PostCSS & Tailwind CSS build configuration | **Language:** `javascript` | **Lines:** 7

```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

```

---

### `netlify.toml`
**Purpose:** Cloud deployment & redirect rules | **Language:** `toml` | **Lines:** 13

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"

[[plugins]]
  package = "@netlify/plugin-nextjs"

# Disable Netlify branding badge
[dev]
  autoLaunch = false

```

---

### `Dockerfile`
**Purpose:** Containerized deployment definition | **Language:** `dockerfile` | **Lines:** 45

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Create data directory for bookings/newsletter
RUN mkdir -p /app/data && chown nextjs:nodejs /app/data

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]

```

---

## Global Architecture & Design System

### `app/layout.tsx`
**Purpose:** Root layout, font injection & shell wrapper | **Language:** `tsx` | **Lines:** 70

```tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://newzenadvocate.com"),
  title: "MK Associates | Expert Legal Panel — New Delhi · Varanasi · Kaimur",
  description:
    "Panel of expert advocates led by Adv. Manoj Kumar Chaubey (40 yrs experience). Civil, Criminal, Corporate, IPR, Family & Tax Law. Offices in New Delhi, Varanasi (UP) & Kaimur (Bihar). Call: 9305592322.",
  keywords:
    "advocate Delhi, lawyer Varanasi, MK Associates, Manoj Kumar Chaubey, Madan Kumar advocate, civil litigation, criminal lawyer, corporate law, IPR, family law, Uttam Nagar advocate, Kaimur Bihar lawyer, newzen advocate",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MK Associates | Expert Legal Panel",
    description:
      "100+ years of combined legal expertise. Civil, Criminal, Corporate, IPR, Family & Tax Law. New Delhi · Varanasi · Kaimur.",
    url: "https://newzenadvocate.com",
    siteName: "MK Associates - Newzen Advocate",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Rajdhani:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Hide Netlify "Powered by" badge */}
        <style>{`
          [data-netlify-widget],
          .netlify-identity-widget,
          #netlify-modal,
          iframe[src*="netlify.com"],
          a[href*="netlify.com"][style*="fixed"],
          div[style*="netlify"],
          #__netlify-identity-widget {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
          }
        `}</style>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

```

---

### `app/globals.css`
**Purpose:** Midnight Gold CSS design tokens & animations | **Language:** `css` | **Lines:** 435

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Rajdhani:wght@400;500;600;700&display=swap');

@import "tailwindcss";

:root {
  --black: #0a0a0a;
  --deep-black: #050505;
  --gold: #D4AF37;
  --gold-light: #F0D060;
  --gold-dark: #B8952A;
  --white: #ffffff;
  --gray-100: #f5f5f0;
  --gray-200: #e5e5e0;
  --gray-400: #a0a0a0;
  --gray-600: #666660;
  --gray-800: #333330;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--black);
  color: var(--white);
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
}

/* ===== TYPOGRAPHY ===== */
.font-serif {
  font-family: 'Cormorant Garamond', serif;
}

.font-display {
  font-family: 'Rajdhani', sans-serif;
}

h1, h2, h3 {
  font-family: 'Cormorant Garamond', serif;
}

/* ===== GOLD GRADIENT ===== */
.text-gold {
  color: var(--gold);
}

.text-gradient {
  background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bg-gold {
  background-color: var(--gold);
}

.border-gold {
  border-color: var(--gold);
}

/* ===== BUTTONS ===== */
.btn-gold {
  background: linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-dark));
  color: #0a0a0a;
  font-weight: 700;
  padding: 0.875rem 2rem;
  border-radius: 4px;
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
}

.btn-gold:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
}

.btn-outline {
  background: transparent;
  color: var(--gold);
  font-weight: 600;
  padding: 0.875rem 2rem;
  border-radius: 4px;
  border: 1.5px solid var(--gold);
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  text-decoration: none;
}

.btn-outline:hover {
  background: rgba(212, 175, 55, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2);
}

/* ===== CARDS ===== */
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(212, 175, 55, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.glass-card:hover {
  border-color: rgba(212, 175, 55, 0.5);
  background: rgba(212, 175, 55, 0.05);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(212, 175, 55, 0.1);
}

/* ===== SECTION STYLES ===== */
.section-label {
  font-family: 'Rajdhani', sans-serif;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--gold);
}

.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  color: var(--white);
}

.section-title span {
  background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ===== DIVIDER ===== */
.gold-divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--gold), transparent);
  border-radius: 2px;
}

/* ===== HERO ===== */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* ===== SCROLL BAR ===== */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--black);
}

::-webkit-scrollbar-thumb {
  background: var(--gold);
  border-radius: 3px;
}

/* ===== ANIMATIONS ===== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

@keyframes pulse-gold {
  0%, 100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.4); }
  50% { box-shadow: 0 0 0 15px rgba(212, 175, 55, 0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease forwards;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-pulse-gold {
  animation: pulse-gold 2s ease-in-out infinite;
}

/* ===== FORM STYLES ===== */
.form-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 4px;
  color: white;
  padding: 0.875rem 1rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  outline: none;
}

.form-input:focus {
  border-color: var(--gold);
  background: rgba(212, 175, 55, 0.05);
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.form-label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: rgba(212, 175, 55, 0.9);
  margin-bottom: 0.4rem;
  font-family: 'Rajdhani', sans-serif;
  text-transform: uppercase;
}

/* ===== NAV ===== */
.nav-link {
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1.5px;
  background: var(--gold);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--gold);
}

.nav-link:hover::after {
  width: 100%;
}

/* ===== GOLD BORDER TOP ===== */
.gold-top-border {
  border-top: 3px solid var(--gold);
}

/* ===== BADGE ===== */
.badge {
  display: inline-block;
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.4);
  color: var(--gold);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.3rem 0.8rem;
  border-radius: 2px;
  font-family: 'Rajdhani', sans-serif;
}

/* ===== STATS ===== */
.stat-number {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(135deg, var(--gold-light), var(--gold));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ===== CONTAINER ===== */
.container-custom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ===== TESTIMONIAL ===== */
.testimonial-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(212, 175, 55, 0.15);
  border-radius: 8px;
  padding: 2rem;
  position: relative;
}

.testimonial-card::before {
  content: '"';
  position: absolute;
  top: -20px;
  left: 20px;
  font-size: 6rem;
  font-family: 'Cormorant Garamond', serif;
  color: var(--gold);
  opacity: 0.3;
  line-height: 1;
}

/* ===== WHATSAPP BUTTON ===== */
.whatsapp-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  width: 60px;
  height: 60px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.whatsapp-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 30px rgba(37, 211, 102, 0.6);
}

/* ===== PORTAL CARD ===== */
.portal-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.2s ease;
}

.portal-card:hover {
  border-color: rgba(212, 175, 55, 0.4);
}

/* Blog card */
.blog-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(212, 175, 55, 0.15);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.blog-card:hover {
  border-color: rgba(212, 175, 55, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.4);
}

/* Status badges */
.status-active { color: #4ade80; background: rgba(74, 222, 128, 0.1); }
.status-pending { color: #fbbf24; background: rgba(251, 191, 36, 0.1); }
.status-closed { color: #94a3b8; background: rgba(148, 163, 184, 0.1); }

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  font-family: 'Rajdhani', sans-serif;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Tab styles */
.tab-active {
  border-bottom: 2px solid var(--gold);
  color: var(--gold);
}

.tab-inactive {
  border-bottom: 2px solid transparent;
  color: rgba(255,255,255,0.5);
}


```

---

### `components/Navbar.tsx`
**Purpose:** Sticky header, navigation drawer & call CTAs | **Language:** `tsx` | **Lines:** 115

```tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Client Portal", href: "/portal" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-b border-[#D4AF37]/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-11 w-14 flex items-center justify-center shrink-0">
            <Image
              src="/logo.png"
              alt="MK Associates Logo"
              width={60}
              height={48}
              className="h-11 w-auto object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.7)] transition-all"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif font-bold text-white text-lg leading-none">
              MK Associates
            </span>
            <span
              className="text-[0.6rem] font-display font-600 tracking-widest uppercase"
              style={{ color: "#D4AF37" }}
            >
              Legal Counsel · दिल्ली · वाराणसी · कैमूर
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.label === "Client Portal" ? (
              <Link
                key={link.label}
                href={link.href}
                className="btn-gold text-xs py-2 px-5"
              >
                {link.label}
              </Link>
            ) : (
              <Link key={link.label} href={link.href} className="nav-link">
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#050505]/98 backdrop-blur-xl border-t border-[#D4AF37]/20 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-3 nav-link text-base border-b border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile contact bar */}
          <div className="mt-4 pt-4 border-t border-[#D4AF37]/10">
            <a
              href="tel:+919305592322"
              className="block text-[#D4AF37] text-sm font-display font-600"
            >
              📞 +91 93055 92322
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

```

---

### `components/Footer.tsx`
**Purpose:** 3 office addresses, disclaimer & social links | **Language:** `tsx` | **Lines:** 247

```tsx
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  { label: "Civil & Criminal Litigation", href: "/services#litigation" },
  { label: "Corporate & Business Law", href: "/services#corporate" },
  { label: "Intellectual Property Rights", href: "/services#ipr" },
  { label: "Family & Personal Law", href: "/services#family" },
  { label: "Taxation & Financial Law", href: "/services#tax" },
  { label: "Cyber Law & Arbitration", href: "/services#emerging" },
  { label: "Service Matters & Govt. Law", href: "/services#service-matters" },
  { label: "Armed Forces Law", href: "/services#armed-forces" },
];

const quickLinks = [
  { label: "Home / होम", href: "/" },
  { label: "About / परिचय", href: "/about" },
  { label: "Services / सेवाएं", href: "/services" },
  { label: "Blog / ब्लॉग", href: "/blog" },
  { label: "Contact / संपर्क", href: "/contact" },
  { label: "Client Portal", href: "/portal" },
];

const addresses = [
  {
    city: "New Delhi",
    detail: "K-4/3, Third Floor, Mohan Garden, Uttam Nagar, New Delhi – 110059",
  },
  {
    city: "Varanasi, UP",
    detail: "AN 455, Dhanwantari Nagar, Near Gupta General Store, Varanasi",
  },
  {
    city: "Kaimur (Bhabua), Bihar",
    detail: "Vill. Jagdishpur, Post Dangari, P.S. Kudra, Dist. Kaimur – 821109",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#D4AF37]/20 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative h-14 w-18 flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="MK Associates Logo"
                  width={72}
                  height={58}
                  className="h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:drop-shadow-[0_0_22px_rgba(212,175,55,0.6)] transition-all"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-white text-lg leading-none">
                  MK Associates
                </span>
                <span className="text-[0.6rem] font-display tracking-widest text-[#D4AF37] uppercase">
                  Legal Panel · Since 1985
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              न्याय आपका अधिकार है। हम आपके साथ हैं।
              <br />
              <em className="text-white/30 text-xs">
                Justice is your right. We stand with you.
              </em>
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                {
                  href: "https://www.facebook.com/share/1YcniQ5Wjy/",
                  label: "Facebook",
                  svg: (
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  href: "https://x.com/Maddyupdy",
                  label: "X (Twitter)",
                  svg: (
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  href: "https://www.linkedin.com",
                  label: "LinkedIn",
                  svg: (
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  href: "https://wa.me/919305592322",
                  label: "WhatsApp",
                  svg: (
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                },
              ].map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]/60 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#D4AF37] font-display font-700 text-sm tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#D4AF37] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#D4AF37] font-display font-700 text-sm tracking-wider uppercase mb-5">
              Practice Areas
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-white/50 hover:text-[#D4AF37] text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#D4AF37] font-display font-700 text-sm tracking-wider uppercase mb-5">
              Contact
            </h4>

            {/* Phones */}
            <div className="flex items-start gap-3 mb-4">
              <Phone size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
              <div className="space-y-0.5">
                {["9305592322", "9341943353", "7200151400"].map((num) => (
                  <a
                    key={num}
                    href={`tel:+91${num}`}
                    className="text-white/70 hover:text-white text-sm block"
                  >
                    +91 {num}
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 mb-5">
              <Mail size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
              <a
                href="mailto:maddydragon85@gmail.com"
                className="text-white/70 hover:text-white text-sm break-all"
              >
                maddydragon85@gmail.com
              </a>
            </div>

            {/* Offices */}
            <div className="space-y-3">
              {addresses.map((addr) => (
                <div key={addr.city} className="flex items-start gap-3">
                  <MapPin
                    size={14}
                    className="text-[#D4AF37] mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-[#D4AF37]/80 text-xs font-display font-600 uppercase tracking-wide">
                      {addr.city}
                    </p>
                    <p className="text-white/50 text-xs leading-relaxed">
                      {addr.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <p>© 2026 MK Associates. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

```

---

### `components/WhatsAppButton.tsx`
**Purpose:** Floating WhatsApp appointment launcher | **Language:** `tsx` | **Lines:** 22

```tsx
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919305592322?text=Hello%20MK%20Associates%2C%20I%20need%20legal%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn animate-pulse-gold"
      aria-label="Chat on WhatsApp"
      title="WhatsApp Consultation — 9305592322"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="30"
        height="30"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

```

---

## Frontend Pages & Legal Dossiers

### `app/page.tsx`
**Purpose:** Homepage with stats, hero, panel preview & testimonials | **Language:** `tsx` | **Lines:** 621

```tsx
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Scale,
  Shield,
  Award,
  Users,
  CheckCircle,
  Star,
  Phone,
  Calendar,
  Briefcase,
  BookOpen,
  FileText,
  Globe,
  Heart,
  TrendingUp,
  Cpu,
  Medal,
  ClipboardList,
} from "lucide-react";

const stats = [
  { number: "100+", label: "Combined Years", sublabel: "संयुक्त अनुभव" },
  { number: "2,000+", label: "Cases Handled", sublabel: "मामले निपटाए" },
  { number: "4", label: "Expert Advocates", sublabel: "विशेषज्ञ अधिवक्ता" },
  { number: "3", label: "Offices in India", sublabel: "भारत में कार्यालय" },
];

const practiceAreas = [
  {
    icon: Scale,
    title: "Civil & Criminal Litigation",
    hindi: "सिविल एवं आपराधिक वाद",
    desc: "Property disputes, contracts, bail, trial, appeals under IPC/BNS, consumer grievances.",
    color: "from-amber-500/20 to-transparent",
    href: "/services#litigation",
  },
  {
    icon: Briefcase,
    title: "Corporate & Business Law",
    hindi: "कॉर्पोरेट एवं व्यापार कानून",
    desc: "Company incorporation, M&A agreements, regulatory advisory for startups & fintech.",
    color: "from-blue-500/10 to-transparent",
    href: "/services#corporate",
  },
  {
    icon: Shield,
    title: "Intellectual Property Rights",
    hindi: "बौद्धिक संपदा अधिकार",
    desc: "Trademark registration, patent filing & enforcement, copyright protection.",
    color: "from-purple-500/10 to-transparent",
    href: "/services#ipr",
  },
  {
    icon: Heart,
    title: "Family & Personal Law",
    hindi: "पारिवारिक एवं व्यक्तिगत कानून",
    desc: "Divorce, custody, alimony, succession & wills, domestic violence cases.",
    color: "from-rose-500/10 to-transparent",
    href: "/services#family",
  },
  {
    icon: TrendingUp,
    title: "Taxation & Financial Law",
    hindi: "कर एवं वित्तीय कानून",
    desc: "GST, Income Tax compliance, tax structuring & litigation.",
    color: "from-green-500/10 to-transparent",
    href: "/services#tax",
  },
  {
    icon: Cpu,
    title: "Cyber Law & Emerging Areas",
    hindi: "साइबर कानून एवं उभरते क्षेत्र",
    desc: "Data privacy, environmental law, consumer protection, arbitration & mediation.",
    color: "from-cyan-500/10 to-transparent",
    href: "/services#emerging",
  },
  {
    icon: ClipboardList,
    title: "Service Matters & Govt. Law",
    hindi: "सेवा मामले एवं सरकारी कानून",
    desc: "Increments, medical pension, promotion, posting, CCS conduct rules & departmental enquiries.",
    color: "from-orange-500/10 to-transparent",
    href: "/services#service-matters",
  },
  {
    icon: Medal,
    title: "Armed Forces Law",
    hindi: "सशस्त्र बल कानून",
    desc: "Court martial defence, AFT appeals, Army/Air Force/Navy Act matters & ex-servicemen pension.",
    color: "from-emerald-500/10 to-transparent",
    href: "/services#armed-forces",
  },
];

const testimonials = [
  {
    name: "Ramesh Tiwari",
    role: "Property Dispute, Delhi",
    text: "Adv. Manoj Kumar Chaubey handled our property case with incredible expertise. After 3 years of struggle, he resolved it in 8 months. Forever grateful!",
    rating: 5,
  },
  {
    name: "Priya Singh",
    role: "Family Law Client, Varanasi",
    text: "MK Associates guided me through a difficult divorce and custody matter with great compassion. Adv. Ashok Kumar Seth was always available and supportive.",
    rating: 5,
  },
  {
    name: "Vikrant Pandey",
    role: "Corporate Client, New Delhi",
    text: "Adv. Madan Kumar Upadhyay's cross-domain expertise was exactly what our aerospace company needed. His understanding of both legal and technical aspects is unique.",
    rating: 5,
  },
];

const blogPosts = [
  {
    slug: "understanding-bns-2023-key-changes-from-ipc",
    title: "Understanding BNS 2023: Key Changes from IPC",
    hindi: "बीएनएस 2023: आईपीसी से प्रमुख बदलाव",
    date: "Sep 15, 2026",
    category: "Criminal Law",
    image: "/blog/bns.jpg",
    excerpt:
      "The Bharatiya Nyaya Sanhita 2023 has replaced the IPC. Here are the critical changes every citizen must know.",
  },
  {
    slug: "gst-compliance-for-small-businesses-guide",
    title: "GST Compliance for Small Businesses",
    hindi: "छोटे व्यवसायों के लिए जीएसटी अनुपालन",
    date: "Sep 8, 2026",
    category: "Tax Law",
    image: "/blog/gst.jpg",
    excerpt:
      "A practical guide to GST registration, filing deadlines, and avoiding common compliance pitfalls.",
  },
  {
    slug: "how-to-register-trademark-in-india-step-by-step",
    title: "How to Register a Trademark in India",
    hindi: "भारत में ट्रेडमार्क पंजीकरण कैसे करें",
    date: "Sep 1, 2026",
    category: "IPR",
    image: "/blog/trademark.jpg",
    excerpt:
      "Step-by-step process for trademark registration, from filing to approval. Protect your brand today.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Legal Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />

        <div className="container-custom relative z-10 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="badge mb-6">
              न्याय आपका अधिकार है · Justice is Your Right
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              MK{" "}
              <span className="text-gradient">Associates</span>
              <br />
              <span className="text-4xl lg:text-5xl text-white/80">
                — न्याय · सत्य · निष्ठा
              </span>
            </h1>
            <p className="text-white/70 text-lg mb-3 leading-relaxed max-w-xl">
              A panel of distinguished advocates with 100+ combined years
              of experience — led by Adv. Madan Kumar Upadhyay, Adv. Nand Jee
              Kumar Upadhyay, alongside Adv. Manoj Kumar Chaubey &amp; Adv. Ashok
              Kumar Seth.
            </p>
            <p className="text-[#D4AF37]/70 text-sm mb-10 italic font-serif">
              &quot;100+ वर्षों के संयुक्त अनुभव के साथ, हम आपके हर कानूनी
              मामले में साथ हैं — दिल्ली, वाराणसी एवं कैमूर।&quot;
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold">
                Book Consultation <Calendar size={18} />
              </Link>
              <Link href="/services" className="btn-outline">
                Our Services <ArrowRight size={18} />
              </Link>
            </div>

            {/* Quick contact bar */}
            <div className="mt-10 flex items-center gap-6">
              <a
                href="tel:+919305592322"
                className="flex items-center gap-2 text-white/60 hover:text-[#D4AF37] transition-colors"
              >
                <Phone size={16} className="text-[#D4AF37]" />
                <span className="text-sm font-display">+91 93055 92322</span>
              </a>
              <span className="w-px h-4 bg-white/20" />
              <span className="text-white/40 text-xs">
                Mon–Sat · 9AM to 7PM
              </span>
            </div>
          </div>

          {/* Right: Info Cards */}
          <div className="hidden lg:flex flex-col gap-4 items-end">
            {/* Madan Kumar Upadhyay Card */}
            <div className="glass-card p-5 w-72 flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37] shrink-0">
                <Image
                  src="/madan-upadhyay.jpg"
                  alt="Adv. Madan Kumar Upadhyay"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="text-white font-serif font-bold text-sm">
                  Adv. Madan Kumar Upadhyay
                </p>
                <p className="text-[#D4AF37] text-xs font-display tracking-wide">
                  Multi-Domain Counsel · 20 Yrs
                </p>
                <div className="flex gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={10}
                      className="fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                  <span className="text-white/40 text-xs ml-1">5.0</span>
                </div>
              </div>
            </div>

            {/* Trust card */}
            <div className="glass-card p-5 w-64">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-3">
                <Shield size={20} className="text-[#D4AF37]" />
              </div>
              <h3 className="font-serif text-lg text-white mb-1">
                Confidential & Trusted
              </h3>
              <p className="text-white/50 text-xs">
                Attorney-client privilege guaranteed. Your matters stay private.
              </p>
            </div>

            {/* Award card */}
            <div className="glass-card p-5 w-64 -mr-8">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-3">
                <Award size={20} className="text-[#D4AF37]" />
              </div>
              <h3 className="font-serif text-lg text-white mb-1">
                Award-Winning Practice
              </h3>
              <p className="text-white/50 text-xs">
                Recognized by Delhi Bar Association for excellence in litigation.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-gradient-to-b from-[#D4AF37] to-transparent" />
          <span className="text-[#D4AF37]/60 text-xs font-display tracking-widest">
            SCROLL
          </span>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-16 border-y border-[#D4AF37]/15 bg-[#050505]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.number} className="text-center">
                <div className="stat-number mb-1">{stat.number}</div>
                <div className="text-white/80 font-display text-sm font-600 tracking-wide">
                  {stat.label}
                </div>
                <div className="text-[#D4AF37]/50 text-xs mt-1">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRACTICE AREAS ===== */}
      <section id="services" className="py-24 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="section-label mb-3">Practice Areas · सेवाएं</div>
            <h2 className="section-title mb-4">
              Comprehensive <span>Legal Services</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              From civil litigation to cutting-edge cyber law, we cover every
              domain of Indian jurisprudence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <Link
                href={area.href}
                key={area.title}
                className="glass-card p-7 group cursor-pointer block"
              >
                <div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-5 group-hover:bg-[#D4AF37]/20 transition-colors">
                    <area.icon size={22} className="text-[#D4AF37]" />
                  </div>
                  <h3 className="font-serif text-xl text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-[#D4AF37]/60 text-xs font-display tracking-wide mb-3">
                    {area.hindi}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {area.desc}
                  </p>
                  <div className="flex items-center gap-1 mt-4 text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors text-xs font-display font-600 uppercase tracking-wider">
                    Learn More <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-gold">
              View All Practice Areas <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-24 bg-[#050505]">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden border-[3px] border-[#D4AF37]/40 shadow-2xl">
              <Image
                src="/courtroom-panel.jpg"
                alt="MK Associates Advocates Panel in Court"
                width={650}
                height={700}
                className="w-full h-[520px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="badge text-xs bg-black/80 backdrop-blur-md border-[#D4AF37]/60 text-[#D4AF37]">
                  Advocates Panel · Supreme Court & High Court Chambers
                </span>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-black p-5 rounded-lg shadow-xl">
              <div className="font-serif font-bold text-3xl leading-none">
                100+
              </div>
              <div className="text-xs font-display font-700 tracking-wide mt-1">
                Combined Years
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="section-label mb-3">About the Advocates · परिचय</div>
            <h2 className="section-title mb-5">
              A Legacy of <span>Justice</span>
              <br />& Integrity
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-white/60 mb-4 leading-relaxed">
              Spearheaded by Adv. Madan Kumar Upadhyay (20 years, multi-domain expert &amp; Allahabad University alumnus)
              and Adv. Nand Jee Kumar Upadhyay (10 years, Criminal, Family &amp; Revenue Litigation), alongside seasoned veterans
              Adv. Manoj Kumar Chaubey (40 years) and Adv. Ashok Kumar Seth (30 years).
              Together, our panel provides comprehensive legal counsel across Delhi, Varanasi, and Bihar.
            </p>
            <p className="text-[#D4AF37]/70 italic font-serif mb-6">
              &quot;सत्यमेव जयते — न्याय की लड़ाई में हर मुवक्किल की आवाज।&quot;
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Alumnus, Prestigious University of Allahabad",
                "Multi-Domain Expertise: Legal, Administrative & Technical",
                "High Court, District Court & Tribunal Practice",
                "Corporate Compliance, Cyber Law, Civil & Criminal Litigation",
                "Offices in New Delhi, Varanasi (UP) & Kaimur (Bihar)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-[#D4AF37] shrink-0 mt-0.5"
                  />
                  <span className="text-white/60 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-gold">
              Full Profile <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CLIENT PORTAL CTA ===== */}
      <section className="py-20 bg-[#0a0a0a] border-y border-[#D4AF37]/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Track Your Case",
                hindi: "अपना मामला ट्रैक करें",
                desc: "Real-time case status updates, hearing dates, and court orders.",
                href: "/portal",
                action: "Open Portal",
              },
              {
                icon: Calendar,
                title: "Book Consultation",
                hindi: "परामर्श बुक करें",
                desc: "Schedule an in-person or video consultation at your convenience.",
                href: "/contact",
                action: "Book Now",
              },
              {
                icon: Users,
                title: "Client Support",
                hindi: "मुवक्किल सहायता",
                desc: "24/7 WhatsApp support for urgent legal queries and updates.",
                href: "https://wa.me/919305592322",
                action: "Chat Now",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="glass-card p-8 text-center group block"
              >
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <item.icon size={24} className="text-[#D4AF37]" />
                </div>
                <h3 className="font-serif text-xl text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-[#D4AF37]/50 text-xs font-display mb-3">
                  {item.hindi}
                </p>
                <p className="text-white/50 text-sm mb-5">{item.desc}</p>
                <span className="btn-outline text-xs py-2 px-5">
                  {item.action}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 bg-[#050505]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="section-label mb-3">
              Client Testimonials · मुवक्किलों के अनुभव
            </div>
            <h2 className="section-title">
              What Our <span>Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card relative">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center font-serif font-bold text-[#D4AF37]">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG PREVIEW ===== */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="section-label mb-3">Legal Insights · कानूनी जानकारी</div>
              <h2 className="section-title">
                Latest <span>Articles</span>
              </h2>
            </div>
            <Link href="/blog" className="btn-outline text-sm py-2 px-5">
              All Articles <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.title}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-card group block"
                title={`Open "${post.title}" in new tab`}
              >
                <div className="h-44 relative overflow-hidden bg-black/40">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge text-[0.65rem] py-0.5 px-2">
                      {post.category}
                    </span>
                    <span className="text-white/30 text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-serif text-lg text-white mb-1 group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-[#D4AF37]/50 text-xs font-display mb-3">
                    {post.hindi}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-[#D4AF37] font-semibold">
                    Read Article ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 bg-[#050505] border-t border-[#D4AF37]/10">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-6 animate-float">
              <Scale size={28} className="text-[#D4AF37]" />
            </div>
            <h2 className="section-title mb-4">
              Ready to <span>Defend Your Rights?</span>
            </h2>
            <p className="text-white/50 mb-4">
              Your first consultation is free. We listen, we advise, we fight.
            </p>
            <p className="text-[#D4AF37]/60 font-serif italic mb-8">
              &quot;पहली परामर्श निःशुल्क। हम सुनते हैं, सलाह देते हैं, लड़ते
              हैं।&quot;
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-gold">
                Free Consultation <Calendar size={18} />
              </Link>
              <a href="tel:+919305592322" className="btn-outline">
                Call Now <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

```

---

### `app/about/page.tsx`
**Purpose:** About page with 4 advocates & Madan featured card | **Language:** `tsx` | **Lines:** 429

```tsx
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Award,
  BookOpen,
  Users,
  ArrowRight,
  Scale,
  Briefcase,
  Shield,
  Cpu,
  Star,
  GraduationCap,
} from "lucide-react";

const advocates = [
  {
    name: "Adv. Manoj Kumar Chaubey",
    slug: "manoj-kumar-chaubey",
    role: "Senior Partner & Litigation Counsel",
    hindi: "वरिष्ठ अधिवक्ता एवं प्रमुख परामर्शदाता",
    experience: "40",
    unit: "Years",
    photo: "/manoj-chaubey.jpg",
    specializations: [
      "Civil Suits & Plaint Drafting",
      "Pre-Litigation & Legal Notice",
      "Pleadings, Evidence & Injunctions",
      "Appeals, Decrees & Execution",
      "Property, Tenancy & Succession",
    ],
    bio: "With an unmatched 40 years of practice, Adv. Manoj Kumar Chaubey is a distinguished senior counsel of the panel. His vast courtroom experience spans civil, criminal, and administrative law across District Courts, High Courts, and the Supreme Court of India.",
    icon: Scale,
  },
  {
    name: "Adv. Ashok Kumar Seth",
    slug: "ashok-kumar-seth",
    role: "Senior Counsel",
    hindi: "वरिष्ठ अधिवक्ता",
    experience: "30",
    unit: "Years",
    photo: "/ashok-seth.png",
    specializations: [
      "Civil Suits & Plaint Drafting",
      "Property & Revenue Law",
      "Criminal Defense & Bail",
      "Consumer Protection Disputes",
      "Family & Succession Law",
    ],
    bio: "Adv. Ashok Kumar Seth brings 30 years of razor-sharp legal acumen to the panel. Renowned for his command over property disputes, criminal defense strategy, and family law matters, he is a trusted name across Varanasi and Bihar courts.",
    icon: Award,
  },
  {
    name: "Adv. Madan Kumar Upadhyay",
    slug: "madan-kumar-upadhyay",
    role: "Lead Multi-Domain Counsel",
    hindi: "प्रमुख बहु-क्षेत्र अधिवक्ता",
    experience: "20",
    unit: "Years",
    photo: "/madan-upadhyay.jpg",
    specializations: [
      "Military Litigation & AFT",
      "Central Services & CAT Practice",
      "Criminal & Civil Litigation",
      "Family & Matrimonial Law",
      "Aeronautical & Multi-Domain Advisory",
    ],
    bio: "Adv. Madan Kumar Upadhyay is an alumnus of the University of Allahabad — one of India's premier institutions — uniquely positioned with 20 years of cumulative experience spanning legal practice alongside expertise in Administration, Technical Operations, Aeronautics, Logistics, Mentoring, Quality Inspection, and Auditing — making him an indispensable multi-domain counsel for complex, cross-sector cases.",
    icon: Briefcase,
    featured: true,
  },
  {
    name: "Adv. Nand Jee Kumar Upadhyay",
    slug: "nand-jee-kumar-upadhyay",
    role: "Criminal, Family & Revenue Counsel",
    hindi: "अधिवक्ता (आपराधिक, पारिवारिक एवं राजस्व वाद)",
    experience: "10",
    unit: "Years",
    photo: "/nand-jee-upadhyay.jpg",
    specializations: [
      "Criminal Law · Bail & Bond",
      "Family Court Litigation",
      "Revenue Court Litigation",
      "Mutation Cases & Appeals",
    ],
    bio: "Adv. Nand Jee Kumar Upadhyay possesses 10 years of courtroom litigation practice with focused expertise in Criminal Law (Bail & Bond proceedings), Family Court litigation, Revenue Court matters, and Land Mutation (दाखिल-खारिज) cases and appeals across trial and appellate forums.",
    icon: Scale,
  },
];


export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#050505] border-b border-[#D4AF37]/15">
        <div className="container-custom text-center">
          <div className="section-label mb-4">About Us · हमारे बारे में</div>
          <h1 className="section-title mb-4">
            The Advocates Behind <span>Your Case</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            A panel of four distinguished advocates — combined experience of
            100+ years — spanning New Delhi, Varanasi, and Kaimur.
            <br />
            <span className="text-[#D4AF37]/50 text-sm">
              चार विशिष्ट अधिवक्ताओं का पैनल — 100+ वर्षों का संयुक्त
              अनुभव।
            </span>
          </p>
        </div>
      </section>

      {/* Panel Stats */}
      <section className="py-12 bg-[#050505] border-b border-[#D4AF37]/10">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "100+", label: "Combined Years", sub: "संयुक्त अनुभव" },
            { num: "4", label: "Advocates on Panel", sub: "अधिवक्ता पैनल" },
            { num: "3", label: "Offices Across India", sub: "भारत में कार्यालय" },
            { num: "2,000+", label: "Cases Handled", sub: "मामले निपटाए" },
          ].map((s) => (
            <div key={s.label}>
              <div className="stat-number mb-1">{s.num}</div>
              <div className="text-white/80 font-display text-sm font-600 tracking-wide">
                {s.label}
              </div>
              <div className="text-[#D4AF37]/50 text-xs mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Advocate — Madan Kumar Upadhyay */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Featured Advocate · विशेष अधिवक्ता</div>
            <h2 className="section-title">
              Meet <span>Adv. Madan Kumar Upadhyay</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Portrait */}
            <div className="sticky top-28">
              <div className="relative rounded-lg overflow-hidden border-[3px] border-[#D4AF37]/50 shadow-2xl shadow-[#D4AF37]/10">
                <Image
                  src="/madan-upadhyay.jpg"
                  alt="Adv. Madan Kumar Upadhyay"
                  width={600}
                  height={750}
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "560px" }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="font-serif text-2xl text-white font-bold">
                    Adv. Madan Kumar Upadhyay
                  </h2>
                  <p className="text-[#D4AF37] text-sm font-display tracking-wide">
                    Multi-Domain Counsel · 20 Years Experience
                  </p>
                  <div className="flex gap-0.5 mt-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={12}
                        className="fill-[#D4AF37] text-[#D4AF37]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Expertise badges */}
              <div className="grid grid-cols-2 gap-3 mt-5">
                {[
                  { icon: Scale, label: "Legal Practice" },
                  { icon: Briefcase, label: "Administration" },
                  { icon: Shield, label: "Aeronautics & Logistics" },
                  { icon: Award, label: "Quality & Audit" },
                  { icon: GraduationCap, label: "Univ. of Allahabad" },
                ].map((a) => (
                  <div key={a.label} className="glass-card p-4 text-center">
                    <a.icon
                      size={18}
                      className="text-[#D4AF37] mx-auto mb-1.5"
                    />
                    <p className="text-white/70 text-xs font-display font-600">
                      {a.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="section-label mb-3">Multi-Domain Expert</div>
              <h2 className="section-title mb-3">
                A Rare <span>Cross-Sector</span>
                <br />
                Legal Expert
              </h2>
              <div className="gold-divider mb-6" />

              <p className="text-white/60 leading-relaxed mb-5">
                Adv. Madan Kumar Upadhyay is a rare legal professional and an
                alumnus of the prestigious{" "}
                <span className="text-[#D4AF37] font-medium">
                  University of Allahabad
                </span>
                . He combines traditional legal advocacy with 20 years of
                cross-domain expertise. His unique background spans not just
                courtroom practice but also Administration, Technical
                Operations, Aeronautics, Logistics, Mentoring, Quality
                Inspection, and Auditing.
              </p>
              <p className="text-[#D4AF37]/70 font-serif italic text-lg mb-6 border-l-2 border-[#D4AF37]/40 pl-4">
                &quot;क़ानून की गहरी समझ और बहु-क्षेत्र अनुभव का संयोग —
                यही मेरी पहचान है।&quot;
                <br />
                <span className="text-sm text-white/30 not-italic">
                  — A blend of deep legal knowledge and multi-domain experience
                  — that is my identity.
                </span>
              </p>

              <div className="mb-8">
                <h3 className="font-display text-sm font-600 tracking-widest text-[#D4AF37] uppercase mb-4">
                  Areas of Expertise
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Legal advocacy — Civil, Criminal & Corporate law",
                    "Administrative law — CCS/CCA rules & service matters",
                    "Technical & Aeronautical regulatory compliance",
                    "Logistical & supply-chain legal advisory",
                    "Quality inspection & audit documentation / disputes",
                    "Mentorship & training — legal & institutional",
                    "Corporate governance & internal audits",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={15}
                        className="text-[#D4AF37] shrink-0 mt-0.5"
                      />
                      <span className="text-white/60 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/about/madan-kumar-upadhyay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  View Full Profile <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn-outline">
                  Consult Adv. Madan Kumar
                </Link>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://www.facebook.com/share/1YcniQ5Wjy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Adv. Madan Kumar Upadhyay on Facebook"
                    title="Facebook Profile"
                    className="w-11 h-11 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]/70 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all shadow-sm"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/Maddyupdy"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Adv. Madan Kumar Upadhyay on X (Twitter)"
                    title="X (Twitter) Profile"
                    className="w-11 h-11 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]/70 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all shadow-sm"
                  >
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/919305592322"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with Adv. Madan Kumar on WhatsApp"
                    title="WhatsApp (+91 9305592322)"
                    className="w-11 h-11 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]/70 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all shadow-sm"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Panel */}
      <section className="py-24 bg-[#050505]">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="section-label mb-3">Our Panel · हमारा पैनल</div>
            <h2 className="section-title">
              All <span>Four Advocates</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advocates.map((adv) => (
              <Link
                key={adv.name}
                href={`/about/${adv.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card p-7 block group hover:border-[#D4AF37]/60 transition-all duration-300 ${adv.featured ? "border-[#D4AF37]/50 shadow-lg shadow-[#D4AF37]/5" : ""}`}
              >
                <div className="flex items-start gap-5 mb-5">
                  {/* Photo or icon */}
                  {adv.photo ? (
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#D4AF37]/50 shrink-0">
                      <Image
                        src={adv.photo}
                        alt={adv.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                      <adv.icon size={28} className="text-[#D4AF37]" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-serif text-xl text-white font-bold">
                        {adv.name}
                      </h3>
                      {adv.featured && (
                        <span className="badge text-[0.6rem] py-0.5 px-2">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-[#D4AF37] text-xs font-display tracking-wide font-600">
                      {adv.role}
                    </p>
                    <p className="text-white/30 text-xs">{adv.hindi}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="font-serif text-2xl text-[#D4AF37] font-bold leading-none">
                        {adv.experience}
                      </span>
                      <span className="text-white/40 text-xs">
                        {adv.unit} Exp.
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-white/55 text-sm leading-relaxed mb-5">
                  {adv.bio}
                </p>

                <div>
                  <p className="text-[#D4AF37]/60 text-xs font-display uppercase tracking-widest mb-3">
                    Specializations
                  </p>
                  <ul className="space-y-1.5">
                    {adv.specializations.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <CheckCircle
                          size={12}
                          className="text-[#D4AF37] shrink-0 mt-0.5"
                        />
                        <span className="text-white/50 text-xs">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex items-center gap-2 text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors text-xs font-display tracking-wide">
                  View Full Profile <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 bg-[#050505] border-t border-[#D4AF37]/10 text-center">
        <div className="container-custom max-w-2xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-6">
            <Users size={24} className="text-[#D4AF37]" />
          </div>
          <h2 className="section-title mb-4">
            Work With Our <span>Expert Panel</span>
          </h2>
          <p className="text-white/50 mb-3">
            100+ combined years of expertise, three offices, four dedicated
            advocates.
          </p>
          <p className="text-[#D4AF37]/60 font-serif italic mb-8">
            &quot;पहली परामर्श निःशुल्क। हम आपके साथ हैं।&quot;
          </p>
          <Link href="/contact" className="btn-gold">
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

```

---

### `app/about/[slug]/page.tsx`
**Purpose:** Dynamic advocate dossier template (All 4 advocates) | **Language:** `tsx` | **Lines:** 1076

```tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle,
  Award,
  ArrowRight,
  ArrowLeft,
  Scale,
  Briefcase,
  Shield,
  Cpu,
  Star,
  GraduationCap,
  Gavel,
  FileText,
  BookOpen,
  Users,
} from "lucide-react";

/* ────────── Advocate Data ────────── */

interface PracticeCategory {
  title: string;
  titleHi?: string;
  items: { label: string; desc: string }[];
}

interface SocialLink {
  platform: string;
  url: string;
  handle?: string;
}

interface AdvocateProfile {
  name: string;
  slug: string;
  role: string;
  hindi: string;
  experience: string;
  unit: string;
  photo: string;
  specializations: string[];
  bio: string;
  quote?: { text: string; translation: string };
  socialLinks?: SocialLink[];
  practiceAreas: PracticeCategory[];
}

const advocateProfiles: AdvocateProfile[] = [
  {
    name: "Adv. Manoj Kumar Chaubey",
    slug: "manoj-kumar-chaubey",
    role: "Senior Partner & Litigation Counsel",
    hindi: "वरिष्ठ अधिवक्ता एवं प्रमुख परामर्शदाता",
    experience: "40",
    unit: "Years",
    photo: "/manoj-chaubey.jpg",
    specializations: [
      "Civil Suits & Plaint Drafting",
      "Pre-Litigation & Legal Notice",
      "Pleadings, Evidence & Injunctions",
      "Appeals, Decrees & Execution",
      "Property, Tenancy & Succession",
    ],
    bio: "With an unmatched 40 years of practice, Adv. Manoj Kumar Chaubey is a distinguished senior counsel of the panel. His vast courtroom experience spans civil, criminal, and administrative law across District Courts, High Courts, and the Supreme Court of India. He is the founding member of the panel and has mentored generations of legal professionals.",
    quote: {
      text: "न्याय की लड़ाई में धैर्य और अनुभव ही सबसे बड़े हथियार हैं।",
      translation:
        "In the fight for justice, patience and experience are the greatest weapons.",
    },
    practiceAreas: [
      {
        title: "Pre-Litigation, Notice & Drafting",
        titleHi: "प्री-लिटिगेशन, नोटिस एवं ड्राफ्टिंग",
        items: [
          {
            label: "Legal Notice Drafting",
            desc: "Eviction, recovery of money, consumer disputes",
          },
          {
            label: "Negotiation & Settlement",
            desc: "Parties को court जाने से पहले समझौते की कोशिश",
          },
          {
            label: "Plaint Drafting",
            desc: "Civil Suit (injunction, declaration, recovery, partition, tenancy)",
          },
        ],
      },
      {
        title: "Institution of Suit & Pre-Trial",
        titleHi: "वाद दायर करना एवं प्रक्रिया",
        items: [
          {
            label: "Institution of Suit",
            desc: "Civil Judge (Junior Division / Senior Division) के सामने plaint दाखिल",
          },
          {
            label: "Court Fees & Valuation",
            desc: "Proper valuation और stamp duty compliance",
          },
          {
            label: "Summons Service",
            desc: "Defendant को notice भेजना",
          },
        ],
      },
      {
        title: "Pleadings & Evidence",
        titleHi: "अभिवचन एवं साक्ष्य",
        items: [
          {
            label: "Written Statement",
            desc: "Defendant का जवाब",
          },
          {
            label: "Replication",
            desc: "Plaintiff का rejoinder",
          },
          {
            label: "Issues Framing",
            desc: "Court द्वारा points of determination तय करना",
          },
          {
            label: "Evidence",
            desc: "Affidavit evidence, cross‑examination, documentary proof",
          },
          {
            label: "Interim Applications",
            desc: "Order 39 (injunction), Order 7 Rule 11 (rejection of plaint), etc.",
          },
        ],
      },
      {
        title: "Judgment, Decree & Execution",
        titleHi: "निर्णय, डिक्री एवं निष्पादन",
        items: [
          {
            label: "Judgment & Decree",
            desc: "Civil Judge द्वारा final decision",
          },
          {
            label: "Appeal",
            desc: "District Judge के सामने subordinate court के judgment के खिलाफ",
          },
          {
            label: "Execution of Decree",
            desc: "Decree holder द्वारा property attachment, possession, recovery",
          },
        ],
      },
      {
        title: "Rent, Property & Succession",
        titleHi: "किराया, संपत्ति एवं उत्तराधिकार",
        items: [
          {
            label: "Rent Control / Tenancy Matters",
            desc: "District Court या Rent Controller",
          },
          {
            label: "Succession Certificate",
            desc: "Civil Judge द्वारा issuance",
          },
          {
            label: "Partition & Property Disputes",
            desc: "Local Commissioner appointment, site inspection",
          },
          {
            label: "Injunctions",
            desc: "Status quo orders, stay orders",
          },
        ],
      },
      {
        title: "Interlocutory & Miscellaneous Practice",
        titleHi: "अंतरिम आवेदन एवं विविध प्रैक्टिस",
        items: [
          {
            label: "Interlocutory Applications",
            desc: "Temporary reliefs during suit",
          },
          {
            label: "Settlement Recording",
            desc: "Compromise decree under Order 23 CPC",
          },
          {
            label: "Ex Parte Decree",
            desc: "जब defendant absent रहता है",
          },
        ],
      },
      {
        title: "Criminal & Appellate Litigation",
        titleHi: "आपराधिक एवं अपीलीय वाद",
        items: [
          {
            label: "Bail Applications",
            desc: "Anticipatory bail, regular bail in Sessions & High Court",
          },
          {
            label: "Trial Representation",
            desc: "Full trial conduct — prosecution & defense in Sessions Court",
          },
          {
            label: "Criminal Appeals & Revisions",
            desc: "Challenging Magistrate & Sessions judgments before High Court",
          },
          {
            label: "Writ Petitions & PILs",
            desc: "Article 226 & 32 petitions before High Court & Supreme Court",
          },
          {
            label: "SLP & Supreme Court Practice",
            desc: "Special Leave Petitions & appeals before the Supreme Court of India",
          },
        ],
      },
      {
        title: "Service & Administrative Law",
        titleHi: "सेवा एवं प्रशासनिक कानून",
        items: [
          {
            label: "Departmental Proceedings",
            desc: "CCS/CCA rules, disciplinary actions, suspension & reinstatement",
          },
          {
            label: "Service Disputes",
            desc: "Seniority, promotion, transfer & pension matters",
          },
        ],
      },
    ],
  },
  {
    name: "Adv. Ashok Kumar Seth",
    slug: "ashok-kumar-seth",
    role: "Senior Counsel",
    hindi: "वरिष्ठ अधिवक्ता",
    experience: "30",
    unit: "Years",
    photo: "/ashok-seth.png",
    specializations: [
      "Civil Suits & Plaint Drafting",
      "Property & Revenue Law",
      "Criminal Defense & Bail",
      "Consumer Protection Disputes",
      "Family & Succession Law",
    ],
    bio: "Adv. Ashok Kumar Seth brings 30 years of razor-sharp legal acumen to the panel. Renowned for his command over property disputes, criminal defense strategy, and family law matters, he is a trusted name across Varanasi and Bihar courts. His deep understanding of revenue law and consumer protection makes him an invaluable asset for complex property and family matters.",
    quote: {
      text: "हक़ की लड़ाई में कभी हार नहीं मानते — यही हमारा उसूल है।",
      translation:
        "We never give up in the fight for rights — that is our principle.",
    },
    practiceAreas: [
      {
        title: "Pre-Litigation, Notice & Drafting",
        titleHi: "प्री-लिटिगेशन, नोटिस एवं ड्राफ्टिंग",
        items: [
          {
            label: "Legal Notice Drafting",
            desc: "Eviction, recovery of money, consumer disputes",
          },
          {
            label: "Negotiation & Settlement",
            desc: "Parties को court जाने से पहले समझौते की कोशिश",
          },
          {
            label: "Plaint Drafting",
            desc: "Civil Suit (injunction, declaration, recovery, partition, tenancy)",
          },
        ],
      },
      {
        title: "Institution of Suit & Pre-Trial",
        titleHi: "वाद दायर करना एवं प्रक्रिया",
        items: [
          {
            label: "Institution of Suit",
            desc: "Civil Judge (Junior Division / Senior Division) के सामने plaint दाखिल",
          },
          {
            label: "Court Fees & Valuation",
            desc: "Proper valuation और stamp duty compliance",
          },
          {
            label: "Summons Service",
            desc: "Defendant को notice भेजना",
          },
        ],
      },
      {
        title: "Pleadings & Evidence",
        titleHi: "अभिवचन एवं साक्ष्य",
        items: [
          {
            label: "Written Statement",
            desc: "Defendant का जवाब",
          },
          {
            label: "Replication",
            desc: "Plaintiff का rejoinder",
          },
          {
            label: "Issues Framing",
            desc: "Court द्वारा points of determination तय करना",
          },
          {
            label: "Evidence",
            desc: "Affidavit evidence, cross‑examination, documentary proof",
          },
          {
            label: "Interim Applications",
            desc: "Order 39 (injunction), Order 7 Rule 11 (rejection of plaint), etc.",
          },
        ],
      },
      {
        title: "Judgment, Decree & Execution",
        titleHi: "निर्णय, डिक्री एवं निष्पादन",
        items: [
          {
            label: "Judgment & Decree",
            desc: "Civil Judge द्वारा final decision",
          },
          {
            label: "Appeal",
            desc: "District Judge के सामने subordinate court के judgment के खिलाफ",
          },
          {
            label: "Execution of Decree",
            desc: "Decree holder द्वारा property attachment, possession, recovery",
          },
        ],
      },
      {
        title: "Rent, Property & Succession",
        titleHi: "किराया, संपत्ति एवं उत्तराधिकार",
        items: [
          {
            label: "Rent Control / Tenancy Matters",
            desc: "District Court या Rent Controller",
          },
          {
            label: "Succession Certificate",
            desc: "Civil Judge द्वारा issuance",
          },
          {
            label: "Partition & Property Disputes",
            desc: "Local Commissioner appointment, site inspection",
          },
          {
            label: "Injunctions",
            desc: "Status quo orders, stay orders",
          },
        ],
      },
      {
        title: "Interlocutory & Miscellaneous Practice",
        titleHi: "अंतरिम आवेदन एवं विविध प्रैक्टिस",
        items: [
          {
            label: "Interlocutory Applications",
            desc: "Temporary reliefs during suit",
          },
          {
            label: "Settlement Recording",
            desc: "Compromise decree under Order 23 CPC",
          },
          {
            label: "Ex Parte Decree",
            desc: "जब defendant absent रहता है",
          },
        ],
      },
      {
        title: "Property & Revenue Law",
        titleHi: "संपत्ति एवं राजस्व कानून",
        items: [
          {
            label: "Land Title Disputes",
            desc: "Title verification, title suits, adverse possession claims",
          },
          {
            label: "Revenue Court Matters",
            desc: "Khata-Khatuni, land mutation, revenue board appeals",
          },
          {
            label: "Partition & Succession",
            desc: "Family property partition, Hindu & Muslim succession law",
          },
          {
            label: "Land Acquisition",
            desc: "Compensation disputes under Right to Fair Compensation Act",
          },
          {
            label: "Tenancy Matters",
            desc: "Agricultural tenancy, land reforms, ceiling law disputes",
          },
        ],
      },
      {
        title: "Criminal Defense",
        titleHi: "आपराधिक बचाव",
        items: [
          {
            label: "Bail & Anticipatory Bail",
            desc: "Sessions Court & High Court bail applications",
          },
          {
            label: "Murder & Serious Offences",
            desc: "Defense in IPC 302/304, attempt to murder cases",
          },
          {
            label: "Cheating & Fraud",
            desc: "Defense in IPC 420, criminal breach of trust cases",
          },
          {
            label: "Quashing Petitions",
            desc: "FIR quashing under Section 482 CrPC / Section 528 BNSS",
          },
        ],
      },
      {
        title: "Consumer Protection",
        titleHi: "उपभोक्ता संरक्षण",
        items: [
          {
            label: "Consumer Complaints",
            desc: "Filing & arguing cases before District, State & National Consumer Forum",
          },
          {
            label: "Product Liability",
            desc: "Defective products, medical negligence, insurance claim disputes",
          },
          {
            label: "Service Deficiency",
            desc: "Banking, telecom, housing & other service complaints",
          },
        ],
      },
      {
        title: "Family & Succession Law",
        titleHi: "पारिवारिक एवं उत्तराधिकार कानून",
        items: [
          {
            label: "Divorce & Separation",
            desc: "Contested & mutual consent divorce under Hindu Marriage Act / Muslim Law",
          },
          {
            label: "Maintenance & Alimony",
            desc: "Interim & permanent maintenance under Section 125 CrPC",
          },
          {
            label: "Child Custody",
            desc: "Guardianship petitions, visitation rights, custody disputes",
          },
          {
            label: "Will & Succession",
            desc: "Probate, succession certificate, contested wills",
          },
        ],
      },
    ],
  },
  {
    name: "Adv. Madan Kumar Upadhyay",
    slug: "madan-kumar-upadhyay",
    role: "Lead Multi-Domain Counsel",
    hindi: "प्रमुख बहु-क्षेत्र अधिवक्ता",
    experience: "20",
    unit: "Years",
    photo: "/madan-upadhyay.jpg",
    specializations: [
      "Military Litigation & AFT",
      "Central Services & CAT Practice",
      "Criminal & Civil Litigation",
      "Family & Matrimonial Law",
      "Aeronautical & Multi-Domain Advisory",
    ],
    bio: "Adv. Madan Kumar Upadhyay is an alumnus of the University of Allahabad — one of India's premier institutions — uniquely positioned with 20 years of cumulative experience spanning legal practice alongside expertise in Administration, Technical Operations, Aeronautics, Logistics, Mentoring, Quality Inspection, and Auditing — making him an indispensable multi-domain counsel for complex, cross-sector cases.",
    quote: {
      text: "क़ानून की गहरी समझ और बहु-क्षेत्र अनुभव का संयोग — यही मेरी पहचान है।",
      translation:
        "A blend of deep legal knowledge and multi-domain experience — that is my identity.",
    },
    socialLinks: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/share/1YcniQ5Wjy/",
        handle: "Facebook",
      },
      {
        platform: "X",
        url: "https://x.com/Maddyupdy",
        handle: "X (@Maddyupdy)",
      },
      {
        platform: "WhatsApp",
        url: "https://wa.me/919305592322",
        handle: "+91 9305592322",
      },
    ],
    practiceAreas: [
      {
        title: "Military Litigation",
        titleHi: "सैन्य वाद",
        items: [
          {
            label: "Court Martial Proceedings",
            desc: "General, District & Summary Court Martial defense and proceedings",
          },
          {
            label: "Army/Navy/Air Force Acts Disputes",
            desc: "Army, Navy & Air Force statutory disputes & service litigation",
          },
          {
            label: "Service Grievances",
            desc: "Disciplinary actions, pensions & disability benefits",
          },
          {
            label: "Armed Forces Tribunal (AFT)",
            desc: "Appeals before Armed Forces Tribunal",
          },
        ],
      },
      {
        title: "Central Services Litigation",
        titleHi: "केंद्रीय सेवा वाद",
        items: [
          {
            label: "CCS (Conduct) Rules Disputes",
            desc: "Statutory interpretations, code of conduct & vigilance inquiries",
          },
          {
            label: "CCA (Disciplinary & Appeal) Matters",
            desc: "Inquiry reports, minor & major penalty appeals under CCA rules",
          },
          {
            label: "Suspension, Dismissal & Promotion",
            desc: "Suspension, dismissal, promotion challenges",
          },
          {
            label: "CAT Practice",
            desc: "CAT (Central Administrative Tribunal) practice",
          },
        ],
      },
      {
        title: "Criminal Litigation",
        titleHi: "दंड वाद",
        items: [
          {
            label: "IPC / BNS Offences Trial",
            desc: "IPC/BNS offences trial prosecution & defense",
          },
          {
            label: "BNSS Procedures",
            desc: "BNSS (CrPC equivalent) procedures",
          },
          {
            label: "Bail, Remand & Appeals",
            desc: "Bail, remand, trial, appeal up to District Court",
          },
          {
            label: "Special Acts Defense",
            desc: "Special Acts: NDPS, POCSO, SC/ST Act",
          },
        ],
      },
      {
        title: "Civil Litigation",
        titleHi: "दीवानी वाद",
        items: [
          {
            label: "CPC Procedures",
            desc: "CPC procedures (plaint, written statement, evidence, decree)",
          },
          {
            label: "Property, Tenancy & Partition",
            desc: "Property disputes, tenancy, partition suits",
          },
          {
            label: "Injunctions & Decrees",
            desc: "Injunctions, ex parte decrees, execution of decrees",
          },
        ],
      },
      {
        title: "Matrimonial Matters",
        titleHi: "वैवाहिक मामले",
        items: [
          {
            label: "Divorce Petitions",
            desc: "Mutual consent, contested divorce (cruelty, desertion, adultery)",
          },
          {
            label: "Restitution of Conjugal Rights",
            desc: "Suit for re‑joining spouse",
          },
          {
            label: "Judicial Separation",
            desc: "Relief short of divorce",
          },
        ],
      },
      {
        title: "Maintenance & Alimony",
        titleHi: "भरण-पोषण एवं गुजारा भत्ता",
        items: [
          {
            label: "BNSS / CrPC Sec. 125",
            desc: "Maintenance for wife, children, parents",
          },
          {
            label: "Interim Maintenance",
            desc: "During pendency of matrimonial suit",
          },
          {
            label: "Permanent Alimony",
            desc: "At the time of divorce decree",
          },
        ],
      },
      {
        title: "Domestic Violence Cases",
        titleHi: "घरेलू हिंसा मामले",
        items: [
          {
            label: "Protection Orders",
            desc: "Magistrate द्वारा relief",
          },
          {
            label: "Residence Orders",
            desc: "Right to shared household",
          },
          {
            label: "Monetary Reliefs",
            desc: "Compensation for expenses",
          },
        ],
      },
      {
        title: "Custody & Guardianship",
        titleHi: "अभिरक्षा एवं संरक्षकता",
        items: [
          {
            label: "Child Custody Petitions",
            desc: "Welfare of minor principle",
          },
          {
            label: "Guardians and Wards Act",
            desc: "Appointment of guardian",
          },
        ],
      },
      {
        title: "Succession & Inheritance",
        titleHi: "उत्तराधिकार एवं विरासत",
        items: [
          {
            label: "Succession Certificate",
            desc: "For debts and securities",
          },
          {
            label: "Partition Suits",
            desc: "Family property division",
          },
          {
            label: "Probate & Letters of Administration",
            desc: "Will disputes",
          },
        ],
      },
      {
        title: "Appeals & Remedies",
        titleHi: "अपील एवं विधिक उपचार",
        items: [
          {
            label: "Family Court / District Court",
            desc: "Primary forum for family disputes",
          },
          {
            label: "Appeals",
            desc: "District Judge or High Court depending on statute",
          },
          {
            label: "Execution of Orders",
            desc: "Enforcement of maintenance, custody, property division",
          },
        ],
      },
      {
        title: "Aeronautical & Logistical Advisory",
        titleHi: "वैमानिकी एवं तार्किक परामर्श",
        items: [
          {
            label: "Aviation Regulatory Compliance",
            desc: "DGCA regulations, aircraft operations & regulatory compliance",
          },
          {
            label: "Logistics & Supply Chain",
            desc: "Customs, warehousing disputes & multimodal transportation law",
          },
          {
            label: "Technical Operations Advisory",
            desc: "Operational quality inspection, technical audits & documentation disputes",
          },
        ],
      },
    ],
  },
  {
    name: "Adv. Nand Jee Kumar Upadhyay",
    slug: "nand-jee-kumar-upadhyay",
    role: "Criminal, Family & Revenue Counsel",
    hindi: "अधिवक्ता (आपराधिक, पारिवारिक एवं राजस्व वाद)",
    experience: "10",
    unit: "Years",
    photo: "/nand-jee-upadhyay.jpg",
    specializations: [
      "Criminal Law · Bail & Bond",
      "Family Court Litigation",
      "Revenue Court Litigation",
      "Mutation Cases & Appeals",
    ],
    bio: "Adv. Nand Jee Kumar Upadhyay brings 10 years of courtroom litigation experience with specialised expertise in Criminal Law (anticipatory & regular bail, bonds, trial defense), Family Court litigation (matrimonial, maintenance, domestic violence), Revenue Court proceedings, and land mutation (दाखिल-खारिज) cases and appeals.",
    quote: {
      text: "न्याय की रक्षा और मुवक्किल के अधिकारों की सुरक्षा ही हमारा संकल्प है।",
      translation:
        "Defending justice and protecting client rights is our steadfast commitment.",
    },
    practiceAreas: [
      {
        title: "Criminal Law · Bail & Bond",
        titleHi: "आपराधिक कानून · जमानत एवं मुचलका",
        items: [
          {
            label: "Anticipatory Bail & Regular Bail",
            desc: "Sessions Court और High Court में अग्रिम एवं नियमित जमानत याचिकाएं",
          },
          {
            label: "Bail Bond & Surety Verification",
            desc: "जमानत आदेश के बाद bond execution, surety verification व release orders की कार्यवाही",
          },
          {
            label: "FIR & Police Complaint Drafting",
            desc: "Police station में FIR दर्ज कराना या Magistrate के समक्ष Section 156(3) complaint दाखिल करना",
          },
          {
            label: "Trial Court Criminal Defense",
            desc: "Chargesheet scrutiny, framing of charges, discharge applications, witness cross-examination",
          },
          {
            label: "Appeals & Criminal Revisions",
            desc: "Sessions Judge व High Court में criminal appeals, revision petitions एवं sentence suspension",
          },
        ],
      },
      {
        title: "Family Court Litigation",
        titleHi: "पारिवारिक न्यायालय वाद",
        items: [
          {
            label: "Maintenance Proceedings (Sec. 125)",
            desc: "CrPC / BNSS धारा 125 के तहत भरण-पोषण व अंतरिम राहत के मामले",
          },
          {
            label: "Domestic Violence Act Cases",
            desc: "घरेलू हिंसा अधिनियम के तहत संरक्षण आदेश, आवास एवं क्षतिपूर्ति के मामले",
          },
          {
            label: "Matrimonial Disputes & Divorce",
            desc: "Mutual consent divorce, contested divorce एवं दाम्पत्य अधिकारों की पुनर्स्थापना (RCR)",
          },
          {
            label: "Child Custody & Visitation Rights",
            desc: "नाबालिग बच्चों की कस्टडी, अभिभावकता (Guardianship) एवं मुलाक़ात अधिकारों के वाद",
          },
        ],
      },
      {
        title: "Revenue Court Litigation",
        titleHi: "राजस्व न्यायालय वाद",
        items: [
          {
            label: "Revenue Court Practice",
            desc: "Naib Tehsildar, Tehsildar, SDO/SDM, Collector/DM एवं Commissioner न्यायालयों में मुकदमों की पैरवी",
          },
          {
            label: "Land & Agricultural Disputes",
            desc: "कृषि व आवासीय भूमि विवाद, पैमाइश, हदबंदी (Demarcation), एवं कुर्रा-बंटवारा वाद",
          },
          {
            label: "Correction of Revenue Records",
            desc: "खतौनी, खसरा व जमाबंदी में नाम सुधार, अभिलेख दुरुस्ती (Correction of records)",
          },
          {
            label: "Revenue Injunctions & Stay Orders",
            desc: "राजस्व न्यायालयों से अवैध कब्ज़ा व बेदखली के विरुद्ध स्थगन आदेश (Stay order) हासिल करना",
          },
        ],
      },
      {
        title: "Mutation Cases & Appeals",
        titleHi: "दाखिल-खारिज (नामांतरण) एवं अपील",
        items: [
          {
            label: "Property Mutation (दाखिल-खारिज)",
            desc: "बैनामा (Sale deed), वसीयत (Will), दानपत्र (Gift deed) या वरासत (Inheritance) के आधार पर दाखिल-खारिज",
          },
          {
            label: "Contested Mutation & Objections",
            desc: "नामांतरण में आपत्ति (Objections) दाखिल करना, फर्जी वरासत व बेनामे को चुनौती देना",
          },
          {
            label: "Mutation Appeals",
            desc: "Tehsildar के दाखिल-खारिज आदेश के विरुद्ध SDO / SDM व Collector कोर्ट में अपील",
          },
          {
            label: "Revision & Board of Revenue",
            desc: "Commissioner कोर्ट एवं Board of Revenue (राजस्व परिषद) में रिवीजन याचिकाएं",
          },
        ],
      },
    ],
  },
];

/* ────────── Static Params ────────── */

export function generateStaticParams() {
  return advocateProfiles.map((a) => ({ slug: a.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const adv = advocateProfiles.find((a) => a.slug === slug);
  if (!adv) return { title: "Advocate Not Found" };
  return {
    title: `${adv.name} | MK & Associates`,
    description: adv.bio,
  };
}

/* ────────── Page Component ────────── */

export default async function AdvocateProfilePage({ params }: Props) {
  const { slug } = await params;
  const adv = advocateProfiles.find((a) => a.slug === slug);
  if (!adv) notFound();

  const iconMap: Record<string, typeof Scale> = {
    "manoj-kumar-chaubey": Scale,
    "ashok-kumar-seth": Award,
    "madan-kumar-upadhyay": Briefcase,
    "nand-jee-kumar-upadhyay": Cpu,
  };

  const MainIcon = iconMap[adv.slug] || Scale;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#050505] border-b border-[#D4AF37]/15 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px]" />

        <div className="container-custom relative z-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#D4AF37] transition-colors mb-8 text-sm font-display tracking-wide"
          >
            <ArrowLeft size={16} />
            Back to Panel
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden border-[3px] border-[#D4AF37]/50 shadow-2xl shadow-[#D4AF37]/10">
                <Image
                  src={adv.photo}
                  alt={adv.name}
                  width={600}
                  height={750}
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "520px" }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex gap-0.5 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={14}
                        className="fill-[#D4AF37] text-[#D4AF37]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-5">
                <MainIcon size={14} className="text-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs font-display tracking-widest uppercase font-600">
                  {adv.role}
                </span>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl text-white font-bold mb-2">
                {adv.name}
              </h1>
              <p className="text-[#D4AF37]/60 font-serif text-lg mb-4">
                {adv.hindi}
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-serif text-5xl text-[#D4AF37] font-bold">
                  {adv.experience}
                </span>
                <span className="text-white/40 text-sm font-display tracking-wide">
                  {adv.unit} Exp.
                </span>
              </div>

              <p className="text-white/60 leading-relaxed mb-6">{adv.bio}</p>

              {adv.quote && (
                <blockquote className="border-l-2 border-[#D4AF37]/40 pl-4 mb-6">
                  <p className="text-[#D4AF37]/70 font-serif italic text-lg">
                    &quot;{adv.quote.text}&quot;
                  </p>
                  <p className="text-white/30 text-sm mt-1">
                    — {adv.quote.translation}
                  </p>
                </blockquote>
              )}

              <div className="flex flex-wrap gap-2 mb-8">
                {adv.specializations.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs font-display tracking-wide text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-gold">
                  Consult {adv.name.split(" ")[1]} {adv.name.split(" ").pop()}{" "}
                  <ArrowRight size={18} />
                </Link>

                {adv.socialLinks && adv.socialLinks.length > 0 && (
                  <div className="flex items-center gap-2">
                    {adv.socialLinks.map((s) => (
                      <a
                        key={s.platform}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${adv.name} on ${s.platform}`}
                        className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 hover:border-[#D4AF37] text-white/85 hover:text-[#D4AF37] text-xs font-display tracking-wide transition-all shadow-sm"
                      >
                        {s.platform === "Facebook" && (
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="text-[#D4AF37]">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        )}
                        {s.platform === "X" && (
                          <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" className="text-[#D4AF37]">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        )}
                        {s.platform === "WhatsApp" && (
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="text-[#D4AF37]">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        )}
                        <span>{s.handle || s.platform}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="section-label mb-3">
              Specialisation &amp; Practice Areas · विशेषज्ञता क्षेत्र
            </div>
            <h2 className="section-title">
              Detailed Specialisations &amp; <span>Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {adv.practiceAreas.map((cat) => (
              <div key={cat.title} className="glass-card p-7">
                <div className="flex items-center gap-3 mb-1">
                  <Gavel size={18} className="text-[#D4AF37]" />
                  <h3 className="font-serif text-xl text-white font-bold">
                    {cat.title}
                  </h3>
                </div>
                {cat.titleHi && (
                  <p className="text-[#D4AF37]/50 text-xs font-serif mb-5 ml-[30px]">
                    {cat.titleHi}
                  </p>
                )}

                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <CheckCircle
                        size={14}
                        className="text-[#D4AF37] shrink-0 mt-0.5"
                      />
                      <div>
                        <p className="text-white/80 text-sm font-medium">
                          {item.label}
                        </p>
                        <p className="text-white/40 text-xs leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#050505] border-t border-[#D4AF37]/10 text-center">
        <div className="container-custom max-w-2xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-6">
            <MainIcon size={24} className="text-[#D4AF37]" />
          </div>
          <h2 className="section-title mb-4">
            Consult <span>{adv.name}</span>
          </h2>
          <p className="text-white/50 mb-3">
            {adv.experience} years of experience. First consultation is free.
          </p>
          <p className="text-[#D4AF37]/60 font-serif italic mb-8">
            &quot;पहली परामर्श निःशुल्क। हम आपके साथ हैं।&quot;
          </p>
          <Link href="/contact" className="btn-gold">
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

```

---

### `app/services/page.tsx`
**Purpose:** Exhaustive legal practice areas catalog | **Language:** `tsx` | **Lines:** 236

```tsx
import Link from "next/link";
import {
  Scale,
  Briefcase,
  Shield,
  Heart,
  TrendingUp,
  Cpu,
  CheckCircle,
  ArrowRight,
  Globe,
  FileText,
  Medal,
  ClipboardList,
} from "lucide-react";

const services = [
  {
    id: "litigation",
    icon: Scale,
    title: "Civil & Criminal Litigation",
    hindi: "सिविल एवं आपराधिक वाद",
    tagline: "Fighting for Justice in Every Courtroom",
    items: [
      "Civil Litigation (सिविल वाद) – Property disputes, contracts, consumer grievances",
      "Criminal Litigation (आपराधिक वाद) – Bail, trial, appeals under IPC/BNS",
      "Service & Administrative Law (सेवा एवं प्रशासनिक कानून) – CCS/CCA rules, disciplinary proceedings",
      "Public Interest Litigation (जनहित याचिका) – Constitutional matters & PILs",
      "Writ Petitions before High Court & Supreme Court",
      "Appeals, revisions & SLPs",
    ],
    desc: "We represent clients at all levels of the Indian judicial system. From bail applications filed overnight to multi-year property battles in Civil Courts, our litigation team combines procedural expertise with aggressive courtroom advocacy.",
  },
  {
    id: "corporate",
    icon: Briefcase,
    title: "Corporate & Business Law",
    hindi: "कॉर्पोरेट एवं व्यापार कानून",
    tagline: "Empowering Businesses with Legal Clarity",
    items: [
      "Company incorporation & compliance (कंपनी पंजीकरण एवं अनुपालन)",
      "Drafting contracts, M&A agreements (अनुबंध एवं विलय समझौते)",
      "Regulatory advisory for startups & fintech (नियामक परामर्श)",
      "NCLT / NCLAT proceedings",
      "Director liability & corporate governance",
      "Due diligence & legal audits",
    ],
    desc: "From incorporating a startup to navigating complex mergers, we provide end-to-end corporate legal support. Our advisory services help businesses stay compliant while strategically scaling operations.",
  },
  {
    id: "ipr",
    icon: Shield,
    title: "Intellectual Property Rights",
    hindi: "बौद्धिक संपदा अधिकार",
    tagline: "Protect What You Create",
    items: [
      "Trademark registration & disputes (ट्रेडमार्क पंजीकरण एवं विवाद)",
      "Patent filing & enforcement (पेटेंट दाखिला एवं प्रवर्तन)",
      "Copyright protection (कॉपीराइट संरक्षण)",
      "Design registration & infringement",
      "Domain name & brand protection",
      "Licensing agreements & royalty disputes",
    ],
    desc: "In a knowledge economy, protecting your intellectual assets is paramount. We handle the full spectrum of IPR — from registration and licensing to litigation against infringers.",
  },
  {
    id: "family",
    icon: Heart,
    title: "Family & Personal Law",
    hindi: "पारिवारिक एवं व्यक्तिगत कानून",
    tagline: "Compassionate Counsel in Sensitive Matters",
    items: [
      "Divorce, custody, alimony (तलाक, अभिरक्षा, भरण-पोषण)",
      "Succession & wills (उत्तराधिकार एवं वसीयत)",
      "Domestic violence cases (घरेलू हिंसा मामले)",
      "Muslim, Hindu & Christian personal law matters",
      "Adoption & guardianship",
      "Maintenance & property settlement",
    ],
    desc: "Family disputes are emotionally sensitive and legally complex. We bring empathy and discretion to every family law matter while vigorously protecting our clients' rights and the best interests of children.",
  },
  {
    id: "tax",
    icon: TrendingUp,
    title: "Taxation & Financial Law",
    hindi: "कर एवं वित्तीय कानून",
    tagline: "Navigate Tax Complexity with Confidence",
    items: [
      "GST compliance & disputes (जीएसटी अनुपालन एवं विवाद)",
      "Income Tax compliance & scrutiny (आयकर अनुपालन)",
      "Tax structuring & litigation (कर संरचना एवं वाद)",
      "ITAT & High Court tax appeals",
      "Search & seizure matters",
      "Black money & benami property cases",
    ],
    desc: "Tax law requires precision and deep knowledge of ever-changing regulations. Our tax practice covers compliance, advisory, and aggressive representation before tax authorities and appellate tribunals.",
  },
  {
    id: "emerging",
    icon: Cpu,
    title: "Specialized & Emerging Fields",
    hindi: "विशेष एवं उभरते क्षेत्र",
    tagline: "Cutting-Edge Law for the Digital Age",
    items: [
      "Cyber Law & Data Privacy (साइबर कानून एवं डेटा गोपनीयता)",
      "Environmental Law (पर्यावरण कानून)",
      "Consumer Protection (उपभोक्ता संरक्षण)",
      "Arbitration & Mediation (मध्यस्थता एवं पंचाट)",
      "RERA & Real Estate disputes",
      "Banking & NBFC regulatory matters",
    ],
    desc: "The law is constantly evolving. We stay ahead of emerging legal frontiers — from cybercrime prosecution to environmental compliance — ensuring clients have a trusted guide in uncharted legal territory.",
  },
  {
    id: "service-matters",
    icon: ClipboardList,
    title: "Service Matters & Government Law",
    hindi: "सेवा मामले एवं सरकारी कानून",
    tagline: "Protecting the Rights of Government Servants",
    items: [
      "Increments — stagnation increment disputes & recovery challenges (वेतन वृद्धि विवाद)",
      "Medical Pension — disability pension, invalid pension & CGHS matters (चिकित्सा पेंशन)",
      "Promotion — DPC irregularities, seniority disputes & zone of consideration (पदोन्नति विवाद)",
      "Posting & Transfer — arbitrary transfers, hardship postings & stay orders (पोस्टिंग एवं स्थानांतरण)",
      "CCS Conduct Rules — charge sheet defence, major/minor penalty proceedings (सीसीएस आचरण नियम)",
      "Departmental Enquiry & Appeal — representation before appellate authority & CAT",
    ],
    desc: "Government servants face unique legal challenges that require specialised knowledge of service law. Our panel has deep expertise in Central Civil Services rules, Administrative Tribunals, and High Court writs — ensuring every public servant gets the vigorous defence they deserve.",
  },
  {
    id: "armed-forces",
    icon: Medal,
    title: "Armed Forces Law",
    hindi: "सशस्त्र बल कानून",
    tagline: "Defending Those Who Defend the Nation",
    items: [
      "Court Martial — Summary, District & General Court Martial defence (कोर्ट मार्शल)",
      "Armed Forces Tribunal (AFT) — appeals & original applications (सशस्त्र बल न्यायाधिकरण)",
      "Criminal matters under Army Act / Air Force Act / Navy Act",
      "Administrative proceedings — compulsory retirement & dismissal challenges",
      "Pension & gratuity disputes for ex-servicemen & widows (पेंशन एवं अनुग्रह राशि)",
      "Disability pension, ECHS entitlements & service record corrections",
    ],
    desc: "Armed Forces personnel face a distinct legal framework that civilian advocates rarely understand. With expertise spanning the Army Act, Air Force Act, and Navy Act — as well as the Armed Forces Tribunal — our panel provides fearless, specialised representation to servicemen, ex-servicemen, and their families.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#050505] border-b border-[#D4AF37]/15">
        <div className="container-custom text-center">
          <div className="section-label mb-4">What We Do · हमारी सेवाएं</div>
          <h1 className="section-title mb-4">
            Comprehensive <span>Legal Services</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto">
            Eight core practice areas — from civil litigation to Armed Forces law.
            Decades of expertise. One trusted panel by your side.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom space-y-24">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start pb-16 border-b border-white/10 last:border-0"
            >
              {/* Content */}
              <div>
                <div className="w-14 h-14 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                  <service.icon size={26} className="text-[#D4AF37]" />
                </div>
                <div className="section-label mb-2">{service.hindi}</div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-[#D4AF37]/70 font-serif italic mb-4">
                  {service.tagline}
                </p>
                <div className="gold-divider mb-5" />
                <p className="text-white/55 leading-relaxed mb-7">
                  {service.desc}
                </p>
                <Link href="/contact" className="btn-gold text-sm">
                  Consult Now <ArrowRight size={16} />
                </Link>
              </div>

              {/* Checklist */}
              <div className="glass-card p-7 border border-[#D4AF37]/20 shadow-lg">
                <div className="flex items-center gap-2 mb-5">
                  <service.icon size={18} className="text-[#D4AF37]" />
                  <h3 className="font-display text-sm font-600 tracking-widest text-[#D4AF37] uppercase">
                    What&apos;s Covered · {service.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={16}
                        className="text-[#D4AF37] shrink-0 mt-0.5"
                      />
                      <span className="text-white/65 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#050505] border-t border-[#D4AF37]/10 text-center">
        <div className="container-custom">
          <h2 className="section-title mb-4">
            Need Legal Help? <span>Let&apos;s Talk.</span>
          </h2>
          <p className="text-white/50 mb-8">
            Free first consultation. Confidential. No obligation.
          </p>
          <Link href="/contact" className="btn-gold">
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

```

---

### `app/contact/page.tsx`
**Purpose:** Contact information, maps & appointment booking form | **Language:** `tsx` | **Lines:** 547

```tsx
"use client";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const practiceAreas = [
  "Civil Litigation",
  "Criminal Defense",
  "Corporate Law",
  "Intellectual Property",
  "Family Law",
  "Tax Law",
  "Cyber Law",
  "Arbitration",
  "Service & Administrative Law",
  "PIL (Public Interest Litigation)",
  "Other",
];

const offices = [
  {
    city: "New Delhi (Main Office)",
    hindi: "नई दिल्ली",
    address:
      "K-4/3, Third Floor, K4, Mohan Garden, Uttam Nagar, New Delhi – 110059",
    phones: ["9305592322", "9341943353", "7200151400"],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.0590!3d28.6215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d052a5a5a5a5a%3A0x5a5a5a5a5a5a5a5a!2sMohan%20Garden%2C%20Uttam%20Nagar%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1695000000000",
  },
  {
    city: "Varanasi, UP",
    hindi: "वाराणसी",
    address:
      "AN 455, Dhanwantari Nagar, Near Gupta General Store, Varanasi, Uttar Pradesh",
    phones: ["9305592322", "9341943353", "7200151400"],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.0!2d82.9739!3d25.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2df5e7a7a7a7%3A0xa7a7a7a7a7a7a7a7!2sDhanwantari%20Nagar%2C%20Varanasi!5e0!3m2!1sen!2sin!4v1695000000001",
  },
  {
    city: "Kaimur (Bhabua), Bihar",
    hindi: "कैमूर (भभुआ)",
    address:
      "Vill. Jagdishpur, Post Dangari, Police Station Kudra, Dist. Kaimur (Bhabua), Bihar – 821109",
    phones: ["9507892670", "9305592322", "9341943353"],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.0!2d83.6094!3d25.0453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d890d0d0d0d0d%3A0x0d0d0d0d0d0d0d0d!2sKaimur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1695000000002",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
    consultationType: "in-person",
    preferredOffice: "New Delhi",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [activeOffice, setActiveOffice] = useState(0);

  const [submittedData, setSubmittedData] = useState<{
    whatsappUrl: string;
    bookingId?: string;
    name: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Construct formatted WhatsApp message for Adv. Madan Kumar Upadhyay (+91 9305592322)
    const waText =
      `*New Appointment Request — MK Associates*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Client Name:* ${form.name}\n` +
      `📞 *Phone Number:* ${form.phone}\n` +
      `📧 *Email:* ${form.email || "Not provided"}\n` +
      `⚖️ *Practice Area:* ${form.area || "General Legal Matter"}\n` +
      `🏢 *Preferred Office:* ${form.preferredOffice}\n` +
      `📅 *Preferred Date:* ${form.preferredDate || "Earliest Available"}\n` +
      `⏰ *Time Slot:* ${form.preferredTime || "Anytime"}\n` +
      `🗣️ *Consultation Mode:* ${form.consultationType}\n` +
      `💬 *Case Brief:* ${form.message || "Consultation requested"}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `_Sent directly via MK Associates Website Portal_`;

    const waUrl = `https://wa.me/919305592322?text=${encodeURIComponent(waText)}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json().catch(() => ({}));

      setSubmittedData({
        whatsappUrl: json.whatsappUrl || waUrl,
        bookingId: json.bookingId || `BK-${Date.now()}`,
        name: form.name,
      });

      setStatus("success");
      // Try opening WhatsApp in new tab
      if (typeof window !== "undefined") {
        window.open(json.whatsappUrl || waUrl, "_blank");
      }
    } catch {
      // Direct WhatsApp fallback: ensure lead is NEVER lost
      setSubmittedData({
        whatsappUrl: waUrl,
        bookingId: `BK-${Date.now()}`,
        name: form.name,
      });
      setStatus("success");
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank");
      }
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#050505] border-b border-[#D4AF37]/15">
        <div className="container-custom text-center">
          <div className="section-label mb-4">Contact Us · संपर्क करें</div>
          <h1 className="section-title mb-4">
            Book Your <span>Free Consultation</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            First consultation is free. Three offices across India — Delhi,
            Varanasi & Kaimur.
            <br />
            <span className="text-[#D4AF37]/60 text-sm">
              पहली परामर्श निःशुल्क। दिल्ली, वाराणसी एवं कैमूर में कार्यालय।
            </span>
          </p>

          {/* Quick contact strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            {[
              { num: "9305592322", label: "Primary" },
              { num: "9341943353", label: "Secondary" },
              { num: "7200151400", label: "Alternate" },
            ].map((p) => (
              <a
                key={p.num}
                href={`tel:+91${p.num}`}
                className="flex items-center gap-2 text-white/70 hover:text-[#D4AF37] transition-colors"
              >
                <Phone size={14} className="text-[#D4AF37]" />
                <span className="font-display text-sm">+91 {p.num}</span>
                <span className="text-white/30 text-xs">({p.label})</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Office Tabs */}
      <section className="py-8 bg-[#050505] border-b border-[#D4AF37]/10">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {offices.map((office, i) => (
              <button
                key={office.city}
                onClick={() => setActiveOffice(i)}
                className={`px-5 py-2 rounded-full text-xs font-display font-600 uppercase tracking-wider border transition-all ${
                  activeOffice === i
                    ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                    : "border-[#D4AF37]/30 text-white/50 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                }`}
              >
                {office.city}
              </button>
            ))}
          </div>

          {/* Active office map */}
          <div className="mt-6 rounded-lg overflow-hidden border border-[#D4AF37]/20 h-52">
            <iframe
              key={activeOffice}
              src={offices[activeOffice].mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-3 flex items-start gap-2">
            <MapPin size={14} className="text-[#D4AF37] mt-0.5 shrink-0" />
            <p className="text-white/60 text-sm">
              {offices[activeOffice].address}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-5">
            <div>
              <div className="section-label mb-2">Get in Touch</div>
              <h2 className="font-serif text-2xl text-white mb-4">
                We&apos;re Here to Help
              </h2>
              <div className="gold-divider mb-5" />
            </div>

            {/* Phone numbers */}
            <div className="glass-card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[#D4AF37] text-xs font-display font-600 tracking-wider uppercase mb-1">
                  Call / WhatsApp
                </p>
                {[
                  { num: "9305592322", label: "Primary & WhatsApp" },
                  { num: "9341943353", label: "Secondary" },
                  { num: "7200151400", label: "Alternate" },
                  { num: "9507892670", label: "Bihar Office" },
                ].map((p) => (
                  <a
                    key={p.num}
                    href={`tel:+91${p.num}`}
                    className="block text-white text-sm hover:text-[#D4AF37] transition-colors"
                  >
                    +91 {p.num}{" "}
                    <span className="text-white/30 text-xs">({p.label})</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="glass-card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[#D4AF37] text-xs font-display font-600 tracking-wider uppercase mb-1">
                  Email
                </p>
                <a
                  href="mailto:maddydragon85@gmail.com"
                  className="text-white/80 hover:text-white text-sm"
                >
                  maddydragon85@gmail.com
                </a>
                <p className="text-white/30 text-xs">Reply within 24 hours</p>
              </div>
            </div>

            {/* Offices */}
            {offices.map((office) => (
              <div
                key={office.city}
                className="glass-card p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[#D4AF37] text-xs font-display font-600 tracking-wider uppercase mb-0.5">
                    {office.city}{" "}
                    <span className="text-[#D4AF37]/40">· {office.hindi}</span>
                  </p>
                  <p className="text-white/60 text-xs leading-relaxed">
                    {office.address}
                  </p>
                </div>
              </div>
            ))}

            {/* Hours */}
            <div className="glass-card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                <Clock size={18} className="text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[#D4AF37] text-xs font-display font-600 tracking-wider uppercase mb-1">
                  Office Hours
                </p>
                <p className="text-white text-sm">Monday – Saturday</p>
                <p className="text-white/40 text-xs">9:00 AM – 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8">
              <h2 className="font-serif text-2xl text-white mb-2">
                Appointment Booking Form
              </h2>
              <p className="text-[#D4AF37]/60 text-sm font-display mb-6">
                परामर्श बुकिंग फॉर्म — MK Associates
              </p>

              {status === "success" && submittedData && (
                <div className="bg-[#120E0A] border-2 border-[#D4AF37] rounded-xl p-6 mb-8 shadow-[0_0_30px_rgba(212,175,55,0.25)]">
                  <div className="flex items-center gap-3 text-green-400 font-bold text-lg mb-2">
                    <CheckCircle size={24} className="text-green-400 shrink-0" />
                    <span>Appointment Prepared Successfully!</span>
                  </div>
                  <p className="text-white/80 text-sm mb-3">
                    Thank you, <strong className="text-white">{submittedData.name}</strong>. Your consultation details have been compiled for MK Associates (Ref: #{submittedData.bookingId}).
                  </p>
                  <p className="text-[#D4AF37] text-xs font-semibold mb-4">
                    WhatsApp is opening in a new tab. If it did not open automatically, click the button below to send your appointment directly to Adv. Madan Kumar Upadhyay:
                  </p>
                  <a
                    href={submittedData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-bold w-full uppercase tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                  >
                    💬 Send to WhatsApp (+91 93055 92322) ↗
                  </a>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className="form-input"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="form-input"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="form-input"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label" htmlFor="area">
                      Legal Matter / Practice Area
                    </label>
                    <select
                      id="area"
                      className="form-input"
                      value={form.area}
                      onChange={(e) =>
                        setForm({ ...form, area: e.target.value })
                      }
                    >
                      <option value="">Select area of law...</option>
                      {practiceAreas.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="office">
                      Preferred Office
                    </label>
                    <select
                      id="office"
                      className="form-input"
                      value={form.preferredOffice}
                      onChange={(e) =>
                        setForm({ ...form, preferredOffice: e.target.value })
                      }
                    >
                      <option>New Delhi (Uttam Nagar)</option>
                      <option>Varanasi, UP</option>
                      <option>Kaimur (Bhabua), Bihar</option>
                      <option>Video Call / Online</option>
                      <option>Phone Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label" htmlFor="date">
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      className="form-input"
                      value={form.preferredDate}
                      onChange={(e) =>
                        setForm({ ...form, preferredDate: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="time">
                      Preferred Time Slot
                    </label>
                    <select
                      id="time"
                      className="form-input"
                      value={form.preferredTime}
                      onChange={(e) =>
                        setForm({ ...form, preferredTime: e.target.value })
                      }
                    >
                      <option value="">Select time slot...</option>
                      <option>9:00 AM – 10:00 AM</option>
                      <option>10:00 AM – 11:00 AM</option>
                      <option>11:00 AM – 12:00 PM</option>
                      <option>12:00 PM – 1:00 PM</option>
                      <option>2:00 PM – 3:00 PM</option>
                      <option>3:00 PM – 4:00 PM</option>
                      <option>4:00 PM – 5:00 PM</option>
                      <option>5:00 PM – 6:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Consultation Type */}
                <div>
                  <label className="form-label">Consultation Type</label>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {[
                      { val: "in-person", label: "In-Person" },
                      { val: "video", label: "Video Call" },
                      { val: "phone", label: "Phone" },
                    ].map((type) => (
                      <label
                        key={type.val}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="consultationType"
                          value={type.val}
                          checked={form.consultationType === type.val}
                          onChange={() =>
                            setForm({
                              ...form,
                              consultationType: type.val,
                            })
                          }
                          className="accent-[#D4AF37]"
                        />
                        <span className="text-white/60 text-sm">
                          {type.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="message">
                    Brief Description of Your Matter
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Briefly describe your legal issue or query..."
                    className="form-input resize-none"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full justify-center text-sm py-3.5 font-bold uppercase tracking-wider"
                  disabled={status === "loading"}
                >
                  {status === "loading"
                    ? "Preparing Appointment..."
                    : "Book & Send via WhatsApp (+91 9305592322) ↗"}
                </button>

                <p className="text-white/30 text-xs text-center">
                  Your information is confidential and protected by
                  attorney-client privilege. We will respond via WhatsApp/call
                  within 2 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

```

---

### `app/portal/page.tsx`
**Purpose:** Client case intake & triage portal | **Language:** `tsx` | **Lines:** 344

```tsx
"use client";
import { useState } from "react";
import { FileText, Calendar, Bell, LogOut, User, Eye, Download, Scale, AlertCircle, CheckCircle, Clock, ChevronRight } from "lucide-react";

// Mock data for demo
const mockCases = [
  {
    id: "RS-2024-001",
    title: "Property Dispute vs. ABC Builders",
    type: "Civil Litigation",
    court: "Delhi District Court",
    filed: "Jan 15, 2024",
    nextHearing: "Oct 10, 2026",
    status: "active",
    stage: "Arguments",
    updates: [
      { date: "Sep 18, 2026", text: "Arguments concluded. Judgment reserved.", type: "important" },
      { date: "Aug 5, 2026", text: "Written arguments submitted by both parties.", type: "normal" },
      { date: "Jun 20, 2026", text: "Cross-examination of respondent witnesses completed.", type: "normal" },
    ],
  },
  {
    id: "RS-2025-007",
    title: "Trademark Registration — BrandX",
    type: "IPR",
    court: "Trademark Registry, Delhi",
    filed: "Mar 3, 2025",
    nextHearing: "Nov 1, 2026",
    status: "active",
    stage: "Examination",
    updates: [
      { date: "Sep 1, 2026", text: "Office action received. Response being prepared.", type: "important" },
      { date: "Jul 15, 2026", text: "Application accepted for examination.", type: "normal" },
    ],
  },
  {
    id: "RS-2023-018",
    title: "GST Appeal — Tax Demand 2021-22",
    type: "Tax Law",
    court: "ITAT Delhi",
    filed: "Nov 20, 2023",
    nextHearing: "–",
    status: "closed",
    stage: "Decided",
    updates: [
      { date: "Jul 30, 2026", text: "Order received. Demand quashed in favour of client. ✓", type: "success" },
      { date: "May 10, 2026", text: "Final hearing held.", type: "normal" },
    ],
  },
];

const documents = [
  { name: "Vakalatnama_RS-2024-001.pdf", size: "185 KB", date: "Jan 15, 2024", case: "RS-2024-001" },
  { name: "Plaint_Property_Case.pdf", size: "1.2 MB", date: "Jan 15, 2024", case: "RS-2024-001" },
  { name: "TM_Application_BrandX.pdf", size: "430 KB", date: "Mar 3, 2025", case: "RS-2025-007" },
  { name: "ITAT_Order_Favourable.pdf", size: "820 KB", date: "Jul 30, 2026", case: "RS-2023-018" },
];

export default function PortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ caseId: "", dob: "" });
  const [activeTab, setActiveTab] = useState("cases");
  const [loginError, setLoginError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo login: accept any case ID + DOB
    if (loginForm.caseId && loginForm.dob) {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Please enter your Case ID and Date of Birth.");
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <section className="pt-32 pb-16 bg-[#050505] border-b border-[#D4AF37]/15">
          <div className="container-custom text-center">
            <div className="section-label mb-4">Client Portal · मुवक्किल पोर्टल</div>
            <h1 className="section-title mb-4">
              Track Your <span>Case</span>
            </h1>
            <p className="text-white/50 max-w-xl mx-auto">
              Access your case status, hearing dates, court orders, and documents — 24/7.
            </p>
          </div>
        </section>

        <section className="py-24 bg-[#0a0a0a] flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="glass-card p-8">
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-6">
                <Scale size={24} className="text-[#D4AF37]" />
              </div>
              <h2 className="font-serif text-2xl text-white text-center mb-1">
                Client Login
              </h2>
              <p className="text-white/40 text-sm text-center mb-7">
                Enter your Case ID and Date of Birth to access your portal
              </p>

              {loginError && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded mb-5">
                  <AlertCircle size={16} />
                  {loginError}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="form-label" htmlFor="caseId">Case ID / Client ID</label>
                  <input
                    id="caseId"
                    type="text"
                    placeholder="e.g., RS-2024-001"
                    className="form-input"
                    value={loginForm.caseId}
                    onChange={(e) => setLoginForm({ ...loginForm, caseId: e.target.value })}
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="dob">Date of Birth</label>
                  <input
                    id="dob"
                    type="date"
                    className="form-input"
                    value={loginForm.dob}
                    onChange={(e) => setLoginForm({ ...loginForm, dob: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn-gold w-full justify-center">
                  Access Portal
                </button>
              </form>

              <p className="text-white/30 text-xs text-center mt-5">
                Don&apos;t have access? <a href="/contact" className="text-[#D4AF37] hover:underline">Contact us</a> to get your Client ID.
              </p>

              {/* Demo hint */}
              <div className="mt-5 p-3 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded text-center">
                <p className="text-[#D4AF37]/70 text-xs">
                  Demo: Enter any Case ID + Date to explore the portal
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Portal Dashboard
  return (
    <>
      <section className="pt-28 pb-8 bg-[#050505] border-b border-[#D4AF37]/15">
        <div className="container-custom flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="section-label mb-1">Client Portal</div>
            <h1 className="font-serif text-3xl text-white">
              Welcome back, <span className="text-gradient">Client</span>
            </h1>
            <p className="text-white/40 text-sm mt-1">
              {new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 text-white/50 hover:text-red-400 transition-colors text-sm"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </section>

      <section className="py-10 bg-[#0a0a0a]">
        <div className="container-custom">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Active Cases", value: "2", icon: Scale, color: "text-[#D4AF37]" },
              { label: "Next Hearing", value: "Oct 10", icon: Calendar, color: "text-blue-400" },
              { label: "Documents", value: "4", icon: FileText, color: "text-purple-400" },
              { label: "New Updates", value: "3", icon: Bell, color: "text-green-400" },
            ].map((s) => (
              <div key={s.label} className="portal-card">
                <s.icon size={20} className={`${s.color} mb-2`} />
                <div className="font-serif text-2xl text-white font-bold">{s.value}</div>
                <div className="text-white/40 text-xs">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-white/10 mb-8">
            {[
              { id: "cases", label: "My Cases", icon: Scale },
              { id: "documents", label: "Documents", icon: FileText },
              { id: "profile", label: "Profile", icon: User },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 pb-3 text-sm font-display font-600 tracking-wide transition-all ${
                  activeTab === tab.id ? "tab-active" : "tab-inactive"
                }`}
              >
                <tab.icon size={15} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cases Tab */}
          {activeTab === "cases" && (
            <div className="space-y-6">
              {mockCases.map((c) => (
                <div key={c.id} className="portal-card">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="badge text-[0.65rem]">{c.id}</span>
                        <span
                          className={`status-badge ${
                            c.status === "active"
                              ? "status-active"
                              : "status-closed"
                          }`}
                        >
                          {c.status}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg text-white">{c.title}</h3>
                      <p className="text-[#D4AF37]/60 text-xs font-display mt-1">
                        {c.type} · {c.court}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-white/40 text-xs">Next Hearing</p>
                      <p className="text-white font-semibold text-sm">{c.nextHearing}</p>
                      <p className="text-[#D4AF37]/60 text-xs mt-1">Stage: {c.stage}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-4">
                    <p className="text-white/40 text-xs font-display uppercase tracking-wider mb-3">
                      Recent Updates
                    </p>
                    <div className="space-y-2.5">
                      {c.updates.map((u, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="mt-0.5 shrink-0">
                            {u.type === "success" ? (
                              <CheckCircle size={14} className="text-green-400" />
                            ) : u.type === "important" ? (
                              <AlertCircle size={14} className="text-[#D4AF37]" />
                            ) : (
                              <Clock size={14} className="text-white/30" />
                            )}
                          </div>
                          <div>
                            <p className="text-white/30 text-xs">{u.date}</p>
                            <p className="text-white/65 text-sm">{u.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === "documents" && (
            <div className="space-y-3">
              {documents.map((doc) => (
                <div
                  key={doc.name}
                  className="portal-card flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-[#D4AF37]/10 flex items-center justify-center">
                      <FileText size={18} className="text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{doc.name}</p>
                      <p className="text-white/40 text-xs">
                        {doc.size} · {doc.date} · Case {doc.case}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                      <Eye size={14} className="text-white/50" />
                    </button>
                    <button className="w-8 h-8 rounded bg-[#D4AF37]/10 flex items-center justify-center hover:bg-[#D4AF37]/20 transition-colors">
                      <Download size={14} className="text-[#D4AF37]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="portal-card p-7 max-w-xl">
              <div className="flex items-center gap-5 mb-7">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <User size={28} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h2 className="font-serif text-xl text-white">Client Profile</h2>
                  <p className="text-white/40 text-sm">ID: {loginForm.caseId}</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Advocate", value: "Adv. Rahul Sharma" },
                  { label: "Total Cases", value: "3 (2 Active, 1 Closed)" },
                  { label: "Next Hearing", value: "October 10, 2026" },
                  { label: "Chamber", value: "No. 123, Delhi District Court" },
                  { label: "Support", value: "+91 99999 99999" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center border-b border-white/5 pb-3"
                  >
                    <span className="text-white/40 text-sm">{item.label}</span>
                    <span className="text-white text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

```

---

### `app/blog/page.tsx`
**Purpose:** Legal thought leadership publication hub | **Language:** `tsx` | **Lines:** 174

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Tag, ExternalLink } from "lucide-react";
import { articles } from "@/data/articles";

const categories = [
  "All",
  "Criminal Law",
  "Civil Law",
  "Tax Law",
  "IPR",
  "Constitutional Law",
  "Cyber Law",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#050505] border-b border-[#D4AF37]/15">
        <div className="container-custom text-center">
          <div className="section-label mb-4">
            Legal Insights · कानूनी जानकारी
          </div>
          <h1 className="section-title mb-4">
            Know Your <span>Rights</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Expert analysis, simplified. Stay updated on Indian law, court
            judgments, and legal rights.
          </p>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-10 bg-[#050505] border-b border-[#D4AF37]/10">
        <div className="container-custom">
          <div className="glass-card p-6 flex flex-col md:flex-row items-center gap-5">
            <div className="flex-1">
              <h3 className="font-serif text-xl text-white mb-1">
                Legal Updates to Your Inbox
              </h3>
              <p className="text-white/50 text-sm">
                Subscribe to our newsletter for weekly legal insights.
                <span className="text-[#D4AF37]/70 ml-1">
                  साप्ताहिक कानूनी जानकारी पाएं।
                </span>
              </p>
            </div>
            <form
              className="flex gap-3 w-full md:w-auto"
              action="/api/newsletter"
              method="POST"
            >
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="form-input md:w-64"
                required
              />
              <button type="submit" className="btn-gold whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          {/* Interactive Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-display font-600 uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    : "border border-[#D4AF37]/30 text-white/60 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredArticles.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-card group block cursor-pointer"
                title={`Open "${post.title}" in new tab`}
              >
                <div className="h-48 relative overflow-hidden bg-black/40">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                    <span className="badge text-[0.6rem] bg-black/70 backdrop-blur-sm border-[#D4AF37]/50">
                      {post.category}
                    </span>
                    <span className="bg-black/70 backdrop-blur-sm p-1 rounded text-white/70 group-hover:text-[#D4AF37] transition-colors">
                      <ExternalLink size={12} />
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-white/40 text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} className="text-[#D4AF37]" />
                      {post.date}
                    </span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-lg text-white mb-1 group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-[#D4AF37]/70 text-xs font-display mb-3">
                    {post.hindi}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 text-[0.65rem] text-white/40 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                      >
                        <Tag size={9} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <span className="flex items-center gap-1.5 text-[#D4AF37] group-hover:text-white transition-colors text-xs font-display font-600 uppercase tracking-wider">
                      Read Full Article <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[0.65rem] text-white/30 font-display">
                      Opens in new tab ↗
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

```

---

### `app/blog/[slug]/page.tsx`
**Purpose:** Full legal article reader & analysis renderer | **Language:** `tsx` | **Lines:** 259

```tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Tag,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | MK Associates",
    };
  }

  return {
    title: `${article.title} | MK Associates`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | MK Associates`,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <article className="min-h-screen bg-[#050505] pt-32 pb-24 text-white">
      <div className="container-custom max-w-4xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:underline"
          >
            <ArrowLeft size={16} />
            Back to All Articles / सभी लेख
          </Link>
          <span className="badge text-xs uppercase tracking-wider">
            {article.category}
          </span>
        </div>

        {/* Article Header */}
        <header className="mb-10 pb-8 border-b border-white/10">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-[#D4AF37] text-lg font-display mb-6">
            {article.hindi}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
            <div className="flex items-center gap-1.5">
              <User size={14} className="text-[#D4AF37]" />
              <span className="font-semibold text-white">{article.author}</span>
              <span className="text-white/40 hidden sm:inline">
                ({article.authorRole})
              </span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-[#D4AF37]" />
              <span>{article.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#D4AF37]" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Banner Image */}
        <div className="relative h-64 sm:h-80 md:h-[400px] w-full rounded-2xl overflow-hidden mb-10 border border-[#D4AF37]/30 shadow-[0_0_35px_rgba(212,175,55,0.15)] bg-black/60">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 z-10">
            <span className="badge text-xs uppercase tracking-wider bg-black/80 backdrop-blur-md border-[#D4AF37]">
              {article.category}
            </span>
            <span className="text-white/80 text-xs bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Lead Excerpt */}
        <div className="glass-card p-6 mb-10 border-l-4 border-l-[#D4AF37]">
          <p className="text-white/90 text-base sm:text-lg leading-relaxed italic font-serif">
            &quot;{article.excerpt}&quot;
          </p>
        </div>

        {/* Main Article Content */}
        <div className="space-y-10 text-white/80 leading-relaxed text-base sm:text-lg">
          {article.content.map((section, index) => (
            <section key={index} className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white text-gradient-light pt-2">
                {section.heading}
              </h2>
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              ))}
              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="list-disc list-inside space-y-2 pl-2 text-white/85">
                  {section.bulletPoints.map((point, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap gap-2">
          <span className="text-xs text-white/40 flex items-center gap-1 mr-2">
            <Tag size={12} /> Tags:
          </span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/5 border border-white/10 text-xs px-3 py-1 rounded-full text-white/60"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-8 p-5 rounded-xl bg-[#0D0B09] border border-[#D4AF37]/20 flex items-start gap-3.5">
          <ShieldAlert size={20} className="text-[#D4AF37] shrink-0 mt-0.5" />
          <div className="text-xs text-white/50 leading-relaxed">
            <strong className="text-[#D4AF37] block mb-1">
              Legal Disclaimer / कानूनी सूचना:
            </strong>
            {article.legalDisclaimer}
          </div>
        </div>

        {/* Consultation Callout CTA Box */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#1B120E] via-black to-[#0A0806] border border-[#D4AF37]/40 shadow-[0_0_30px_rgba(212,175,55,0.15)] text-center">
          <h3 className="font-serif text-2xl text-white mb-2">
            Facing a similar legal challenge?
          </h3>
          <p className="text-white/70 text-sm max-w-xl mx-auto mb-6">
            Consult the experienced advocates at MK Associates. Our panel represents
            clients in District Courts, High Courts & Supreme Court of India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/919305592322?text=Hello%20MK%20Associates%2C%20I%20read%20your%20article%20%22${encodeURIComponent(
                article.title
              )}%22%20and%20need%20legal%20guidance.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm py-3 px-6"
            >
              WhatsApp Us · +91 93055 92322
            </a>
            <Link
              href="/contact"
              className="btn-outline text-sm py-3 px-6"
            >
              Book an Appointment <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="font-serif text-xl text-white mb-6">
            More Legal Insights · अन्य कानूनी लेख
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-card overflow-hidden block group"
              >
                <div className="h-40 relative overflow-hidden bg-black/50">
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 badge text-[0.6rem] bg-black/70 backdrop-blur-sm">
                    {rel.category}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-lg text-white group-hover:text-[#D4AF37] transition-colors mb-2 line-clamp-2 leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-white/50 line-clamp-2 mb-4">
                    {rel.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-[#D4AF37] font-semibold">
                    Read in New Tab <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

```

---

## Backend API Microservices & Data Layer

### `app/api/contact/route.ts`
**Purpose:** Serverless appointment intake & validation | **Language:** `typescript` | **Lines:** 71

```typescript
import { NextRequest, NextResponse } from "next/server";

// In-memory store for active session/server lifetime
const bookingsStore: Record<string, unknown>[] = [];

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Validate required fields
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    const booking = {
      id: `BK-${Date.now()}`,
      timestamp: new Date().toISOString(),
      status: "pending",
      ...data,
    };

    // Save to in-memory store & log for monitoring
    bookingsStore.push(booking);
    console.log("=== NEW APPOINTMENT BOOKING ===");
    console.log(JSON.stringify(booking, null, 2));

    // Construct formatted WhatsApp message for Adv. Madan Kumar Upadhyay (+91 9305592322)
    const whatsappText =
      `*New Appointment Request — MK Associates*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Client Name:* ${booking.name}\n` +
      `📞 *Phone Number:* ${booking.phone}\n` +
      `📧 *Email:* ${booking.email || "Not provided"}\n` +
      `⚖️ *Practice Area:* ${booking.area || "General Legal Matter"}\n` +
      `🏢 *Preferred Office:* ${booking.preferredOffice || "New Delhi"}\n` +
      `📅 *Date:* ${booking.preferredDate || "Earliest Available"}\n` +
      `⏰ *Time Slot:* ${booking.preferredTime || "Anytime"}\n` +
      `🗣️ *Mode:* ${booking.consultationType || "Phone"}\n` +
      `💬 *Case Brief:* ${booking.message || "Consultation requested"}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Booking ID: ${booking.id}\n` +
      `_Sent directly via MK Associates Website Portal_`;

    const whatsappUrl = `https://wa.me/919305592322?text=${encodeURIComponent(
      whatsappText
    )}`;

    return NextResponse.json(
      {
        success: true,
        bookingId: booking.id,
        whatsappUrl,
        message: "Appointment prepared successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ bookings: bookingsStore });
}

```

---

### `app/api/newsletter/route.ts`
**Purpose:** Serverless newsletter subscription handler | **Language:** `typescript` | **Lines:** 36

```typescript
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const email = formData.get("email") as string;

    if (!email || !email.includes("@")) {
      return NextResponse.redirect(new URL("/blog?newsletter=error", req.url));
    }

    const filePath = path.join(process.cwd(), "data", "newsletter.json");

    if (!fs.existsSync(path.join(process.cwd(), "data"))) {
      fs.mkdirSync(path.join(process.cwd(), "data"));
    }

    let subscribers: { email: string; subscribedAt: string }[] = [];
    if (fs.existsSync(filePath)) {
      subscribers = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }

    // Avoid duplicates
    if (!subscribers.find((s) => s.email === email)) {
      subscribers.push({ email, subscribedAt: new Date().toISOString() });
      fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2));
    }

    return NextResponse.redirect(new URL("/blog?newsletter=success", req.url));
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.redirect(new URL("/blog?newsletter=error", req.url));
  }
}

```

---

### `data/articles.ts`
**Purpose:** Complete legal database with all 6 articles | **Language:** `typescript` | **Lines:** 334

```typescript
export interface Article {
  id: number;
  slug: string;
  title: string;
  hindi: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  authorRole: string;
  image: string;
  tags: string[];
  excerpt: string;
  content: {
    heading: string;
    paragraphs: string[];
    bulletPoints?: string[];
  }[];
  legalDisclaimer: string;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "understanding-bns-2023-key-changes-from-ipc",
    title: "Understanding BNS 2023: Key Changes from IPC",
    hindi: "भारतीय न्याय संहिता 2023: आईपीसी से प्रमुख बदलाव एवं कानूनी प्रभाव",
    date: "September 15, 2026",
    category: "Criminal Law",
    readTime: "7 min read",
    author: "Adv. Manoj Kumar Chaubey",
    authorRole: "Senior Partner · 40 Years Trial & Appellate Practice",
    image: "/blog/bns.jpg",
    tags: ["BNS 2023", "IPC", "Criminal Law", "Bail Provisions", "Legal Reform"],
    excerpt:
      "The Bharatiya Nyaya Sanhita (BNS) 2023 has overhauled India's penal framework. This comprehensive analysis breaks down critical modifications in bail norms, definitions of offences, community service provisions, and procedural rights.",
    content: [
      {
        heading: "1. The Transition from IPC 1860 to Bharatiya Nyaya Sanhita",
        paragraphs: [
          "On July 1, 2024, the historical Indian Penal Code (1860) was replaced by the Bharatiya Nyaya Sanhita (BNS) 2023. This is not merely a change of section numbers; it represents a conceptual shift from a colonial punitive regime towards restorative and modern justice.",
          "Legal practitioners and citizens alike must understand that all FIRs lodged for incidents occurring after the implementation date fall strictly under BNS, while crimes committed before the date continue to be prosecuted under the IPC.",
        ],
        bulletPoints: [
          "BNS reduces the total number of sections from 511 in the IPC to 358 sections.",
          "New offences addressing modern societal realities such as mob lynching, terrorism, and organized crime have been codified.",
          "Community service has been introduced for minor petty offences to prevent unnecessary jail congestion.",
        ],
      },
      {
        heading: "2. Redefined Offences: Sedition Replaced with Section 152",
        paragraphs: [
          "One of the most widely debated changes is the removal of the archaic Section 124A (Sedition). Under BNS Section 152, the offence is now defined as 'Acts endangering sovereignty, unity and integrity of India'.",
          "Crucially, the law now penalizes acts that encourage secession, armed rebellion, or subversive activities, while explicitly protecting bona fide criticism and peaceful democratic dissent.",
        ],
      },
      {
        heading: "3. Mob Lynching & Murder by Groups (Section 103(2))",
        paragraphs: [
          "For the first time in Indian statutory history, hate crimes and mob lynching by a group of five or more individuals acting in concert on grounds of race, caste, community, sex, or language carry dedicated statutory penalties.",
          "Punishment ranges from rigorous imprisonment of 7 years to life imprisonment or capital punishment, with mandatory fines.",
        ],
      },
      {
        heading: "4. Hit-and-Run Provisions: Section 106(2) Analysis",
        paragraphs: [
          "Section 106 of the BNS governs rash and negligent acts resulting in death. While sub-clause (1) provides imprisonment up to 5 years, sub-clause (2) imposes up to 10 years imprisonment for drivers who flee the accident scene without reporting to police or magistrate.",
          "Immediate legal reporting and seeking prompt medical assistance for the victim are paramount to avoid severe non-bailable prosecution.",
        ],
      },
      {
        heading: "5. Bail Reforms and First-Time Offender Protections",
        paragraphs: [
          "Under the companion procedural code (BNSS), first-time undertrials who have served one-third of their maximum sentence are eligible for mandatory bail, rather than waiting for half the tenure as previously mandated under CrPC Section 436A.",
          "Our trial team at MK Associates represents clients across Delhi, UP, and Bihar courts under both the transitional IPC cases and new BNS trials.",
        ],
      },
    ],
    legalDisclaimer:
      "This article is published for legal literacy and informational purposes only. Criminal statutory provisions require case-specific scrutiny before the appropriate Magistrate or Sessions Court.",
  },
  {
    id: 2,
    slug: "gst-compliance-for-small-businesses-guide",
    title: "GST Compliance for Small Businesses: A Practical Guide",
    hindi: "छोटे व्यवसायों के लिए जीएसटी अनुपालन: कानूनी मार्गदर्शन एवं गलतियों से बचाव",
    date: "September 8, 2026",
    category: "Tax Law",
    readTime: "10 min read",
    author: "Adv. Nand Jee Kumar Upadhyay",
    authorRole: "Associate Counsel · Corporate & Tax Litigation",
    image: "/blog/gst.jpg",
    tags: ["GST", "Tax Law", "MSME", "Input Tax Credit", "Audit"],
    excerpt:
      "A complete legal handbook for Indian startups and MSMEs on GST registration, GSTR-1 and GSTR-3B filings, Input Tax Credit (ITC) reconciliation, and handling Section 73/74 show-cause notices.",
    content: [
      {
        heading: "1. Mandatory Registration Thresholds for 2026",
        paragraphs: [
          "Goods suppliers operating within a single state must register for GST when annual turnover exceeds ₹40 Lakhs (₹20 Lakhs for special category states). For service providers, the mandatory threshold remains ₹20 Lakhs.",
          "However, any business engaged in inter-state supply, e-commerce marketplace selling, or reverse charge liability must obtain GST registration irrespective of turnover volume.",
        ],
      },
      {
        heading: "2. Input Tax Credit (ITC) Under Section 16(2)",
        paragraphs: [
          "Claiming ITC requires strict documentary alignment. The invoice must reflect on your GSTR-2B, the supplier must have actually paid tax to the government, and the buyer must settle payment within 180 days.",
          "Failure to reconcile GSTR-2B with inward books is the single highest trigger for automated department demand notices in India.",
        ],
      },
      {
        heading: "3. Handling Show Cause Notices under Sections 73 and 74",
        paragraphs: [
          "Section 73 notices apply where tax was short-paid or unpaid without fraudulent intent, allowing payment with nominal interest. Section 74 notices allege fraud or willful misstatement and involve heavy 100% penalties.",
          "Never ignore a Department Intimation (Form DRC-01A). Filing a well-substantiated legal reply with reconciliation sheets within the stipulated 30 days regularly resolves issues before formal adjudications.",
        ],
      },
      {
        heading: "4. Appellate Remedies: Appeals to Appellate Authority (Section 107)",
        paragraphs: [
          "If an adverse adjudication order (Form DRC-07) is passed, businesses have a statutory right to appeal under Section 107 within 3 months, subject to a pre-deposit of 10% of disputed tax.",
          "MK Associates represents businesses before GST Appellate Authorities and High Courts for writs against arbitrary bank attachments or cancellation of GST registration.",
        ],
      },
    ],
    legalDisclaimer:
      "Tax rules undergo continuous updates via GST Council notifications. Consult your tax counsel before responding to statutory tax demands.",
  },
  {
    id: 3,
    slug: "how-to-register-trademark-in-india-step-by-step",
    title: "How to Register a Trademark in India: Step-by-Step",
    hindi: "भारत में ट्रेडमार्क पंजीकरण कैसे करें: प्रक्रिया, समय-सीमा और सुरक्षा",
    date: "September 1, 2026",
    category: "IPR",
    readTime: "8 min read",
    author: "Adv. Madan Kumar Upadhyay",
    authorRole: "Multi-Domain Counsel · Quality Inspector, Technical & IP Strategy",
    image: "/blog/trademark.jpg",
    tags: ["Trademark", "IPR", "Brand Protection", "MSME", "Copyright"],
    excerpt:
      "Protect your brand identity from counterfeiters. Learn how to conduct trademark search across 45 classes, file Form TM-A, overcome Section 9 and 11 objections, and secure your registration certificate.",
    content: [
      {
        heading: "1. Why Brand Registration is Indispensable",
        paragraphs: [
          "In a competitive digital marketplace, brand recognition is your greatest asset. Filing a trademark gives you exclusive statutory rights across all states in India under the Trade Marks Act, 1999.",
          "Using an unregistered mark leaves you vulnerable to competitors copying your logo, domain, and packaging, forcing you into expensive passing-off civil suits rather than swift statutory infringement remedies.",
        ],
      },
      {
        heading: "2. The 45 Trademark Classes & Comprehensive Search",
        paragraphs: [
          "Trademarks are classified under the international Nice Classification: Classes 1 to 34 cover physical goods, and Classes 35 to 45 cover services.",
          "Before filing, our IP attorneys conduct a thorough phonetical, visual, and semantic search on the IP India public portal to confirm no confusingly similar prior marks exist.",
        ],
      },
      {
        heading: "3. Filing Form TM-A: Govt Fees & Concessions",
        paragraphs: [
          "Individuals, startups, and MSMEs (holding Udyam certificate) enjoy a 50% discount on official government filing fees (₹4,500 for online filing vs ₹9,000 for corporations).",
          "Once the application is lodged, you gain the immediate legal right to append the ™ symbol beside your brand.",
        ],
      },
      {
        heading: "4. Overcoming Examination Objections (Section 9 & 11)",
        paragraphs: [
          "Within 1–3 months, the Examiner of Trade Marks issues an Examination Report. Objections typically arise under Section 9 (lack of distinctiveness) or Section 11 (similarity with existing mark).",
          "Submitting a meticulous legal response with evidence of prior commercial use, invoices, user affidavits, and case precedents within 30 days is vital to secure advertisement in the Trade Marks Journal.",
        ],
      },
      {
        heading: "5. Journal Publication & Certificate Issuance",
        paragraphs: [
          "Once advertised in the Journal, third parties have a 4-month window to file oppositions. If no opposition is filed, the Registrar issues the Registration Certificate with the coveted ® symbol, valid for 10 years and perpetually renewable.",
        ],
      },
    ],
    legalDisclaimer:
      "Trademark availability requires specific search verification with the Trade Marks Registry. Consult MK Associates for brand clearance.",
  },
  {
    id: 4,
    slug: "pil-in-india-when-how-to-file",
    title: "PIL in India: When and How to File a Public Interest Litigation",
    hindi: "भारत में जनहित याचिका (PIL): कब, कहाँ और कैसे दाखिल करें",
    date: "August 25, 2026",
    category: "Constitutional Law",
    readTime: "9 min read",
    author: "Adv. Manoj Kumar Chaubey",
    authorRole: "Senior Partner · High Court & Supreme Court Litigator",
    image: "/blog/pil.jpg",
    tags: ["PIL", "Constitutional Law", "Article 32", "Article 226", "Public Rights"],
    excerpt:
      "Public Interest Litigation is India's most powerful constitutional mechanism for systemic reform. Discover the jurisdiction of High Courts and Supreme Court, permissible causes, and procedural guidelines.",
    content: [
      {
        heading: "1. The Philosophy of Public Interest Litigation (PIL)",
        paragraphs: [
          "Introduced into Indian jurisprudence by pioneering jurists including Justice P.N. Bhagwati and Justice V.R. Krishna Iyer, PIL relaxed the traditional rule of 'Locus Standi'.",
          "Under PIL, any public-spirited citizen or registered organization can petition the constitutional courts on behalf of marginalized communities, public welfare, or constitutional violations.",
        ],
      },
      {
        heading: "2. Constitutional Foundations: Article 32 vs Article 226",
        paragraphs: [
          "A PIL can be instituted under Article 32 directly before the Supreme Court for violation of fundamental rights (Part III of the Constitution), or under Article 226 before the respective State High Court for broader legal or fundamental rights.",
          "Generally, High Courts should be approached first unless national implications or pan-India constitutional questions are involved.",
        ],
      },
      {
        heading: "3. Legitimate Subjects for a PIL",
        paragraphs: [
          "Courts actively entertain PILs addressing environmental pollution, conservation of rivers and heritage sites, bonded labour, custodial violence, prison reforms, public health infrastructure, and arbitrary governance.",
        ],
        bulletPoints: [
          "Environmental protection, illegal deforestation, and toxic waste dumping.",
          "Food safety, counterfeit pharmaceuticals, and access to drinking water.",
          "Rights of children, women safety, and dignified conditions in mental healthcare facilities.",
          "Illegal encroachments on public parks, lakes, and archaeological properties.",
        ],
      },
      {
        heading: "4. What Cannot be Filed as a PIL",
        paragraphs: [
          "The Supreme Court of India has issued strict guidelines against abuse of PIL for personal vendetta, political mudslinging, or commercial blackmail. Service matters, landlord-tenant disputes, and private contractual controversies will be dismissed with heavy exemplary costs.",
        ],
      },
    ],
    legalDisclaimer:
      "Filing a frivolous PIL can attract heavy punitive penalties from Constitutional Courts. Adequate pre-litigation documentation and RTI research is mandatory.",
  },
  {
    id: 5,
    slug: "cyber-crime-in-india-laws-reporting-remedies",
    title: "Cyber Crime in India: Laws, Reporting & Remedies",
    hindi: "भारत में साइबर अपराध: आईटी कानून, त्वरित शिकायत और कानूनी उपचार",
    date: "August 18, 2026",
    category: "Cyber Law",
    readTime: "12 min read",
    author: "Adv. Madan Kumar Upadhyay",
    authorRole: "Multi-Domain Counsel · Cyber Forensics & Systems Auditor",
    image: "/blog/cyber.jpg",
    tags: ["Cyber Crime", "IT Act 2000", "DPDP Act", "Online Fraud", "Financial Scam"],
    excerpt:
      "From UPI scams and identity theft to corporate data breaches, understand your rights under the Information Technology Act, 2000, Golden Hour reporting protocols, and how to recover defrauded funds.",
    content: [
      {
        heading: "1. The Rising Landscape of Digital Offenses in India",
        paragraphs: [
          "With the rapid adoption of digital banking and social media, cybercrimes ranging from unauthorized UPI transfers and identity theft to AI deepfakes and ransomware extortion have surged.",
          "The Indian legal framework primarily relies on the Information Technology Act, 2000 (as amended), alongside relevant penal sections of the Bharatiya Nyaya Sanhita (BNS) and the Digital Personal Data Protection (DPDP) Act, 2023.",
        ],
      },
      {
        heading: "2. Key Penal Sections of the Information Technology Act",
        paragraphs: [
          "Section 66C: Penalizes identity theft including unauthorized use of passwords, biometric data, or digital signatures with up to 3 years imprisonment and fines.",
          "Section 66D: Imposes imprisonment up to 3 years for cheating by personation using a computer resource (covering phishing, fake bank calls, and lottery scams).",
          "Section 67 & 67A: Strictly penalize transmitting sexually explicit material or non-consensual imagery online.",
        ],
      },
      {
        heading: "3. The 'Golden Hour' in Financial Fraud: Helpline 1930",
        paragraphs: [
          "If you fall victim to financial cyber fraud, report it within the first 1 to 2 hours ('The Golden Hour') by calling the National Cyber Crime Helpline: 1930.",
          "The Indian Cyber Crime Coordination Centre (I4C) coordinates with banks and payment gateways to freeze the beneficiary account before the fraudster withdraws the money through ATMs or converts it into cryptocurrency.",
        ],
      },
      {
        heading: "4. Filing a Formal FIR & Magistrate Court Orders",
        paragraphs: [
          "Always file an official written complaint at your nearest Cyber Crime Police Station or online at cybercrime.gov.in. Preserve all transaction IDs, bank SMS, call recordings, and email headers.",
          "If police delay investigation, our legal counsel files Section 156(3) petitions before the Judicial Magistrate to direct immediate registration of FIR and forensic device seizures.",
        ],
      },
    ],
    legalDisclaimer:
      "Never share OTPs, remote desktop access codes (AnyDesk/TeamViewer), or click unverified APK download links. This article provides procedural legal knowledge.",
  },
  {
    id: 6,
    slug: "property-disputes-in-india-legal-routes-remedies",
    title: "Property Disputes in India: Legal Routes & Remedies",
    hindi: "भारत में संपत्ति विवाद: कानूनी रास्ते, अदालती प्रक्रिया और मालिकाना हक के उपाय",
    date: "August 10, 2026",
    category: "Civil Law",
    readTime: "11 min read",
    author: "Adv. Ashok Kumar Seth",
    authorRole: "Senior Counsel · 30 Years Land, Title & Civil Practice",
    image: "/blog/property.jpg",
    tags: ["Property Disputes", "Civil Law", "Partition Suit", "Injunction", "RERA"],
    excerpt:
      "Land encroachment, boundary overlaps, forged sale deeds, and ancestral partition disputes. Learn about Declaratory Suits, Injunctions under Order 39 CPC, and Revenue Court proceedings in Delhi, UP, and Bihar.",
    content: [
      {
        heading: "1. Common Categories of Real Estate & Land Litigation",
        paragraphs: [
          "Real estate disputes in North India predominantly stem from forged power of attorneys (GPA), overlapping boundaries in agricultural plots, delays in mutation records, and denial of ancestral coparcenary shares to daughters and siblings.",
          "Navigating property litigation requires dual mastery over both Civil Court procedural laws (CPC, Specific Relief Act) and local State Revenue Land Codes (such as UP Revenue Code, Bihar Land Reforms Act, and Delhi Land Reforms Act).",
        ],
      },
      {
        heading: "2. Immediate Temporary Injunctions: Order 39 Rules 1 & 2 CPC",
        paragraphs: [
          "When an opponent attempts illegal construction, encroachment, or third-party sale of your property, your attorney must immediately seek an ex-parte or ad-interim Temporary Injunction under Order 39 Rules 1 & 2 of the Code of Civil Procedure.",
          "To secure an injunction, you must establish three vital legal elements: (1) A prima facie case, (2) Balance of convenience in your favor, and (3) Irreparable loss that money alone cannot compensate.",
        ],
      },
      {
        heading: "3. Suit for Declaration of Title and Recovery of Possession",
        paragraphs: [
          "If your title to the property is clouded or challenged by a counterfeit deed, a Suit for Declaration under Section 34 of the Specific Relief Act combined with Recovery of Possession under Section 5 must be instituted.",
          "Court fees depend on the ad-valorem valuation of the property in the respective state jurisdiction.",
        ],
      },
      {
        heading: "4. Ancestral Property & Partition Suits",
        paragraphs: [
          "Under the landmark Supreme Court ruling in Vineeta Sharma v. Rakesh Sharma (2020), daughters possess coparcenary rights by birth in ancestral property with equal status as sons, irrespective of whether the father was alive on the 2005 amendment date.",
          "A preliminary partition decree establishes individual shares, followed by a final decree demarcating physical possession by metes and bounds.",
        ],
      },
      {
        heading: "5. Builder Delays & The RERA Remedy",
        paragraphs: [
          "For buyers stranded by errant builders failing to deliver possession on promised dates, filing a complaint before the Real Estate Regulatory Authority (RERA) or Real Estate Appellate Tribunal offers rapid redressal with interest compounded at SBI MCLR + 2%.",
        ],
      },
    ],
    legalDisclaimer:
      "Property law is intensely jurisdiction-specific. Title deeds, mutation certificates, and encumbrance records must be physically scrutinized by senior civil counsel.",
  },
];

```

---
