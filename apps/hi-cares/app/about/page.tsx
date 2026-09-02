import type { Metadata } from "next";
import { MessageCard } from "@/components/message-card";
import { PageBanner } from "@/components/page-banner";
import {
  hicareContact,
  hicareLegal,
  mdMessage,
  organogramStructure,
  overviewParagraphs,
  socialTrainingParagraphs,
} from "@/lib/hicare-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about HiCare Services Ltd. — leadership messages, company overview, registration details, and management organogram.",
};

export default function AboutPage() {
  return (
    <main>
      <PageBanner
        eyebrow="About us"
        title="Leadership, governance & company profile"
        description="Meet the people leading HiCare Services Ltd., see our registration details, and the management structure that keeps every placement accountable."
      />

      <section className="hicare-section message-section" aria-labelledby="leadership-heading">
        <span className="section-label">Leadership</span>
        <h2 id="leadership-heading" className="section-title">
          Message from our <span>leader</span>
        </h2>
        <p className="section-desc">
          S. N. Manzur Murshed (Mahbub) on HiCare&apos;s values, capability, and commitment to overseas partners.
        </p>
        <div className="messages-grid">
          <div id="message-md" className="message-column">
            <h3 className="message-column-title">
              Message from the <span>Managing Director</span>
            </h3>
            <MessageCard
              name={mdMessage.name}
              title={mdMessage.title}
              intro={mdMessage.intro}
              body={mdMessage.body}
              image={mdMessage.image}
              imageAlt={mdMessage.imageAlt}
              imageWidth={mdMessage.imageWidth}
              imageHeight={mdMessage.imageHeight}
              imageFit={mdMessage.imageFit}
              imageObjectPosition={mdMessage.imageObjectPosition}
            />
          </div>
        </div>
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

      <section id="organogram" className="hicare-section organogram">
        <span className="section-label">Governance</span>
        <h2 className="section-title">
          Company <span>organogram</span>
        </h2>
        <p className="section-desc">Management structure as published in the company profile.</p>
        <div className="org-chart">
          <div className="org-row-line">
            <div className="org-down">
              <div className="org-node node-md">{organogramStructure.top.label}</div>
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
    </main>
  );
}
