const Footer = () => (
  <>
    <footer className="bg-navy-deep py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-heading text-white text-lg mb-3">
            Dyranis<span className="text-gold">.</span>Consultancy
          </div>
          <p className="text-white/35 text-sm leading-relaxed font-light max-w-[240px]">
            Licensed insurance consultancy helping Kenyans find the right cover at the right price since 2018.
          </p>
        </div>

        <div>
          <h5 className="text-white/50 text-xs uppercase tracking-[0.1em] mb-4">Services</h5>
          <ul className="space-y-2.5">
            {["Health Insurance", "Motor Insurance", "Life Insurance", "Business Cover", "Travel Insurance"].map((s) => (
              <li key={s}>
                <a href="#services" className="text-white/35 text-sm font-light hover:text-gold transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-white/50 text-xs uppercase tracking-[0.1em] mb-4">Company</h5>
          <ul className="space-y-2.5">
            {["About Us", "Our Partners", "How It Works", "Testimonials"].map((s) => (
              <li key={s}>
                <a href="#" className="text-white/35 text-sm font-light hover:text-gold transition-colors">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-white/50 text-xs uppercase tracking-[0.1em] mb-4">Contact</h5>
          <ul className="space-y-2.5">
            <li><a href="https://dyranisconsultancy.co.ke" className="text-white/35 text-sm font-light hover:text-gold transition-colors">dyranisconsultancy.co.ke</a></li>
            <li><a href="mailto:info@dyranisconsultancy.co.ke" className="text-white/35 text-sm font-light hover:text-gold transition-colors">info@dyranisconsultancy.co.ke</a></li>
            <li><a href="tel:+254700000000" className="text-white/35 text-sm font-light hover:text-gold transition-colors">0700 000 000</a></li>
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
