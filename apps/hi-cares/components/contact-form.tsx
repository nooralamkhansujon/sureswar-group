"use client";
import { useState } from "react";

/** Avoid `defaultValue=""` + disabled empty option — browsers normalize selection differently from SSR (hydration mismatch). */
const INTEREST_UNSET = "__unset__";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
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
          Thank you — your message has been recorded for this demo. Connect the form to your backend or email service
          when ready.
        </p>
      ) : null}
      <button type="submit" className="btn-submit" disabled={sent}>
        {sent ? "Sent" : "Send message"}
      </button>
    </form>
  );
}
