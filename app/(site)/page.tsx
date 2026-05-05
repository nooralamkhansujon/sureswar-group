import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { externalUrls } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Sureswar Group — diversified businesses in Bangladesh: travel, recruitment, contracting, engineering support, supply, and international services.",
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=2400&q=80";

function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10 2h4a2 2 0 012 2v2h3a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h3V4a2 2 0 012-2zm0 4h4V4h-4v2z"
        fill="currentColor"
      />
    </svg>
  );
}

function OrbitIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2a10 10 0 0110 10M12 22a10 10 0 01-10-10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M4.5 8.5l2 1M17.5 14.5l2 1M8.5 4.5l1 2M14.5 17.5l1 2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative flex min-h-screen flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          role="presentation"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-[#0a0a0b]/70 to-[#0a0a0b]/92"
          role="presentation"
        />

        <div className="relative z-10 flex flex-1 flex-col px-4 pb-6 pt-28 sm:px-6 sm:pt-32">
          <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center text-center">
            <div className="flex w-full max-w-4xl justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.35em] text-white/80 sm:text-[11px]">
              <span>Sureswar Group</span>
              <span>Bangladesh · Corporate</span>
            </div>

            <div className="mt-16 flex flex-1 flex-col justify-center sm:mt-20">
              <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-gold sm:text-xs">
                — Premium corporate group —
              </p>

              <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
                Sureswar Group
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-snug text-white/95 sm:text-lg md:text-xl">
                <span className="font-display italic text-gold-bright">
                  Trusted businesses in travel, recruitment, contracting &amp; global solutions
                </span>
              </p>

              <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
                Sureswar Group is a diversified business group in Bangladesh with interests in travel
                services, manpower recruitment, contracting, engineering support, supply solutions,
                and international business services. We are committed to professionalism, trust, and
                long-term value creation.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-6">
                <Link
                  href="/our-companies"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-[#0a0a0b] shadow-lg shadow-black/30 transition hover:bg-gold-bright"
                >
                  Explore Our Companies
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-gold/60 hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <a
              href="#ventures"
              className="mt-10 flex flex-col items-center gap-2 text-[10px] font-medium uppercase tracking-[0.35em] text-white/60 transition hover:text-gold sm:mt-14"
            >
              <span className="[writing-mode:vertical-rl] rotate-180">Scroll</span>
              <span className="text-lg leading-none text-gold" aria-hidden>
                ↓
              </span>
            </a>
          </div>

          <div
            id="ventures"
            className="relative z-10 mx-auto mt-auto w-full max-w-6xl border-t border-white/10 bg-black/35 px-4 py-8 backdrop-blur-md sm:px-6"
          >
            <div className="grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/15">
              <FeatureColumn
                index="01"
                icon={<PlaneIcon className="text-gold" />}
                title="Sureswar Travels"
                subtitle="Air ticketing · Visa · Curated tours"
                href={externalUrls.sureswarTravels}
                external
              />
              <FeatureColumn
                index="02"
                icon={<BriefcaseIcon className="text-gold" />}
                title="Hi-Care"
                subtitle="Overseas recruitment · Placement"
                href={externalUrls.hiCareServices}
                external
              />
              <FeatureColumn
                index="03"
                icon={<OrbitIcon className="text-gold" />}
                title="Group Advisory"
                subtitle="Cross-border consulting · Mobility"
                href="/our-companies"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-72 w-72 bg-gold/5 rounded-full blur-3xl" />
              <div className="relative">
                <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
                  About Sureswar Group
                </h2>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-[#0a0a0b] sm:text-5xl lg:leading-tight">
                  A Legacy of{" "}
                  <span className="font-display italic font-medium">Service and Growth</span>
                </h3>
                <p className="mt-8 text-lg leading-relaxed text-gray-600">
                  With decades of business experience through our group companies, Sureswar Group
                  continues to serve individuals, businesses, and institutions through specialized
                  services across multiple sectors.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Our focus is to deliver reliable solutions while maintaining strong customer
                  relationships and ethical business standards.
                </p>
                <div className="mt-10 flex flex-wrap gap-6">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-full bg-[#0a0a0b] px-8 py-3 text-sm font-semibold text-white transition hover:bg-gold hover:text-[#0a0a0b]"
                  >
                    Our History
                  </Link>
                  <Link
                    href="/our-companies"
                    className="inline-flex items-center justify-center text-sm font-semibold leading-6 text-[#0a0a0b] transition hover:text-gold"
                  >
                    Explore Ventures <span className="ml-2" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                  alt="Corporate growth and excellence"
                  className="h-full w-full object-cover grayscale-[0.2] transition duration-700 hover:scale-105 hover:grayscale-0"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-2xl bg-gold/10 backdrop-blur-3xl" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
              Our Companies
            </h2>
            <p className="mt-4 text-3xl font-bold tracking-tight text-[#0a0a0b] sm:text-5xl">
              Our Business Units
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {[
              {
                title: "Sureswar Travels",
                description:
                  "Established in 1993, providing air ticketing, Hajj & Umrah services, visa assistance, holiday packages, and travel support.",
                href: externalUrls.sureswarTravels,
                cta: "Visit Website",
                external: true,
              },
              {
                title: "Sadi Corporation",
                description:
                  "Providing contracting, engineering support, supply solutions, import-export services, and security equipment solutions.",
                href: "/our-companies/sadi-corporation",
                cta: "Learn More",
                external: false,
              },
              {
                title: "HiCare Services Ltd.",
                description:
                  "Government-approved manpower recruitment and workforce solutions for overseas and local employment support.",
                href: externalUrls.hiCareServices,
                cta: "Visit Website",
                external: true,
              },
              {
                title: "Holiday Express",
                description:
                  "Travel support company offering air ticketing, tour packages, visa assistance, and customer travel solutions.",
                href: "/our-companies/holiday-express",
                cta: "Learn More",
                external: false,
              },
            ].map((company) => (
              <div
                key={company.title}
                className="group relative flex flex-col items-start rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-[#0a0a0b] transition group-hover:text-gold">
                  {company.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">{company.description}</p>
                <div className="mt-8">
                  {company.external ? (
                    <a
                      href={company.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold uppercase tracking-wider text-gold transition hover:text-gold-bright"
                    >
                      [ {company.cta} ]
                    </a>
                  ) : (
                    <Link
                      href={company.href}
                      className="text-sm font-bold uppercase tracking-wider text-gold transition hover:text-gold-bright"
                    >
                      [ {company.cta} ]
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureColumn({
  index,
  icon,
  title,
  subtitle,
  href,
  external,
}: {
  index: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  href: string;
  external?: boolean;
}) {
  const className =
    "flex flex-col items-center gap-3 px-4 text-center sm:items-start sm:px-8 sm:text-left";

  const inner = (
    <>
      <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:items-start">
        <span className="text-sm font-semibold text-gold">{index}</span>
        <span className="text-gold sm:ml-1">{icon}</span>
      </div>
      <div>
        <p className="text-base font-semibold text-white">{title}</p>
        <p className="mt-1 text-xs leading-relaxed text-white/55">{subtitle}</p>
      </div>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} rounded-lg transition hover:bg-white/5 sm:px-6`}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={`${className} rounded-lg transition hover:bg-white/5 sm:px-6`}>
      {inner}
    </Link>
  );
}
