import type { Metadata } from "next";
import {
  aboutParagraphs,
  awards,
  chairmanMessage,
  managementTeam,
  sisterConcerns,
  travelsContact,
} from "@/lib/travels-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sureswar Travels — over three decades of trusted travel and pilgrimage service in Bangladesh, our leadership, and the wider Sureswar Group.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="st-section about">
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
              <span className="val">
                <a href="https://www.sureswargroup.com/" target="_blank" rel="noopener noreferrer">
                  Sureswar Group
                </a>
              </span>
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

      <section className="st-section chairman">
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

      <section className="st-section team">
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

      <section className="st-section sister">
        <span className="section-label">Sureswar Group</span>
        <h2 className="section-title">
          Sister <span>concerns</span>
        </h2>
        <div className="sister-grid">
          {sisterConcerns.map((company) => (
            <article className="sister-card" key={company.name}>
              <h3>
                {"url" in company ? (
                  <a href={company.url} target="_blank" rel="noopener noreferrer">
                    {company.name}
                  </a>
                ) : (
                  company.name
                )}
              </h3>
              <p>{company.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
