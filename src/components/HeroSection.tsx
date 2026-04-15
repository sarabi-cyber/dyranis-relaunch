import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-family.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section 
      className="relative overflow-hidden min-h-[85vh] flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 w-[500px] h-[500px] border border-gold/15 rounded-full pointer-events-none z-10" />
      <div className="absolute -right-10 -top-10 w-[350px] h-[350px] border border-gold/10 rounded-full pointer-events-none z-10" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 w-full relative z-20">
        {/* Left */}
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-gold/12 border border-gold/30 text-gold-light px-3 py-1.5 rounded-sm text-xs tracking-[0.1em] uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            Trusted Insurance Advisors in Kenya
          </div>

          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.15] font-bold mb-5">
            Your Trusted Insurance
            <br />
            <span className="text-gold">Partner</span> in Kenya
          </h1>

          <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-[480px] mb-8 font-light">
            At Dyranis Consultancy, we partner with Kenya's leading insurers — Jubilee, Britam, AAR, Old Mutual, CIC, ICEA Lion, Heritage, Madison, GA, and Sanlam — to compare plans and find you the best cover at the right price.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <button onClick={() => navigate("/contact")} className="bg-gold text-navy-deep px-6 sm:px-8 py-3 sm:py-3.5 rounded font-medium hover:bg-gold-light transition-colors text-sm sm:text-base">
              Get a Free Quote
            </button>
            <a href="https://wa.me/254721361188?text=Hello%20Dyranis%2C%20I%20need%20insurance%20advice." className="border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded hover:border-gold hover:text-gold transition-colors text-sm sm:text-base text-center">
              Talk to Us on WhatsApp
            </a>
            <a href="tel:0721361188" className="border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded hover:border-gold hover:text-gold transition-colors text-sm sm:text-base text-center">
              📞 Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/[0.04] border-t border-white/[0.08] px-4 sm:px-8 z-20">
        <div className="max-w-7xl mx-auto py-4 flex flex-wrap gap-4 sm:gap-6 lg:gap-12 items-center">
          {["Jubilee", "Britam", "AAR", "Old Mutual", "CIC", "ICEA Lion", "Heritage", "Madison", "GA", "Sanlam"].map((p) => (
            <div key={p} className="flex items-center gap-2 text-white/50 text-xs sm:text-sm whitespace-nowrap">
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
