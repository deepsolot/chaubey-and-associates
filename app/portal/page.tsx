"use client";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  FileText, Calendar, Bell, LogOut, User, Eye, Download,
  Scale, AlertCircle, CheckCircle, Clock, Globe2, Phone,
  MessageSquare, ChevronRight, RefreshCw
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import {
  doc, getDoc, setDoc, collection, query, where, getDocs, orderBy, serverTimestamp
} from "firebase/firestore";

interface UserProfile {
  email: string;
  displayName: string;
  phone: string;
  notes: string;
  registered: boolean;
}

interface CaseUpdate { date: string; text: string; type: string; }
interface Case {
  id: string;
  title: string;
  type: string;
  court: string;
  filed: string;
  nextHearing: string;
  status: string;
  stage: string;
  updates: CaseUpdate[];
}

export default function PortalPage() {
  const { user, isLoading, signInWithGoogle, signOut } = useAuth();
  const router = useRouter();
  const [signingIn, setSigningIn] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("cases");
  const [cases, setCases] = useState<Case[]>([]);
  const [casesLoading, setCasesLoading] = useState(false);
  const [regForm, setRegForm] = useState({ phone: "", notes: "" });
  const [regSaving, setRegSaving] = useState(false);

  const fetchProfile = useCallback(async () => {
    if (!user) return;
    setProfileLoading(true);
    try {
      const snap = await getDoc(doc(db, "users", user.uid));
      if (snap.exists()) {
        setProfile(snap.data() as UserProfile);
      } else {
        setProfile(null);
      }
    } catch (e) { console.error(e); }
    finally { setProfileLoading(false); }
  }, [user]);

  const fetchCases = useCallback(async () => {
    if (!user?.email) return;
    setCasesLoading(true);
    try {
      const q = query(collection(db, "cases"), where("clientEmail", "==", user.email));
      const snap = await getDocs(q);
      const caseList = snap.docs.map(d => ({ id: d.id, ...d.data() } as Case & { createdAt?: { seconds?: number } }));
      caseList.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
      setCases(caseList);
    } catch (e) { console.error(e); }
    finally { setCasesLoading(false); }
  }, [user]);

  useEffect(() => {
    if (!isLoading && user) {
      fetchProfile();
      fetchCases();
    }
    if (!isLoading && !user) setProfileLoading(false);
  }, [user, isLoading, fetchProfile, fetchCases]);

  const handleSignIn = async () => {
    setSigningIn(true);
    try { await signInWithGoogle(); }
    catch { setSigningIn(false); }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setRegSaving(true);
    try {
      const data: UserProfile = {
        email: user.email || "",
        displayName: user.displayName || "",
        phone: regForm.phone,
        notes: regForm.notes,
        registered: true,
      };
      await setDoc(doc(db, "users", user.uid), { ...data, registeredAt: serverTimestamp() });
      setProfile(data);
    } catch (e) { console.error(e); }
    finally { setRegSaving(false); }
  };

  // ─── NOT SIGNED IN ───
  if (!isLoading && !user) {
    return (
      <>
        <section className="pt-32 pb-16 bg-[#050505] border-b border-[#D4AF37]/15">
          <div className="container-custom text-center">
            <div className="section-label mb-4">Client Portal · मुवक्किल पोर्टल</div>
            <h1 className="section-title mb-4">Track Your <span>Case</span></h1>
            <p className="text-white/50 max-w-xl mx-auto">Sign in with your Google account to access your case status, hearing dates, and documents — 24/7.</p>
          </div>
        </section>
        <section className="py-24 bg-[#0a0a0a] flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-6">
                <Scale size={24} className="text-[#D4AF37]" />
              </div>
              <h2 className="font-serif text-2xl text-white text-center mb-1">Client Sign In</h2>
              <p className="text-white/40 text-sm text-center mb-8">Use your Gmail account to sign in and view your case details.</p>
              <button onClick={handleSignIn} disabled={signingIn} className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-gray-800 font-semibold rounded-md hover:bg-gray-50 transition-all shadow-lg disabled:opacity-60 mb-6">
                {signingIn ? <svg className="animate-spin h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> : <Globe2 size={20} className="text-[#4285F4]" />}
                {signingIn ? "Signing in…" : "Continue with Google"}
              </button>
              <div className="space-y-2 text-sm text-white/40">
                {["View your active case status & hearing dates", "Access documents shared by your advocate", "Receive real-time case updates"].map(f => (
                  <div key={f} className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#D4AF37]" />{f}</div>
                ))}
              </div>
              <p className="text-white/25 text-xs text-center mt-6 pt-5 border-t border-white/5">
                New client? <a href="/contact" className="text-[#D4AF37]/60 hover:text-[#D4AF37]">Contact us</a> to get started.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  // ─── LOADING ───
  if (isLoading || profileLoading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <svg className="animate-spin h-8 w-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
        </svg>
      </div>
    );
  }

  // ─── REGISTRATION FORM (first time) ───
  if (user && !profile) {
    return (
      <>
        <section className="pt-32 pb-10 bg-[#050505] border-b border-[#D4AF37]/15">
          <div className="container-custom text-center">
            <div className="section-label mb-3">Complete Your Profile · प्रोफाइल पूरा करें</div>
            <h1 className="section-title mb-3">Welcome to MK <span>Associates</span></h1>
            <p className="text-white/50 max-w-lg mx-auto text-sm">You&apos;re signed in as <span className="text-[#D4AF37]">{user.email}</span>. Please complete your profile to continue.</p>
          </div>
        </section>
        <section className="py-16 bg-[#0a0a0a] flex items-center justify-center">
          <div className="w-full max-w-lg">
            <form onSubmit={handleRegister} className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              <div className="flex items-center gap-4 mb-7">
                {user.photoURL && <img src={user.photoURL} alt="avatar" className="w-12 h-12 rounded-full border-2 border-[#D4AF37]/30" />}
                <div>
                  <h2 className="font-serif text-xl text-white">{user.displayName}</h2>
                  <p className="text-white/40 text-sm">{user.email}</p>
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  <label className="form-label flex items-center gap-1.5"><Phone size={12} />Phone Number *</label>
                  <input type="tel" className="form-input" placeholder="+91 98765 43210" value={regForm.phone} onChange={e => setRegForm({ ...regForm, phone: e.target.value })} required />
                </div>
                <div>
                  <label className="form-label flex items-center gap-1.5"><MessageSquare size={12} />Briefly describe your legal matter *</label>
                  <textarea className="form-input" rows={4} placeholder="e.g. Property dispute with neighbour, need help with civil suit…" value={regForm.notes} onChange={e => setRegForm({ ...regForm, notes: e.target.value })} required />
                  <p className="text-white/25 text-xs mt-1.5">This helps your advocate prepare before contacting you.</p>
                </div>
              </div>
              <button type="submit" disabled={regSaving} className="btn-gold w-full justify-center mt-6 disabled:opacity-60">
                {regSaving ? <span className="flex items-center gap-2"><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Saving…</span> : <><CheckCircle size={15} /> Complete Registration</>}
              </button>
              <button type="button" onClick={() => signOut()} className="w-full text-center text-white/25 text-xs mt-4 hover:text-white/40 transition-colors">Sign out</button>
            </form>
          </div>
        </section>
      </>
    );
  }

  // ─── PORTAL DASHBOARD ───
  const activeCases = cases.filter(c => c.status === "active");
  const nextHearing = activeCases[0]?.nextHearing || "–";

  return (
    <>
      <section className="pt-28 pb-8 bg-[#050505] border-b border-[#D4AF37]/15">
        <div className="container-custom flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {user?.photoURL && <img src={user.photoURL} alt="avatar" className="w-12 h-12 rounded-full border-2 border-[#D4AF37]/30" />}
            <div>
              <div className="section-label mb-1">Client Portal</div>
              <h1 className="font-serif text-3xl text-white">Welcome, <span className="text-gradient">{user?.displayName?.split(" ")[0]}</span></h1>
              <p className="text-white/40 text-sm mt-0.5">{user?.email}</p>
            </div>
          </div>
          <button onClick={() => signOut()} className="flex items-center gap-2 text-white/50 hover:text-red-400 transition-colors text-sm">
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </section>

      <section className="py-10 bg-[#0a0a0a]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Active Cases", value: String(activeCases.length), icon: Scale, color: "text-[#D4AF37]" },
              { label: "Next Hearing", value: nextHearing, icon: Calendar, color: "text-blue-400" },
              { label: "Total Cases", value: String(cases.length), icon: FileText, color: "text-purple-400" },
              { label: "Updates", value: String(cases.reduce((a, c) => a + (c.updates?.length || 0), 0)), icon: Bell, color: "text-green-400" },
            ].map(s => (
              <div key={s.label} className="portal-card">
                <s.icon size={20} className={`${s.color} mb-2`} />
                <div className="font-serif text-2xl text-white font-bold">{s.value}</div>
                <div className="text-white/40 text-xs">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex gap-6 border-b border-white/10 mb-8">
            {[{ id: "cases", label: "My Cases", icon: Scale }, { id: "profile", label: "Profile", icon: User }].map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 pb-3 text-sm font-display font-600 tracking-wide transition-all ${activeTab === tab.id ? "tab-active" : "tab-inactive"}`}>
                <tab.icon size={15} />{tab.label}
              </button>
            ))}
          </div>

          {/* CASES TAB */}
          {activeTab === "cases" && (
            <div>
              {casesLoading ? (
                <div className="text-center py-16 text-white/30"><RefreshCw size={22} className="animate-spin mx-auto mb-3 text-[#D4AF37]/40" />Loading your cases…</div>
              ) : cases.length === 0 ? (
                <div className="glass-card p-12 text-center border border-white/5 rounded-lg">
                  <Scale size={36} className="text-[#D4AF37]/30 mx-auto mb-4" />
                  <h3 className="font-serif text-xl text-white mb-2">No cases assigned yet</h3>
                  <p className="text-white/40 text-sm mb-5">Your advocate will add your case details to the portal. You&apos;ll see them here once added.</p>
                  <a href="/contact" className="btn-gold inline-flex text-sm">Contact Your Advocate</a>
                </div>
              ) : (
                <div className="space-y-6">
                  {cases.map(c => (
                    <div key={c.id} className="portal-card">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`status-badge ${c.status === "active" ? "status-active" : "status-closed"}`}>{c.status}</span>
                          </div>
                          <h3 className="font-serif text-lg text-white">{c.title}</h3>
                          <p className="text-[#D4AF37]/60 text-xs font-display mt-1">{c.type} · {c.court}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-white/40 text-xs">Next Hearing</p>
                          <p className="text-white font-semibold text-sm">{c.nextHearing || "–"}</p>
                          <p className="text-[#D4AF37]/60 text-xs mt-1">Stage: {c.stage}</p>
                        </div>
                      </div>
                      {c.updates?.length > 0 && (
                        <div className="border-t border-white/5 pt-4">
                          <p className="text-white/40 text-xs font-display uppercase tracking-wider mb-3">Recent Updates</p>
                          <div className="space-y-2.5">
                            {c.updates.map((u, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <div className="mt-0.5 shrink-0">
                                  {u.type === "success" ? <CheckCircle size={14} className="text-green-400" /> : u.type === "important" ? <AlertCircle size={14} className="text-[#D4AF37]" /> : <Clock size={14} className="text-white/30" />}
                                </div>
                                <div>
                                  <p className="text-white/30 text-xs">{u.date}</p>
                                  <p className="text-white/65 text-sm">{u.text}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* PROFILE TAB */}
          {activeTab === "profile" && (
            <div className="portal-card p-7 max-w-xl">
              <div className="flex items-center gap-5 mb-7">
                {user?.photoURL ? <img src={user.photoURL} alt="avatar" className="w-16 h-16 rounded-full border-2 border-[#D4AF37]/30" /> : <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center"><User size={28} className="text-[#D4AF37]" /></div>}
                <div>
                  <h2 className="font-serif text-xl text-white">{user?.displayName}</h2>
                  <p className="text-white/40 text-sm">{user?.email}</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Account Type", value: "Client (Read-only)" },
                  { label: "Phone", value: profile?.phone || "–" },
                  { label: "Matter", value: profile?.notes || "–" },
                  { label: "Primary Advocate", value: "Adv. Madan Kumar Upadhyay" },
                  { label: "Support", value: "+91 9305592322" },
                ].map(item => (
                  <div key={item.label} className="flex justify-between items-start gap-4 border-b border-white/5 pb-3">
                    <span className="text-white/40 text-sm shrink-0">{item.label}</span>
                    <span className="text-white text-sm font-medium text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
