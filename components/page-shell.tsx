import type { ReactNode } from "react";

export function PageShell({
  title,
  subtitle,
  children,
  nested,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  /** Use inside a parent layout that already applies max-width and padding. */
  nested?: boolean;
}) {
  const inner = (
    <>
      <header className="mb-10 max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">{subtitle}</p>
        ) : null}
      </header>
      {children}
    </>
  );
  if (nested) return inner;
  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28">
      {inner}
    </div>
  );
}

export function ProseSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-zinc-200 pt-10 first:border-t-0 first:pt-0 dark:border-zinc-800">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{title}</h2>
      <div className="mt-4 max-w-3xl space-y-4 text-zinc-600 dark:text-zinc-400">{children}</div>
    </section>
  );
}
