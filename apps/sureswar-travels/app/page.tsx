import { ContactForm } from "@/components/contact-form";
import {
  aboutParagraphs,
  awards,
  chairmanMessage,
  hajjUmrahHighlights,
  heroContent,
  managementTeam,
  services,
  sisterConcerns,
  stats,
  tourPackages,
  travelsContact,
} from "@/lib/travels-data";

export default function HomePage() {
  return (
    <>
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
              <a className="btn-primary" href="#contact">
                Book or inquire
              </a>
              <a className="btn-outline" href="#services">
                Our services
              </a>
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

        <section id="about" className="st-section about">
          <div className="section-grid">
            <div>
              <span className="section-label">About us</span>
              <h2 className="section-title">
                A legacy of trust in <span>global travel</span>
              </h2>
              {aboutParagraphs.map((p, i) => (
                <p key={i} className="section-desc">
                  {p}
                </p>
              ))}
              <ul className="awards-list">
                {awards.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <aside className="about-aside" aria-label="Quick facts">
              <h3>At a glance</h3>
              <div className="info-row">
                <span className="key">Founded</span>
                <span className="val">1993</span>
              </div>
              <div className="info-row">
                <span className="key">Group</span>
                <span className="val">Sureswar Group</span>
              </div>
              <div className="info-row">
                <span className="key">Focus</span>
                <span className="val">Air ticketing · Hajj &amp; Umrah · Tours · Visa</span>
              </div>
              <div className="info-row">
                <span className="key">Website</span>
                <span className="val">
                  <a href={travelsContact.web}>www.sureswartravels.com</a>
                </span>
              </div>
            </aside>
          </div>
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

        <section id="hajj-umrah" className="st-section hajj">
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
                {hajjUmrahHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="btn-primary btn-primary--inline" href="#contact">
                Request a package quote
              </a>
            </div>
          </div>
        </section>

        <section id="packages" className="st-section packages">
          <span className="section-label">Tour packages</span>
          <h2 className="section-title">
            Featured <span>holiday packages</span>
          </h2>
          <p className="section-desc section-desc--center">
            Domestic getaways and international escapes — custom itineraries available on request.
          </p>
          <div className="packages-grid">
            {tourPackages.map((pkg) => (
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
        </section>

        <section id="chairman" className="st-section chairman">
          <span className="section-label">Leadership</span>
          <h2 className="section-title">
            Message from the <span>Chairman</span>
          </h2>
          <blockquote className="chairman-quote">
            <p className="chairman-intro">{chairmanMessage.intro}</p>
            {chairmanMessage.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <footer>
              — {chairmanMessage.name}, {chairmanMessage.title}
            </footer>
          </blockquote>
        </section>

        <section id="team" className="st-section team">
          <span className="section-label">Management</span>
          <h2 className="section-title">
            Our <span>management team</span>
          </h2>
          <div className="team-grid">
            {managementTeam.map((member) => (
              <article className="team-card" key={member.name}>
                <div className="team-avatar" aria-hidden>
                  {member.name.charAt(0)}
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="sister-concerns" className="st-section sister">
          <span className="section-label">Sureswar Group</span>
          <h2 className="section-title">
            Sister <span>concerns</span>
          </h2>
          <div className="sister-grid">
            {sisterConcerns.map((company) => (
              <article className="sister-card" key={company.name}>
                <h3>{company.name}</h3>
                <p>{company.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="st-section contact">
          <div className="contact-grid">
            <div className="contact-left">
              <span className="section-label">Contact</span>
              <h2 className="section-title">Reach Sureswar Travels</h2>
              <p className="section-desc">
                Call, email, or send an inquiry — our team will respond with fares, package options, or visa guidance.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="ci-icon" aria-hidden>
                    📍
                  </div>
                  <div className="ci-text">
                    <div className="label">Office</div>
                    <div className="val">
                      {travelsContact.addressLines.map((line) => (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="ci-icon" aria-hidden>
                    ☎
                  </div>
                  <div className="ci-text">
                    <div className="label">Phone</div>
                    <div className="val">{travelsContact.phone}</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="ci-icon" aria-hidden>
                    📱
                  </div>
                  <div className="ci-text">
                    <div className="label">Cell</div>
                    <div className="val">{travelsContact.cell}</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="ci-icon" aria-hidden>
                    ✉
                  </div>
                  <div className="ci-text">
                    <div className="label">Email</div>
                    <div className="val">
                      <a href={`mailto:${travelsContact.email}`}>{travelsContact.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-right">
              <h3>Travel inquiry</h3>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="st-footer">
        <div className="footer-brand">
          <div className="logo-main">
            <span className="logo-sureswar">Sureswar</span>
            <span className="logo-travels">Travels</span>
          </div>
          <p>
            {travelsContact.addressLines.join(" · ")}
            <br />
            Phone {travelsContact.phone} · Cell {travelsContact.cell}
            <br />
            <a href={`mailto:${travelsContact.email}`}>{travelsContact.email}</a>
          </p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#hajj-umrah">Hajj &amp; Umrah</a>
          <a href="#packages">Packages</a>
          <a href="#chairman">Chairman</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer-copy">
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Sureswar Travels. All rights reserved.
        </div>
      </footer>
    </>
  );
}
