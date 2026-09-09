"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_UNSET = "__unset__";

const SERVICE_LABELS: Record<string, string> = {
  "air-ticket": "Air ticket booking",
  "hajj-umrah": "Hajj & Umrah package",
  holiday: "Holiday / tour package",
  visa: "Visa assistance",
  corporate: "Corporate travel",
  other: "Other inquiry",
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
        const service = String(formData.get("service"));

        try {
          await emailjs.send(
            process.env.NEXT_PUBLIC_SURESWAR_TRAVELS_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_SURESWAR_TRAVELS_EMAILJS_TEMPLATE_ID!,
            {
              to_email: process.env.NEXT_PUBLIC_SURESWAR_TRAVELS_CONTACT_EMAIL,
              name: formData.get("name"),
              phone: formData.get("phone"),
              email: formData.get("email"),
              service: SERVICE_LABELS[service] ?? service,
              message: formData.get("message"),
            },
            { publicKey: process.env.NEXT_PUBLIC_SURESWAR_TRAVELS_EMAILJS_PUBLIC_KEY }
          );
          form.reset();
          setSent(true);
        } catch {
          setError("Something went wrong sending your inquiry. Please try again or call us directly.");
        } finally {
          setSending(false);
        }
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
      {error ? <p className="form-error">{error}</p> : null}
      <button type="submit" className="btn-submit" disabled={sending}>
        {sending ? "Sending..." : "Send inquiry"}
      </button>
    </form>
  );
}
