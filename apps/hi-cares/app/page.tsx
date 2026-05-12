import { ContactForm } from "@/components/contact-form";
import {
  bangladeshBullets,
  chairmanMessage,
  employerResponsibilities,
  hicareContact,
  hicareLegal,
  manpowerTable1,
  manpowerTable2,
  mdMessage,
  organogramStructure,
  overviewParagraphs,
  recruitmentProcedureIntro,
  recruitmentProcessSteps,
  servicesDetailed,
  servicesIntro,
  socialTrainingParagraphs,
  targetMarkets,
  understandingEmployerNeeds,
  visionStatement,
  whyChooseAdvantages,
  whyChooseIntro,
} from "@/lib/hicare-data";

function LogoWord({ className }: { className?: string }) {
  return (
    <span className={className}>
      H
      <span className="hi-i-wrap">
        <span className="hi-i-dot" aria-hidden />
        {"\u0131"}
      </span>
      Care
    </span>
  );
}

function MessageCard({
  name,
  title,
  intro,
  body,
}: {
  name: string;
  title: string;
  intro: string;
  body: string[];
}) {
  return (
    <article className="message-card" style={{ maxWidth: 760, marginTop: 28 }}>
      <h3>{name}</h3>
      <p className="role">{title}</p>
      <p>{intro}</p>
      {body.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
      <p className="sign-off">
        — {name}, {title}
      </p>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      <main id="top">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-bg" aria-hidden />
          <div className="hero-shape" aria-hidden />
          <div className="hero-shape2" aria-hidden />
          <div className="hero-content">
            <p className="hero-badge">Company profile</p>
            <h1 id="hero-heading">
              Committed to make people&apos;s <em>Global Career</em>
            </h1>
            <p>
              HiCare Services Ltd. is a modern, efficient overseas recruiting agency in Bangladesh — connecting ethical
              employers with skilled, semi-skilled, and unskilled manpower across the GCC, Malaysia, and Singapore.
            </p>
            <div className="hero-btns">
              <a className="btn-primary" href="#contact">
                Contact us
              </a>
              <a className="btn-outline" href="#services">
                Our services
              </a>
            </div>
          </div>
          <aside className="hero-stats" aria-label="Highlights">
            <div className="stat-card">
              <span className="num">{hicareLegal.recruitingLicense}</span>
              <span className="label">Recruiting license</span>
            </div>
            <div className="stat-card">
              <span className="num">BAIRA</span>
              <span className="label">Member agency</span>
            </div>
            <div className="stat-card">
              <span className="num">2022</span>
              <span className="label">Incorporated</span>
            </div>
          </aside>
        </section>

        <section id="vision" className="hicare-section vision-brochure">
          <span className="section-label">Vision</span>
          <h2 className="section-title">
            Our <span>vision</span>
          </h2>
          <blockquote className="vision-quote-main">{visionStatement}</blockquote>
        </section>

        <section id="message-chairman" className="hicare-section message-section">
          <span className="section-label">Chairman</span>
          <h2 className="section-title">
            Message from the <span>Chairman</span>
          </h2>
          <p className="section-desc">Ashraf Khan on HiCare&apos;s network, values, and commitment to overseas partners.</p>
          <MessageCard
            name={chairmanMessage.name}
            title={chairmanMessage.title}
            intro={chairmanMessage.intro}
            body={chairmanMessage.body}
          />
        </section>

        <section id="message-md" className="hicare-section message-section">
          <span className="section-label">Managing Director</span>
          <h2 className="section-title">
            Message from the <span>Managing Director</span>
          </h2>
          <p className="section-desc">S. N. Manzur Murshed (Mahbub) on capability, markets, and how we work with employers.</p>
          <MessageCard name={mdMessage.name} title={mdMessage.title} intro={mdMessage.intro} body={mdMessage.body} />
        </section>

        <section id="overview" className="hicare-section overview">
          <div className="overview-left">
            <span className="section-label">Overview</span>
            <h2 className="section-title">
              HiCare <span>Services Ltd.</span>
            </h2>
            {overviewParagraphs.map((p, i) => (
              <p key={i} className="section-desc" style={{ marginTop: 16 }}>
                {p}
              </p>
            ))}
            <div className="training-block">
              <h3>Training &amp; social responsibility</h3>
              {socialTrainingParagraphs.map((p, i) => (
                <p key={i} className="section-desc" style={{ marginTop: 12 }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
          <aside className="overview-right" aria-label="Registration details">
            <h3>At a glance</h3>
            <div className="info-row">
              <span className="key">License</span>
              <span className="val">{hicareLegal.recruitingLicense}</span>
            </div>
            <div className="info-row">
              <span className="key">Incorporation</span>
              <span className="val">
                {hicareLegal.incorporationNo}
                <br />
                {hicareLegal.incorporated}, Dhaka
              </span>
            </div>
            <div className="info-row">
              <span className="key">Membership</span>
              <span className="val">Bangladesh Association of International Recruiting Agencies (BAIRA)</span>
            </div>
            <div className="info-row">
              <span className="key">Ministry</span>
              <span className="val">Ministry of Expatriates&apos; Welfare &amp; Overseas Employment</span>
            </div>
            <div className="info-row">
              <span className="key">Website</span>
              <span className="val">
                <a href={hicareContact.web} style={{ color: "var(--blue)", fontWeight: 600 }}>
                  www.hicare.com.bd
                </a>
              </span>
            </div>
          </aside>
        </section>

        <section id="bangladesh" className="hicare-section" style={{ background: "white" }}>
          <span className="section-label">Context</span>
          <h2 className="section-title">
            A brief overview of <span>Bangladesh</span>
          </h2>
          <p className="section-desc">
            Bangladesh offers scale, skills, and infrastructure momentum that support sustainable overseas employment
            partnerships.
          </p>
          <ul className="bd-list">
            {bangladeshBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="manpower-potentials" className="hicare-section manpower">
          <span className="section-label">Talent pipeline</span>
          <h2 className="section-title">
            Manpower <span>potentials</span>
          </h2>
          <p className="section-desc">
            Educational and training capacity supporting recruitment across major disciplines (company profile tables).
          </p>
          <h3 style={{ marginTop: 32, fontSize: 18, color: "var(--blue)" }}>Universities, engineering &amp; tourism</h3>
          <div style={{ overflowX: "auto" }}>
            <table className="mp-table">
              <thead>
                <tr>
                  <th>Institution</th>
                  <th>No. of institutions</th>
                  <th>Faculties</th>
                </tr>
              </thead>
              <tbody>
                {manpowerTable1.map((row) => (
                  <tr key={row.institution}>
                    <td>{row.institution}</td>
                    <td>{row.count}</td>
                    <td>{row.faculties}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 style={{ marginTop: 40, fontSize: 18, color: "var(--blue)" }}>Medical, arts, law &amp; vocational</h3>
          <div style={{ overflowX: "auto" }}>
            <table className="mp-table">
              <thead>
                <tr>
                  <th>Institution</th>
                  <th>No. of institutions</th>
                  <th>Faculties</th>
                </tr>
              </thead>
              <tbody>
                {manpowerTable2.map((row) => (
                  <tr key={row.institution}>
                    <td>{row.institution}</td>
                    <td>{row.count}</td>
                    <td>{row.faculties}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="why-choose" className="hicare-section why">
          <span className="section-label">Why HiCare</span>
          <h2 className="section-title">
            Why choose <span>HiCare</span>?
          </h2>
          <p className="section-desc">{whyChooseIntro}</p>
          <div className="why-grid">
            {whyChooseAdvantages.map((item, i) => (
              <article className="why-card" key={item.title}>
                <span className="why-num" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="section-desc" style={{ marginTop: 36, maxWidth: 640 }}>
            Our recruitment cycle: client requirement analysis → sourcing → screening → skill/trade test → selection.
          </p>
          <div className="recruit-cycle" aria-label="Recruitment cycle">
            {recruitmentProcessSteps.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </section>

        <section id="organogram" className="hicare-section organogram">
          <span className="section-label">Governance</span>
          <h2 className="section-title">
            Company <span>organogram</span>
          </h2>
          <p className="section-desc">Management structure as published in the company profile.</p>
          <div className="org-chart">
            <div className="org-row-line">
              <div className="org-node node-chairman">{organogramStructure.top[0].label}</div>
              <div className="org-h-connector" aria-hidden />
              <div className="org-down">
                <div className="org-node node-md">{organogramStructure.top[1].label}</div>
                <div className="org-connector" aria-hidden />
                <div className="org-node node-gm">{organogramStructure.gm.label}</div>
              </div>
            </div>
            <div className="org-connector" aria-hidden />
            <div className="org-level-line" style={{ maxWidth: 1000 }} aria-hidden />
            <div className="org-connector" aria-hidden />
            <div className="org-branches">
              {organogramStructure.managers.map((m, i) => (
                <div className="org-branch" key={m}>
                  <div className="org-node node-manager">{m}</div>
                  <div className="org-am-row">
                    {organogramStructure.assistants[i].map((am) => (
                      <div className="org-stack" key={am}>
                        <div className="org-node node-asst">{am}</div>
                        <div className="org-node node-exec">Executive</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="hicare-section services">
          <div className="services-header">
            <div>
              <span className="section-label">Our services</span>
              <h2 className="section-title">
                Manpower, consultancy &amp; <span>advisory</span>
              </h2>
              {servicesIntro.map((p, i) => (
                <p key={i} className="section-desc" style={{ marginTop: 12 }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
          <h3 className="section-title" style={{ fontSize: 22, marginBottom: 20 }}>
            Core <span>markets</span>
          </h3>
          <div className="countries-list" style={{ justifyContent: "flex-start" }} role="list">
            {targetMarkets.map((c) => (
              <span key={c} className="country-pill" role="listitem" style={{ background: "var(--light-bg)", borderColor: "#d0d9ea", color: "var(--text-dark)" }}>
                {c}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 48 }}>
            {servicesDetailed.map((s) => (
              <div className="service-detail-card" key={s.title}>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="recruitment" className="hicare-section process">
          <span className="section-label">Employer guide</span>
          <h2 className="section-title">
            Recruitment <span>procedure</span>
          </h2>
          {recruitmentProcedureIntro.map((p, i) => (
            <p key={i} className="section-desc" style={{ marginTop: 12 }}>
              {p}
            </p>
          ))}
          <h3 style={{ marginTop: 28, fontSize: 18, color: "var(--blue)", fontFamily: "var(--font-syne), Syne, sans-serif" }}>
            Understanding employer needs
          </h3>
          <p className="section-desc" style={{ marginTop: 12 }}>
            {understandingEmployerNeeds}
          </p>
          <h3 style={{ marginTop: 36, fontSize: 18, color: "var(--magenta)", fontFamily: "var(--font-syne), Syne, sans-serif" }}>
            Employer documentation
          </h3>
          <div className="employer-grid">
            {employerResponsibilities.map((block) => (
              <article className="employer-card" key={block.title}>
                <h4>{block.title}</h4>
                <p>{block.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="hicare-section contact">
          <div className="contact-left">
            <span className="section-label">Contact</span>
            <h2 className="section-title">Reach HiCare Services Ltd.</h2>
            <p className="section-desc">
              Call, email, or send a message — we will respond with next steps for your demand letter and recruitment
              plan.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="ci-icon" aria-hidden>
                  📍
                </div>
                <div className="ci-text">
                  <div className="label">Office</div>
                  <div className="val">
                    {hicareContact.addressLines.map((line) => (
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
                  <div className="val">{hicareContact.phone}</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="ci-icon" aria-hidden>
                  📱
                </div>
                <div className="ci-text">
                  <div className="label">Cell</div>
                  <div className="val">{hicareContact.cell}</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="ci-icon" aria-hidden>
                  ✉
                </div>
                <div className="ci-text">
                  <div className="label">Email</div>
                  <div className="val">
                    <a href={`mailto:${hicareContact.email}`} style={{ color: "inherit" }}>
                      {hicareContact.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="ci-icon" aria-hidden>
                  🌐
                </div>
                <div className="ci-text">
                  <div className="label">Web</div>
                  <div className="val">
                    <a href={hicareContact.web} style={{ color: "inherit" }}>
                      www.hicare.com.bd
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <h3>Request a callback</h3>
            <ContactForm />
          </div>
        </section>
      </main>

      <div className="footer-sky">
        <div className="fs-logo">
          <LogoWord className="fs-logotype" />
          <span className="fs-sub">SERVICES LTD.</span>
        </div>
        <p className="fs-contact">
          {hicareContact.addressLines.join(" · ")}
          <br />
          Phone {hicareContact.phone} · Cell {hicareContact.cell}
          <br />
          <a href={`mailto:${hicareContact.email}`}>{hicareContact.email}</a>
          <br />
          <a href={hicareContact.web}>{hicareContact.web.replace(/^https?:\/\//, "")}</a>
        </p>
      </div>

      <footer className="hicare-footer">
        <div className="f-logo">
          <LogoWord className="f-logotype" />
          <span className="f-logo-sub">SERVICES LTD.</span>
        </div>
        <nav className="f-links" aria-label="Footer">
          <a href="#vision">Vision</a>
          <a href="#message-chairman">Chairman</a>
          <a href="#message-md">MD</a>
          <a href="#overview">Overview</a>
          <a href="#bangladesh">Bangladesh</a>
          <a href="#manpower-potentials">Manpower</a>
          <a href="#why-choose">Why HiCare</a>
          <a href="#organogram">Organogram</a>
          <a href="#services">Services</a>
          <a href="#recruitment">Recruitment</a>
          <a href="#contact">Contact</a>
        </nav>
        <div>
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> HiCare Services Ltd. All rights reserved.
        </div>
      </footer>
    </>
  );
}
