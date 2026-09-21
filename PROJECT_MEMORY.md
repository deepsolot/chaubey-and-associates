# MK Associates — Project Memory & Master Knowledge Base

> **Important**: This document serves as the permanent memory for the MK Associates legal portal. All future AI assistant turns, subagents, and sessions must consult this document before making any changes.

---

## 1. Core Identity & Firm Details
- **Firm Name:** **MK Associates** (previously referred to as Chaubey & Associates)
- **Tagline / Motto:** न्याय · सत्य · निष्ठा (Justice · Truth · Dedication)
- **Subtext:** Legal Counsel · दिल्ली · वाराणसी · कैमूर
- **Official Emblem Logo:** `/public/logo.png` & `/app/icon.png` (Circular gold seal with scales of justice, wheat wreath, 3 stars, and Hindi ribbon).
- **Target Custom Domain:** `newzenadvocate.com`
  - A Record (`@`): `75.2.60.5`
  - CNAME Record (`www`): `chaubey-and-associates.netlify.app`
- **Live Netlify Production URL:** [https://chaubey-and-associates.netlify.app](https://chaubey-and-associates.netlify.app)
- **GitHub Repository:** [https://github.com/deepsolot/chaubey-and-associates](https://github.com/deepsolot/chaubey-and-associates) (branch: `main`)

---

## 2. Advocate Panel & Experience

| Advocate | Designation | Experience | Specializations | Photo Status |
| :--- | :--- | :--- | :--- | :--- |
| **Adv. Manoj Kumar Chaubey** | Senior Partner | 40 Years | Civil, Criminal, Administrative & PIL Litigator | Placeholder (to be updated later) |
| **Adv. Ashok Kumar Seth** | Senior Counsel | 30 Years | Property, Land Titles, Civil & Family Law | Placeholder (to be updated later) |
| **Adv. Madan Kumar Upadhyay** | Multi-Domain Counsel | 20 Years | Legal, Admin, Technical, Aeronautical, Logistics, Mentor, Quality Inspector & Systems Auditor | **Genuine Photo Active** (`/public/madan-upadhyay.jpg`) |
| **Adv. Nand Jee Kumar Upadhyay** | Associate Counsel | 10 Years | Corporate, Tax (GST/IT), IPR & Cyber Law | Placeholder (to be updated later) |

> **Photo Policy**: The user explicitly instructed to **update the other 3 advocates' photos later**. Adv. Madan Kumar Upadhyay's real photo is installed. When the user provides the remaining photos, replace them in `/public/` and link them in `/app/about/page.tsx`.

---

## 3. Contact & Office Information

### Direct Contact Numbers:
- **Primary / WhatsApp:** `+91 9305592322` (Adv. Madan Kumar Upadhyay)
- **Secondary:** `+91 9341943353`
- **Alternate:** `+91 7200151400`
- **Bihar Office:** `+91 9507892670`
- **Official Email:** `maddydragon85@gmail.com`

### 3 Physical Offices:
1. **New Delhi (Main Office):**
   - K-4/3, Third Floor, K4, Mohan Garden, Uttam Nagar, New Delhi – 110059
2. **Varanasi (Uttar Pradesh):**
   - AN 455, Dhanwantari Nagar, Near Gupta General Store, Varanasi, UP
3. **Kaimur (Bhabua), Bihar:**
   - Vill. Jagdishpur, Post Dangari, Police Station Kudra, Dist. Kaimur (Bhabua), Bihar – 821109

---

## 4. Key Functional Features & Architecture

### A. Appointment Booking & Direct WhatsApp Integration
- Form at `/contact`:
  - When submitted, it calls `/app/api/contact/route.ts` (100% serverless-safe in-memory store + structured logging).
  - Automatically formats a complete appointment breakdown and directs it to **WhatsApp (+91 9305592322)**.
  - Generates an immediate visual confirmation card with reference ID and a 1-click **"💬 Send to WhatsApp (+91 93055 92322)"** button.

### B. Dedicated Blog & Legal Insights (`/blog` & `/blog/[slug]`)
- Central data file: `/data/articles.ts`
- Static pre-rendering via `generateStaticParams()` across all 6 articles.
- Clicking any card on `/blog` or `/` opens the full article in a **new tab** (`target="_blank"`).
- Every article includes custom high-resolution cinematic photography in `/public/blog/`:
  1. `understanding-bns-2023-key-changes-from-ipc` → `/blog/bns.jpg`
  2. `gst-compliance-for-small-businesses-guide` → `/blog/gst.jpg`
  3. `how-to-register-trademark-in-india-step-by-step` → `/blog/trademark.jpg`
  4. `pil-in-india-when-how-to-file` → `/blog/pil.jpg`
  5. `cyber-crime-in-india-laws-reporting-remedies` → `/blog/cyber.jpg`
  6. `property-disputes-in-india-legal-routes-remedies` → `/blog/property.jpg`

### C. Client Portal (`/portal`)
- Mock client login via Case Number (e.g. `DL-2026-CR-0891`) + Date of Birth.
- Tracks hearing dates, stage of case, advocate assigned, and legal filings.

### D. Aesthetic Design System
- **Colors:** Midnight Black (`#050505`, `#0A0A0A`) + Amber Gold (`#D4AF37`, `#F0D060`, `#B8952A`).
- **Typography:** Playfair Display (Serif headings) + Outfit/Inter (Clean modern sans).
- **Bilingual:** All headings and primary actions contain English + Hindi subtitle equivalents.
