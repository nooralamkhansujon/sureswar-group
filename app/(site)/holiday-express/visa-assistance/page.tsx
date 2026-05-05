import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Holiday Express — Visa Assistance",
  description: "Visa assistance from Holiday Express.",
};

export default function HolidayVisaPage() {
  return (
    <PageShell
      nested
      title="Visa Assistance"
      subtitle="Guidance on documentation and application steps—final decisions always rest with embassies and consulates."
    >
      <ul className="max-w-3xl list-disc space-y-2 pl-5 text-zinc-600 dark:text-zinc-400">
        <li>Checklists tailored to destination and traveler profile.</li>
        <li>Appointment planning support and form preparation where applicable.</li>
        <li>Coordination with travel insurance and ticketing timelines.</li>
      </ul>
      <p className="mt-6 max-w-3xl text-sm text-zinc-500">
        Publish your scope of service, fees (if any), and disclaimers here to set clear expectations.
      </p>
    </PageShell>
  );
}
