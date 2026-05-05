import { InquiryForm } from "@/components/inquiry-form";
import { PageShell, ProseSection } from "@/components/page-shell";
import { contact } from "@/lib/site-config";

export const metadata = {
  title: "Contact Us",
  description: "Contact Sureswar Group — inquiry form, phone, email, and map.",
};

function MapEmbed() {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`;
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
      <iframe
        title={`Map: ${contact.mapQuery}`}
        src={src}
        className="h-72 w-full bg-zinc-100 dark:bg-zinc-900"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Us"
      subtitle="Reach the group for partnerships, services, media, or general questions."
    >
      <div className="space-y-16">
        <ProseSection id="inquiry" title="Inquiry form">
          <InquiryForm />
        </ProseSection>

        <ProseSection id="details" title="Phone / Email">
          <p>
            <strong className="text-zinc-800 dark:text-zinc-200">Phone:</strong>{" "}
            <a className="text-brand-700 hover:underline dark:text-brand-100" href={`tel:${contact.phoneTel}`}>
              {contact.phoneDisplay}
            </a>
          </p>
          <p>
            <strong className="text-zinc-800 dark:text-zinc-200">Email:</strong>{" "}
            <a className="text-brand-700 hover:underline dark:text-brand-100" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>
          <p className="text-sm text-zinc-500">
            Update phone numbers and addresses in <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">lib/site-config.ts</code>.
          </p>
        </ProseSection>

        <ProseSection id="map" title="Google Map">
          <p className="text-sm">
            Showing a search embed for: <strong>{contact.mapQuery}</strong>. Replace{" "}
            <code className="rounded bg-zinc-100 px-1 dark:bg-zinc-800">mapQuery</code> or swap in your
            official embed code for a pinned business location.
          </p>
          <div className="mt-4">
            <MapEmbed />
          </div>
        </ProseSection>
      </div>
    </PageShell>
  );
}
