import { Link } from "react-router-dom";

const Footer = () => (
  <>
    <footer className="bg-navy-deep py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-heading text-white text-lg mb-3">
            Dyranis<span className="text-gold">.</span>Consultancy
          </div>
          <p className="text-white/35 text-sm leading-relaxed font-light max-w-[240px]">
            IRA-licensed insurance consultancy helping Kenyans find the right cover at the right price.
          </p>
        </div>

        <div>
          <h5 className="text-white/50 text-xs uppercase tracking-[0.1em] mb-4">Services</h5>
          <ul className="space-y-2.5">
            {[
              { label: "Motor Insurance", slug: "motor-insurance" },
              { label: "Health Insurance", slug: "health-insurance" },
              { label: "Education Insurance", slug: "education-insurance" },
              { label: "Life Insurance", slug: "life-insurance" },
              { label: "Commercial Insurance", slug: "commercial-insurance" },
              { label: "WIBA Cover", slug: "wiba" },
              { label: "Pension Plan", slug: "pension-plan" },
            ].map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-white/35 text-sm font-light hover:text-gold transition-colors">{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-white/50 text-xs uppercase tracking-[0.1em] mb-4">Company</h5>
          <ul className="space-y-2.5">
            <li><Link to="/about" className="text-white/35 text-sm font-light hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="text-white/35 text-sm font-light hover:text-gold transition-colors">Contact</Link></li>
            <li><a href="/#partners" className="text-white/35 text-sm font-light hover:text-gold transition-colors">Our Partners</a></li>
            <li><a href="/#process" className="text-white/35 text-sm font-light hover:text-gold transition-colors">How It Works</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white/50 text-xs uppercase tracking-[0.1em] mb-4">Contact</h5>
          <ul className="space-y-2.5">
            <li><a href="https://dyranisconsultancy.co.ke" className="text-white/35 text-sm font-light hover:text-gold transition-colors">dyranisconsultancy.co.ke</a></li>
            <li><a href="mailto:info@dyranisconsultancy.co.ke" className="text-white/35 text-sm font-light hover:text-gold transition-colors">info@dyranisconsultancy.co.ke</a></li>
            <li><a href="tel:0721361188" className="text-white/35 text-sm font-light hover:text-gold transition-colors">0721 361 188</a></li>
            <li><a href="https://wa.me/254721361188" className="text-white/35 text-sm font-light hover:text-gold transition-colors">WhatsApp Us</a></li>
            <li><span className="text-white/35 text-sm font-light">Nairobi, Kenya</span></li>
          </ul>
        </div>
      </div>
    </footer>

    <div className="bg-navy-deep border-t border-white/[0.06] px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <p className="text-white/25 text-xs font-light">© 2026 Dyranis Consultancy. All rights reserved.</p>
        <div className="bg-gold/10 border border-gold/20 text-gold/70 px-3 py-1 rounded text-xs tracking-wider uppercase">
          IRA Licensed
        </div>
      </div>
    </div>
  </>
);

export default Footer;
