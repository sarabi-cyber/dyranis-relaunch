import { Link } from "react-router-dom";
import { services } from "@/data/services";

const Footer = () => (
  <>
    <footer className="bg-navy-deep py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h5 className="text-white/50 text-xs uppercase tracking-[0.1em] mb-4">About</h5>
            <p className="text-white/35 text-sm leading-relaxed font-light max-w-[240px]">
              IRA-licensed insurance consultancy helping Kenyans find the right cover at the right price.
            </p>
          </div>

          <div>
            <h5 className="text-white/50 text-xs uppercase tracking-[0.1em] mb-4">Services</h5>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-white/35 text-sm font-light hover:text-gold transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white/50 text-xs uppercase tracking-[0.1em] mb-4">Company</h5>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-white/35 text-sm font-light hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/35 text-sm font-light hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-white/35 text-sm font-light hover:text-gold transition-colors">Contact</Link></li>
              <li><a href="/#partners" className="text-white/35 text-sm font-light hover:text-gold transition-colors">Our Partners</a></li>
              <li><a href="/#process" className="text-white/35 text-sm font-light hover:text-gold transition-colors">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white/50 text-xs uppercase tracking-[0.1em] mb-4">Contact</h5>
            <ul className="space-y-2.5">
              <li><a href="mailto:info@dyranisconsultancy.co.ke" className="text-white/35 text-sm font-light hover:text-gold transition-colors">info@dyranisconsultancy.co.ke</a></li>
              <li><a href="tel:0721361188" className="text-white/35 text-sm font-light hover:text-gold transition-colors">0721 361 188</a></li>
              <li><a href="https://wa.me/254721361188" className="text-white/35 text-sm font-light hover:text-gold transition-colors">WhatsApp Us</a></li>
              <li><span className="text-white/35 text-sm font-light">Nairobi, Kenya</span></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] my-12" />

        {/* Word Art Section */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="text-center">
            <h2 
              className="font-heading text-white text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #D4A574 0%, #E8C9A0 50%, #D4A574 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
              }}
            >
              Dyranis
            </h2>
            <p className="text-white/40 text-sm tracking-[0.15em] uppercase mt-2">Consultancy</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 sm:p-10 mb-12 text-center">
          <p className="text-white/70 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
            Interested in getting the right insurance cover, comparing plans, or simply learning more?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/254721361188?text=Hello%20Dyranis%2C%20I%20need%20insurance%20advice."
              className="bg-gold text-navy-deep px-8 py-3 rounded-lg font-medium hover:bg-gold-light transition-colors text-sm sm:text-base"
            >
              Chat on WhatsApp →
            </a>
            <a 
              href="tel:0721361188"
              className="border border-white/20 text-white px-8 py-3 rounded-lg hover:border-gold hover:text-gold transition-colors text-sm sm:text-base"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </footer>

    {/* Bottom Bar */}
    <div className="bg-navy-deep border-t border-white/[0.06] px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-white/25 text-xs font-light">© 2026 Dyranis Consultancy. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/company/dyranis-consultancy" className="text-white/35 hover:text-gold transition-colors text-xs">LinkedIn</a>
          <a href="https://www.facebook.com/dyranisconsultancy" className="text-white/35 hover:text-gold transition-colors text-xs">Facebook</a>
          <a href="https://twitter.com/dyranisconsultancy" className="text-white/35 hover:text-gold transition-colors text-xs">Twitter</a>
        </div>
        <div className="bg-gold/10 border border-gold/20 text-gold/70 px-3 py-1 rounded text-xs tracking-wider uppercase">
          IRA Licensed
        </div>
      </div>
    </div>
  </>
);

export default Footer;
