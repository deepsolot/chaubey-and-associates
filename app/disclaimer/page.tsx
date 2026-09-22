import Link from "next/link";
import { ArrowLeft, Scale, ShieldAlert } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bar Council Disclaimer | MK Associates",
  description:
    "Official Bar Council of India compliance disclaimer for MK Associates (Advocates & Legal Consultants).",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20">
      <div className="container-custom max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:underline mb-8"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
            <Scale size={28} />
          </div>
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-white">
              Legal Disclaimer & Compliance
            </h1>
            <p className="text-[#D4AF37] font-display text-sm tracking-wider uppercase">
              Bar Council of India Rule Compliance
            </p>
          </div>
        </div>

        <div className="glass-card p-8 md:p-10 space-y-6 text-white/80 leading-relaxed border border-[#D4AF37]/20 mt-8">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-[#D4AF37]/5 border border-[#D4AF37]/20">
            <ShieldAlert size={20} className="text-[#D4AF37] shrink-0 mt-0.5" />
            <p className="text-xs md:text-sm text-[#D4AF37]/90 leading-relaxed">
              As per the rules of the Bar Council of India, law firms and advocates are not permitted to solicit work or advertise in any manner.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-semibold">
              1. Voluntary Information Access
            </h2>
            <p className="text-sm text-white/70">
              By accessing this website (<strong className="text-white">www.newzenadvocate.com</strong>), the user acknowledges and confirms that they are seeking information relating to MK Associates (Advocates & Legal Consultants) of their own accord and that there has been no form of solicitation, advertisement, inducement, or personal communication by MK Associates or its members.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-semibold">
              2. Informational Purpose Only
            </h2>
            <p className="text-sm text-white/70">
              The contents of this website are provided solely for informational purposes and should not be construed or interpreted as legal advice, solicitation, or legal advertisement. MK Associates is not liable for any consequence of any action taken by the user relying on material/information provided on this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-semibold">
              3. No Lawyer-Client Relationship
            </h2>
            <p className="text-sm text-white/70">
              Transmission, receipt, or use of this website, including scheduling an appointment or sending an inquiry, does not constitute or create an advocate-client relationship until formal engagement and execution of a Vakalatnama. In cases where the user has any legal issues, they must seek independent legal counsel.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-semibold">
              4. Intellectual Property
            </h2>
            <p className="text-sm text-white/70">
              All materials, emblems, graphics, and articles published on this website are the intellectual property of MK Associates and may not be copied or reproduced without prior written permission.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
