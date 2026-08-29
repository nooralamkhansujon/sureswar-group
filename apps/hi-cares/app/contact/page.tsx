import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageBanner } from "@/components/page-banner";
import { hicareContact } from "@/lib/hicare-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with HiCare Services Ltd. for demand letters, recruitment plans, and manpower deployment inquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Contact"
        title="Let's talk about your manpower needs"
        description="Call, email, or send a message — our team will respond with next steps for your demand letter and recruitment plan."
      />

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
  );
}
