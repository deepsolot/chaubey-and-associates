# MK Associates — Project Memory & Master Knowledge Base

> **Important**: This document serves as the permanent memory for the MK Associates legal portal. All future AI assistant turns, subagents, and sessions must consult this document before making any changes.

---

## 1. Core Identity & Firm Details
- **Firm Name:** **MK Associates** (also known as Chaubey & Associates)
- **Tagline / Motto:** न्याय · सत्य · निष्ठा (Justice · Truth · Dedication)
- **Subtext:** Legal Counsel · दिल्ली · वाराणसी · कैमूर
- **Official Emblem Logo:** `/public/logo.png` & `/app/icon.png` (Circular gold seal with scales of justice, wheat wreath, 3 stars, and Hindi ribbon).
- **Custom Domain Status:** Active & Live with SSL on **Vercel** at [https://www.newzenadvocate.com](https://www.newzenadvocate.com) (DNS via Hostinger)
  - A Record (`@`): `76.76.21.21`
  - CNAME Record (`www`): `cname.vercel-dns.com`
- **Live Production URL:** [https://www.newzenadvocate.com](https://www.newzenadvocate.com)
- **GitHub Repository:** [https://github.com/deepsolot/chaubey-and-associates](https://github.com/deepsolot/chaubey-and-associates) (branch: `main`)
- **Clean Deliverable ZIP Archive:** `/Users/deep/Advocate/advocate-website-clean.zip` (7.7 MB, production-ready, no node_modules or caches).

---

## 2. Advocate Panel & Seniority Order

Advocates are strictly ordered on the About page by descending seniority:

| Seniority | Advocate | Role | Exp. | Photo Path | Dedicated Profile URL |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **1st** | **Adv. Manoj Kumar Chaubey** | Senior Partner & Litigation Counsel | **40 Yrs** | `/public/manoj-chaubey.jpg` | `/about/manoj-kumar-chaubey` |
| **2nd** | **Adv. Ashok Kumar Seth** | Senior Counsel | **30 Yrs** | `/public/ashok-seth.png` | `/about/ashok-kumar-seth` |
| **3rd** | **Adv. Madan Kumar Upadhyay** | Lead Multi-Domain Counsel | **20 Yrs** | `/public/madan-upadhyay.jpg` | `/about/madan-kumar-upadhyay` |
| **4th** | **Adv. Nand Jee Kumar Upadhyay** | Corporate & Cyber Law Counsel | **10 Yrs** | `/public/nand-jee-upadhyay.jpg` | `/about/nand-jee-kumar-upadhyay` |

### Photo & Profile Status:
- **All 4 advocates have real, genuine photos installed** in `/public/`.
- Adv. Nand Jee Kumar Upadhyay's photo was updated with his latest professional courtroom portrait on Sept 22, 2026.
- In `/app/about/page.tsx`, every advocate card is **clickable and opens in a new tab** (`target="_blank" rel="noopener noreferrer"`).
- The featured advocate section for Adv. Madan Kumar also includes a direct "View Full Profile" button that opens in a new tab.
- The 1985–2024 "Our Journey" timeline milestones section has been removed from the About page.

---

## 3. Dedicated Advocate Profiles & Specialization Data

All profile routes are statically generated at `/about/[slug]` via Next.js 16 async `params`:

### A. Adv. Manoj Kumar Chaubey (`/about/manoj-kumar-chaubey`)
- Pre-Litigation, Notice & Drafting (Eviction, recovery of money, consumer disputes, pre-court negotiation)
- Institution of Suit & Pre-Trial (Civil Judge Junior/Senior Division, valuation, stamp duty, summons)
- Pleadings & Evidence (Written statements, replication, issues framing, affidavit evidence, Order 39 & Order 7 Rule 11)
- Judgment, Decree & Execution (Appeals before District Judge, attachment of property, possession recovery)
- Rent, Property & Succession (Rent control, succession certificates, partition suits, injunctions)
- Interlocutory & Miscellaneous Practice (Order 23 compromise decrees, ex parte decree remedies)
- Criminal & Appellate Litigation (Sessions trials, High Court appeals/revisions, Article 226/32 PILs, Supreme Court SLPs)
- Service & Administrative Law (CCS/CCA rules, disciplinary inquiries, service disputes)

### B. Adv. Ashok Kumar Seth (`/about/ashok-kumar-seth`)
- Pre-Litigation, Notice & Drafting (Legal notice drafting, pre-court dispute negotiation, plaint drafting)
- Institution of Suit & Pre-Trial (Plaint filing before Civil Judges, court fees & valuation, summons service)
- Pleadings & Evidence (Written statement, replication, issues framing, witness evidence, interim applications)
- Judgment, Decree & Execution (Final decree, District Court appeals, execution of decrees)
- Rent, Property & Succession (Rent control, succession certificates, partition & property, status quo orders)
- Interlocutory & Miscellaneous Practice (Interlocutory reliefs, Order 23 compromise, ex parte remedies)
- Property & Revenue Law (Land title disputes, khata-khatuni, land mutation, land acquisition)
- Criminal Defense (Bail & anticipatory bail, IPC/BNS trial defense, quashing petitions)
- Consumer Protection (District, State & National Consumer Forum complaints)
- Family & Succession Law (Divorce, Sec. 125 CrPC maintenance, child custody, probate/wills)

### C. Adv. Madan Kumar Upadhyay (`/about/madan-kumar-upadhyay`)
- Military Litigation (Court Martial proceedings, Army/Navy/Air Force Acts disputes, Armed Forces Tribunal AFT)
- Central Services Litigation (CCS Conduct Rules disputes, CCA Disciplinary & Appeal matters, CAT practice)
- Criminal Litigation (IPC/BNS offences trial, BNSS procedures, bail, NDPS, POCSO, SC/ST Act)
- Civil Litigation (CPC procedures, property disputes, partition suits, injunctions, execution)
- Matrimonial Matters (Mutual consent & contested divorce, restitution of conjugal rights, judicial separation)
- Maintenance & Alimony (BNSS/CrPC Sec. 125, interim maintenance, permanent alimony)
- Domestic Violence Cases (Protection orders, shared household residence orders, monetary relief)
- Custody & Guardianship (Welfare of minor principle, Guardians and Wards Act)
- Succession & Inheritance (Succession certificate, partition suits, probate & administration)
- Appeals & Remedies (Family Court, District Judge & High Court appeals, order execution)
- Aeronautical & Logistical Advisory (DGCA regulatory compliance, logistics/customs, technical operations & audits)

### D. Adv. Nand Jee Kumar Upadhyay (`/about/nand-jee-kumar-upadhyay`)
- Trial Court Criminal Practice (FIR/complaint drafting, bail applications, remand arguments, charge-sheet scrutiny, charge framing, evidence, discharge)
- Appellate Criminal Practice (Magistrate judgment appeals, revision petitions, suspension of sentence)
- Special Criminal Proceedings (Sec. 125 maintenance, DV Act complaints, Juvenile Justice Board, NDPS/POCSO/SC-ST)
- Miscellaneous Criminal Practice (Surety verification, custody & property release applications)
- Corporate & Business Law (Company incorporation, contracts, corporate governance)
- Intellectual Property Rights (Trademark registration, copyright, patent advisory)
- Taxation & GST Advisory (GST registration & compliance, tax disputes/appeals, tax planning)
- Cyber Law & Data Privacy (Online fraud, DPDP Act 2023 compliance, IT Act proceedings)

---

## 4. Contact & Office Information

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

## 5. Hosting & Deployment History
- **Hosting Migration**: Migrated from Netlify to **Vercel** in September 2026.
- **Vercel Project**: Automated continuous deployment linked to GitHub repo `https://github.com/deepsolot/chaubey-and-associates` (`main` branch).
- **Framework**: Next.js 16.3.5 (Turbopack) with static site generation (`generateStaticParams`). All dynamic routes use async `Promise<{ slug: string }>` params pattern.
- **Cache Management**: Unused caches and stale background node dev processes purged.
