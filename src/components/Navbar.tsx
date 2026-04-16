import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo_dyranis.png";
import { services } from "@/data/services";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="bg-navy sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-navy-deep border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-1.5">
          <span className="text-white/50 text-xs">Your Trusted Insurance Advisors in Kenya</span>
          <div className="flex gap-4 items-center">
            <a href="tel:0721361188" className="text-white/50 text-xs hover:text-gold transition-colors">📞 0721 361 188</a>
            <a href="https://wa.me/254721361188" className="text-white/50 text-xs hover:text-gold transition-colors">💬 WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[68px]">
        <Link to="/" className="flex items-center gap-2" onClick={closeAll}>
          <div className="bg-gold/10 backdrop-blur-sm rounded-2xl p-2 hover:bg-gold/15 transition-colors">
            <img src={logo} alt="Dyranis Consultancy" className="h-10 w-auto" />
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-7 list-none items-center">
          <li>
            <a href={isHome ? "#" : "/"} className="text-white/75 text-sm font-normal tracking-wider uppercase hover:text-gold transition-colors">
              Home
            </a>
          </li>
          <li>
            <Link to="/about" className="text-white/75 text-sm font-normal tracking-wider uppercase hover:text-gold transition-colors">
              About Us
            </Link>
          </li>
          {/* Services dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-white/75 text-sm font-normal tracking-wider uppercase hover:text-gold transition-colors flex items-center gap-1">
              Services <span className="text-[10px]">▼</span>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-navy-deep border border-white/10 rounded-md shadow-2xl py-2 min-w-[220px] z-50">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    onClick={closeAll}
                    className="block px-5 py-2.5 text-white/70 text-sm hover:text-gold hover:bg-white/[0.04] transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li>
            <Link to="/contact" className="text-white/75 text-sm font-normal tracking-wider uppercase hover:text-gold transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="text-white/60 text-sm hover:text-gold transition-colors"
          >
            Get a Quote
          </Link>
          <a
            href="tel:0721361188"
            className="bg-gold text-navy-deep px-5 py-2 rounded text-sm font-medium tracking-wide hover:bg-gold-light transition-colors"
          >
            📞 Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white/80 text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 px-4 pb-4 max-h-[80vh] overflow-y-auto">
          <Link to="/" onClick={closeAll} className="block py-3 text-white/75 text-sm tracking-wider uppercase hover:text-gold transition-colors">
            Home
          </Link>
          <Link to="/about" onClick={closeAll} className="block py-3 text-white/75 text-sm tracking-wider uppercase hover:text-gold transition-colors">
            About Us
          </Link>
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="block w-full text-left py-3 text-white/75 text-sm tracking-wider uppercase hover:text-gold transition-colors"
          >
            Services {servicesOpen ? "▲" : "▼"}
          </button>
          {servicesOpen && (
            <div className="pl-4 border-l border-white/10 ml-2 mb-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  onClick={closeAll}
                  className="block py-2.5 text-white/60 text-sm hover:text-gold transition-colors"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          )}
          <Link to="/contact" onClick={closeAll} className="block py-3 text-white/75 text-sm tracking-wider uppercase hover:text-gold transition-colors">
            Contact
          </Link>
          <div className="flex gap-3 mt-3">
            <a href="tel:0721361188" onClick={closeAll} className="flex-1 border border-white/20 text-white px-4 py-2.5 rounded text-sm text-center hover:border-gold hover:text-gold transition-colors">
              📞 Call
            </a>
            <Link to="/contact" onClick={closeAll} className="flex-1 bg-gold text-navy-deep px-4 py-2.5 rounded text-sm font-medium text-center hover:bg-gold-light transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
