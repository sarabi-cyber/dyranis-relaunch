import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const coverOptions = [
  "Motor Insurance", "Health Insurance", "Education Insurance", "Life Insurance",
  "Commercial Insurance", "Small Business Insurance", "WIBA Cover",
  "Money Market Fund", "Pension Plan", "Other",
];

const faqs = [
  {
    q: "What is an insurance agency and how is it different from an insurance company?",
    a: "An insurance agency (like Dyranis Consultancy) is an independent intermediary licensed by the IRA. We don't underwrite policies ourselves — we compare plans from multiple insurance companies to find the best cover for you. This means we work for you, not the insurer.",
  },
  {
    q: "How do I know which insurance policy is right for me?",
    a: "That's exactly what we're here for. We ask about your needs, budget, and preferences, then compare options from our panel of 10+ insurers. We present the pros and cons of each in plain language so you can make an informed choice.",
  },
  {
    q: "What types of insurance do you offer?",
    a: "We cover nine key areas: Motor Insurance, Health Insurance, Education Insurance, Life Insurance, Commercial Insurance, Small Business Insurance, WIBA Cover, Money Market Funds, and Pension Plans.",
  },
  {
    q: "How do I make a claim?",
    a: "Contact us immediately after an incident. We'll guide you through the documentation required and submit the claim to your insurer on your behalf. We follow up until it's resolved.",
  },
  {
    q: "Can I pay my premiums in installments?",
    a: "Yes, many of our insurer partners offer monthly, quarterly, and semi-annual payment plans. We'll help you find a plan with a payment structure that works for your budget.",
  },
  {
    q: "Do you offer insurance for businesses?",
    a: "Absolutely. We provide Commercial Insurance for large enterprises and tailored Small Business Insurance packages for SMEs and startups. We also handle WIBA cover, which is mandatory for all employers in Kenya.",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", cover: "", details: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Dyranis, I need advice.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nCover: ${form.cover}\nDetails: ${form.details}`;
    window.open(`https://wa.me/254721361188?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[400px] h-[400px] border border-gold/15 rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="inline-flex items-center gap-2 bg-gold/12 border border-gold/30 text-gold-light px-3 py-1.5 rounded-sm text-xs tracking-[0.1em] uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            Get Started
          </div>
          <h1 className="text-white font-heading text-4xl lg:text-5xl leading-[1.15] font-bold mb-5">
            Ready to Get the
            <br />
            Right <span className="text-gold">Cover</span>?
          </h1>
          <p className="text-white/65 text-lg leading-relaxed max-w-[600px] font-light">
            Don't navigate the complex world of insurance alone. Let our team compare policies from multiple providers and find the perfect fit for your needs and budget.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="bg-card py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="section-title">Request a Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div>
                <label className="block text-navy text-xs uppercase tracking-wider font-medium mb-1.5">Full Name *</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 rounded-md text-sm font-body placeholder:text-muted-foreground"
                  placeholder="e.g. Jane Muthoni"
                />
              </div>
              <div>
                <label className="block text-navy text-xs uppercase tracking-wider font-medium mb-1.5">Phone Number *</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 rounded-md text-sm font-body placeholder:text-muted-foreground"
                  placeholder="e.g. 0721 361 188"
                />
              </div>
              <div>
                <label className="block text-navy text-xs uppercase tracking-wider font-medium mb-1.5">Email Address *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 rounded-md text-sm font-body placeholder:text-muted-foreground"
                  placeholder="e.g. jane@email.com"
                />
              </div>
              <div>
                <label className="block text-navy text-xs uppercase tracking-wider font-medium mb-1.5">Type of Cover *</label>
                <select
                  required
                  value={form.cover}
                  onChange={(e) => setForm({ ...form, cover: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 rounded-md text-sm font-body appearance-none"
                >
                  <option value="">Select cover type</option>
                  {coverOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-navy text-xs uppercase tracking-wider font-medium mb-1.5">Additional Details</label>
                <textarea
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  rows={4}
                  className="w-full border border-border bg-background px-4 py-3 rounded-md text-sm font-body placeholder:text-muted-foreground resize-none"
                  placeholder="Tell us more about what you need..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-navy-deep py-3.5 rounded-md font-medium hover:bg-gold-light transition-colors"
              >
                Send Inquiry via WhatsApp ↗
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-navy font-bold text-lg mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-gold text-lg">📞</span>
                  <div>
                    <p className="text-navy text-sm font-medium">Phone</p>
                    <a href="tel:0721361188" className="text-muted-foreground text-sm hover:text-gold transition-colors">0721 361 188</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-lg">💬</span>
                  <div>
                    <p className="text-navy text-sm font-medium">WhatsApp</p>
                    <a href="https://wa.me/254721361188" className="text-muted-foreground text-sm hover:text-gold transition-colors">Chat with us on WhatsApp</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-lg">✉️</span>
                  <div>
                    <p className="text-navy text-sm font-medium">Email</p>
                    <a href="mailto:info@dyranisconsultancy.co.ke" className="text-muted-foreground text-sm hover:text-gold transition-colors">info@dyranisconsultancy.co.ke</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-lg">📍</span>
                  <div>
                    <p className="text-navy text-sm font-medium">Location</p>
                    <p className="text-muted-foreground text-sm">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cream border border-border rounded-lg p-6">
              <h4 className="text-navy font-bold mb-2">Why Choose Us?</h4>
              <ul className="space-y-2">
                {["Free, no-obligation quotes", "Compare plans from 10+ insurers", "Expert advice tailored to your needs", "Fast and friendly service"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub mt-2 mb-10">Common questions about insurance and our services.</p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-lg bg-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-navy text-sm font-medium pr-4">{faq.q}</span>
                  <span className="text-gold text-lg flex-shrink-0">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
