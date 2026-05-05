"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { contact } from "@/lib/site-config";
import { isBranch, mainNav, type NavEntry, type NavLeaf } from "@/lib/navigation";

function topNavLabel(entry: NavEntry): string {
  return "headerLabel" in entry && entry.headerLabel ? entry.headerLabel : entry.label;
}

function NavLink({
  item,
  onNavigate,
  variant,
}: {
  item: NavLeaf;
  onNavigate?: () => void;
  variant: "bar" | "menu";
}) {
  const pathname = usePathname();
  const display = item.headerLabel ?? item.label;
  const active =
    !item.external &&
    (item.href === "/"
      ? pathname === "/"
      : pathname === item.href.split("#")[0]);

  const barBase =
    "rounded-sm px-2 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors xl:px-2.5 " +
    (active
      ? "text-gold"
      : "text-white/90 hover:text-white");

  const barActive = active ? " relative after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-gold" : "";

  const menuBase =
    "block rounded-md px-3 py-2 text-sm transition-colors text-white/90 hover:bg-white/10";

  const menuActive = active ? "bg-white/10 text-gold" : "";

  if (item.external) {
    return (
      <a
        href={item.href}
        className={`${variant === "bar" ? barBase + barActive : menuBase} ${variant === "menu" ? menuActive : ""}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
      >
        {variant === "bar" ? display : item.label}
        <span className={variant === "bar" ? "ml-0.5 text-[10px] text-white/50" : "ml-1 text-xs text-white/40"} aria-hidden>
          ↗
        </span>
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      className={`${variant === "bar" ? barBase + barActive : menuBase + " " + menuActive}`}
      onClick={onNavigate}
    >
      {variant === "bar" ? display : item.label}
    </Link>
  );
}

function DesktopDropdown({ entry }: { entry: Extract<NavEntry, { children: NavLeaf[] }> }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const label = topNavLabel(entry);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className={
          "flex items-center gap-0.5 rounded-sm px-2 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/90 transition-colors hover:text-white xl:px-2.5 " +
          (open ? "text-gold" : "")
        }
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <span className="text-[9px] opacity-70" aria-hidden>
          ▾
        </span>
      </button>
      {open ? (
        <div
          className="absolute left-0 top-full z-50 mt-2 min-w-[15rem] rounded-lg border border-white/10 bg-[#141416] py-1 shadow-xl"
          role="menu"
        >
          {entry.children.map((child) => (
            <div key={child.href + child.label} className="px-1 py-0.5" role="none">
              <NavLink item={child} onNavigate={() => setOpen(false)} variant="menu" />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MobileSection({
  entry,
  onNavigate,
}: {
  entry: Extract<NavEntry, { children: NavLeaf[] }>;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        className="flex w-full items-center justify-between px-4 py-3 text-left text-xs font-medium uppercase tracking-[0.2em] text-white/90"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
      >
        {topNavLabel(entry)}
        <span className="text-xs text-gold">{expanded ? "▴" : "▾"}</span>
      </button>
      {expanded ? (
        <div className="flex flex-col gap-1 px-2 pb-3">
          {entry.children.map((child) => (
            <NavLink key={child.href + child.label} item={child} onNavigate={onNavigate} variant="menu" />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    function onScroll() {
      setScrolled(window.scrollY > 32);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const headerSurface =
    isHome && !scrolled
      ? "border-transparent bg-transparent"
      : "border-b border-white/10 bg-[#0a0a0b]/92 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md";

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${headerSurface}`}>
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-6 lg:gap-6">
        <Link href="/" className="group flex shrink-0 items-baseline">
          <span className="text-base font-bold tracking-tight text-coral transition group-hover:text-coral sm:text-lg">
            SURESWAR
          </span>
          <span
            className="ml-1 text-base font-semibold tracking-tight text-white sm:text-lg"
            style={{
              WebkitTextStroke: "1px #e94335",
              paintOrder: "stroke fill",
            }}
          >
            TRAVELS
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1" aria-label="Main">
          {mainNav.map((entry) =>
            isBranch(entry) ? (
              <DesktopDropdown key={entry.label} entry={entry} />
            ) : (
              <NavLink key={entry.href} item={entry} variant="bar" />
            ),
          )}
        </nav>

        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <a
            href={`tel:${contact.phoneTel}`}
            className="flex items-center gap-2 text-[12px] font-medium tracking-wide text-white/90 transition hover:text-white"
          >
            <PhoneIcon className="text-gold" />
            <span className="whitespace-nowrap">{contact.phoneDisplay}</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:border-gold hover:text-gold"
          >
            Enquire
            <ArrowUpRight className="text-gold" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="text-2xl leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-16 z-40 overflow-y-auto bg-[#0a0a0b] pb-24 lg:hidden"
        >
          <div className="border-b border-white/10 px-4 py-4">
            <a
              href={`tel:${contact.phoneTel}`}
              className="flex items-center gap-2 text-sm text-white/90"
              onClick={() => setMenuOpen(false)}
            >
              <PhoneIcon className="text-gold" />
              {contact.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/70 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white"
              onClick={() => setMenuOpen(false)}
            >
              Enquire
              <ArrowUpRight className="text-gold" />
            </Link>
          </div>
          <div className="flex flex-col pt-2">
            {mainNav.map((entry) =>
              isBranch(entry) ? (
                <MobileSection
                  key={entry.label}
                  entry={entry}
                  onNavigate={() => setMenuOpen(false)}
                />
              ) : (
                <div key={entry.href} className="border-b border-white/10 px-2 py-2">
                  <NavLink item={entry} onNavigate={() => setMenuOpen(false)} variant="bar" />
                </div>
              ),
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
