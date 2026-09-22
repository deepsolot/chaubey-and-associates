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
