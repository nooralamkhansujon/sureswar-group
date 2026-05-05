import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { externalUrls } from "@/lib/site-config";

export const metadata = {
  title: "Our Companies",
  description: "Companies under Sureswar Group.",
};

const companies = [
  {
    name: "Sureswar Travels",
    description: "Travel services and related offerings.",
    href: externalUrls.sureswarTravels,
    external: true,
  },
  {
    name: "Sadi Corporation",
    description: "Contracting, electrical works, supply, and security equipment.",
    href: "/sadi-corporation",
    external: false,
  },
  {
    name: "HiCare Services Ltd.",
    description: "Care and service operations.",
    href: externalUrls.hiCareServices,
    external: true,
  },
  {
    name: "Holiday Express",
    description: "Tour packages, visa assistance, and travel support.",
    href: "/holiday-express",
    external: false,
  },
] as const;

export default function OurCompaniesPage() {
  return (
    <PageShell
      title="Our Companies"
      subtitle="Each company operates with its own focus while sharing the group’s standards for quality and accountability."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {companies.map((c) => (
          <article
            key={c.name}
            className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/40"
          >
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{c.name}</h2>
            <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">{c.description}</p>
            {c.external ? (
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-sm font-medium text-brand-700 hover:underline dark:text-brand-100"
              >
                Visit website ↗
              </a>
            ) : (
              <Link
                href={c.href}
                className="mt-6 inline-flex text-sm font-medium text-brand-700 hover:underline dark:text-brand-100"
              >
                View section →
              </Link>
            )}
          </article>
        ))}
      </div>
    </PageShell>
  );
}
