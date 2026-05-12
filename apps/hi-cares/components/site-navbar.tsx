"use client";

import { useCallback, useEffect, useState } from "react";

import { navSections } from "@/lib/navigation";

/** Native anchors avoid Next.js `Link` normalizing hash hrefs (SSR vs client mismatch). */
export function SiteNavbar() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="hicare-nav" aria-label="Primary">
      <a href="/#top" className="nav-logo" onClick={close}>
        <div className="hi">
          H
          <span className="hi-i-wrap">
            <span className="hi-i-dot" aria-hidden />
            {"\u0131"}
          </span>
          Care
        </div>
        <div className="sub">SERVICES LTD.</div>
        <div className="license-tag">Recruiting License # 2234</div>
      </a>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="hicare-nav-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        )}
      </button>

      <ul id="hicare-nav-menu" className={open ? "is-open" : undefined}>
        {navSections.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={close}>
              {item.name}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta" onClick={close}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
