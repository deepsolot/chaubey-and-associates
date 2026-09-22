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
      "Civil & Criminal Litigation",
      "Service & Administrative Law",
      "Constitutional Matters & PILs",
      "High Court & Supreme Court Practice",
    ],
    bio: "With an unmatched 40 years of practice, Adv. Manoj Kumar Chaubey is a distinguished senior counsel of the panel. His vast courtroom experience spans civil, criminal, and administrative law across District Courts, High Courts, and the Supreme Court of India. He is the founding member of the panel and has mentored generations of legal professionals.",
    quote: {
      text: "न्याय की लड़ाई में धैर्य और अनुभव ही सबसे बड़े हथियार हैं।",
      translation:
        "In the fight for justice, patience and experience are the greatest weapons.",
    },
    practiceAreas: [
      {
        title: "Civil Litigation",
        titleHi: "सिविल वाद",
        items: [
          {
            label: "Property Disputes",
            desc: "Title suits, partition suits, injunction applications, specific performance",
          },
          {
            label: "Contract Enforcement",
            desc: "Breach of contract, recovery suits, specific relief applications",
          },
          {
            label: "Declaratory Suits",
            desc: "Declaration of rights, title, and legal character",
          },
          {
            label: "Execution Proceedings",
            desc: "Decree execution, attachment & sale of property",
          },
          {
            label: "Rent & Eviction Matters",
            desc: "Landlord-tenant disputes under state Rent Control Acts",
          },
        ],
      },
      {
        title: "Criminal Litigation",
        titleHi: "आपराधिक वाद",
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
            label: "Criminal Appeals",
            desc: "Appeals against conviction before High Court & Supreme Court",
          },
          {
            label: "Criminal Revision",
            desc: "Revision petitions challenging Magistrate & Sessions orders",
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
            label: "Writ Petitions",
            desc: "Article 226 & 32 petitions before High Court & Supreme Court",
          },
          {
            label: "Service Disputes",
            desc: "Seniority, promotion, transfer & pension matters",
          },
          {
            label: "Public Interest Litigation",
            desc: "Filing & arguing PILs on constitutional matters",
          },
        ],
      },
      {
        title: "Appellate & Supreme Court Practice",
        titleHi: "अपीलीय एवं सर्वोच्च न्यायालय",
        items: [
          {
            label: "High Court Appeals",
            desc: "First & second appeals, letters patent appeals",
          },
          {
            label: "SLP & Supreme Court",
            desc: "Special Leave Petitions & appeals before the Supreme Court of India",
          },
          {
            label: "Review & Curative Petitions",
            desc: "Post-judgment remedies in appellate courts",
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
      "Property & Revenue Law",
      "Criminal Defense",
      "Consumer Protection",
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
      "Legal, Administrative & Technical Advisory",
      "Aeronautical & Logistical Law",
      "Corporate Compliance & Audits",
      "Mentorship, Training & Quality Inspection",
    ],
    bio: "Adv. Madan Kumar Upadhyay is an alumnus of the University of Allahabad — one of India's premier institutions — uniquely positioned with 20 years of cumulative experience spanning legal practice alongside expertise in Administration, Technical Operations, Aeronautics, Logistics, Mentoring, Quality Inspection, and Auditing — making him an indispensable multi-domain counsel for complex, cross-sector cases.",
    quote: {
      text: "क़ानून की गहरी समझ और बहु-क्षेत्र अनुभव का संयोग — यही मेरी पहचान है।",
      translation:
        "A blend of deep legal knowledge and multi-domain experience — that is my identity.",
    },
    practiceAreas: [
      {
        title: "Legal Advisory & Litigation",
        titleHi: "विधिक परामर्श एवं वाद",
        items: [
          {
            label: "Civil & Criminal Advocacy",
            desc: "Courtroom practice in civil suits, criminal cases & writ petitions",
          },
          {
            label: "Administrative Law",
            desc: "CCS/CCA rules, disciplinary proceedings, departmental inquiries",
          },
          {
            label: "Service Matters",
            desc: "Promotion, seniority, transfer & pension disputes for govt. employees",
          },
          {
            label: "Contractual Disputes",
            desc: "Government contracts, tender disputes, arbitration proceedings",
          },
        ],
      },
      {
        title: "Aeronautical & Logistical Law",
        titleHi: "वैमानिकी एवं तार्किक कानून",
        items: [
          {
            label: "Aviation Regulatory Compliance",
            desc: "DGCA regulations, aircraft operations, safety compliance",
          },
          {
            label: "Logistics & Supply Chain",
            desc: "Customs, warehousing disputes, transportation law",
          },
          {
            label: "Technical Operations Advisory",
            desc: "Operational safety, maintenance regulations, liability",
          },
        ],
      },
      {
        title: "Corporate Compliance & Audits",
        titleHi: "कॉर्पोरेट अनुपालन एवं लेखापरीक्षा",
        items: [
          {
            label: "Internal Audits",
            desc: "Corporate governance audits, compliance reviews",
          },
          {
            label: "Quality Inspection",
            desc: "ISO standards, quality assurance legal framework",
          },
          {
            label: "Regulatory Compliance",
            desc: "Statutory compliance, government audit responses",
          },
        ],
      },
      {
        title: "Mentorship & Training",
        titleHi: "मार्गदर्शन एवं प्रशिक्षण",
        items: [
          {
            label: "Legal Training Programs",
            desc: "Training for corporate teams on legal compliance & risk management",
          },
          {
            label: "Institutional Mentorship",
            desc: "Guiding young advocates & law students in practice development",
          },
        ],
      },
    ],
  },
  {
    name: "Adv. Nand Jee Kumar Upadhyay",
    slug: "nand-jee-kumar-upadhyay",
    role: "Corporate & Cyber Law Counsel",
    hindi: "सहयोगी अधिवक्ता (कॉर्पोरेट एवं साइबर लॉ)",
    experience: "10",
    unit: "Years",
    photo: "/nand-jee-upadhyay.jpg",
    specializations: [
      "Corporate & Business Law",
      "Intellectual Property Rights",
      "Taxation & GST Advisory",
      "Cyber Law & Data Privacy",
    ],
    bio: "Adv. Nand Jee Kumar Upadhyay brings fresh, tech-forward legal expertise in corporate law, IPR, taxation, and the rapidly evolving field of cyber law — ensuring the panel stays ahead of India's most dynamic legal frontiers.",
    quote: {
      text: "आधुनिक कानून और तकनीक का मिलन — यही भविष्य है।",
      translation:
        "The convergence of modern law and technology — that is the future.",
    },
    practiceAreas: [
      {
        title: "Trial Court Criminal Practice",
        titleHi: "ट्रायल कोर्ट आपराधिक प्रैक्टिस",
        items: [
          {
            label: "FIR/Complaint Drafting",
            desc: "Police station में FIR या Magistrate के सामने complaint दाखिल करना",
          },
          {
            label: "Anticipatory Bail / Regular Bail",
            desc: "Sessions Court में bail applications",
          },
          {
            label: "Remand Proceedings",
            desc: "Police remand vs. judicial custody arguments",
          },
          {
            label: "Charge‑Sheet Scrutiny",
            desc: "Investigating agency की report को legally challenge करना",
          },
          {
            label: "Framing of Charges",
            desc: "IPC/BNS sections के तहत charges तय कराना या oppose करना",
          },
          {
            label: "Evidence Handling",
            desc: "Witness examination, cross‑examination, documentary evidence",
          },
          {
            label: "Arguments on Charge & Discharge",
            desc: "Prima facie case न होने पर discharge application",
          },
          {
            label: "Final Arguments",
            desc: "Prosecution vs. Defence submissions before Magistrate/Sessions Judge",
          },
        ],
      },
      {
        title: "Appellate Criminal Practice",
        titleHi: "अपीलीय आपराधिक प्रैक्टिस",
        items: [
          {
            label: "Appeals",
            desc: "Sessions Court में Magistrate के judgment के खिलाफ appeal",
          },
          {
            label: "Revisions",
            desc: "Sessions Judge के पास Magistrate orders की legality/propriety पर revision",
          },
          {
            label: "Suspension of Sentence",
            desc: "Conviction के बाद sentence stay application",
          },
        ],
      },
      {
        title: "Special Criminal Proceedings",
        titleHi: "विशेष आपराधिक कार्यवाही",
        items: [
          {
            label: "Maintenance under CrPC/BNSS Sec. 125",
            desc: "Family disputes in criminal jurisdiction",
          },
          {
            label: "Domestic Violence Act Cases",
            desc: "Magistrate court में complaint + relief applications",
          },
          {
            label: "Juvenile Justice Board",
            desc: "Juvenile accused के लिए representation",
          },
          {
            label: "Special Acts",
            desc: "NDPS, POCSO, SC/ST Act cases in Sessions Court",
          },
        ],
      },
      {
        title: "Miscellaneous Criminal Practice",
        titleHi: "विविध आपराधिक प्रैक्टिस",
        items: [
          {
            label: "Surety Verification",
            desc: "Bail sureties की scrutiny",
          },
          {
            label: "Custody & Property Release",
            desc: "Seized articles की release application",
          },
        ],
      },
      {
        title: "Corporate & Business Law",
        titleHi: "कॉर्पोरेट एवं व्यापार कानून",
        items: [
          {
            label: "Company Incorporation",
            desc: "Startup registration, LLP formation, compliance setup",
          },
          {
            label: "Contract Drafting & Review",
            desc: "NDAs, partnership deeds, shareholder agreements",
          },
          {
            label: "Corporate Governance",
            desc: "Board resolutions, annual filings, ROC compliance",
          },
        ],
      },
      {
        title: "Intellectual Property Rights",
        titleHi: "बौद्धिक संपदा अधिकार",
        items: [
          {
            label: "Trademark Registration",
            desc: "TM filing, opposition proceedings, renewal management",
          },
          {
            label: "Copyright Protection",
            desc: "Software, content & artistic work copyright registration",
          },
          {
            label: "Patent Advisory",
            desc: "Patent filing guidance, prior art search support",
          },
        ],
      },
      {
        title: "Taxation & GST Advisory",
        titleHi: "कराधान एवं GST परामर्श",
        items: [
          {
            label: "GST Registration & Compliance",
            desc: "New registration, return filing, input tax credit",
          },
          {
            label: "Tax Disputes & Appeals",
            desc: "GST tribunal appeals, income tax appellate proceedings",
          },
          {
            label: "Tax Planning",
            desc: "Strategic tax structuring for businesses & individuals",
          },
        ],
      },
      {
        title: "Cyber Law & Data Privacy",
        titleHi: "साइबर कानून एवं डेटा गोपनीयता",
        items: [
          {
            label: "Cyber Crime Complaints",
            desc: "Online fraud, identity theft, harassment cases",
          },
          {
            label: "Data Protection Advisory",
            desc: "DPDP Act 2023 compliance, privacy policy drafting",
          },
          {
            label: "IT Act Proceedings",
            desc: "Section 66, 67, 43A proceedings & defense",
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

export function generateMetadata({ params }: { params: { slug: string } }) {
  const adv = advocateProfiles.find((a) => a.slug === params.slug);
  if (!adv) return { title: "Advocate Not Found" };
  return {
    title: `${adv.name} | MK & Associates`,
    description: adv.bio,
  };
}

/* ────────── Page Component ────────── */

export default function AdvocateProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const adv = advocateProfiles.find((a) => a.slug === params.slug);
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

              <Link href="/contact" className="btn-gold">
                Consult {adv.name.split(" ")[1]} {adv.name.split(" ").pop()}{" "}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="section-label mb-3">
              Practice Areas · विशेषज्ञता क्षेत्र
            </div>
            <h2 className="section-title">
              Detailed <span>Expertise</span>
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
