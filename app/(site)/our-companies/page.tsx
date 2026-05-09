import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { externalUrls } from "@/lib/site-config";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";

export const metadata = {
  title: "Our Companies",
  description: "Companies under Sureswar Group.",
};

const companies = [
  {
    name: "Sureswar Travels",
    description: "Established in 1993, providing air ticketing, Hajj & Umrah services, and holiday packages.",
    href: externalUrls.sureswarTravels,
    external: true,
  },
  {
    name: "Sadi Corporation",
    description: "Contracting, engineering support, supply solutions, and security equipment.",
    href: "/sadi-corporation",
    external: false,
  },
  {
    name: "HiCare Services Ltd.",
    description: "Government-approved manpower recruitment and workforce solutions.",
    href: externalUrls.hiCareServices,
    external: true,
  },
  {
    name: "Holiday Express",
    description: "Tour packages, visa assistance, and specialized travel support.",
    href: "/holiday-express",
    external: false,
  },
] as const;

export default function OurCompaniesPage() {
  return (
    <PageShell
      title="Our Companies"
      subtitle="Each company operates with its own focus while sharing the group’s standards for quality and accountability."
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 4,
        }}
      >
        {companies.map((c) => (
          <Card
            key={c.name}
            variant="outlined"
            sx={{
              height: "100%",
              borderRadius: 4,
              display: "flex",
              flexDirection: "column",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                borderColor: "primary.main",
                transform: "translateY(-4px)",
                boxShadow: "0 12px 24px -10px rgba(26, 122, 125, 0.15)",
              },
            }}
          >
            <CardContent sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, color: "text.primary", mb: 2, letterSpacing: "-0.01em" }}
              >
                {c.name}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, flexGrow: 1, lineHeight: 1.6 }}>
                {c.description}
              </Typography>
              
              <Box sx={{ mt: "auto" }}>
                {c.external ? (
                  <Link
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[0.875rem] font-bold uppercase tracking-[0.05em] text-[#155f61] no-underline hover:text-[#0f3d3e] hover:underline"
                  >
                    Visit website ↗
                  </Link>
                ) : (
                  <Link
                    href={c.href}
                    className="inline-flex items-center text-[0.875rem] font-bold uppercase tracking-[0.05em] text-[#155f61] no-underline hover:text-[#0f3d3e] hover:underline"
                  >
                    View section →
                  </Link>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </PageShell>
  );
}
