import type { Metadata } from "next";
import { tourPackages } from "@/lib/travels-data";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Browse Sureswar Travels' holiday packages — domestic getaways and international escapes with custom itineraries available on request.",
};

export default function PackagesPage() {
  return (
    <main>
      <section className="st-section packages">
        <span className="section-label">Tour packages</span>
        <h2 className="section-title">
          Featured <span>holiday packages</span>
        </h2>
        <p className="section-desc section-desc--center">
          Domestic getaways and international escapes — custom itineraries available on request.
        </p>
        <div className="packages-grid">
          {tourPackages.map((pkg) => (
            <article className="package-card" key={pkg.name}>
              <div className="package-image">
                <img src={pkg.image} alt={pkg.name} width={400} height={240} loading="lazy" decoding="async" />
                <span className={`package-tag package-tag--${pkg.category.toLowerCase()}`}>{pkg.category}</span>
              </div>
              <div className="package-body">
                <h3>{pkg.name}</h3>
                <p className="package-meta">
                  {pkg.location} · {pkg.duration}
                </p>
                <p className="package-price">{pkg.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
