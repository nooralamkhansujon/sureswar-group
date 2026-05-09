import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { externalUrls } from "@/lib/site-config";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Sureswar Group — Trusted excellence in travel, workforce solutions, contracting, and international trade since 1993.",
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
                — Sureswar Group —
              </p>

              <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
                Sureswar Group
              </h1>

              <p className="mx-auto mt-5 max-w-4xl text-base font-medium leading-snug text-white/95 sm:text-lg md:text-xl">
                <span className="font-display italic text-gold-bright">
                  Trusted Excellence in Travel, Workforce Solutions, Contracting & International Trade
                </span>
              </p>

              <div className="mx-auto mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-white/85 sm:text-base">
                <p>
                  Founded in 1993, Sureswar Group has evolved into a diversified international-standard
                  business organization with a strong presence across travel services, global manpower
                  solutions, contracting, supply chain operations, and international trade.
                </p>
                <p>
                  With more than three decades of operational excellence, the Group is built on a
                  foundation of integrity, service quality, and long-term strategic partnerships.
                  Today, Sureswar Group continues to expand its footprint by delivering reliable,
                  efficient, and scalable solutions across multiple industries, serving both domestic
                  and international markets.
                </p>
              </div>

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
                  Contact Corporate Office
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
                  A Multi-Sector Business Group{" "}
                  <span className="font-display italic font-medium">Built for Global Standards</span>
                </h3>
                <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
                  <p>
                    Sureswar Group is a diversified business conglomerate established in 1993,
                    operating across key sectors that support global mobility, workforce development,
                    commercial services, and international trade facilitation.
                  </p>
                  <p>
                    Over the years, the Group has developed a structured portfolio of specialized
                    business units, each focused on delivering excellence within its respective
                    industry. Our approach combines operational expertise, market understanding, and
                    client-centric service delivery to create sustainable value for individuals,
                    corporations, and institutional partners.
                  </p>
                </div>

                <div className="mt-10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#0a0a0b]">
                    Core Business Domains
                  </h4>
                  <ul className="mt-6 space-y-4">
                    {[
                      "Global Travel & Mobility Solutions",
                      "International Manpower Recruitment & Workforce Deployment",
                      "Civil & Electrical Contracting Services",
                      "Import, Export & Strategic Supply Chain Operations",
                      "Tourism, Hospitality & Holiday Experiences",
                    ].map((domain) => (
                      <li key={domain} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        {domain}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12 flex flex-wrap gap-6">
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
              A Diversified Portfolio of Specialized Enterprises
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {[
              {
                title: "Sureswar Travels",
                subtitle: "A Legacy of Trust in Global Travel Since 1993",
                description:
                  "Sureswar Travels is one of the founding pillars of Sureswar Group, with over three decades of proven expertise in delivering premium travel and pilgrimage solutions. Recognized for reliability and service consistency, the company serves individuals, families, corporate clients, and pilgrims with fully integrated travel management solutions.",
                services: [
                  "International & Domestic Air Ticketing",
                  "Corporate Travel & Business Mobility Solutions",
                  "Hajj & Umrah Travel Services",
                  "Global Visa Assistance & Processing Support",
                  "Luxury & Budget Holiday Packages",
                  "Hotel Reservations & Travel Coordination",
                  "Group Travel & Custom Tour Planning",
                ],
                valueProp:
                  "Delivering seamless travel experiences through efficiency, trust, and global connectivity.",
                href: externalUrls.sureswarTravels,
                cta: "Visit Website",
                external: true,
              },
              {
                title: "Sadi Corporation",
                subtitle: "Integrated Contracting, Procurement & Supply Solutions",
                description:
                  "Sadi Corporation operates as a strategic business unit within Sureswar Group, specializing in civil and electrical contracting, procurement solutions, import-export operations, and advanced security equipment supply. The company supports government, institutional, aviation, and private-sector projects with high-quality execution and supply reliability.",
                services: [
                  "Civil Construction & Infrastructure Works",
                  "Electrical & Electro-Mechanical Contracting",
                  "Government & Institutional Project Execution",
                  "Import & Export Facilitation Services",
                  "Industrial Procurement & Supply Chain Solutions",
                  "Specialized Security Systems & X-Ray Scanning",
                  "Access Control & Safety Equipment Solutions",
                ],
                valueProp:
                  "Sadi Corporation delivers dependable project execution through technical expertise, sourcing strength, and operational discipline.",
                href: "/sadi-corporation",
                cta: "Learn More",
                external: false,
              },
              {
                title: "HiCare Services Ltd.",
                subtitle: "Global Workforce Mobility & Talent Solutions Provider",
                description:
                  "HiCare Services Ltd. is a government-approved international recruitment and workforce solutions company dedicated to connecting global employers with skilled, semi-skilled, and general workforce talent from Bangladesh. Operating under strict compliance standards, HiCare ensures ethical recruitment practices and efficient manpower deployment across multiple industries worldwide.",
                services: [
                  "International Manpower Recruitment",
                  "Workforce Deployment & Mobilization",
                  "Skilled & Semi-Skilled Talent Placement",
                  "Candidate Screening & Trade Testing",
                  "Visa Processing & Documentation Support",
                  "Local Outsourcing & HR Solutions",
                ],
                industries: [
                  "Construction & Infrastructure",
                  "Hospitality & Service Industry",
                  "Manufacturing & Production",
                  "Logistics & Supply Chain",
                  "Technical & Skilled Trades",
                ],
                valueProp:
                  "Bridging opportunity and talent through structured, compliant, and efficient workforce solutions.",
                href: externalUrls.hiCareServices,
                cta: "Visit Website",
                external: true,
              },
              {
                title: "Holiday Express",
                subtitle: "Curated Travel & Lifestyle Experiences",
                description:
                  "Holiday Express is the leisure and holiday-focused travel brand of Sureswar Group, offering curated travel experiences designed for comfort, convenience, and memorable journeys.",
                services: [
                  "International & Domestic Holiday Packages",
                  "Family & Group Travel Planning",
                  "Honeymoon & Luxury Travel Experiences",
                  "Air Ticketing & Reservation Services",
                  "Hotel Booking & Travel Coordination",
                  "Tourist Visa Support & Guidance",
                ],
                valueProp:
                  "Delivering well-crafted travel experiences with attention to detail, affordability, and professional support.",
                href: "/holiday-express",
                cta: "Learn More",
                external: false,
              },
            ].map((company) => (
              <div
                key={company.title}
                className="group relative flex flex-col items-start rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl border border-gray-100"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0a0a0b] transition group-hover:text-gold">
                    {company.title}
                  </h3>
                  {"subtitle" in company && (
                    <p className="mt-1 text-sm font-semibold text-gold/80">
                      {company.subtitle}
                    </p>
                  )}
                  <p className="mt-4 text-base leading-relaxed text-gray-600">
                    {company.description}
                  </p>

                  {"services" in company && (
                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0a0a0b]">
                        Core Services
                      </h4>
                      <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {company.services.map((s) => (
                          <li key={s} className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="h-1 w-1 rounded-full bg-gold" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {"industries" in company && (
                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0a0a0b]">
                        Industry Coverage
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {company.industries.map((i) => (
                          <span
                            key={i}
                            className="rounded-full bg-gray-100 px-3 py-1 text-[10px] font-medium text-gray-600"
                          >
                            {i}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {"valueProp" in company && (
                    <div className="mt-6 border-l-2 border-gold/20 pl-4">
                      <p className="text-sm italic text-gray-500">
                        {company.valueProp}
                      </p>
                    </div>
                  )}
                </div>
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

      {/* ── WHY CHOOSE US ── */}
      <Box
        component="section"
        sx={{
          py: { xs: 12, sm: 16 },
          px: { xs: 3, lg: 4 },
          bgcolor: "#0f3d3e",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* subtle glow blobs */}
        <Box sx={{ position: "absolute", top: -80, left: -80, width: 360, height: 360, borderRadius: "50%", bgcolor: "#d4af3714", filter: "blur(80px)", pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", bottom: -60, right: -60, width: 280, height: 280, borderRadius: "50%", bgcolor: "#1a7a7d22", filter: "blur(60px)", pointerEvents: "none" }} />

        <Box sx={{ mx: "auto", maxWidth: "72rem", position: "relative" }}>
          {/* heading */}
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="overline"
              sx={{ color: "#d4af37", letterSpacing: "0.25em", fontWeight: 600 }}
            >
              Why Sureswar Group
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mt: 1.5,
                fontSize: { xs: "1.75rem", sm: "2.5rem" },
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              A Trusted Multi-Sector Business Platform
            </Typography>
          </Box>

          {/* feature grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
              gap: 3,
            }}
          >
            {[
              { icon: "📜", text: "Established Business Legacy Since 1993" },
              { icon: "🏭", text: "Multi-Industry Operational Expertise" },
              { icon: "🌐", text: "International-Standard Service Delivery" },
              { icon: "🤝", text: "Strong Client & Partner Relationships" },
              { icon: "⚖️", text: "Ethical & Transparent Business Practices" },
              { icon: "📈", text: "Scalable Growth-Oriented Structure" },
            ].map((item) => (
              <Box
                key={item.text}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  p: 3,
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.08)",
                  bgcolor: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.08)",
                    borderColor: "#d4af3740",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Typography sx={{ fontSize: "1.5rem", lineHeight: 1, flexShrink: 0 }}>
                  {item.icon}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.88)",
                    fontWeight: 500,
                    lineHeight: 1.5,
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── CORPORATE VISION ── */}
      <Box
        component="section"
        sx={{
          py: { xs: 12, sm: 16 },
          px: { xs: 3, lg: 4 },
          bgcolor: "#ffffff",
          textAlign: "center",
        }}
      >
        <Box sx={{ mx: "auto", maxWidth: "48rem" }}>
          <Typography
            variant="overline"
            sx={{ color: "#d4af37", letterSpacing: "0.25em", fontWeight: 700 }}
          >
            Corporate Vision
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mt: 2,
              fontSize: { xs: "1.75rem", sm: "2.5rem" },
              fontWeight: 800,
              color: "#0a0a0b",
              lineHeight: 1.2,
            }}
          >
            Driving Global Opportunities Through Integrated Solutions
          </Typography>
          <Typography
            sx={{
              mt: 4,
              fontSize: { xs: "1rem", sm: "1.125rem" },
              color: "text.secondary",
              lineHeight: 1.8,
            }}
          >
            Sureswar Group is committed to expanding its global footprint by strengthening existing
            operations, enhancing service capabilities, and building sustainable partnerships across
            international markets.
          </Typography>
        </Box>
      </Box>

      {/* ── CALL TO ACTION ── */}
      <Box
        component="section"
        sx={{
          py: { xs: 12, sm: 16 },
          px: { xs: 3, lg: 4 },
          background: "linear-gradient(135deg, #d4af37 0%, #eab308 50%, #d4af37 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* decorative rings */}
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", border: "1px solid rgba(0,0,0,0.06)", pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 900, height: 900, borderRadius: "50%", border: "1px solid rgba(0,0,0,0.04)", pointerEvents: "none" }} />

        <Box sx={{ mx: "auto", maxWidth: "48rem", textAlign: "center", position: "relative" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 800,
              color: "#0a0a0b",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Connect With a Trusted Global Business Group
          </Typography>
          <Typography
            sx={{
              mt: 3,
              fontSize: { xs: "1rem", sm: "1.125rem" },
              color: "rgba(10,10,11,0.75)",
              lineHeight: 1.7,
              maxWidth: "40rem",
              mx: "auto",
            }}
          >
            From travel and workforce solutions to contracting and trade services, Sureswar Group
            delivers structured, reliable, and professional solutions designed for long-term
            success.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 5, justifyContent: "center" }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#0a0a0b] px-10 py-4 text-[0.9rem] font-bold uppercase tracking-[0.05em] text-gold shadow-lg transition hover:bg-[#0f3d3e] hover:text-white"
            >
              Contact Corporate Office
            </Link>
            <Link
              href="/our-companies"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/10 px-10 py-4 text-[0.9rem] font-bold uppercase tracking-[0.05em] text-black shadow-sm transition hover:bg-black/5"
            >
              Explore Our Companies
            </Link>
          </Stack>
        </Box>
      </Box>

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
