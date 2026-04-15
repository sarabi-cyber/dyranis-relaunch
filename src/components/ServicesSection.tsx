const services = [
  { icon: "🏥", title: "Health Insurance", desc: "Inpatient, outpatient, and dental cover for individuals, families, and corporates. Cashless access at top hospitals across Kenya." },
  { icon: "🚗", title: "Motor Insurance", desc: "Third-party and comprehensive car insurance. We compare premiums across all IRA-licensed underwriters to get you the best rate." },
  { icon: "🛡", title: "Life Insurance", desc: "Term life, whole life, and investment-linked policies. Protect your family's future and build long-term financial security." },
  { icon: "🏢", title: "Business Insurance", desc: "Property, liability, WIBA, and professional indemnity for SMEs and corporates. Tailored cover for your industry." },
  { icon: "✈️", title: "Travel Insurance", desc: "Single and multi-trip policies for domestic and international travel. Medical evacuation, trip cancellation, and more." },
  { icon: "🏠", title: "Home Insurance", desc: "Cover for your home, contents, and personal belongings against fire, theft, floods, and other unexpected events." },
];

const ServicesSection = () => (
  <section id="services" className="bg-card py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="section-label">What We Cover</div>
      <h2 className="section-title">
        Insurance Solutions
        <br />
        Tailored for Kenya
      </h2>
      <p className="section-sub mt-2">
        Whether you need personal protection or a corporate plan, we compare the market and find the right fit at the right price.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {services.map((s) => (
          <div
            key={s.title}
            className="border border-border rounded-lg p-7 bg-card hover:border-gold hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-gold/15 to-gold/5 rounded-lg flex items-center justify-center text-2xl mb-5">
              {s.icon}
            </div>
            <h3 className="text-navy text-lg font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">{s.desc}</p>
            <a href="#contact" className="inline-flex items-center gap-1.5 text-primary text-sm font-medium mt-4 group-hover:gap-2.5 transition-all">
              Explore plans →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
