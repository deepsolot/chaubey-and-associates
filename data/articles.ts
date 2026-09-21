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
