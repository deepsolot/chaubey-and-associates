import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | MK Associates",
  description: "Terms and conditions of engagement for MK Associates legal portal.",
};

export default function TermsPage() {
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
            <FileText size={28} />
          </div>
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-white">
              Terms of Service
            </h1>
            <p className="text-[#D4AF37] font-display text-sm tracking-wider uppercase">
              Website Usage & Consultation Terms
            </p>
          </div>
        </div>

        <div className="glass-card p-8 md:p-10 space-y-6 text-white/80 leading-relaxed border border-[#D4AF37]/20 mt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-semibold">
              1. Acceptance of Terms
            </h2>
            <p className="text-sm text-white/70">
              By using this website, you agree to comply with and be bound by the terms and conditions outlined herein. If you do not agree with any part of these terms, please do not use the website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-semibold">
              2. Consultation Bookings
            </h2>
            <p className="text-sm text-white/70">
              Scheduling an appointment or sending an inquiry via this website is a request for consultation. A formal engagement is only established after an advocate accepts the matter and the necessary engagement terms and Vakalatnama are executed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-semibold">
              3. Jurisdiction
            </h2>
            <p className="text-sm text-white/70">
              Any disputes arising out of the use of this website or legal services provided shall be subject to the exclusive jurisdiction of the competent courts in New Delhi or Varanasi, Uttar Pradesh.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
