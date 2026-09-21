import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Tag,
  ShieldAlert,
  Phone,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | MK Associates",
    };
  }

  return {
    title: `${article.title} | MK Associates`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | MK Associates`,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <article className="min-h-screen bg-[#050505] pt-32 pb-24 text-white">
      <div className="container-custom max-w-4xl">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:underline"
          >
            <ArrowLeft size={16} />
            Back to All Articles / सभी लेख
          </Link>
          <span className="badge text-xs uppercase tracking-wider">
            {article.category}
          </span>
        </div>

        {/* Article Header */}
        <header className="mb-10 pb-8 border-b border-white/10">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-[#D4AF37] text-lg font-display mb-6">
            {article.hindi}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
            <div className="flex items-center gap-1.5">
              <User size={14} className="text-[#D4AF37]" />
              <span className="font-semibold text-white">{article.author}</span>
              <span className="text-white/40 hidden sm:inline">
                ({article.authorRole})
              </span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-[#D4AF37]" />
              <span>{article.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#D4AF37]" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Banner Image */}
        <div className="relative h-64 sm:h-80 md:h-[400px] w-full rounded-2xl overflow-hidden mb-10 border border-[#D4AF37]/30 shadow-[0_0_35px_rgba(212,175,55,0.15)] bg-black/60">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 z-10">
            <span className="badge text-xs uppercase tracking-wider bg-black/80 backdrop-blur-md border-[#D4AF37]">
              {article.category}
            </span>
            <span className="text-white/80 text-xs bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Lead Excerpt */}
        <div className="glass-card p-6 mb-10 border-l-4 border-l-[#D4AF37]">
          <p className="text-white/90 text-base sm:text-lg leading-relaxed italic font-serif">
            &quot;{article.excerpt}&quot;
          </p>
        </div>

        {/* Main Article Content */}
        <div className="space-y-10 text-white/80 leading-relaxed text-base sm:text-lg">
          {article.content.map((section, index) => (
            <section key={index} className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white text-gradient-light pt-2">
                {section.heading}
              </h2>
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              ))}
              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="list-disc list-inside space-y-2 pl-2 text-white/85">
                  {section.bulletPoints.map((point, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap gap-2">
          <span className="text-xs text-white/40 flex items-center gap-1 mr-2">
            <Tag size={12} /> Tags:
          </span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/5 border border-white/10 text-xs px-3 py-1 rounded-full text-white/60"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-8 p-5 rounded-xl bg-[#0D0B09] border border-[#D4AF37]/20 flex items-start gap-3.5">
          <ShieldAlert size={20} className="text-[#D4AF37] shrink-0 mt-0.5" />
          <div className="text-xs text-white/50 leading-relaxed">
            <strong className="text-[#D4AF37] block mb-1">
              Legal Disclaimer / कानूनी सूचना:
            </strong>
            {article.legalDisclaimer}
          </div>
        </div>

        {/* Consultation Callout CTA Box */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#1B120E] via-black to-[#0A0806] border border-[#D4AF37]/40 shadow-[0_0_30px_rgba(212,175,55,0.15)] text-center">
          <h3 className="font-serif text-2xl text-white mb-2">
            Facing a similar legal challenge?
          </h3>
          <p className="text-white/70 text-sm max-w-xl mx-auto mb-6">
            Consult the experienced advocates at MK Associates. Our panel represents
            clients in District Courts, High Courts & Supreme Court of India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/919305592322?text=Hello%20MK%20Associates%2C%20I%20read%20your%20article%20%22${encodeURIComponent(
                article.title
              )}%22%20and%20need%20legal%20guidance.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm py-3 px-6"
            >
              WhatsApp Us · +91 93055 92322
            </a>
            <Link
              href="/contact"
              className="btn-outline text-sm py-3 px-6"
            >
              Book an Appointment <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <h3 className="font-serif text-xl text-white mb-6">
            More Legal Insights · अन्य कानूनी लेख
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-card overflow-hidden block group"
              >
                <div className="h-40 relative overflow-hidden bg-black/50">
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 badge text-[0.6rem] bg-black/70 backdrop-blur-sm">
                    {rel.category}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-lg text-white group-hover:text-[#D4AF37] transition-colors mb-2 line-clamp-2 leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-white/50 line-clamp-2 mb-4">
                    {rel.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-[#D4AF37] font-semibold">
                    Read in New Tab <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
