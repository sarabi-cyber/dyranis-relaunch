const testimonials = [
  {
    quote: "Dyranis saved me so much time. They compared five health plans in one day and found me cover I actually understood. Claims were handled in two days — I was shocked.",
    name: "Jane Muthoni",
    role: "Individual Health Cover, Nairobi",
    initials: "JM",
  },
  {
    quote: "We needed motor and WIBA cover for our team of 30. Nelly sorted everything within two days at a rate 18% lower than our previous insurer. Highly recommend.",
    name: "Peter Otieno",
    role: "Fleet & Staff Cover, SME Owner",
    initials: "PO",
  },
  {
    quote: "When my car was in an accident, I was dreading the claims process. Dyranis handled the whole thing. I just dropped the car and they did the rest. Five stars.",
    name: "Aisha Kamau",
    role: "Comprehensive Motor, Westlands",
    initials: "AK",
  },
];

const TestimonialsSection = () => (
  <section className="bg-cream py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="section-label">Client Stories</div>
      <h2 className="section-title">Real People, Real Cover</h2>

      <div className="grid md:grid-cols-3 gap-5 mt-12">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card border border-border rounded-lg p-7 flex flex-col gap-4">
            <div className="text-gold text-sm tracking-[2px]">★ ★ ★ ★ ★</div>
            <blockquote className="text-navy text-sm leading-relaxed font-light italic flex-1">
              "{t.quote}"
            </blockquote>
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-9 h-9 rounded-full bg-navy text-gold flex items-center justify-center text-xs font-bold font-heading flex-shrink-0">
                {t.initials}
              </div>
              <div>
                <strong className="text-sm text-navy font-medium block">{t.name}</strong>
                <span className="text-xs text-muted-foreground font-light">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
