"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Client Portal", href: "/portal" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-b border-[#D4AF37]/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-11 w-14 flex items-center justify-center shrink-0">
            <Image
              src="/logo.png"
              alt="MK Associates Logo"
              width={60}
              height={48}
              className="h-11 w-auto object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.7)] transition-all"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif font-bold text-white text-lg leading-none">
              MK Associates
            </span>
            <span
              className="text-[0.6rem] font-display font-600 tracking-widest uppercase"
              style={{ color: "#D4AF37" }}
            >
              Legal Counsel · दिल्ली · वाराणसी · कैमूर
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.label === "Client Portal" ? (
              <Link
                key={link.label}
                href={link.href}
                className="btn-gold text-xs py-2 px-5"
              >
                {link.label}
              </Link>
            ) : (
              <Link key={link.label} href={link.href} className="nav-link">
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#050505]/98 backdrop-blur-xl border-t border-[#D4AF37]/20 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block py-3 nav-link text-base border-b border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile contact bar */}
          <div className="mt-4 pt-4 border-t border-[#D4AF37]/10">
            <a
              href="tel:+919305592322"
              className="block text-[#D4AF37] text-sm font-display font-600"
            >
              📞 +91 93055 92322
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
