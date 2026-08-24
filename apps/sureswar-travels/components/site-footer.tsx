import Link from "next/link";
import { navSections } from "@/lib/navigation";
import { travelsContact } from "@/lib/travels-data";

export function SiteFooter() {
  return (
    <footer className="st-footer">
      <div className="footer-brand">
        <div className="logo-main">
          <span className="logo-sureswar">Sureswar</span>
          <span className="logo-travels">Travels</span>
        </div>
        <p>
          {travelsContact.addressLines.join(" · ")}
          <br />
          Phone {travelsContact.phone} · Cell {travelsContact.cell}
          <br />
          <a href={`mailto:${travelsContact.email}`}>{travelsContact.email}</a>
        </p>
      </div>
      <nav className="footer-links" aria-label="Footer">
        {navSections.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="footer-copy">
        © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Sureswar Travels. All rights reserved.
      </div>
    </footer>
  );
}
