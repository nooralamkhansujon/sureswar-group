import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { contact } from "@/lib/site-config";

export const metadata = {
  title: "Holiday Express — Contact",
  description: "Contact Holiday Express.",
};

export default function HolidayContactPage() {
  return (
    <PageShell
      nested
      title="Contact — Holiday Express"
      subtitle="Tour, visa, and travel inquiries for the Holiday Express team."
    >
      <div className="max-w-3xl space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>
          Use the group{" "}
          <Link className="font-medium text-brand-700 hover:underline dark:text-brand-100" href="/contact">
            contact form
          </Link>{" "}
          and mention <strong className="text-zinc-800 dark:text-zinc-200">Holiday Express</strong>{" "}
          so your message is routed correctly.
        </p>
        <p>
          Phone:{" "}
          <a className="font-medium text-brand-700 hover:underline dark:text-brand-100" href={`tel:${contact.phoneTel}`}>
            {contact.phoneDisplay}
          </a>
          <br />
          Email:{" "}
          <a className="font-medium text-brand-700 hover:underline dark:text-brand-100" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </p>
      </div>
    </PageShell>
  );
}
