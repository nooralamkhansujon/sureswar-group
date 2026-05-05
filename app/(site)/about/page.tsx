import { PageShell, ProseSection } from "@/components/page-shell";

export const metadata = {
  title: "About Sureswar Group",
  description: "Vision, leadership, and business values of Sureswar Group.",
};

export default function AboutPage() {
  return (
    <PageShell
      title="About Sureswar Group"
      subtitle="Who we are, where we are headed, and the principles that guide every company in the group."
    >
      <div className="space-y-16">
        <ProseSection id="our-vision" title="Our Vision">
          <p>
            We aim to be a trusted regional partner—known for dependable execution, ethical
            business practice, and teams that take ownership from first conversation through
            delivery and aftercare.
          </p>
          <p>
            Our vision is to grow each venture with discipline: clear scope, measurable outcomes,
            and relationships that last beyond a single project or booking.
          </p>
        </ProseSection>

        <ProseSection id="leadership" title="Leadership">
          <p>
            Group leadership sets direction, allocates capital responsibly, and ensures each
            operating company maintains strong governance and safety standards.
          </p>
          <p>
            {/* Placeholder for named leadership — replace with bios and photos when ready. */}
            Executive profiles and organizational structure can be published here. For media or
            partnership inquiries, please use the{" "}
            <a className="font-medium text-brand-700 hover:underline dark:text-brand-100" href="/contact">
              contact form
            </a>
            .
          </p>
        </ProseSection>

        <ProseSection id="business-values" title="Business Values">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-zinc-800 dark:text-zinc-200">Integrity</strong> — we say what
              we do and do what we say.
            </li>
            <li>
              <strong className="text-zinc-800 dark:text-zinc-200">Safety & compliance</strong> —
              especially across contracting, electrical works, and equipment supply.
            </li>
            <li>
              <strong className="text-zinc-800 dark:text-zinc-200">Respect for people</strong> —
              customers, partners, and colleagues.
            </li>
            <li>
              <strong className="text-zinc-800 dark:text-zinc-200">Continuous improvement</strong> —
              refining processes and service quality over time.
            </li>
          </ul>
        </ProseSection>
      </div>
    </PageShell>
  );
}
