import { Link } from "react-router-dom";
import { services } from "@/data/services";

const ServicesSection = () => (
  <section id="services" className="bg-card py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="section-label">What We Offer</div>
      <h2 className="section-title">
        Our Insurance Solutions
      </h2>
      <p className="section-sub mt-2">
        From motor and health insurance to pension plans and investments — we compare the market and find the right fit at the right price.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {services.map((s) => (
          <div
            key={s.slug}
            className="border border-border rounded-lg p-7 bg-card hover:border-gold hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-gold/15 to-gold/5 rounded-lg flex items-center justify-center text-2xl mb-5">
              {s.icon}
            </div>
            <h3 className="text-navy text-lg font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">{s.shortDesc}</p>
            <Link
              to={`/services/${s.slug}`}
              className="inline-flex items-center gap-1.5 text-primary text-sm font-medium mt-4 group-hover:gap-2.5 transition-all"
            >
              Explore plans →
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
