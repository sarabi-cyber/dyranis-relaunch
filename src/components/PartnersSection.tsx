import LogoCarousel from "./LogoCarousel";

const PartnersSection = () => (
  <section id="partners" className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground text-center mb-8">
        Trusted insurer partners we work with
      </p>
      <LogoCarousel />
    </div>
  </section>
);

export default PartnersSection;
