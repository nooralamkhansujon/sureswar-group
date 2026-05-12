import { InquiryForm } from "@/components/inquiry-form";
import { PageShell, ProseSection } from "@/components/page-shell";
import { contact } from "@/lib/site-config";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

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
          <Typography variant="body1">
            <Typography component="span" sx={{ fontWeight: 600, color: "text.primary" }}>Phone:</Typography>{" "}
            <MuiLink href={`tel:${contact.phoneTel}`} color="primary" underline="hover">
              {contact.phoneDisplay}
            </MuiLink>
          </Typography>
          <Typography variant="body1">
            <Typography component="span" sx={{ fontWeight: 600, color: "text.primary" }}>Email:</Typography>{" "}
            <MuiLink href={`mailto:${contact.email}`} color="primary" underline="hover">
              {contact.email}
            </MuiLink>
          </Typography>
          {/* <Typography variant="body2" color="text.disabled">
            Update phone numbers and addresses in{" "}
            <Typography
              component="code"
              variant="body2"
              sx={{ px: 0.5, py: 0.25, borderRadius: 1, bgcolor: "action.hover", fontFamily: "monospace" }}
            >
              lib/site-config.ts
            </Typography>
            .
          </Typography> */}
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
