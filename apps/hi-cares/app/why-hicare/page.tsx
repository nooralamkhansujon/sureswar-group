import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import {
  employerResponsibilities,
  recruitmentProcedureIntro,
  recruitmentProcessSteps,
  servicesDetailed,
  servicesIntro,
  targetMarkets,
  understandingEmployerNeeds,
  whyChooseAdvantages,
  whyChooseIntro,
} from "@/lib/hicare-data";

export const metadata: Metadata = {
  title: "Why HiCare",
  description:
    "Why choose HiCare Services Ltd. — our advantages, manpower and visa services, core markets, and recruitment procedure for employers.",
};

export default function WhyHiCarePage() {
  return (
    <main>
      <PageBanner
        eyebrow="Why HiCare"
        title="Built for reliable, ethical recruitment"
        description="Specialized recruiting divisions, transparent manpower and visa services, and a clear procedure for employers who need the right people fast."
      />

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
            <span
              key={c}
              className="country-pill"
              role="listitem"
              style={{ background: "var(--light-bg)", borderColor: "#d0d9ea", color: "var(--text-dark)" }}
            >
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
        <h3 style={{ marginTop: 28, fontSize: 18, color: "var(--blue)" }}>
          Understanding employer needs
        </h3>
        <p className="section-desc" style={{ marginTop: 12 }}>
          {understandingEmployerNeeds}
        </p>
        <h3 style={{ marginTop: 36, fontSize: 18, color: "var(--magenta)" }}>
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
    </main>
  );
}
