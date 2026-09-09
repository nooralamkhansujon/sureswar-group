import Link from "next/link";
import { FacebookSocialLink } from "@/components/facebook-social-link";
import { WhatsAppSocialLink } from "@/components/whatsapp-social-link";
import { BrandMark } from "@/components/brand-mark";
import { contact } from "@/lib/site-config";
import { isBranch, mainNav, type NavBranch, type NavLeaf } from "@/lib/navigation";
import Typography from "@mui/material/Typography";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/our-companies", label: "Our Companies" },
  { href: "/news", label: "News & Updates" },
  { href: "/contact", label: "Contact" },
] as const;

const legalLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/news", label: "News" },
] as const;

function companiesBranch(): NavBranch | undefined {
  return mainNav.find((e): e is NavBranch => isBranch(e) && e.label === "Our Companies");
}

function FooterLink({ item }: { item: NavLeaf }) {
  const cls =
    "text-sm text-white/60 hover:text-white transition-colors duration-200";
  if (item.external) {
    return (
      <a className={cls} href={item.href} target="_blank" rel="noopener noreferrer">
        {item.label}
      </a>
    );
  }
  return (
    <Link className={cls} href={item.href}>
      {item.label}
    </Link>
  );
}

export function SiteFooter() {
  const companies = companiesBranch()?.children ?? [];
  const year = new Date().getFullYear();

  const COLORS = {
    coral: "#e94335",
    surface: "#0a0a0b",
    surface2: "#141416",
  } as const;

  const CORAL_GRADIENT = `linear-gradient(135deg, ${COLORS.coral} 0%, #c5331f 100%)`;

  return (
    <footer
      style={{ background: "linear-gradient(160deg, #3b0764 0%, #4A148C 40%, #6A1B75 100%)" }}
      className="mt-auto text-white"
    >
      {/* Top accent line */}
      <div
        style={{ background: "linear-gradient(90deg, #8E24AA, #e94335, #6A1B75)" }}
        className="h-[3px] w-full opacity-80"
      />

      {/* Main footer content */}
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 no-underline"
            >
              <span className="shrink-0 transition-opacity group-hover:opacity-90">
                <BrandMark size={48} />
              </span>
              <span className="leading-tight">
                {/*<span*/}
                {/*  className="block text-lg font-extrabold tracking-tight text-white"*/}
                {/*>*/}
                   <Typography
                       component="span"
                       sx={{
                         fontSize: { xs: 16, sm: 18 },
                         fontWeight: 800,
                         letterSpacing: "-0.01em",
                         background: CORAL_GRADIENT,
                         WebkitBackgroundClip: "text",
                         WebkitTextFillColor: "transparent",
                         backgroundClip: "text",
                       }}
                   >
                  SURESWAR
                </Typography>
                <Typography
                    component="span"
                    sx={{
                      ml: 0.5,
                      fontSize: { xs: 16, sm: 18 },
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                      color: "#fff",
                      WebkitTextStroke: `1px ${COLORS.coral}`,
                      paintOrder: "stroke fill",
                    }}
                >
                  GROUP
                </Typography>
                  {/*SURESWAR*/}
                  {/*<span className="ml-1 font-bold opacity-80">GROUP</span>*/}
                {/*</span>*/}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              A diversified business group committed to quality, integrity, and
              long-term partnerships.
            </p>
            <address className="mt-5 not-italic space-y-1.5 text-sm text-white/55">
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="hover:text-white transition-colors"
                >
                  {contact.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contact.email}
                </a>
              </p>
            </address>
            <div className="mt-5 flex gap-2">
              <FacebookSocialLink className="h-10 w-10 border border-white/20 bg-white/10 hover:border-white/40 hover:bg-white/20" />
              <WhatsAppSocialLink className="h-10 w-10" />
            </div>
          </div>

          {/* Explore column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Explore
            </p>
            <nav aria-label="Footer explore" className="mt-4">
              <ul className="space-y-2.5">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Companies column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Our Companies
            </p>
            <nav aria-label="Footer companies" className="mt-4">
              <ul className="space-y-2.5">
                {companies.map((item) => (
                  <li key={`${item.href}-${item.label}`}>
                    <FooterLink item={item} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact / CTA column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Get in Touch
            </p>
            <div className="mt-4 space-y-3">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:border-white/40"
              >
                Send an Enquiry
              </Link>
              <a
                href={`tel:${contact.phoneTel}`}
                className="inline-flex w-full items-center justify-center rounded-lg border border-white/10 px-4 py-2.5 text-sm text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-white/35">
            © {year} Sureswar Group. All rights reserved.
          </p>
          <nav
            aria-label="Footer legal"
            className="flex items-center gap-5"
          >
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/40 transition-colors hover:text-white/70"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
