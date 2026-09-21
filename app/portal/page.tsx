"use client";
import { useState } from "react";
import { FileText, Calendar, Bell, LogOut, User, Eye, Download, Scale, AlertCircle, CheckCircle, Clock, ChevronRight } from "lucide-react";

// Mock data for demo
const mockCases = [
  {
    id: "RS-2024-001",
    title: "Property Dispute vs. ABC Builders",
    type: "Civil Litigation",
    court: "Delhi District Court",
    filed: "Jan 15, 2024",
    nextHearing: "Oct 10, 2026",
    status: "active",
    stage: "Arguments",
    updates: [
      { date: "Sep 18, 2026", text: "Arguments concluded. Judgment reserved.", type: "important" },
      { date: "Aug 5, 2026", text: "Written arguments submitted by both parties.", type: "normal" },
      { date: "Jun 20, 2026", text: "Cross-examination of respondent witnesses completed.", type: "normal" },
    ],
  },
  {
    id: "RS-2025-007",
    title: "Trademark Registration — BrandX",
    type: "IPR",
    court: "Trademark Registry, Delhi",
    filed: "Mar 3, 2025",
    nextHearing: "Nov 1, 2026",
    status: "active",
    stage: "Examination",
    updates: [
      { date: "Sep 1, 2026", text: "Office action received. Response being prepared.", type: "important" },
      { date: "Jul 15, 2026", text: "Application accepted for examination.", type: "normal" },
    ],
  },
  {
    id: "RS-2023-018",
    title: "GST Appeal — Tax Demand 2021-22",
    type: "Tax Law",
    court: "ITAT Delhi",
    filed: "Nov 20, 2023",
    nextHearing: "–",
    status: "closed",
    stage: "Decided",
    updates: [
      { date: "Jul 30, 2026", text: "Order received. Demand quashed in favour of client. ✓", type: "success" },
      { date: "May 10, 2026", text: "Final hearing held.", type: "normal" },
    ],
  },
];

const documents = [
  { name: "Vakalatnama_RS-2024-001.pdf", size: "185 KB", date: "Jan 15, 2024", case: "RS-2024-001" },
  { name: "Plaint_Property_Case.pdf", size: "1.2 MB", date: "Jan 15, 2024", case: "RS-2024-001" },
  { name: "TM_Application_BrandX.pdf", size: "430 KB", date: "Mar 3, 2025", case: "RS-2025-007" },
  { name: "ITAT_Order_Favourable.pdf", size: "820 KB", date: "Jul 30, 2026", case: "RS-2023-018" },
];

export default function PortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ caseId: "", dob: "" });
  const [activeTab, setActiveTab] = useState("cases");
  const [loginError, setLoginError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo login: accept any case ID + DOB
    if (loginForm.caseId && loginForm.dob) {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Please enter your Case ID and Date of Birth.");
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <section className="pt-32 pb-16 bg-[#050505] border-b border-[#D4AF37]/15">
          <div className="container-custom text-center">
            <div className="section-label mb-4">Client Portal · मुवक्किल पोर्टल</div>
            <h1 className="section-title mb-4">
              Track Your <span>Case</span>
            </h1>
            <p className="text-white/50 max-w-xl mx-auto">
              Access your case status, hearing dates, court orders, and documents — 24/7.
            </p>
          </div>
        </section>

        <section className="py-24 bg-[#0a0a0a] flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="glass-card p-8">
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-6">
                <Scale size={24} className="text-[#D4AF37]" />
              </div>
              <h2 className="font-serif text-2xl text-white text-center mb-1">
                Client Login
              </h2>
              <p className="text-white/40 text-sm text-center mb-7">
                Enter your Case ID and Date of Birth to access your portal
              </p>

              {loginError && (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded mb-5">
                  <AlertCircle size={16} />
                  {loginError}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="form-label" htmlFor="caseId">Case ID / Client ID</label>
                  <input
                    id="caseId"
                    type="text"
                    placeholder="e.g., RS-2024-001"
                    className="form-input"
                    value={loginForm.caseId}
                    onChange={(e) => setLoginForm({ ...loginForm, caseId: e.target.value })}
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="dob">Date of Birth</label>
                  <input
                    id="dob"
                    type="date"
                    className="form-input"
                    value={loginForm.dob}
                    onChange={(e) => setLoginForm({ ...loginForm, dob: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn-gold w-full justify-center">
                  Access Portal
                </button>
              </form>

              <p className="text-white/30 text-xs text-center mt-5">
                Don&apos;t have access? <a href="/contact" className="text-[#D4AF37] hover:underline">Contact us</a> to get your Client ID.
              </p>

              {/* Demo hint */}
              <div className="mt-5 p-3 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded text-center">
                <p className="text-[#D4AF37]/70 text-xs">
                  Demo: Enter any Case ID + Date to explore the portal
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Portal Dashboard
  return (
    <>
      <section className="pt-28 pb-8 bg-[#050505] border-b border-[#D4AF37]/15">
        <div className="container-custom flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="section-label mb-1">Client Portal</div>
            <h1 className="font-serif text-3xl text-white">
              Welcome back, <span className="text-gradient">Client</span>
            </h1>
            <p className="text-white/40 text-sm mt-1">
              {new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 text-white/50 hover:text-red-400 transition-colors text-sm"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </section>

      <section className="py-10 bg-[#0a0a0a]">
        <div className="container-custom">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Active Cases", value: "2", icon: Scale, color: "text-[#D4AF37]" },
              { label: "Next Hearing", value: "Oct 10", icon: Calendar, color: "text-blue-400" },
              { label: "Documents", value: "4", icon: FileText, color: "text-purple-400" },
              { label: "New Updates", value: "3", icon: Bell, color: "text-green-400" },
            ].map((s) => (
              <div key={s.label} className="portal-card">
                <s.icon size={20} className={`${s.color} mb-2`} />
                <div className="font-serif text-2xl text-white font-bold">{s.value}</div>
                <div className="text-white/40 text-xs">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-white/10 mb-8">
            {[
              { id: "cases", label: "My Cases", icon: Scale },
              { id: "documents", label: "Documents", icon: FileText },
              { id: "profile", label: "Profile", icon: User },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 pb-3 text-sm font-display font-600 tracking-wide transition-all ${
                  activeTab === tab.id ? "tab-active" : "tab-inactive"
                }`}
              >
                <tab.icon size={15} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cases Tab */}
          {activeTab === "cases" && (
            <div className="space-y-6">
              {mockCases.map((c) => (
                <div key={c.id} className="portal-card">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="badge text-[0.65rem]">{c.id}</span>
                        <span
                          className={`status-badge ${
                            c.status === "active"
                              ? "status-active"
                              : "status-closed"
                          }`}
                        >
                          {c.status}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg text-white">{c.title}</h3>
                      <p className="text-[#D4AF37]/60 text-xs font-display mt-1">
                        {c.type} · {c.court}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-white/40 text-xs">Next Hearing</p>
                      <p className="text-white font-semibold text-sm">{c.nextHearing}</p>
                      <p className="text-[#D4AF37]/60 text-xs mt-1">Stage: {c.stage}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-4">
                    <p className="text-white/40 text-xs font-display uppercase tracking-wider mb-3">
                      Recent Updates
                    </p>
                    <div className="space-y-2.5">
                      {c.updates.map((u, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="mt-0.5 shrink-0">
                            {u.type === "success" ? (
                              <CheckCircle size={14} className="text-green-400" />
                            ) : u.type === "important" ? (
                              <AlertCircle size={14} className="text-[#D4AF37]" />
                            ) : (
                              <Clock size={14} className="text-white/30" />
                            )}
                          </div>
                          <div>
                            <p className="text-white/30 text-xs">{u.date}</p>
                            <p className="text-white/65 text-sm">{u.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === "documents" && (
            <div className="space-y-3">
              {documents.map((doc) => (
                <div
                  key={doc.name}
                  className="portal-card flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-[#D4AF37]/10 flex items-center justify-center">
                      <FileText size={18} className="text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{doc.name}</p>
                      <p className="text-white/40 text-xs">
                        {doc.size} · {doc.date} · Case {doc.case}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                      <Eye size={14} className="text-white/50" />
                    </button>
                    <button className="w-8 h-8 rounded bg-[#D4AF37]/10 flex items-center justify-center hover:bg-[#D4AF37]/20 transition-colors">
                      <Download size={14} className="text-[#D4AF37]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="portal-card p-7 max-w-xl">
              <div className="flex items-center gap-5 mb-7">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                  <User size={28} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h2 className="font-serif text-xl text-white">Client Profile</h2>
                  <p className="text-white/40 text-sm">ID: {loginForm.caseId}</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Advocate", value: "Adv. Rahul Sharma" },
                  { label: "Total Cases", value: "3 (2 Active, 1 Closed)" },
                  { label: "Next Hearing", value: "October 10, 2026" },
                  { label: "Chamber", value: "No. 123, Delhi District Court" },
                  { label: "Support", value: "+91 99999 99999" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center border-b border-white/5 pb-3"
                  >
                    <span className="text-white/40 text-sm">{item.label}</span>
                    <span className="text-white text-sm font-medium">{item.value}</span>
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
