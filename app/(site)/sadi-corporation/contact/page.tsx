import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { contact } from "@/lib/site-config";

export const metadata = {
  title: "Sadi Corporation — Contact",
  description: "Contact Sadi Corporation.",
};

export default function SadiContactPage() {
  return (
    <PageShell
      nested
      title="Contact — Sadi Corporation"
      subtitle="Reach the Sadi Corporation team for services, quotations, or partnership discussions."
    >
      <div className="max-w-3xl space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>
          For a structured inquiry, use the group{" "}
          <Link className="font-medium text-brand-700 hover:underline dark:text-brand-100" href="/contact">
            contact form
          </Link>{" "}
          and mention <strong className="text-zinc-800 dark:text-zinc-200">Sadi Corporation</strong>{" "}
          in your message.
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
