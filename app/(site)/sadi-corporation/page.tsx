import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Sadi Corporation — Overview",
  description: "Overview of Sadi Corporation under Sureswar Group.",
};

export default function SadiOverviewPage() {
  return (
    <PageShell
      nested
      title="Sadi Corporation"
      subtitle="Engineering-minded contracting and supply services delivered with clear scope and accountable project teams."
    >
      <div className="max-w-3xl space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>
          Sadi Corporation supports clients that need reliable field execution—whether that means
          structured contracting, electrical installations, or sourcing security and related
          equipment.
        </p>
        <p>
          Use the section links above to explore services in detail or reach the team through the
          dedicated contact page.
        </p>
      </div>
    </PageShell>
  );
}
