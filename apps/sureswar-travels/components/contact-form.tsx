"use client";

import { useState } from "react";

const SERVICE_UNSET = "__unset__";

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
          <label htmlFor="st-name">Full name</label>
          <input id="st-name" name="name" type="text" placeholder="Your name" required autoComplete="name" />
        </div>
        <div className="form-group">
          <label htmlFor="st-phone">Phone</label>
          <input id="st-phone" name="phone" type="tel" placeholder="+880 ..." required autoComplete="tel" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="st-email">Email</label>
        <input id="st-email" name="email" type="email" placeholder="you@email.com" autoComplete="email" />
      </div>
      <div className="form-group">
        <label htmlFor="st-service">I need help with</label>
        <select id="st-service" name="service" required defaultValue={SERVICE_UNSET}>
          <option value={SERVICE_UNSET} disabled>
            Select a service
          </option>
          <option value="air-ticket">Air ticket booking</option>
          <option value="hajj-umrah">Hajj &amp; Umrah package</option>
          <option value="holiday">Holiday / tour package</option>
          <option value="visa">Visa assistance</option>
          <option value="corporate">Corporate travel</option>
          <option value="other">Other inquiry</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="st-message">Message</label>
        <textarea id="st-message" name="message" placeholder="Destination, dates, travelers, or questions" required />
      </div>
      {sent ? (
        <p className="form-success">
          Thank you — your inquiry has been recorded. Our team will contact you shortly.
        </p>
      ) : null}
      <button type="submit" className="btn-submit" disabled={sent}>
        {sent ? "Sent" : "Send inquiry"}
      </button>
    </form>
  );
}
