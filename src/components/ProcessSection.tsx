const steps = [
  { num: "01", title: "Tell Us Your Needs", desc: "Fill out our quick form or call us. We ask a few questions to understand what cover you need." },
  { num: "02", title: "We Compare the Market", desc: "Our team requests quotes from all relevant insurers and prepares a clear comparison for you." },
  { num: "03", title: "Choose Your Plan", desc: "We walk you through the options in plain language. You pick what fits. No pressure, no jargon." },
  { num: "04", title: "Stay Protected", desc: "Your policy is active. And we stay on call whenever you need to make changes or file a claim." },
];

const ProcessSection = () => (
  <section id="process" className="bg-navy py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="section-label !text-gold">The Process</div>
      <h2 className="section-title !text-white">Cover in 4 Simple Steps</h2>
      <p className="section-sub text-white/55">Getting insured shouldn't be complicated. Here's how we make it effortless.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.08] mt-12">
        {steps.map((s, i) => (
          <div key={s.num} className="bg-navy p-7 relative">
            <div className="font-heading text-5xl text-gold/20 leading-none mb-4 font-bold">{s.num}</div>
            <h4 className="text-white font-medium mb-2">{s.title}</h4>
            <p className="text-white/45 text-sm leading-relaxed font-light">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:flex absolute top-7 -right-3 w-6 h-6 bg-gold rounded-full items-center justify-center text-navy-deep text-xs z-10">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
