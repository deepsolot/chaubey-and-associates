import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MK Associates",
  description: "Privacy policy and client confidentiality commitment of MK Associates.",
};

export default function PrivacyPolicyPage() {
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
            <Lock size={28} />
          </div>
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-white">
              Privacy Policy & Confidentiality
            </h1>
            <p className="text-[#D4AF37] font-display text-sm tracking-wider uppercase">
              Client Privilege & Data Protection
            </p>
          </div>
        </div>

        <div className="glass-card p-8 md:p-10 space-y-6 text-white/80 leading-relaxed border border-[#D4AF37]/20 mt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-semibold">
              1. Professional Confidentiality
            </h2>
            <p className="text-sm text-white/70">
              MK Associates maintains the highest standards of professional secrecy and advocate-client privilege under Section 126 of the Indian Evidence Act. Any information, case details, or documents shared with our advocates remain strictly confidential.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-semibold">
              2. Information Collected
            </h2>
            <p className="text-sm text-white/70">
              When you schedule a consultation or submit a contact request on our website, we collect your name, phone number, email address, preferred appointment time, and matter brief solely to facilitate communication and consultation scheduling.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-semibold">
              3. No Data Selling or Sharing
            </h2>
            <p className="text-sm text-white/70">
              We never sell, rent, or trade your personal or case information to any third parties or marketing agencies under any circumstances.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-white font-semibold">
              4. Contact for Privacy Matters
            </h2>
            <p className="text-sm text-white/70">
              For any questions regarding our confidentiality practices or your data, you may contact Adv. Madan Kumar Upadhyay at <strong className="text-white">+91 9305592322</strong> or email <strong className="text-white">consult@newzenadvocate.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
