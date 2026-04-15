const partners = ["Britam", "Jubilee", "APA Insurance", "AAR", "CIC Group", "ICEA Lion", "Sanlam", "Octagon Africa"];

const PartnersSection = () => (
  <section id="partners" className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground text-center mb-8">
        Trusted insurer partners we work with
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        {partners.map((p) => (
          <div key={p} className="bg-cream border border-border rounded-md px-5 py-2.5 text-navy font-medium text-sm tracking-wide">
            {p}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
