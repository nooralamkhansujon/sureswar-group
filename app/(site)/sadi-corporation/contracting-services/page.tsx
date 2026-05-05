import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Sadi Corporation — Contracting Services",
  description: "Contracting services by Sadi Corporation.",
};

export default function SadiContractingPage() {
  return (
    <PageShell
      nested
      title="Contracting Services"
      subtitle="Project-based execution with defined milestones, documentation, and site coordination."
    >
      <ul className="max-w-3xl list-disc space-y-2 pl-5 text-zinc-600 dark:text-zinc-400">
        <li>Civil and MEP-adjacent work packages where we act as a disciplined subcontractor or prime.</li>
        <li>Site planning support, method statements, and progress reporting aligned to your standards.</li>
        <li>Coordination with consultants, facility teams, and vendors to reduce rework and downtime.</li>
      </ul>
    </PageShell>
  );
}
