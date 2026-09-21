"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";

const practiceAreas = [
  "Civil Litigation",
  "Criminal Defense",
  "Corporate Law",
  "Intellectual Property",
  "Family Law",
  "Tax Law",
  "Cyber Law",
  "Arbitration",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
    consultationType: "in-person",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({
          name: "", phone: "", email: "", area: "", message: "",
          preferredDate: "", preferredTime: "", consultationType: "in-person",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#050505] border-b border-[#D4AF37]/15">
        <div className="container-custom text-center">
          <div className="section-label mb-4">Contact Us · संपर्क करें</div>
          <h1 className="section-title mb-4">
            Book Your <span>Free Consultation</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            First consultation is free. Fill the form or call us directly.
            <br />
            <span className="text-[#D4AF37]/60 text-sm">
              पहली परामर्श निःशुल्क। फॉर्म भरें या सीधे कॉल करें।
            </span>
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <div className="section-label mb-2">Get in Touch</div>
              <h2 className="font-serif text-2xl text-white mb-4">
                We&apos;re Here to Help
              </h2>
              <div className="gold-divider mb-5" />
            </div>

            {[
              {
                icon: Phone,
                title: "Call Us",
                detail: "+91 99999 99999",
                sub: "Mon–Sat, 9AM–7PM",
                href: "tel:+919999999999",
              },
              {
                icon: Mail,
                title: "Email Us",
                detail: "contact@rahulsharmaadvocate.in",
                sub: "Reply within 24 hours",
                href: "mailto:contact@rahulsharmaadvocate.in",
              },
              {
                icon: MapPin,
                title: "Visit Chambers",
                detail: "Chamber No. 123, District Court",
                sub: "New Delhi – 110001",
                href: "#",
              },
              {
                icon: Clock,
                title: "Office Hours",
                detail: "Monday – Saturday",
                sub: "9:00 AM – 7:00 PM",
                href: "#",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="glass-card p-5 flex items-start gap-4 block"
              >
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[#D4AF37] text-xs font-display font-600 tracking-wider uppercase mb-0.5">
                    {item.title}
                  </p>
                  <p className="text-white text-sm font-medium">{item.detail}</p>
                  <p className="text-white/40 text-xs">{item.sub}</p>
                </div>
              </a>
            ))}

            {/* Map Embed */}
            <div className="rounded-lg overflow-hidden border border-[#D4AF37]/20 h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.2090!3d28.6315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47193f3d5!2sPatiala%20House%20Courts!5e0!3m2!1sen!2sin!4v1695000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8">
              <h2 className="font-serif text-2xl text-white mb-2">
                Appointment Booking Form
              </h2>
              <p className="text-[#D4AF37]/60 text-sm font-display mb-6">
                परामर्श बुकिंग फॉर्म
              </p>

              {status === "success" && (
                <div className="flex items-start gap-3 bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
                  <CheckCircle size={20} className="text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-400 font-semibold text-sm">Booking Received!</p>
                    <p className="text-green-400/70 text-xs">
                      We&apos;ll confirm your appointment within 2 hours.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                  <AlertCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-400 font-semibold text-sm">Something went wrong</p>
                    <p className="text-red-400/70 text-xs">
                      Please try again or call us directly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className="form-input"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="form-input"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="form-input"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="area">Practice Area / Legal Matter</label>
                  <select
                    id="area"
                    className="form-input"
                    value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                  >
                    <option value="">Select area of law...</option>
                    {practiceAreas.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label" htmlFor="date">Preferred Date</label>
                    <input
                      id="date"
                      type="date"
                      className="form-input"
                      value={form.preferredDate}
                      onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="time">Preferred Time</label>
                    <select
                      id="time"
                      className="form-input"
                      value={form.preferredTime}
                      onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                    >
                      <option value="">Select time slot...</option>
                      <option>9:00 AM – 10:00 AM</option>
                      <option>10:00 AM – 11:00 AM</option>
                      <option>11:00 AM – 12:00 PM</option>
                      <option>12:00 PM – 1:00 PM</option>
                      <option>2:00 PM – 3:00 PM</option>
                      <option>3:00 PM – 4:00 PM</option>
                      <option>4:00 PM – 5:00 PM</option>
                      <option>5:00 PM – 6:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Consultation Type */}
                <div>
                  <label className="form-label">Consultation Type</label>
                  <div className="flex gap-4 mt-2">
                    {["in-person", "video", "phone"].map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="consultationType"
                          value={type}
                          checked={form.consultationType === type}
                          onChange={() => setForm({ ...form, consultationType: type })}
                          className="accent-[#D4AF37]"
                        />
                        <span className="text-white/60 text-sm capitalize">{type.replace("-", " ")}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="message">Brief Description of Your Matter</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Briefly describe your legal issue or query..."
                    className="form-input resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full justify-center"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Submitting..." : "Book Consultation — पहली परामर्श निःशुल्क"}
                </button>

                <p className="text-white/30 text-xs text-center">
                  Your information is confidential and protected by attorney-client privilege.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
