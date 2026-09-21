import Link from "next/link";
import { BookOpen, ArrowRight, Calendar, Tag } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Understanding BNS 2023: Key Changes from IPC",
    hindi: "बीएनएस 2023: आईपीसी से प्रमुख बदलाव",
    date: "September 15, 2026",
    category: "Criminal Law",
    readTime: "7 min read",
    excerpt:
      "The Bharatiya Nyaya Sanhita 2023 has replaced the Indian Penal Code. This comprehensive guide covers bail provisions, new offences, and what it means for ongoing cases.",
    tags: ["BNS", "IPC", "Criminal Law"],
  },
  {
    id: 2,
    title: "GST Compliance for Small Businesses: A Practical Guide",
    hindi: "छोटे व्यवसायों के लिए जीएसटी अनुपालन",
    date: "September 8, 2026",
    category: "Tax Law",
    readTime: "10 min read",
    excerpt:
      "A practical guide to GST registration, filing deadlines, input tax credit, and avoiding common compliance pitfalls that small businesses face.",
    tags: ["GST", "Tax", "Business"],
  },
  {
    id: 3,
    title: "How to Register a Trademark in India: Step-by-Step",
    hindi: "भारत में ट्रेडमार्क पंजीकरण कैसे करें",
    date: "September 1, 2026",
    category: "IPR",
    readTime: "8 min read",
    excerpt:
      "Protecting your brand is critical. Here's everything you need to know about trademark registration, from filing Form TM-A to receiving your registration certificate.",
    tags: ["Trademark", "IPR", "Brand Protection"],
  },
  {
    id: 4,
    title: "PIL in India: When and How to File a Public Interest Litigation",
    hindi: "जनहित याचिका: कब और कैसे दाखिल करें",
    date: "August 25, 2026",
    category: "Constitutional Law",
    readTime: "9 min read",
    excerpt:
      "PILs are a powerful tool for social justice. Learn who can file them, what courts have jurisdiction, and landmark PIL judgments that changed India.",
    tags: ["PIL", "Constitutional Law", "Supreme Court"],
  },
  {
    id: 5,
    title: "Cyber Crime in India: Laws, Reporting & Remedies",
    hindi: "भारत में साइबर अपराध: कानून, रिपोर्टिंग और उपाय",
    date: "August 18, 2026",
    category: "Cyber Law",
    readTime: "12 min read",
    excerpt:
      "With rising cybercrime, understanding IT Act 2000, data protection laws, and how to report online fraud is essential for every digital citizen.",
    tags: ["Cyber Law", "IT Act", "Data Privacy"],
  },
  {
    id: 6,
    title: "Property Disputes in India: Legal Routes & Remedies",
    hindi: "संपत्ति विवाद: कानूनी रास्ते और उपाय",
    date: "August 10, 2026",
    category: "Civil Law",
    readTime: "11 min read",
    excerpt:
      "From land encroachment to title disputes, we explain the legal options available — civil suit, RERA complaint, and partition suit — and how courts approach these matters.",
    tags: ["Property", "Civil Law", "RERA"],
  },
];

const categories = [
  "All",
  "Criminal Law",
  "Civil Law",
  "Tax Law",
  "IPR",
  "Constitutional Law",
  "Cyber Law",
  "Corporate Law",
];

export default function BlogPage() {
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
            <form className="flex gap-3 w-full md:w-auto" action="/api/newsletter" method="POST">
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
          {/* Category Filter - static display */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-xs font-display font-600 uppercase tracking-wider cursor-pointer transition-all ${
                  i === 0
                    ? "bg-[#D4AF37] text-black"
                    : "border border-[#D4AF37]/30 text-white/50 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {articles.map((post) => (
              <article key={post.id} className="blog-card group">
                <div className="h-44 bg-gradient-to-br from-[#D4AF37]/10 via-black/20 to-black flex items-center justify-center relative overflow-hidden">
                  <BookOpen
                    size={52}
                    className="text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="badge text-[0.6rem]">{post.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-white/30 text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {post.date}
                    </span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-lg text-white mb-1 group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-[#D4AF37]/50 text-xs font-display mb-3">
                    {post.hindi}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 text-[0.65rem] text-white/30 bg-white/5 px-2 py-0.5 rounded"
                      >
                        <Tag size={9} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors text-xs font-display font-600 uppercase tracking-wider cursor-pointer">
                    Read Article <ArrowRight size={12} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
