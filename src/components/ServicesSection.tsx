import { Link } from "react-router-dom";
import { services } from "@/data/services";

const ServicesSection = () => (
  <section id="services" className="bg-card py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="section-label">What We Offer</div>
      <h2 className="section-title">
        Our Insurance Solutions
      </h2>
      <p className="section-sub mt-2 text-sm sm:text-base">
        From motor and health insurance to pension plans and investments — we compare the market and find the right fit at the right price.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-12">
        {services.map((s) => (
          <div
            key={s.slug}
            className="border border-border rounded-lg overflow-hidden bg-card hover:border-gold hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col"
          >
            {/* Service Image */}
            <div className="relative h-40 sm:h-48 overflow-hidden bg-muted">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Service Content */}
            <div className="p-5 sm:p-7 flex flex-col flex-1">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-gold/15 to-gold/5 rounded-lg flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-5">
                {s.icon}
              </div>
              <h3 className="text-navy text-base sm:text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light flex-1">{s.shortDesc}</p>
              <Link
                to={`/services/${s.slug}`}
                className="inline-flex items-center gap-1.5 text-primary text-xs sm:text-sm font-medium mt-4 group-hover:gap-2.5 transition-all"
              >
                Explore plans →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
