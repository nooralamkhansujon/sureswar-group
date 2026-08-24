import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { travelsContact } from "@/lib/travels-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sureswar Travels for fares, Hajj & Umrah packages, holiday tours, or visa guidance.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="st-section contact">
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
  );
}
