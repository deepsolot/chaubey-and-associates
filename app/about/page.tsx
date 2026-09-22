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
