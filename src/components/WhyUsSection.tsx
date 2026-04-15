const points = [
  { num: 1, title: "Independent & Unbiased", desc: "We work for you, not the insurers. Our advice is based on what's best for your needs and budget, not commissions." },
  { num: 2, title: "Fast Turnaround", desc: "Quote requests answered same-day. Policy documents within 24 hours. Claims kickstarted within 2 business hours." },
  { num: 3, title: "Claims Support Included", desc: "We don't disappear after you buy. When you need to claim, we handle the paperwork and follow up on your behalf." },
];

const stats = [
  { num: "500+", label: "Clients Served" },
  { num: "15+", label: "Insurer Partners" },
  { num: "98%", label: "Claim Success Rate" },
  { num: "24hr", label: "Avg. Quote Time" },
];

const WhyUsSection = () => (
  <section id="why-us" className="bg-cream py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="section-label">Why Dyranis</div>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-4">
        <div>
          <h2 className="section-title">
            One Agency.
            <br />
            The Whole Market.
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed font-light max-w-[440px] mb-8">
            You shouldn't have to call ten companies to find the right cover. We do that for you — comparing plans, negotiating premiums, and standing by you at claims time.
          </p>
          <div className="flex flex-col gap-6">
            {points.map((p) => (
              <div key={p.num} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-gold text-navy-deep rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {p.num}
                </div>
                <div>
                  <h4 className="font-medium text-navy mb-1">{p.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats visual */}
        <div className="bg-navy rounded-xl p-1 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-52 h-52 border border-gold/20 rounded-full pointer-events-none" />
          <div className="grid grid-cols-2 gap-[1px] bg-white/[0.08]">
            {stats.map((s) => (
              <div key={s.label} className="bg-navy p-8 text-center">
                <span className="font-heading text-4xl text-gold block leading-none">{s.num}</span>
                <span className="text-white/50 text-xs mt-2 block font-light">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUsSection;
