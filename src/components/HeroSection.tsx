import { useState } from "react";

const HeroSection = () => {
  const [form, setForm] = useState({ type: "Health Insurance", name: "", phone: "" });

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
            IRA Licensed Insurance Consultancy
          </div>

          <h1 className="text-white text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.15] font-bold mb-5">
            Best Insurance Cover
            <br />
            in <span className="text-gold">Kenya</span>, Expert
            <br />
            Advice Included.
          </h1>

          <p className="text-white/65 text-lg leading-relaxed max-w-[480px] mb-8 font-light">
            Compare top health, motor, and life insurance plans from Kenya's leading providers. Affordable premiums, fast support, and guidance you can trust.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#services" className="bg-gold text-navy-deep px-8 py-3.5 rounded font-medium hover:bg-gold-light transition-colors">
              Compare Plans Now
            </a>
            <a href="tel:+254700000000" className="border border-white/30 text-white px-8 py-3.5 rounded hover:border-gold hover:text-gold transition-colors">
              Call Us: 0700 000 000
            </a>
          </div>
        </div>

        {/* Right — Quick Quote */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm relative z-10">
          <h3 className="text-white text-lg font-normal mb-5">Quick Quote</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-white/55 text-xs uppercase tracking-wider mb-1.5">Insurance Type</label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full bg-white/8 border border-white/15 text-white px-3.5 py-2.5 rounded-md text-sm font-body appearance-none"
              >
                <option className="bg-navy">Health Insurance</option>
                <option className="bg-navy">Motor Insurance</option>
                <option className="bg-navy">Life Insurance Policy</option>
                <option className="bg-navy">Business Insurance</option>
                <option className="bg-navy">Travel Insurance</option>
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
                placeholder="e.g. 0712 345 678"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-white/8 border border-white/15 text-white px-3.5 py-2.5 rounded-md text-sm font-body placeholder:text-white/30"
              />
            </div>
            <button className="w-full bg-gold text-navy-deep py-3 rounded-md font-medium hover:bg-gold-light transition-colors">
              Get My Free Quote ↗
            </button>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-white/[0.04] border-t border-white/[0.08] px-4 sm:px-8">
        <div className="max-w-7xl mx-auto py-4 flex flex-wrap gap-6 lg:gap-12 items-center">
          {["Britam", "Jubilee Insurance", "APA Insurance", "AAR Health", "CIC Group", "ICEA Lion", "Sanlam"].map((p) => (
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
