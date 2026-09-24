"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ArrowRight, Calendar, Tag, Megaphone, RefreshCw } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string;
  author: string;
  date: string;
  published: boolean;
}

export default function LatestAnnouncements() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(
          collection(db, "blog_posts"),
          where("published", "==", true),
          orderBy("createdAt", "desc")
        );
        const snap = await getDocs(q);
        const data = snap.docs.slice(0, 3).map(d => ({ id: d.id, ...d.data() } as BlogPost));
        setPosts(data);
      } catch (e) {
        console.error("Announcements fetch error:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-[#050505] border-t border-[#D4AF37]/10">
        <div className="container-custom flex justify-center">
          <RefreshCw size={20} className="animate-spin text-[#D4AF37]/30" />
        </div>
      </section>
    );
  }

  if (posts.length === 0) return null;

  return (
    <section className="py-20 bg-[#050505] border-t border-[#D4AF37]/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="section-label mb-3 flex items-center gap-2">
              <Megaphone size={13} className="text-[#D4AF37]" />
              Latest Updates · नवीनतम समाचार
            </div>
            <h2 className="section-title">Firm <span>Announcements</span></h2>
            <p className="text-white/40 mt-2 text-sm max-w-md">
              News, legal updates and important announcements from MK Associates.
            </p>
          </div>
          <a href="/blog" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition-colors text-sm font-display font-600 uppercase tracking-wider group">
            View All Articles <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <div
              key={post.id}
              className="glass-card border border-white/5 hover:border-[#D4AF37]/20 transition-all duration-300 group cursor-pointer rounded-lg overflow-hidden"
              onClick={() => setExpanded(expanded === post.id ? null : post.id)}
            >
              <div className="h-0.5 bg-gradient-to-r from-[#D4AF37]/60 via-[#D4AF37]/20 to-transparent" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="badge text-[0.6rem]">{post.category}</span>
                  <span className="text-white/25 text-xs">·</span>
                  <span className="flex items-center gap-1 text-white/30 text-xs">
                    <Calendar size={10} />{post.date}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-white mb-2 group-hover:text-[#D4AF37] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                {expanded === post.id && (
                  <div className="border-t border-white/5 pt-4 mb-4">
                    <p className="text-white/60 text-sm leading-relaxed whitespace-pre-wrap">{post.content}</p>
                    {post.tags && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {post.tags.split(",").map(t => (
                          <span key={t} className="flex items-center gap-1 text-[0.6rem] text-white/30 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                            <Tag size={8} />{t.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-white/30 text-xs font-display">{post.author}</span>
                  <span className="flex items-center gap-1 text-[#D4AF37] group-hover:text-white transition-colors text-xs font-display font-600 uppercase tracking-wider">
                    {expanded === post.id ? "Close" : "Read More"}
                    <ArrowRight size={11} className={`transition-transform ${expanded === post.id ? "rotate-90" : ""}`} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
