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
          {services.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-start ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
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
              <div
                className={`glass-card p-7 ${idx % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <h3 className="font-display text-sm font-600 tracking-widest text-[#D4AF37] uppercase mb-5">
                  What&apos;s Covered
                </h3>
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
