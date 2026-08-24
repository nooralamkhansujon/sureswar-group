import type { Metadata } from "next";
import Link from "next/link";
import { hajjUmrahHighlights } from "@/lib/travels-data";

export const metadata: Metadata = {
  title: "Hajj & Umrah",
  description:
    "Complete Hajj & Umrah packages from Sureswar Travels — visa processing, accommodation, ground transport, and guided support in the holy cities.",
};

export default function HajjUmrahPage() {
  return (
    <main>
      <section className="st-section hajj">
        <div className="section-grid section-grid--reverse">
          <div className="hajj-visual">
            <img
              src="https://images.unsplash.com/photo-1591604129939-f1efa5568a62?auto=format&fit=crop&w=1200&q=80"
              alt="Pilgrimage travel"
              width={600}
              height={450}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <span className="section-label">Hajj &amp; Umrah</span>
            <h2 className="section-title">
              Sacred journeys, <span>expertly managed</span>
            </h2>
            <p className="section-desc">
              Our pilgrimage division combines decades of experience with transparent packages and dedicated
              on-ground support in Saudi Arabia.
            </p>
            <ul className="check-list">
              {hajjUmrahHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="btn-primary btn-primary--inline" href="/contact">
              Request a package quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
