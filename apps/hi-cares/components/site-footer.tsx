import Link from "next/link";
import { navSections } from "@/lib/navigation";
import { hicareContact } from "@/lib/hicare-data";

function LogoWord({ className }: { className?: string }) {
  return (
    <span className={className}>
      H
      <span className="hi-i-wrap">
        <span className="hi-i-dot" aria-hidden />
        {"ı"}
      </span>
      Care
    </span>
  );
}

export function SiteFooter() {
  return (
    <>
      <div className="footer-sky">
        <div className="fs-logo">
          <LogoWord className="fs-logotype" />
          <span className="fs-sub">SERVICES LTD.</span>
        </div>
        <p className="fs-contact">
          {hicareContact.addressLines.join(" · ")}
          <br />
          Phone {hicareContact.phone} · Cell {hicareContact.cell}
          <br />
          <a href={`mailto:${hicareContact.email}`}>{hicareContact.email}</a>
          <br />
          <a href={hicareContact.web}>{hicareContact.web.replace(/^https?:\/\//, "")}</a>
        </p>
      </div>

      <footer className="hicare-footer">
        <div className="f-logo">
          <LogoWord className="f-logotype" />
          <span className="f-logo-sub">SERVICES LTD.</span>
        </div>
        <nav className="f-links" aria-label="Footer">
          {navSections.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.name}
            </Link>
          ))}
          <Link href="/contact">Contact</Link>
        </nav>
        <div>
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> HiCare Services Ltd. All rights reserved.
        </div>
      </footer>
    </>
  );
}
