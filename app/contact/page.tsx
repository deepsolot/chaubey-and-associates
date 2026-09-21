"use client";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const practiceAreas = [
  "Civil Litigation",
  "Criminal Defense",
  "Corporate Law",
  "Intellectual Property",
  "Family Law",
  "Tax Law",
  "Cyber Law",
  "Arbitration",
  "Service & Administrative Law",
  "PIL (Public Interest Litigation)",
  "Other",
];

const offices = [
  {
    city: "New Delhi (Main Office)",
    hindi: "नई दिल्ली",
    address:
      "K-4/3, Third Floor, K4, Mohan Garden, Uttam Nagar, New Delhi – 110059",
    phones: ["9305592322", "9341943353", "7200151400"],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.0590!3d28.6215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d052a5a5a5a5a%3A0x5a5a5a5a5a5a5a5a!2sMohan%20Garden%2C%20Uttam%20Nagar%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1695000000000",
  },
  {
    city: "Varanasi, UP",
    hindi: "वाराणसी",
    address:
      "AN 455, Dhanwantari Nagar, Near Gupta General Store, Varanasi, Uttar Pradesh",
    phones: ["9305592322", "9341943353", "7200151400"],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.0!2d82.9739!3d25.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2df5e7a7a7a7%3A0xa7a7a7a7a7a7a7a7!2sDhanwantari%20Nagar%2C%20Varanasi!5e0!3m2!1sen!2sin!4v1695000000001",
  },
  {
    city: "Kaimur (Bhabua), Bihar",
    hindi: "कैमूर (भभुआ)",
    address:
      "Vill. Jagdishpur, Post Dangari, Police Station Kudra, Dist. Kaimur (Bhabua), Bihar – 821109",
    phones: ["9507892670", "9305592322", "9341943353"],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.0!2d83.6094!3d25.0453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d890d0d0d0d0d%3A0x0d0d0d0d0d0d0d0d!2sKaimur%2C%20Bihar!5e0!3m2!1sen!2sin!4v1695000000002",
  },
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
    preferredOffice: "New Delhi",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [activeOffice, setActiveOffice] = useState(0);

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
          name: "",
          phone: "",
          email: "",
          area: "",
          message: "",
          preferredDate: "",
          preferredTime: "",
          consultationType: "in-person",
          preferredOffice: "New Delhi",
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
            First consultation is free. Three offices across India — Delhi,
            Varanasi & Kaimur.
            <br />
            <span className="text-[#D4AF37]/60 text-sm">
              पहली परामर्श निःशुल्क। दिल्ली, वाराणसी एवं कैमूर में कार्यालय।
            </span>
          </p>

          {/* Quick contact strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            {[
              { num: "9305592322", label: "Primary" },
              { num: "9341943353", label: "Secondary" },
              { num: "7200151400", label: "Alternate" },
            ].map((p) => (
              <a
                key={p.num}
                href={`tel:+91${p.num}`}
                className="flex items-center gap-2 text-white/70 hover:text-[#D4AF37] transition-colors"
              >
                <Phone size={14} className="text-[#D4AF37]" />
                <span className="font-display text-sm">+91 {p.num}</span>
                <span className="text-white/30 text-xs">({p.label})</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Office Tabs */}
      <section className="py-8 bg-[#050505] border-b border-[#D4AF37]/10">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {offices.map((office, i) => (
              <button
                key={office.city}
                onClick={() => setActiveOffice(i)}
                className={`px-5 py-2 rounded-full text-xs font-display font-600 uppercase tracking-wider border transition-all ${
                  activeOffice === i
                    ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                    : "border-[#D4AF37]/30 text-white/50 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                }`}
              >
                {office.city}
              </button>
            ))}
          </div>

          {/* Active office map */}
          <div className="mt-6 rounded-lg overflow-hidden border border-[#D4AF37]/20 h-52">
            <iframe
              key={activeOffice}
              src={offices[activeOffice].mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-3 flex items-start gap-2">
            <MapPin size={14} className="text-[#D4AF37] mt-0.5 shrink-0" />
            <p className="text-white/60 text-sm">
              {offices[activeOffice].address}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-5">
            <div>
              <div className="section-label mb-2">Get in Touch</div>
              <h2 className="font-serif text-2xl text-white mb-4">
                We&apos;re Here to Help
              </h2>
              <div className="gold-divider mb-5" />
            </div>

            {/* Phone numbers */}
            <div className="glass-card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[#D4AF37] text-xs font-display font-600 tracking-wider uppercase mb-1">
                  Call / WhatsApp
                </p>
                {[
                  { num: "9305592322", label: "Primary & WhatsApp" },
                  { num: "9341943353", label: "Secondary" },
                  { num: "7200151400", label: "Alternate" },
                  { num: "9507892670", label: "Bihar Office" },
                ].map((p) => (
                  <a
                    key={p.num}
                    href={`tel:+91${p.num}`}
                    className="block text-white text-sm hover:text-[#D4AF37] transition-colors"
                  >
                    +91 {p.num}{" "}
                    <span className="text-white/30 text-xs">({p.label})</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="glass-card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[#D4AF37] text-xs font-display font-600 tracking-wider uppercase mb-1">
                  Email
                </p>
                <a
                  href="mailto:maddydragon85@gmail.com"
                  className="text-white/80 hover:text-white text-sm"
                >
                  maddydragon85@gmail.com
                </a>
                <p className="text-white/30 text-xs">Reply within 24 hours</p>
              </div>
            </div>

            {/* Offices */}
            {offices.map((office) => (
              <div
                key={office.city}
                className="glass-card p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[#D4AF37] text-xs font-display font-600 tracking-wider uppercase mb-0.5">
                    {office.city}{" "}
                    <span className="text-[#D4AF37]/40">· {office.hindi}</span>
                  </p>
                  <p className="text-white/60 text-xs leading-relaxed">
                    {office.address}
                  </p>
                </div>
              </div>
            ))}

            {/* Hours */}
            <div className="glass-card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                <Clock size={18} className="text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[#D4AF37] text-xs font-display font-600 tracking-wider uppercase mb-1">
                  Office Hours
                </p>
                <p className="text-white text-sm">Monday – Saturday</p>
                <p className="text-white/40 text-xs">9:00 AM – 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8">
              <h2 className="font-serif text-2xl text-white mb-2">
                Appointment Booking Form
              </h2>
              <p className="text-[#D4AF37]/60 text-sm font-display mb-6">
                परामर्श बुकिंग फॉर्म — MK Associates
              </p>

              {status === "success" && (
                <div className="flex items-start gap-3 bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
                  <CheckCircle
                    size={20}
                    className="text-green-400 shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-green-400 font-semibold text-sm">
                      Booking Received!
                    </p>
                    <p className="text-green-400/70 text-xs">
                      We&apos;ll confirm your appointment within 2 hours via
                      call/WhatsApp.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                  <AlertCircle
                    size={20}
                    className="text-red-400 shrink-0 mt-0.5"
                  />
                  <div>
                    <p className="text-red-400 font-semibold text-sm">
                      Something went wrong
                    </p>
                    <p className="text-red-400/70 text-xs">
                      Please call us directly at +91 9305592322.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className="form-input"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="form-input"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="form-input"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label" htmlFor="area">
                      Legal Matter / Practice Area
                    </label>
                    <select
                      id="area"
                      className="form-input"
                      value={form.area}
                      onChange={(e) =>
                        setForm({ ...form, area: e.target.value })
                      }
                    >
                      <option value="">Select area of law...</option>
                      {practiceAreas.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="office">
                      Preferred Office
                    </label>
                    <select
                      id="office"
                      className="form-input"
                      value={form.preferredOffice}
                      onChange={(e) =>
                        setForm({ ...form, preferredOffice: e.target.value })
                      }
                    >
                      <option>New Delhi (Uttam Nagar)</option>
                      <option>Varanasi, UP</option>
                      <option>Kaimur (Bhabua), Bihar</option>
                      <option>Video Call / Online</option>
                      <option>Phone Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label" htmlFor="date">
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      className="form-input"
                      value={form.preferredDate}
                      onChange={(e) =>
                        setForm({ ...form, preferredDate: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="time">
                      Preferred Time Slot
                    </label>
                    <select
                      id="time"
                      className="form-input"
                      value={form.preferredTime}
                      onChange={(e) =>
                        setForm({ ...form, preferredTime: e.target.value })
                      }
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
                  <div className="flex flex-wrap gap-4 mt-2">
                    {[
                      { val: "in-person", label: "In-Person" },
                      { val: "video", label: "Video Call" },
                      { val: "phone", label: "Phone" },
                    ].map((type) => (
                      <label
                        key={type.val}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="consultationType"
                          value={type.val}
                          checked={form.consultationType === type.val}
                          onChange={() =>
                            setForm({
                              ...form,
                              consultationType: type.val,
                            })
                          }
                          className="accent-[#D4AF37]"
                        />
                        <span className="text-white/60 text-sm">
                          {type.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="message">
                    Brief Description of Your Matter
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Briefly describe your legal issue or query..."
                    className="form-input resize-none"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full justify-center"
                  disabled={status === "loading"}
                >
                  {status === "loading"
                    ? "Submitting..."
                    : "Book Consultation — पहली परामर्श निःशुल्क"}
                </button>

                <p className="text-white/30 text-xs text-center">
                  Your information is confidential and protected by
                  attorney-client privilege. We will respond via WhatsApp/call
                  within 2 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
