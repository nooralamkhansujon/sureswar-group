"use client";

import { useState, type FormEvent } from "react";

export function InquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className="rounded-2xl border border-brand-200 bg-brand-100/40 p-6 text-sm text-brand-900 dark:border-brand-700 dark:bg-brand-700/20 dark:text-brand-50"
        role="status"
      >
        Thank you. Your inquiry has been recorded for this demo. Connect a backend or email service
        to deliver messages to your team.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <div>
        <label htmlFor="inquiry-name" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Name
        </label>
        <input
          id="inquiry-name"
          name="name"
          required
          className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-brand-500 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-50"
        />
      </div>
      <div>
        <label htmlFor="inquiry-email" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Email
        </label>
        <input
          id="inquiry-email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-brand-500 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-50"
        />
      </div>
      <div>
        <label htmlFor="inquiry-company" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Company / unit (optional)
        </label>
        <input
          id="inquiry-company"
          name="company"
          placeholder="e.g. Sadi Corporation, Holiday Express"
          className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-brand-500 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-50"
        />
      </div>
      <div>
        <label htmlFor="inquiry-message" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Message
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-brand-500 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-50"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-brand-600"
      >
        Send inquiry
      </button>
    </form>
  );
}
