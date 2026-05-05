import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Holiday Express — Overview",
  description: "Holiday Express travel services under Sureswar Group.",
};

export default function HolidayOverviewPage() {
  return (
    <PageShell
      nested
      title="Holiday Express"
      subtitle="Thoughtfully planned tours, visa assistance, and responsive support for travelers."
    >
      <div className="max-w-3xl space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>
          Holiday Express helps individuals and groups move from itinerary ideas to confirmed travel—
          with transparent inclusions, realistic timelines, and help navigating documentation where
          needed.
        </p>
        <p>
          Browse tour packages, read about visa assistance, or contact the team using the section
          links above.
        </p>
      </div>
    </PageShell>
  );
}
