"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { navSections } from "@/lib/navigation";

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
      <Link href="/" className="nav-logo" onClick={close}>
        <div className="hi">
          H
          <span className="hi-i-wrap">
            <span className="hi-i-dot" aria-hidden />
            {"ı"}
          </span>
          Care
        </div>
        <div className="sub">SERVICES LTD.</div>
        <div className="license-tag">Recruiting License # 2234</div>
      </Link>

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
        {navSections.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "page" : undefined}
                onClick={close}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href="/contact"
            className={`nav-cta${pathname === "/contact" ? " is-active" : ""}`}
            aria-current={pathname === "/contact" ? "page" : undefined}
            onClick={close}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
