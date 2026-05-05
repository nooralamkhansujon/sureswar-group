import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Holiday Express — Tour Packages",
  description: "Tour packages from Holiday Express.",
};

export default function HolidayToursPage() {
  return (
    <PageShell
      nested
      title="Tour Packages"
      subtitle="Curated itineraries you can adapt—replace this page with real routes, seasons, and pricing tables."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {["Domestic highlights", "Regional getaways", "Custom group travel", "Corporate retreats"].map(
          (name) => (
            <div
              key={name}
              className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">{name}</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Placeholder card—add duration, destinations, and booking CTA.
              </p>
            </div>
          ),
        )}
      </div>
    </PageShell>
  );
}
