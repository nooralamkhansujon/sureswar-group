import Link from "next/link";

export function SectionSubnav({
  baseLabel,
  items,
}: {
  baseLabel: string;
  items: { href: string; label: string }[];
}) {
  return (
    <nav
      className="mb-10 flex flex-wrap gap-2 border-b border-zinc-200 pb-4 dark:border-zinc-800"
      aria-label={`${baseLabel} sections`}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:border-brand-500 hover:text-brand-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-brand-500 dark:hover:text-brand-100"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
