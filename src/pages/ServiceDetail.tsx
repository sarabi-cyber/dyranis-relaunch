import { useParams, Link, Navigate } from "react-router-dom";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} in Kenya | Dyranis Consultancy`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', service.heroDesc);
      }
    }
  }, [service]);

  if (!service) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[400px] h-[400px] border border-gold/15 rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-gold transition-colors mb-8"
          >
            ← Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 bg-gold/12 border border-gold/30 text-gold-light px-3 py-1.5 rounded-sm text-xs tracking-[0.1em] uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            {service.title}
          </div>
          <h1 className="text-white font-heading text-4xl lg:text-5xl leading-[1.15] font-bold mb-5">
            {service.heroTitle}
          </h1>
          <p className="text-white/65 text-lg leading-relaxed max-w-[600px] font-light mb-8">
            {service.heroDesc}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/254721361188?text=Hello%20Dyranis%2C%20I%20need%20advice%20on%20" 
              className="bg-gold text-navy-deep px-8 py-3.5 rounded font-medium hover:bg-gold-light transition-colors"
            >
              {service.ctaText}
            </a>
            <a
              href="tel:0721361188"
              className="border border-white/30 text-white px-8 py-3.5 rounded hover:border-gold hover:text-gold transition-colors"
            >
              Call: 0721 361 188
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-card py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="section-label">Key Benefits</div>
          <h2 className="section-title">What's Included</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {service.features.map((f, i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-6 bg-card hover:border-gold transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-gold/15 to-gold/5 rounded-full flex items-center justify-center text-gold text-sm font-bold mb-3">
                  ✓
                </div>
                <p className="text-navy text-sm font-medium">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-cream py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="section-label">More Details</div>
          <h2 className="section-title">Understanding {service.title}</h2>
          <p className="text-muted-foreground text-base leading-relaxed font-light mt-4">
            {service.details}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold/10 rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-heading text-white text-3xl lg:text-4xl mb-4">
            Ready to Get {service.title}?
          </h2>
          <p className="text-white/55 text-base leading-relaxed font-light mb-8 max-w-[480px] mx-auto">
            Get a free, no-obligation quote. We'll compare Kenya's top providers and find you the best plan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/254721361188?text=Hello%20Dyranis%2C%20I%20need%20advice%20on%20"
              className="bg-gold text-navy-deep px-8 py-3.5 rounded font-medium hover:bg-gold-light transition-colors"
            >
              Get a Free Quote ↗
            </a>
            <Link
              to="/"
              className="border border-white/30 text-white px-8 py-3.5 rounded hover:border-gold hover:text-gold transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
