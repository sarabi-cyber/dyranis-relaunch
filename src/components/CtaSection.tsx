import { Link } from "react-router-dom";

const CtaSection = () => (
  <section id="contact" className="bg-navy py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/10 rounded-full pointer-events-none" />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold/[0.07] rounded-full pointer-events-none" />

    <div className="relative z-10 max-w-2xl mx-auto">
      <h2 className="font-heading text-white text-3xl lg:text-5xl mb-4">Ready for Affordable Cover?</h2>
      <p className="text-white/55 text-base leading-relaxed font-light mb-8 max-w-[480px] mx-auto">
        Get a free, no-obligation quote today. We'll compare Kenya's top insurers and bring you the best plan for your needs and budget.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/contact" className="bg-gold text-navy-deep px-8 py-3.5 rounded font-medium hover:bg-gold-light transition-colors">
          Get a Free Quote ↗
        </Link>
        <a href="https://wa.me/254721361188" className="border border-white/30 text-white px-8 py-3.5 rounded hover:border-gold hover:text-gold transition-colors">
          WhatsApp Us
        </a>
      </div>
    </div>
  </section>
);

export default CtaSection;
