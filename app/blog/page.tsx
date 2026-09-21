"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, ArrowRight, Calendar, Tag, ExternalLink } from "lucide-react";
import { articles } from "@/data/articles";

const categories = [
  "All",
  "Criminal Law",
  "Civil Law",
  "Tax Law",
  "IPR",
  "Constitutional Law",
  "Cyber Law",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#050505] border-b border-[#D4AF37]/15">
        <div className="container-custom text-center">
          <div className="section-label mb-4">
            Legal Insights · कानूनी जानकारी
          </div>
          <h1 className="section-title mb-4">
            Know Your <span>Rights</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Expert analysis, simplified. Stay updated on Indian law, court
            judgments, and legal rights.
          </p>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-10 bg-[#050505] border-b border-[#D4AF37]/10">
        <div className="container-custom">
          <div className="glass-card p-6 flex flex-col md:flex-row items-center gap-5">
            <div className="flex-1">
              <h3 className="font-serif text-xl text-white mb-1">
                Legal Updates to Your Inbox
              </h3>
              <p className="text-white/50 text-sm">
                Subscribe to our newsletter for weekly legal insights.
                <span className="text-[#D4AF37]/70 ml-1">
                  साप्ताहिक कानूनी जानकारी पाएं।
                </span>
              </p>
            </div>
            <form
              className="flex gap-3 w-full md:w-auto"
              action="/api/newsletter"
              method="POST"
            >
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="form-input md:w-64"
                required
              />
              <button type="submit" className="btn-gold whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom">
          {/* Interactive Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-display font-600 uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    : "border border-[#D4AF37]/30 text-white/60 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredArticles.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-card group block cursor-pointer"
                title={`Open "${post.title}" in new tab`}
              >
                <div className="h-44 bg-gradient-to-br from-[#D4AF37]/15 via-black/30 to-black flex items-center justify-center relative overflow-hidden">
                  <BookOpen
                    size={52}
                    className="text-[#D4AF37]/30 group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <span className="badge text-[0.6rem]">{post.category}</span>
                    <span className="bg-black/60 p-1 rounded text-white/50 group-hover:text-white transition-colors">
                      <ExternalLink size={12} />
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-white/40 text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} className="text-[#D4AF37]" />
                      {post.date}
                    </span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-lg text-white mb-1 group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-[#D4AF37]/70 text-xs font-display mb-3">
                    {post.hindi}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 text-[0.65rem] text-white/40 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                      >
                        <Tag size={9} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    <span className="flex items-center gap-1.5 text-[#D4AF37] group-hover:text-white transition-colors text-xs font-display font-600 uppercase tracking-wider">
                      Read Full Article <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[0.65rem] text-white/30 font-display">
                      Opens in new tab ↗
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
