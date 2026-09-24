"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy, serverTimestamp, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";
import { Plus, Trash2, LogOut, Shield, Edit3, Eye, EyeOff, FileText, Calendar, Tag, CheckCircle, X, Newspaper, AlertCircle, RefreshCw, Users, Briefcase, Phone } from "lucide-react";

const CATEGORIES = ["Criminal Law","Civil Law","Family Law","Property Law","Tax Law","Constitutional Law","General Legal","Announcement"];
const CASE_TYPES = ["Civil Litigation","Criminal","Family Law","Property","Tax Law","IPR","Revenue"];
const emptyBlogForm = { title:"", excerpt:"", content:"", category:"Announcement", tags:"", author:"Adv. Madan Kumar Upadhyay", published:true };
const emptyCaseForm = { title:"", type:"Civil Litigation", court:"", filed:"", nextHearing:"", status:"active", stage:"" };

export default function AdminDashboard() {
  const { user, isAdmin, isLoading, signOut } = useAuth();
  const router = useRouter();

  // Blog state
  const [posts, setPosts] = useState<{id?:string;title:string;excerpt:string;content:string;category:string;tags:string;author:string;date:string;published:boolean}[]>([]);
  const [blogView, setBlogView] = useState<"list"|"create"|"preview">("list");
  const [blogForm, setBlogForm] = useState(emptyBlogForm);
  const [previewPost, setPreviewPost] = useState<typeof posts[0] | null>(null);
  const [fetching, setFetching] = useState(false);
  const [blogSaving, setBlogSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string|null>(null);

  // Client state
  const [clients, setClients] = useState<{id:string;email:string;displayName:string;phone:string;notes:string}[]>([]);
  const [clientsFetching, setClientsFetching] = useState(false);
  const [selectedClient, setSelectedClient] = useState<string|null>(null);
  const [clientCases, setClientCases] = useState<{id:string;title:string;type:string;court:string;nextHearing:string;status:string;stage:string}[]>([]);
  const [addingCase, setAddingCase] = useState(false);
  const [caseForm, setCaseForm] = useState(emptyCaseForm);
  const [caseSaving, setCaseSaving] = useState(false);

  // UI
  const [mainTab, setMainTab] = useState<"blogs"|"clients">("blogs");
  const [toast, setToast] = useState("");

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(""), 3000); };

  const fetchPosts = useCallback(async () => {
    setFetching(true);
    try {
      const snap = await getDocs(query(collection(db, "blog_posts"), orderBy("createdAt", "desc")));
      setPosts(snap.docs.map(d => ({ id: d.id, ...d.data() } as typeof posts[0])));
    } catch (e) { console.error(e); } finally { setFetching(false); }
  }, []);

  const fetchClients = useCallback(async () => {
    setClientsFetching(true);
    try {
      const snap = await getDocs(collection(db, "users"));
      setClients(snap.docs.map(d => ({ id: d.id, ...d.data() } as typeof clients[0])));
    } catch (e) { console.error(e); } finally { setClientsFetching(false); }
  }, []);

  const fetchClientCases = useCallback(async (email: string) => {
    try {
      const snap = await getDocs(query(collection(db, "cases"), where("clientEmail", "==", email)));
      setClientCases(snap.docs.map(d => ({ id: d.id, ...d.data() } as typeof clientCases[0])));
    } catch (e) { console.error(e); }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (!user || !isAdmin) { router.replace("/admin/login"); return; }
      fetchPosts();
      fetchClients();
    }
  }, [user, isAdmin, isLoading, router, fetchPosts, fetchClients]);

  // Blog handlers
  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    setBlogSaving(true);
    try {
      const date = new Date().toLocaleDateString("en-IN", { year:"numeric", month:"long", day:"numeric" });
      await addDoc(collection(db, "blog_posts"), { ...blogForm, date, createdAt: serverTimestamp() });
      showToast("✓ Post published!");
      setBlogForm(emptyBlogForm);
      setBlogView("list");
      fetchPosts();
    } catch (e) { console.error(e); showToast("Error saving post."); } finally { setBlogSaving(false); }
  };

  const handleDeletePost = async (id: string) => {
    try { await deleteDoc(doc(db, "blog_posts", id)); setPosts(p => p.filter(b => b.id !== id)); setDeleteId(null); showToast("Post deleted."); }
    catch (e) { console.error(e); }
  };

  const togglePublish = async (post: typeof posts[0]) => {
    if (!post.id) return;
    try { await updateDoc(doc(db, "blog_posts", post.id), { published: !post.published }); setPosts(p => p.map(b => b.id === post.id ? { ...b, published: !b.published } : b)); }
    catch (e) { console.error(e); }
  };

  // Case handler
  const handleAddCase = async (e: React.FormEvent) => {
    e.preventDefault();
    const client = clients.find(c => c.id === selectedClient);
    if (!client) return;
    setCaseSaving(true);
    try {
      await addDoc(collection(db, "cases"), { ...caseForm, clientEmail: client.email, clientUid: client.id, updates: [], createdAt: serverTimestamp() });
      showToast("✓ Case added for " + client.displayName);
      fetchClientCases(client.email);
      setAddingCase(false);
      setCaseForm(emptyCaseForm);
    } catch (e) { console.error(e); showToast("Error adding case."); } finally { setCaseSaving(false); }
  };

  if (isLoading) return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <svg className="animate-spin h-8 w-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
    </div>
  );

  const publishedCount = posts.filter(b => b.published).length;
  const currentClient = clients.find(c => c.id === selectedClient);

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Toast */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-[#1a1a1a] border border-[#D4AF37]/30 text-white px-4 py-3 rounded-lg shadow-2xl">
          <CheckCircle size={16} className="text-[#D4AF37]" />{toast}
        </div>
      )}

      {/* Delete modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card p-7 max-w-sm w-full border border-red-500/20 rounded-lg">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4"><AlertCircle size={22} className="text-red-400" /></div>
            <h3 className="font-serif text-xl text-white text-center mb-2">Delete Post?</h3>
            <p className="text-white/40 text-sm text-center mb-6">This will permanently delete from Firestore.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 px-4 py-2.5 border border-white/10 text-white/60 rounded text-sm">Cancel</button>
              <button onClick={() => handleDeletePost(deleteId)} className="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded text-sm font-semibold">Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* Top Bar */}
      <div className="bg-[#0a0a0a] border-b border-[#D4AF37]/15 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center"><Shield size={15} className="text-[#D4AF37]" /></div>
            <span className="font-serif text-white text-lg">MK Associates</span>
            <span className="text-[#D4AF37]/60 text-xs font-display tracking-widest uppercase">Admin</span>
          </div>
          <div className="flex items-center gap-4">
            {user?.photoURL && <img src={user.photoURL} alt="avatar" className="w-7 h-7 rounded-full border border-[#D4AF37]/30" />}
            <span className="text-white/40 text-sm hidden md:block">{user?.displayName}</span>
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#D4AF37] text-sm transition-colors hidden md:block">View Site ↗</a>
            <button onClick={async () => { await signOut(); router.push("/admin/login"); }} className="flex items-center gap-2 text-white/40 hover:text-red-400 text-sm transition-colors">
              <LogOut size={15} /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Main Tab Switcher */}
        <div className="flex gap-1 mb-8 bg-white/5 rounded-lg p-1 w-fit">
          <button onClick={() => setMainTab("blogs")} className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-display font-600 transition-all ${mainTab === "blogs" ? "bg-[#D4AF37] text-black" : "text-white/50 hover:text-white"}`}>
            <FileText size={14} /> Blog Posts ({posts.length})
          </button>
          <button onClick={() => { setMainTab("clients"); fetchClients(); }} className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-display font-600 transition-all ${mainTab === "clients" ? "bg-[#D4AF37] text-black" : "text-white/50 hover:text-white"}`}>
            <Users size={14} /> Clients ({clients.length})
          </button>
        </div>

        {/* ═══ BLOGS TAB ═══ */}
        {mainTab === "blogs" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="font-serif text-3xl text-white">Blog Management</h1>
                <p className="text-white/40 text-sm mt-1">Posts saved to Firestore · shown on homepage</p>
              </div>
              <div className="flex items-center gap-3">
                {blogView === "list" && (
                  <>
                    <button onClick={fetchPosts} disabled={fetching} className="w-9 h-9 rounded border border-white/10 flex items-center justify-center hover:border-[#D4AF37]/30 transition-colors">
                      <RefreshCw size={14} className={`text-white/40 ${fetching ? "animate-spin" : ""}`} />
                    </button>
                    <button onClick={() => setBlogView("create")} className="btn-gold flex items-center gap-2 text-sm"><Plus size={16} /> New Post</button>
                  </>
                )}
                {blogView !== "list" && (
                  <button onClick={() => { setBlogView("list"); setPreviewPost(null); }} className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors">
                    <X size={15} /> Back
                  </button>
                )}
              </div>
            </div>

            {/* Stats */}
            {blogView === "list" && (
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[{label:"Total",value:posts.length,icon:FileText,color:"text-[#D4AF37]"},{label:"Published",value:publishedCount,icon:Eye,color:"text-green-400"},{label:"Drafts",value:posts.length-publishedCount,icon:EyeOff,color:"text-white/40"}].map(s => (
                  <div key={s.label} className="glass-card p-5 border border-white/5 rounded-lg">
                    <s.icon size={18} className={`${s.color} mb-2`} />
                    <div className="font-serif text-2xl text-white font-bold">{s.value}</div>
                    <div className="text-white/40 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* List */}
            {blogView === "list" && (
              fetching ? (
                <div className="text-center py-16 text-white/30"><RefreshCw size={22} className="animate-spin mx-auto mb-3 text-[#D4AF37]/40" />Loading…</div>
              ) : posts.length === 0 ? (
                <div className="glass-card p-12 text-center border border-white/5 rounded-lg">
                  <Newspaper size={36} className="text-[#D4AF37]/30 mx-auto mb-4" />
                  <h3 className="font-serif text-xl text-white mb-2">No posts yet</h3>
                  <button onClick={() => setBlogView("create")} className="btn-gold inline-flex items-center gap-2 text-sm mt-3"><Plus size={14} /> Create First Post</button>
                </div>
              ) : (
                <div className="space-y-4">
                  {posts.map(post => (
                    <div key={post.id} className="glass-card p-5 border border-white/5 rounded-lg hover:border-[#D4AF37]/15 transition-all">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="badge text-[0.6rem]">{post.category}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full font-display ${post.published ? "bg-green-500/15 text-green-400 border border-green-500/20" : "bg-white/5 text-white/30 border border-white/10"}`}>{post.published ? "Published" : "Draft"}</span>
                          </div>
                          <h3 className="font-serif text-lg text-white truncate">{post.title}</h3>
                          <p className="text-white/40 text-sm mt-1 line-clamp-1">{post.excerpt}</p>
                          <div className="flex items-center gap-3 mt-2 text-white/25 text-xs">
                            <span className="flex items-center gap-1"><Calendar size={10} />{post.date}</span>
                            <span className="flex items-center gap-1"><Tag size={10} />{post.author}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button onClick={() => { setPreviewPost(post); setBlogView("preview"); }} className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-white/10"><Eye size={14} className="text-white/50" /></button>
                          <button onClick={() => togglePublish(post)} className={`w-8 h-8 rounded flex items-center justify-center ${post.published ? "bg-green-500/10 hover:bg-green-500/20" : "bg-white/5 hover:bg-white/10"}`}>
                            {post.published ? <Eye size={14} className="text-green-400" /> : <EyeOff size={14} className="text-white/30" />}
                          </button>
                          <button onClick={() => setDeleteId(post.id!)} className="w-8 h-8 rounded bg-red-500/10 flex items-center justify-center hover:bg-red-500/20"><Trash2 size={14} className="text-red-400" /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}

            {/* Create Form */}
            {blogView === "create" && (
              <form onSubmit={handleCreatePost} className="glass-card p-7 border border-[#D4AF37]/10 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-8 h-8 rounded bg-[#D4AF37]/10 flex items-center justify-center"><Edit3 size={15} className="text-[#D4AF37]" /></div>
                  <h2 className="font-serif text-xl text-white">Create New Post</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div className="md:col-span-2"><label className="form-label">Title *</label><input type="text" className="form-input" placeholder="Post title" value={blogForm.title} onChange={e => setBlogForm({...blogForm, title:e.target.value})} required /></div>
                  <div><label className="form-label">Category</label><select className="form-input" value={blogForm.category} onChange={e => setBlogForm({...blogForm, category:e.target.value})}>{CATEGORIES.map(c => <option key={c}>{c}</option>)}</select></div>
                  <div><label className="form-label">Author</label><input type="text" className="form-input" value={blogForm.author} onChange={e => setBlogForm({...blogForm, author:e.target.value})} /></div>
                  <div className="md:col-span-2"><label className="form-label">Excerpt *</label><textarea className="form-input" rows={2} placeholder="Short summary shown on homepage" value={blogForm.excerpt} onChange={e => setBlogForm({...blogForm, excerpt:e.target.value})} required /></div>
                  <div className="md:col-span-2"><label className="form-label">Full Content *</label><textarea className="form-input" rows={9} placeholder="Write the full article here…" value={blogForm.content} onChange={e => setBlogForm({...blogForm, content:e.target.value})} required /></div>
                  <div className="md:col-span-2"><label className="form-label">Tags (comma separated)</label><input type="text" className="form-input" placeholder="e.g. Supreme Court, 2026" value={blogForm.tags} onChange={e => setBlogForm({...blogForm, tags:e.target.value})} /></div>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`relative w-10 h-5 rounded-full cursor-pointer transition-colors ${blogForm.published ? "bg-[#D4AF37]" : "bg-white/10"}`} onClick={() => setBlogForm({...blogForm, published:!blogForm.published})}>
                    <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all shadow ${blogForm.published ? "left-5" : "left-0.5"}`} />
                  </div>
                  <span className="text-white/60 text-sm">{blogForm.published ? "Publish immediately" : "Save as draft"}</span>
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setBlogView("list")} className="btn-outline text-sm">Cancel</button>
                  <button type="submit" disabled={blogSaving} className="btn-gold text-sm disabled:opacity-60">
                    {blogSaving ? "Saving…" : <><CheckCircle size={15} /> {blogForm.published ? "Publish" : "Save Draft"}</>}
                  </button>
                </div>
              </form>
            )}

            {/* Preview */}
            {blogView === "preview" && previewPost && (
              <div className="glass-card p-7 border border-white/5 rounded-lg">
                <span className="badge text-[0.6rem] mb-4 inline-block">{previewPost.category}</span>
                <h2 className="font-serif text-3xl text-white mb-3">{previewPost.title}</h2>
                <p className="text-[#D4AF37]/70 mb-2 text-sm">{previewPost.excerpt}</p>
                <div className="flex items-center gap-3 text-white/30 text-xs mb-7"><span>{previewPost.date}</span><span>·</span><span>{previewPost.author}</span></div>
                <div className="border-t border-white/5 pt-6 text-white/70 text-sm leading-relaxed whitespace-pre-wrap">{previewPost.content}</div>
              </div>
            )}
          </div>
        )}

        {/* ═══ CLIENTS TAB ═══ */}
        {mainTab === "clients" && (
          <div>
            {selectedClient && currentClient ? (
              <div>
                <button onClick={() => { setSelectedClient(null); setClientCases([]); setAddingCase(false); }} className="flex items-center gap-2 text-white/40 hover:text-white text-sm mb-6 transition-colors">← Back to clients</button>
                <div className="glass-card p-6 border border-[#D4AF37]/10 rounded-lg mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center"><Users size={20} className="text-[#D4AF37]" /></div>
                    <div>
                      <h3 className="font-serif text-xl text-white">{currentClient.displayName}</h3>
                      <p className="text-white/40 text-sm">{currentClient.email}</p>
                      <p className="text-white/30 text-xs flex items-center gap-1 mt-1"><Phone size={10} />{currentClient.phone}</p>
                    </div>
                  </div>
                  {currentClient.notes && <p className="text-white/40 text-sm mt-4 pt-4 border-t border-white/5 italic">&ldquo;{currentClient.notes}&rdquo;</p>}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-lg text-white flex items-center gap-2"><Briefcase size={16} className="text-[#D4AF37]" /> Cases</h3>
                  <button onClick={() => setAddingCase(!addingCase)} className="btn-gold text-sm flex items-center gap-2"><Plus size={14} /> Add Case</button>
                </div>

                {addingCase && (
                  <form onSubmit={handleAddCase} className="glass-card p-6 border border-[#D4AF37]/10 rounded-lg mb-6">
                    <h4 className="font-serif text-lg text-white mb-5">New Case for {currentClient.displayName}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="md:col-span-2"><label className="form-label">Case Title *</label><input type="text" className="form-input" placeholder="e.g. Property Dispute vs. XYZ" value={caseForm.title} onChange={e => setCaseForm({...caseForm,title:e.target.value})} required /></div>
                      <div><label className="form-label">Type</label><select className="form-input" value={caseForm.type} onChange={e => setCaseForm({...caseForm,type:e.target.value})}>{CASE_TYPES.map(t => <option key={t}>{t}</option>)}</select></div>
                      <div><label className="form-label">Court / Forum</label><input type="text" className="form-input" placeholder="e.g. Delhi District Court" value={caseForm.court} onChange={e => setCaseForm({...caseForm,court:e.target.value})} /></div>
                      <div><label className="form-label">Date Filed</label><input type="text" className="form-input" placeholder="e.g. Jan 15, 2024" value={caseForm.filed} onChange={e => setCaseForm({...caseForm,filed:e.target.value})} /></div>
                      <div><label className="form-label">Next Hearing</label><input type="text" className="form-input" placeholder="e.g. Oct 10, 2026" value={caseForm.nextHearing} onChange={e => setCaseForm({...caseForm,nextHearing:e.target.value})} /></div>
                      <div><label className="form-label">Current Stage</label><input type="text" className="form-input" placeholder="e.g. Arguments, Evidence" value={caseForm.stage} onChange={e => setCaseForm({...caseForm,stage:e.target.value})} /></div>
                      <div><label className="form-label">Status</label><select className="form-input" value={caseForm.status} onChange={e => setCaseForm({...caseForm,status:e.target.value})}><option value="active">Active</option><option value="closed">Closed</option></select></div>
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={() => setAddingCase(false)} className="btn-outline text-sm">Cancel</button>
                      <button type="submit" disabled={caseSaving} className="btn-gold text-sm disabled:opacity-60">{caseSaving ? "Saving…" : <><CheckCircle size={14} /> Save Case</>}</button>
                    </div>
                  </form>
                )}

                {clientCases.length === 0 ? (
                  <div className="glass-card p-8 text-center border border-white/5 rounded-lg"><Briefcase size={28} className="text-white/20 mx-auto mb-3" /><p className="text-white/40 text-sm">No cases added yet. Click &ldquo;Add Case&rdquo; above.</p></div>
                ) : (
                  <div className="space-y-3">
                    {clientCases.map(c => (
                      <div key={c.id} className="glass-card p-4 border border-white/5 rounded-lg flex items-center justify-between gap-4">
                        <div>
                          <h4 className="text-white font-medium">{c.title}</h4>
                          <p className="text-white/40 text-xs mt-1">{c.type} · {c.court} · Stage: {c.stage} · Next: {c.nextHearing}</p>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-display shrink-0 ${c.status === "active" ? "bg-green-500/15 text-green-400 border border-green-500/20" : "bg-white/5 text-white/30 border border-white/10"}`}>{c.status}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-2xl text-white">Registered Clients</h2>
                  <button onClick={fetchClients} disabled={clientsFetching} className="w-9 h-9 rounded border border-white/10 flex items-center justify-center hover:border-[#D4AF37]/30">
                    <RefreshCw size={14} className={`text-white/40 ${clientsFetching ? "animate-spin" : ""}`} />
                  </button>
                </div>
                {clientsFetching ? (
                  <div className="text-center py-12 text-white/30"><RefreshCw size={20} className="animate-spin mx-auto mb-3 text-[#D4AF37]/40" />Loading clients…</div>
                ) : clients.length === 0 ? (
                  <div className="glass-card p-12 text-center border border-white/5 rounded-lg">
                    <Users size={36} className="text-[#D4AF37]/30 mx-auto mb-4" />
                    <h3 className="font-serif text-xl text-white mb-2">No clients yet</h3>
                    <p className="text-white/40 text-sm">Clients appear here after signing in via the portal and completing registration.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {clients.map(client => (
                      <div key={client.id} onClick={() => { setSelectedClient(client.id); fetchClientCases(client.email); }} className="glass-card p-5 border border-white/5 hover:border-[#D4AF37]/20 rounded-lg cursor-pointer transition-all flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0"><Users size={16} className="text-[#D4AF37]" /></div>
                          <div>
                            <p className="text-white font-medium">{client.displayName}</p>
                            <p className="text-white/40 text-sm">{client.email}</p>
                            {client.phone && <p className="text-white/30 text-xs flex items-center gap-1 mt-0.5"><Phone size={9} />{client.phone}</p>}
                          </div>
                        </div>
                        <span className="text-white/20 text-sm">View & Add Cases →</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
