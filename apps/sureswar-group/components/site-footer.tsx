import Link from "next/link";
import { contact } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#060607] text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold text-gold">Sureswar Group</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              A diversified business group committed to quality, integrity, and long-term
              partnerships.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/90">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="transition hover:text-gold" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-gold" href="/our-companies">
                  Our Companies
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-gold" href="/news">
                  News / Updates
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/90">Business units</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="transition hover:text-gold" href="/sadi-corporation">
                  Sadi Corporation
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-gold" href="/holiday-express">
                  Holiday Express
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/90">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="transition hover:text-gold" href={`tel:${contact.phoneTel}`}>
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a className="transition hover:text-gold" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </li>
              <li>
                <Link className="transition hover:text-gold" href="/contact">
                  Inquiry form
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} Sureswar Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
