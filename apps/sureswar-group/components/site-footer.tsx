import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { contact } from "@/lib/site-config";
import { isBranch, mainNav, type NavBranch, type NavLeaf } from "@/lib/navigation";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-companies", label: "Our Companies" },
  { href: "/news", label: "News / Updates" },
  { href: "/contact", label: "Contact" },
] as const;

const subfooterLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/news", label: "News" },
] as const;

function companiesBranch(): NavBranch | undefined {
  return mainNav.find((e): e is NavBranch => isBranch(e) && e.label === "Our Companies");
}

function FooterLink({ item }: { item: NavLeaf }) {
  const className =
    "transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/60";

  if (item.external) {
    return (
      <a className={className} href={item.href} target="_blank" rel="noopener noreferrer">
        {item.label}
      </a>
    );
  }

  return (
    <Link className={className} href={item.href}>
      {item.label}
    </Link>
  );
}

export function SiteFooter() {
  const companies = companiesBranch()?.children ?? [];

  return (
    <footer className="mt-auto border-t border-white/10 bg-[#060607] text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="group inline-flex max-w-full items-start gap-3 no-underline transition-transform hover:-translate-y-px"
            >
              <span className="relative mt-0.5 shrink-0 transition-opacity group-hover:opacity-100">
                <BrandMark />
              </span>
              <span className="min-w-0 leading-tight">
                <span className="flex flex-wrap items-baseline gap-x-1">
                  <span
                    className="text-base font-extrabold tracking-tight sm:text-lg"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #e94335 0%, #c5331f 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    SURESWAR
                  </span>
                  <span
                    className="text-base font-bold tracking-tight text-white sm:text-lg"
                    style={{
                      WebkitTextStroke: "1px #e94335",
                      paintOrder: "stroke fill",
                    }}
                  >
                    TRAVELS
                  </span>
                </span>
                <span className="mt-1 block text-[9px] font-semibold tracking-[0.32em] text-gold">
                  SURESWAR GROUP
                </span>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  A diversified business group committed to quality, integrity, and long-term
                  partnerships.
                </p>
              </span>
            </Link>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/90">Explore</p>
            <nav aria-label="Footer explore" className="mt-3">
              <ul className="space-y-2 text-sm">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/60"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
              Our companies
            </p>
            <nav aria-label="Footer companies" className="mt-3">
              <ul className="space-y-2 text-sm">
                {companies.map((item) => (
                  <li key={`${item.href}-${item.label}`}>
                    <FooterLink item={item} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/90">Contact</p>
            <address className="mt-3 not-italic">
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    className="transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/60"
                    href={`tel:${contact.phoneTel}`}
                  >
                    {contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/60"
                    href={`mailto:${contact.email}`}
                  >
                    {contact.email}
                  </a>
                </li>
                <li className="text-zinc-500">{contact.mapQuery}</li>
                <li>
                  <Link
                    className="transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/60"
                    href="/contact"
                  >
                    Inquiry form
                  </Link>
                </li>
              </ul>
            </address>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 bg-[#050506] px-0 py-6 sm:px-0">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-center text-xs text-zinc-600 sm:text-left">
              © {new Date().getFullYear()} Sureswar Group. All rights reserved.
            </p>
            <nav
              aria-label="Footer utilities"
              className="flex flex-wrap items-center justify-center gap-4 text-xs sm:justify-end"
            >
              {subfooterLinks.map((link) => (
                <Link
                  key={link.href}
                  className="text-zinc-500 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/60"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
