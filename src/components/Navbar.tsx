import { useState } from "react";
import logo from "@/assets/logo_dyranis.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#why-us" },
    { label: "Partners", href: "#partners" },
    { label: "How It Works", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-navy sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[68px]">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Dyranis Consultancy" className="h-10 w-auto" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-white/75 text-sm font-normal tracking-wider uppercase hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-gold text-navy-deep px-5 py-2 rounded text-sm font-medium tracking-wide hover:bg-gold-light transition-colors"
        >
          Get a Quote
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80 text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-white/75 text-sm tracking-wider uppercase hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block bg-gold text-navy-deep px-5 py-2.5 rounded text-sm font-medium text-center hover:bg-gold-light transition-colors"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
