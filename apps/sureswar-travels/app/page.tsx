import Link from "next/link";
import {
  hajjUmrahHighlights,
  heroContent,
  services,
  stats,
  tourPackages,
} from "@/lib/travels-data";

export default function HomePage() {
  const featuredPackages = tourPackages.slice(0, 3);

  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-bg" aria-hidden />
        <div className="hero-overlay" aria-hidden />
        <div className="hero-content">
          <p className="hero-badge">{heroContent.badge}</p>
          <h1 id="hero-heading">
            {heroContent.title} <em>{heroContent.titleAccent}</em>
          </h1>
          <p>{heroContent.description}</p>
          <div className="hero-btns">
            <Link className="btn-primary" href="/contact">
              Book or inquire
            </Link>
            <Link className="btn-outline" href="/packages">
              Our services
            </Link>
          </div>
        </div>
        <aside className="hero-stats" aria-label="Highlights">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <span className="num">{stat.value}</span>
              <span className="label">{stat.label}</span>
            </div>
          ))}
        </aside>
      </section>

      <section id="services" className="st-section services">
        <span className="section-label">Services</span>
        <h2 className="section-title">
          Integrated <span>travel solutions</span>
        </h2>
        <p className="section-desc section-desc--center">
          From a single air ticket to a fully managed pilgrimage or group tour — one team, end-to-end support.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-icon" aria-hidden>
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="st-section hajj">
        <div className="section-grid section-grid--reverse">
          <div className="hajj-visual">
            <img
              src="https://images.unsplash.com/photo-1591604129939-f1efa5568a62?auto=format&fit=crop&w=1200&q=80"
              alt="Pilgrimage travel"
              width={600}
              height={450}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <span className="section-label">Hajj &amp; Umrah</span>
            <h2 className="section-title">
              Sacred journeys, <span>expertly managed</span>
            </h2>
            <p className="section-desc">
              Our pilgrimage division combines decades of experience with transparent packages and dedicated
              on-ground support in Saudi Arabia.
            </p>
            <ul className="check-list">
              {hajjUmrahHighlights.slice(0, 2).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="btn-primary btn-primary--inline" href="/hajj-umrah">
              Explore Hajj &amp; Umrah packages
            </Link>
          </div>
        </div>
      </section>

      <section className="st-section packages">
        <span className="section-label">Tour packages</span>
        <h2 className="section-title">
          Featured <span>holiday packages</span>
        </h2>
        <p className="section-desc section-desc--center">
          Domestic getaways and international escapes — custom itineraries available on request.
        </p>
        <div className="packages-grid">
          {featuredPackages.map((pkg) => (
            <article className="package-card" key={pkg.name}>
              <div className="package-image">
                <img src={pkg.image} alt={pkg.name} width={400} height={240} loading="lazy" decoding="async" />
                <span className={`package-tag package-tag--${pkg.category.toLowerCase()}`}>{pkg.category}</span>
              </div>
              <div className="package-body">
                <h3>{pkg.name}</h3>
                <p className="package-meta">
                  {pkg.location} · {pkg.duration}
                </p>
                <p className="package-price">{pkg.price}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <Link className="btn-outline" href="/packages">
            View all packages
          </Link>
        </div>
      </section>
    </main>
  );
}
