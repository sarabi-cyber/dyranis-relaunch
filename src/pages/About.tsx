import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { title: "Independence", desc: "We're not tied to any single insurer. Our recommendations are based purely on what's best for you." },
  { title: "Transparency", desc: "No hidden fees, no confusing jargon. We explain everything in plain language so you can make informed decisions." },
  { title: "Client-First", desc: "Your needs come first — always. We educate, advise, and support you through every step of your insurance journey." },
  { title: "Claims Advocacy", desc: "We don't disappear after the sale. When it's time to claim, we file on your behalf and follow up until it's resolved." },
];

const About = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="bg-navy relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-[400px] h-[400px] border border-gold/15 rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="inline-flex items-center gap-2 bg-gold/12 border border-gold/30 text-gold-light px-3 py-1.5 rounded-sm text-xs tracking-[0.1em] uppercase mb-6">
          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
          About Us
        </div>
        <h1 className="text-white font-heading text-4xl lg:text-5xl leading-[1.15] font-bold mb-5">
          Your Trusted Insurance
          <br />
          Advisors in <span className="text-gold">Kenya</span>
        </h1>
        <p className="text-white/65 text-lg leading-relaxed max-w-[600px] font-light">
          Dyranis Consultancy is an IRA-licensed insurance agency dedicated to helping individuals, families, and businesses across Kenya find the right insurance cover at the right price.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="bg-card py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="section-label">Our Story</div>
        <h2 className="section-title">Built on Trust, Driven by Service</h2>
        <div className="space-y-4 mt-6">
          <p className="text-muted-foreground text-base leading-relaxed font-light">
            Founded with a simple mission — to make insurance accessible, understandable, and affordable for every Kenyan — Dyranis Consultancy has grown into one of Kenya's trusted independent insurance advisory firms.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed font-light">
            We partner with Kenya's leading insurers including Jubilee, Britam, AAR, Old Mutual, CIC, ICEA Lion, Heritage, Madison, GA, and Sanlam. This means we compare the entire market to find you the best deal — not just push one company's products.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed font-light">
            From health and motor insurance to pension plans and money market funds, we cover nine key areas of financial protection. Our team walks you through every option in plain language, handles your paperwork, and stands by you when it's time to claim.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="bg-cream py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">Our Values</div>
        <h2 className="section-title">What We Stand For</h2>
        <div className="grid sm:grid-cols-2 gap-5 mt-10">
          {values.map((v) => (
            <div key={v.title} className="border border-border rounded-lg p-7 bg-card">
              <h3 className="text-navy text-lg font-bold mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-navy py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold/10 rounded-full pointer-events-none" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-heading text-white text-3xl lg:text-4xl mb-4">Let's Find Your Perfect Cover</h2>
        <p className="text-white/55 text-base leading-relaxed font-light mb-8 max-w-[480px] mx-auto">
          Talk to our team today. We'll compare plans, explain your options, and get you covered — fast.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://wa.me/254721361188" className="bg-gold text-navy-deep px-8 py-3.5 rounded font-medium hover:bg-gold-light transition-colors">
            WhatsApp Us ↗
          </a>
          <a href="tel:0721361188" className="border border-white/30 text-white px-8 py-3.5 rounded hover:border-gold hover:text-gold transition-colors">
            Call: 0721 361 188
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
