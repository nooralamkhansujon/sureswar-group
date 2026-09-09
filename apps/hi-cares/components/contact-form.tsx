"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

/** Avoid `defaultValue=""` + disabled empty option — browsers normalize selection differently from SSR (hydration mismatch). */
const INTEREST_UNSET = "__unset__";

const INTEREST_LABELS: Record<string, string> = {
  employer: "Hiring / employer services",
  candidate: "Candidate registration",
  partnership: "Partnership",
  other: "Other",
};

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setSent(false);
        setError(null);
        setSending(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const interest = String(formData.get("interest"));

        try {
          await emailjs.send(
            process.env.NEXT_PUBLIC_HICARE_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_HICARE_EMAILJS_TEMPLATE_ID!,
            {
              to_email: process.env.NEXT_PUBLIC_HICARE_CONTACT_EMAIL,
              name: formData.get("name"),
              email: formData.get("email"),
              organization: formData.get("organization"),
              interest: INTEREST_LABELS[interest] ?? interest,
              message: formData.get("message"),
            },
            { publicKey: process.env.NEXT_PUBLIC_HICARE_EMAILJS_PUBLIC_KEY }
          );
          form.reset();
          setSent(true);
        } catch {
          setError("Something went wrong sending your message. Please try again or contact us directly.");
        } finally {
          setSending(false);
        }
      }}
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="hc-name">Full name</label>
          <input id="hc-name" name="name" type="text" placeholder="Your name" required autoComplete="name" />
        </div>
        <div className="form-group">
          <label htmlFor="hc-email">Email</label>
          <input id="hc-email" name="email" type="email" placeholder="you@company.com" required autoComplete="email" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="hc-org">Organization</label>
        <input id="hc-org" name="organization" type="text" placeholder="Company or project" autoComplete="organization" />
      </div>
      <div className="form-group">
        <label htmlFor="hc-interest">I am interested in</label>
        <select id="hc-interest" name="interest" required defaultValue={INTEREST_UNSET}>
          <option value={INTEREST_UNSET} disabled>
            Select an option
          </option>
          <option value="employer">Hiring / employer services</option>
          <option value="candidate">Candidate registration</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="hc-message">Message</label>
        <textarea id="hc-message" name="message" placeholder="Tell us about roles, timelines, or questions" required />
      </div>
      {sent ? (
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, marginBottom: 12 }}>
          Thank you — your message has been recorded. Our team will get back to you shortly.
        </p>
      ) : null}
      {error ? (
        <p style={{ color: "#ff8a8a", fontSize: 14, marginBottom: 12 }}>{error}</p>
      ) : null}
      <button type="submit" className="btn-submit" disabled={sending}>
        {sending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
