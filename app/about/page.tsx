import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Award, BookOpen, Users, ArrowRight, Scale } from "lucide-react";

const milestones = [
  { year: "2008", event: "Enrolled at Bar Council of Delhi after LLB" },
  { year: "2011", event: "Completed LLM specialising in Corporate & Constitutional Law" },
  { year: "2014", event: "First major PIL filed before Delhi High Court (environmental matter)" },
  { year: "2017", event: "Established independent chambers; 500+ cases handled" },
  { year: "2020", event: "Recognized by Delhi Bar Association for excellence in litigation" },
  { year: "2024", event: "Expanded to IPR & Cyber Law, serving 50+ startup clients" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#050505] border-b border-[#D4AF37]/15">
        <div className="container-custom text-center">
          <div className="section-label mb-4">About · परिचय</div>
          <h1 className="section-title mb-4">
            The Advocate Behind <span>Your Case</span>
          </h1>
        </div>
      </section>

      {/* Main About */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Portrait */}
          <div className="sticky top-28">
            <div className="relative rounded-lg overflow-hidden border-[3px] border-[#D4AF37]/40 shadow-2xl">
              <Image
                src="/advocate.jpg"
                alt="Adv. Rahul Sharma"
                width={600}
                height={750}
                className="w-full object-cover object-top"
                style={{ maxHeight: "600px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="font-serif text-2xl text-white font-bold">
                  Adv. Rahul Sharma
                </h2>
                <p className="text-[#D4AF37] text-sm font-display tracking-wide">
                  LLB, LLM · Bar Council of Delhi
                </p>
                <p className="text-white/60 text-xs mt-1">
                  Enrolment No. D/XXXX/2008
                </p>
              </div>
            </div>

            {/* Awards */}
            <div className="grid grid-cols-2 gap-4 mt-5">
              {[
                { icon: Award, label: "Best Litigator", sub: "Delhi Bar 2020" },
                { icon: Users, label: "500+ Clients", sub: "Served & Satisfied" },
                { icon: Scale, label: "2,000+ Cases", sub: "Successfully Handled" },
                { icon: BookOpen, label: "15+ Years", sub: "Practice Experience" },
              ].map((a) => (
                <div key={a.label} className="glass-card p-4 text-center">
                  <a.icon size={20} className="text-[#D4AF37] mx-auto mb-2" />
                  <p className="text-white font-semibold text-sm">{a.label}</p>
                  <p className="text-white/40 text-xs">{a.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="section-label mb-3">Professional Profile</div>
            <h2 className="section-title mb-5">
              A Commitment to <span>Justice</span>
            </h2>
            <div className="gold-divider mb-7" />

            <p className="text-white/60 leading-relaxed mb-5">
              Adv. Rahul Sharma began his legal journey in 2008 after graduating
              from one of India&apos;s premier law schools. With an LLM in
              Corporate & Constitutional Law, he built expertise across multiple
              domains — civil litigation, criminal defense, corporate advisory,
              and emerging areas like cyber law and IPR.
            </p>
            <p className="text-white/60 leading-relaxed mb-5">
              Over 15 years, he has appeared before the Supreme Court of India,
              various High Courts, and District Courts, earning a reputation for
              thorough preparation, persuasive advocacy, and client-centric
              service. He has argued landmark PILs concerning environmental
              protection and has guided hundreds of corporate clients through
              complex legal landscapes.
            </p>
            <p className="text-[#D4AF37]/70 font-serif italic text-lg mb-7 border-l-2 border-[#D4AF37]/40 pl-4">
              &quot;मेरा उद्देश्य केवल कानूनी जीत नहीं, बल्कि मुवक्किल की
              संपूर्ण संतुष्टि और न्याय की प्राप्ति है।&quot;
              <br />
              <span className="text-sm text-white/30 not-italic">
                — My goal is not just legal victory, but complete client
                satisfaction and attainment of justice.
              </span>
            </p>

            {/* Qualifications */}
            <div className="mb-10">
              <h3 className="font-display text-sm font-600 tracking-widest text-[#D4AF37] uppercase mb-4">
                Qualifications & Memberships
              </h3>
              <ul className="space-y-2.5">
                {[
                  "LLB – Faculty of Law, University of Delhi",
                  "LLM (Corporate & Constitutional Law) – University of Delhi",
                  "Member, Bar Council of Delhi (Enrolment: 2008)",
                  "Member, Supreme Court Bar Association",
                  "Certified Mediator — ICADR",
                  "Certified Cyber Law Expert — NASSCOM",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={15}
                      className="text-[#D4AF37] shrink-0 mt-0.5"
                    />
                    <span className="text-white/55 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline */}
            <div className="mb-10">
              <h3 className="font-display text-sm font-600 tracking-widest text-[#D4AF37] uppercase mb-6">
                Career Milestones
              </h3>
              <div className="space-y-0">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                        <span className="text-[#D4AF37] text-[0.6rem] font-display font-700">
                          {m.year.slice(2)}
                        </span>
                      </div>
                      {i < milestones.length - 1 && (
                        <div className="w-px flex-1 bg-[#D4AF37]/15 mt-1 mb-1 min-h-[28px]" />
                      )}
                    </div>
                    <div className="pb-5">
                      <p className="text-[#D4AF37] text-xs font-display font-700 tracking-wider">
                        {m.year}
                      </p>
                      <p className="text-white/60 text-sm">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/contact" className="btn-gold">
              Schedule Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
