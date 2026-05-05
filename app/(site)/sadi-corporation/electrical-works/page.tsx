import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Sadi Corporation — Electrical Works",
  description: "Electrical works by Sadi Corporation.",
};

export default function SadiElectricalPage() {
  return (
    <PageShell
      nested
      title="Electrical Works"
      subtitle="Installations and maintenance support carried out with safety and code awareness as non-negotiables."
    >
      <ul className="max-w-3xl list-disc space-y-2 pl-5 text-zinc-600 dark:text-zinc-400">
        <li>Power distribution, lighting, and related low-voltage scopes as per project design.</li>
        <li>Testing, commissioning support, and handover documentation.</li>
        <li>Preventive maintenance programs for commercial and industrial clients where applicable.</li>
      </ul>
      <p className="mt-6 max-w-3xl text-sm text-zinc-500 dark:text-zinc-500">
        Replace this overview with your certifications, service territories, and representative
        projects when content is ready.
      </p>
    </PageShell>
  );
}
