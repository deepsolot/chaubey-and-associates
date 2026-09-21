import Link from "next/link";
import { Scale, Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Civil & Criminal Litigation",
  "Corporate & Business Law",
  "Intellectual Property Rights",
  "Family & Personal Law",
  "Taxation & Financial Law",
  "Cyber Law & Arbitration",
];

const quickLinks = [
  { label: "Home / होम", href: "/" },
  { label: "About / परिचय", href: "/about" },
  { label: "Services / सेवाएं", href: "/services" },
  { label: "Blog / ब्लॉग", href: "/blog" },
  { label: "Contact / संपर्क", href: "/contact" },
  { label: "Client Portal", href: "/portal" },
];

const addresses = [
  {
    city: "New Delhi",
    detail: "K-4/3, Third Floor, Mohan Garden, Uttam Nagar, New Delhi – 110059",
  },
  {
    city: "Varanasi, UP",
    detail: "AN 455, Dhanwantari Nagar, Near Gupta General Store, Varanasi",
  },
  {
    city: "Kaimur (Bhabua), Bihar",
    detail: "Vill. Jagdishpur, Post Dangari, P.S. Kudra, Dist. Kaimur – 821109",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#D4AF37]/20 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F0D060] to-[#B8952A] flex items-center justify-center">
                <Scale size={20} className="text-black" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-white text-lg leading-none">
                  MK Associates
                </span>
                <span className="text-[0.6rem] font-display tracking-widest text-[#D4AF37] uppercase">
                  Legal Panel · Since 1985
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              न्याय आपका अधिकार है। हम आपके साथ हैं।
              <br />
              <em className="text-white/30 text-xs">
                Justice is your right. We stand with you.
              </em>
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                {
                  href: "#",
                  label: "Facebook",
                  svg: (
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  href: "#",
                  label: "X (Twitter)",
                  svg: (
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  href: "#",
                  label: "LinkedIn",
                  svg: (
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  href: "https://wa.me/919305592322",
                  label: "WhatsApp",
                  svg: (
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                },
              ].map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]/60 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#D4AF37] font-display font-700 text-sm tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#D4AF37] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#D4AF37] font-display font-700 text-sm tracking-wider uppercase mb-5">
              Practice Areas
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/50 hover:text-[#D4AF37] text-sm transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#D4AF37] font-display font-700 text-sm tracking-wider uppercase mb-5">
              Contact
            </h4>

            {/* Phones */}
            <div className="flex items-start gap-3 mb-4">
              <Phone size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
              <div className="space-y-0.5">
                {["9305592322", "9341943353", "7200151400"].map((num) => (
                  <a
                    key={num}
                    href={`tel:+91${num}`}
                    className="text-white/70 hover:text-white text-sm block"
                  >
                    +91 {num}
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 mb-5">
              <Mail size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
              <a
                href="mailto:maddydragon85@gmail.com"
                className="text-white/70 hover:text-white text-sm break-all"
              >
                maddydragon85@gmail.com
              </a>
            </div>

            {/* Offices */}
            <div className="space-y-3">
              {addresses.map((addr) => (
                <div key={addr.city} className="flex items-start gap-3">
                  <MapPin
                    size={14}
                    className="text-[#D4AF37] mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-[#D4AF37]/80 text-xs font-display font-600 uppercase tracking-wide">
                      {addr.city}
                    </p>
                    <p className="text-white/50 text-xs leading-relaxed">
                      {addr.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <p>© 2026 MK Associates. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
