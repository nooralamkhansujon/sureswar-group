import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "News / Updates",
  description: "Latest news and updates from Sureswar Group.",
};

const placeholderUpdates = [
  {
    date: "—",
    title: "Site launch",
    body: "This website structure is live. Replace this block with dated announcements, PDFs, or press releases as they become available.",
  },
];

export default function NewsPage() {
  return (
    <PageShell
      title="News / Updates"
      subtitle="Announcements, milestones, and notices from across the group."
    >
      <ul className="space-y-8">
        {placeholderUpdates.map((item) => (
          <li
            key={item.title}
            className="border-b border-zinc-200 pb-8 last:border-0 dark:border-zinc-800"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{item.date}</p>
            <h2 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {item.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-zinc-600 dark:text-zinc-400">{item.body}</p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
