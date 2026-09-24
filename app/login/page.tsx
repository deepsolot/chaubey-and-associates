"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Scale, Globe2, Users, AlertCircle, Shield, ArrowRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function ClientLoginPage() {
  const { user, isLoading, signInWithGoogle, signOut } = useAuth();
  const router = useRouter();
  const [error, setError] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  useEffect(() => {
    if (!isLoading && user) {
      // Any signed-in user can access the client portal
      router.replace("/portal");
    }
  }, [user, isLoading, router]);

  const handleGoogleSignIn = async () => {
    setError("");
    setSigningIn(true);
    try {
      await signInWithGoogle();
    } catch {
      setError("Sign-in failed. Please try again.");
      setSigningIn(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <svg className="animate-spin h-8 w-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#050505] border-b border-[#D4AF37]/15">
        <div className="container-custom text-center">
          <div className="section-label mb-4">Client Portal · मुवक्किल पोर्टल</div>
          <h1 className="section-title mb-4">Track Your <span>Case</span></h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Sign in with your Google account to access your case status, hearing dates, and documents.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-5">
              <Users size={24} className="text-[#D4AF37]" />
            </div>
            <h2 className="font-serif text-2xl text-white text-center mb-1">Client Sign In</h2>
            <p className="text-white/40 text-sm text-center mb-7">
              Use your Gmail account to sign in and view your case details.
            </p>

            {error && (
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-md mb-5">
                <AlertCircle size={15} />
                {error}
              </div>
            )}

            <button
              onClick={handleGoogleSignIn}
              disabled={signingIn}
              className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-50 transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed mb-6"
            >
              {signingIn ? (
                <svg className="animate-spin h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <Globe2 size={20} className="text-[#4285F4]" />
              )}
              {signingIn ? "Signing in…" : "Continue with Google"}
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-white/5" />
              <span className="text-white/20 text-xs">secure sign-in</span>
              <div className="flex-1 h-px bg-white/5" />
            </div>

            <div className="space-y-2.5 text-sm text-white/40">
              {["View your active case status", "Check upcoming hearing dates", "Access shared documents"].map(f => (
                <div key={f} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                  {f}
                </div>
              ))}
            </div>

            <p className="text-white/25 text-xs text-center mt-6 pt-5 border-t border-white/5">
              Don&apos;t have access?{" "}
              <a href="/contact" className="text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors">Contact us</a>{" "}
              to get onboarded.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <a href="/" className="text-white/30 text-sm hover:text-white transition-colors">← Back to website</a>
            <span className="text-white/10">|</span>
            <a href="/admin/login" className="text-white/30 text-sm hover:text-[#D4AF37] transition-colors flex items-center gap-1">
              <Shield size={12} /> Admin
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
