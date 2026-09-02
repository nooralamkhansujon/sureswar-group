import {
  bangladeshBullets,
  hicareLegal,
  manpowerTable1,
  manpowerTable2,
  visionStatement,
} from "@/lib/hicare-data";

export default function HomePage() {
  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-bg" aria-hidden />
        <div className="hero-shape" aria-hidden />
        <div className="hero-shape2" aria-hidden />
        <div className="hero-content">
          <p className="hero-badge text-white!">Company profile</p>
          <h1 id="hero-heading">
            Committed to make people&apos;s <em>Global Career</em>
          </h1>
          <p>
            HiCare Services Ltd. is a modern, efficient overseas recruiting agency in Bangladesh — connecting ethical
            employers with skilled, semi-skilled, and unskilled manpower across the Globe
            {/*, Malaysia, and Singapore.*/}
          </p>
          <div className="hero-btns">
            <a className="btn-primary" href="/contact">
              Contact us
            </a>
            <a className="btn-outline" href="/why-hicare#services">
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
    </main>
  );
}
