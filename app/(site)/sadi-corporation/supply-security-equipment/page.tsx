import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Sadi Corporation — Supply & Security Equipment",
  description: "Supply of security and related equipment by Sadi Corporation.",
};

export default function SadiSupplyPage() {
  return (
    <PageShell
      nested
      title="Supply & Security Equipment"
      subtitle="Sourcing and supply of equipment for security, access control, and related operational needs."
    >
      <ul className="max-w-3xl list-disc space-y-2 pl-5 text-zinc-600 dark:text-zinc-400">
        <li>Product selection support based on site requirements and integration constraints.</li>
        <li>Logistics, warranty coordination, and after-sales liaison with manufacturers where applicable.</li>
        <li>Bundling with installation scopes when projects call for a single accountable partner.</li>
      </ul>
    </PageShell>
  );
}
