"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Scale, Globe2, Shield, AlertCircle, ArrowRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function AdminLoginPage() {
  const { user, isAdmin, isLoading, signInWithGoogle, signOut } = useAuth();
  const router = useRouter();
  const [error, setError] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  useEffect(() => {
    if (!isLoading && user) {
      if (isAdmin) {
        router.replace("/admin/dashboard");
      } else {
        // Signed in but not admin — show error
        setError(`Access denied. ${user.email} is not an admin account. Only maddydragon85@gmail.com has admin access.`);
      }
    }
  }, [user, isAdmin, isLoading, router]);

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

  const handleSignOutAndRetry = async () => {
    setError("");
    await signOut();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <svg className="animate-spin h-8 w-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <p className="text-white/30 text-sm">Loading…</p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#050505] flex items-center justify-center py-20 px-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/40 flex items-center justify-center mx-auto mb-4 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
            <Scale size={36} className="text-[#D4AF37]" />
          </div>
          <h1 className="font-serif text-3xl text-white mb-1">MK Associates</h1>
          <p className="text-[#D4AF37]/60 text-sm font-display tracking-widest uppercase">Admin Portal · व्यवस्थापक</p>
        </div>

        {/* Card */}
        <div className="glass-card p-8 border border-[#D4AF37]/15 rounded-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <div className="flex items-center gap-3 mb-7">
            <div className="w-8 h-8 rounded bg-[#D4AF37]/10 flex items-center justify-center">
              <Shield size={16} className="text-[#D4AF37]" />
            </div>
            <div>
              <h2 className="font-serif text-xl text-white">Administrator Sign In</h2>
              <p className="text-white/40 text-xs">Use your authorised Google account</p>
            </div>
          </div>

          {error && (
            <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-md mb-5">
              <AlertCircle size={15} className="shrink-0 mt-0.5" />
              <div>
                <p>{error}</p>
                {user && (
                  <button onClick={handleSignOutAndRetry} className="mt-2 text-[#D4AF37] text-xs hover:underline">
                    ← Sign out and try a different account
                  </button>
                )}
              </div>
            </div>
          )}

          {!user && (
            <>
              <button
                onClick={handleGoogleSignIn}
                disabled={signingIn}
                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-50 transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed mb-5"
              >
                {signingIn ? (
                  <svg className="animate-spin h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <Globe2 size={20} className="text-[#4285F4]" />
                )}
                {signingIn ? "Signing in…" : "Sign in with Google"}
              </button>

              <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/15 rounded p-3 text-center">
                <p className="text-[#D4AF37]/60 text-xs">
                  Admin access is restricted to <span className="text-[#D4AF37]">maddydragon85@gmail.com</span> only.
                </p>
              </div>
            </>
          )}

          <div className="mt-6 pt-5 border-t border-white/5 text-center">
            <p className="text-white/25 text-xs">This portal is restricted to authorised administrators only.</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <a href="/" className="text-[#D4AF37]/50 hover:text-[#D4AF37] text-sm transition-colors">← Back to website</a>
          <span className="text-white/10">|</span>
          <a href="/login" className="text-white/30 hover:text-white text-sm transition-colors flex items-center gap-1">
            Client Login <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
