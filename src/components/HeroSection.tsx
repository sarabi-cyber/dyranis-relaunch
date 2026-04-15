import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [form, setForm] = useState({ type: "Health Insurance", name: "", phone: "" });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Dyranis, I need a quote.\n\nType: ${form.type}\nName: ${form.name}\nPhone: ${form.phone}`;
    window.open(`https://wa.me/254721361188?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="bg-navy relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 w-[500px] h-[500px] border border-gold/15 rounded-full pointer-events-none" />
      <div className="absolute -right-10 -top-10 w-[350px] h-[350px] border border-gold/10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
        {/* Left */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-gold/12 border border-gold/30 text-gold-light px-3 py-1.5 rounded-sm text-xs tracking-[0.1em] uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            Trusted Insurance Advisors in Kenya
          </div>

          <h1 className="text-white text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.15] font-bold mb-5">
            Your Trusted Insurance
            <br />
            <span className="text-gold">Partner</span> in Kenya
          </h1>

          <p className="text-white/65 text-lg leading-relaxed max-w-[480px] mb-8 font-light">
            At Dyranis Consultancy, we partner with Kenya's leading insurers — Jubilee, Britam, AAR, Old Mutual, CIC, ICEA Lion, Heritage, Madison, GA, and Sanlam — to compare plans and find you the best cover at the right price.
          </p>

          <div className="flex flex-wrap gap-4">
            <button onClick={() => navigate("/contact")} className="bg-gold text-navy-deep px-8 py-3.5 rounded font-medium hover:bg-gold-light transition-colors">
              Get a Free Quote
            </button>
            <a href="https://wa.me/254721361188?text=Hello%20Dyranis%2C%20I%20need%20insurance%20advice." className="border border-white/30 text-white px-8 py-3.5 rounded hover:border-gold hover:text-gold transition-colors">
              Talk to Us on WhatsApp
            </a>
            <a href="tel:0721361188" className="border border-white/30 text-white px-8 py-3.5 rounded hover:border-gold hover:text-gold transition-colors">
              📞 Call Now
            </a>
          </div>
        </div>

        {/* Right — Quick Quote */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm relative z-10">
          <h3 className="text-white text-lg font-normal mb-5">Quick Quote</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white/55 text-xs uppercase tracking-wider mb-1.5">Insurance Type</label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full bg-white/8 border border-white/15 text-white px-3.5 py-2.5 rounded-md text-sm font-body appearance-none"
              >
                {["Motor Insurance", "Health Insurance", "Education Insurance", "Life Insurance", "Commercial Insurance", "Small Business Insurance", "WIBA Cover", "Money Market Fund", "Pension Plan"].map((o) => (
                  <option key={o} className="bg-navy">{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-white/55 text-xs uppercase tracking-wider mb-1.5">Full Name</label>
              <input
                type="text"
                placeholder="e.g. Jane Muthoni"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/8 border border-white/15 text-white px-3.5 py-2.5 rounded-md text-sm font-body placeholder:text-white/30"
              />
            </div>
            <div>
              <label className="block text-white/55 text-xs uppercase tracking-wider mb-1.5">Phone Number</label>
              <input
                type="tel"
                placeholder="e.g. 0721 361 188"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-white/8 border border-white/15 text-white px-3.5 py-2.5 rounded-md text-sm font-body placeholder:text-white/30"
              />
            </div>
            <button type="submit" className="w-full bg-gold text-navy-deep py-3 rounded-md font-medium hover:bg-gold-light transition-colors">
              Get My Free Quote ↗
            </button>
          </form>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-white/[0.04] border-t border-white/[0.08] px-4 sm:px-8">
        <div className="max-w-7xl mx-auto py-4 flex flex-wrap gap-6 lg:gap-12 items-center">
          {["Jubilee", "Britam", "AAR", "Old Mutual", "CIC", "ICEA Lion", "Heritage", "Madison", "GA", "Sanlam"].map((p) => (
            <div key={p} className="flex items-center gap-2 text-white/50 text-sm whitespace-nowrap">
              <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
