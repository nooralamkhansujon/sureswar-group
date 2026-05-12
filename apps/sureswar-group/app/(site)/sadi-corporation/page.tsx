import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "@/lib/site-config";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SecurityIcon from "@mui/icons-material/Security";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MuiLink from "@mui/material/Link";

export const metadata: Metadata = {
  title: "Sadi Corporation — Integrated Contracting & Supply",
  description:
    "Specializing in civil and electrical contracting, procurement solutions, and advanced security equipment supply under Sureswar Group.",
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=2400&q=80";

export default function SadiCorporationPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          position: "relative",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          color: "white",
          pt: { xs: 12, sm: 16 },
          pb: { xs: 8, sm: 12 },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              bgcolor: "rgba(10, 10, 11, 0.75)",
              backgroundImage:
                "linear-gradient(to bottom, rgba(10, 10, 11, 0.8), rgba(10, 10, 11, 0.6))",
            },
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: "800px" }}>
            <Typography
              variant="overline"
              sx={{
                color: "#d4af37",
                fontWeight: 700,
                letterSpacing: "0.2em",
                mb: 2,
                display: "block",
              }}
            >
              A Division of Sureswar Group
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 3,
                letterSpacing: "-0.02em",
              }}
            >
              Sadi Corporation
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.9)",
                mb: 4,
                maxWidth: "600px",
                lineHeight: 1.5,
              }}
            >
              Engineering-minded contracting and supply services delivered with technical precision
              and operational discipline.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <MuiLink
                href="#contracting-services"
                sx={{
                  bgcolor: "#d4af37",
                  color: "#0a0a0b",
                  px: 4,
                  py: 1.5,
                  borderRadius: "100px",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  transition: "all 0.2s",
                  "&:hover": { bgcolor: "#eab308", transform: "translateY(-2px)" },
                }}
              >
                Our Services <ArrowForwardIcon fontSize="small" />
              </MuiLink>
              <MuiLink
                href="#contact"
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  borderRadius: "100px",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  transition: "all 0.2s",
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)", borderColor: "white" },
                }}
              >
                Contact Team
              </MuiLink>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Overview Section */}
      <Box component="section" sx={{ py: { xs: 10, sm: 14 }, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="overline"
                sx={{ color: "#d4af37", fontWeight: 700, letterSpacing: "0.1em" }}
              >
                Overview
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem" },
                  fontWeight: 700,
                  mt: 1,
                  mb: 3,
                  color: "#0a0a0b",
                }}
              >
                Disciplined Execution, <br />
                <span style={{ color: "#d4af37", fontStyle: "italic" }}>Reliable Partnerships</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", fontSize: "1.125rem", lineHeight: 1.8, mb: 3 }}
              >
                Sadi Corporation supports clients that need reliable field execution—whether that
                means structured contracting, electrical installations, or sourcing security and
                related equipment.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", fontSize: "1.125rem", lineHeight: 1.8 }}
              >
                Operating as a strategic business unit within Sureswar Group, we bring over three
                decades of corporate legacy to every project. Our approach is built on
                accountability, technical expertise, and a deep understanding of institutional and
                private-sector requirements.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -20,
                    right: -20,
                    width: "100%",
                    height: "100%",
                    border: "2px solid #d4af37",
                    borderRadius: 4,
                    zIndex: 0,
                  },
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                  alt="Engineering excellence"
                  sx={{
                    width: "100%",
                    borderRadius: 4,
                    position: "relative",
                    zIndex: 1,
                    boxShadow: 10,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box component="section" sx={{ py: { xs: 10, sm: 14 }, bgcolor: "#f8fafc" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="overline"
              sx={{ color: "#d4af37", fontWeight: 700, letterSpacing: "0.1em" }}
            >
              Our Expertise
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem" },
                fontWeight: 700,
                mt: 1,
                color: "#0a0a0b",
              }}
            >
              Core Business Domains
            </Typography>
          </Box>

          <Stack spacing={6}>
            {[
              {
                id: "contracting-services",
                title: "Contracting Services",
                icon: <EngineeringIcon sx={{ fontSize: 40, color: "#d4af37" }} />,
                description:
                  "Project-based execution with defined milestones, documentation, and site coordination.",
                items: [
                  "Civil and MEP-adjacent work packages where we act as a disciplined subcontractor or prime.",
                  "Site planning support, method statements, and progress reporting aligned to your standards.",
                  "Coordination with consultants, facility teams, and vendors to reduce rework and downtime.",
                ],
              },
              {
                id: "electrical-works",
                title: "Electrical Works",
                icon: <ElectricBoltIcon sx={{ fontSize: 40, color: "#d4af37" }} />,
                description:
                  "Installations and maintenance support carried out with safety and code awareness as non-negotiables.",
                items: [
                  "Power distribution, lighting, and related low-voltage scopes as per project design.",
                  "Testing, commissioning support, and handover documentation.",
                  "Preventive maintenance programs for commercial and industrial clients where applicable.",
                ],
              },
              {
                id: "supply-security-equipment",
                title: "Supply & Security Equipment",
                icon: <SecurityIcon sx={{ fontSize: 40, color: "#d4af37" }} />,
                description:
                  "Sourcing and supply of equipment for security, access control, and related operational needs.",
                items: [
                  "Product selection support based on site requirements and integration constraints.",
                  "Logistics, warranty coordination, and after-sales liaison with manufacturers where applicable.",
                  "Bundling with installation scopes when projects call for a single accountable partner.",
                ],
              },
            ].map((service, idx) => (
              <Box
                key={service.id}
                id={service.id}
                sx={{
                  bgcolor: "white",
                  p: { xs: 4, md: 6 },
                  borderRadius: 4,
                  border: "1px solid #e2e8f0",
                  scrollMarginTop: "6rem",
                  transition: "all 0.3s",
                  "&:hover": {
                    boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                    borderColor: "#d4af3740",
                  },
                }}
              >
                <Grid container spacing={4} sx={{ alignItems: "center" }}>
                  <Grid size={{ xs: 12, md: 1 }} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ bgcolor: "rgba(212, 175, 55, 0.1)", p: 2, borderRadius: "50%" }}>
                      {service.icon}
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <Typography
                      variant="h4"
                      sx={{ fontSize: "1.75rem", fontWeight: 700, mb: 2, color: "#0a0a0b" }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                      {service.description}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
                      {service.items.map((item, i) => (
                        <Box
                          component="li"
                          key={i}
                          sx={{ display: "flex", gap: 1.5, mb: 2, alignItems: "flex-start" }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              bgcolor: "#d4af37",
                              mt: 1,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary", lineHeight: 1.5 }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        component="section"
        sx={{
          py: { xs: 12, sm: 16 },
          bgcolor: "#0a0a0b",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* subtle glow blobs */}
        <Box
          sx={{
            position: "absolute",
            top: -80,
            left: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            bgcolor: "#d4af3708",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -60,
            right: -60,
            width: 280,
            height: 280,
            borderRadius: "50%",
            bgcolor: "#1a7a7d10",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <Typography
            variant="overline"
            sx={{ color: "#d4af37", fontWeight: 700, letterSpacing: "0.2em" }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2.5rem", sm: "3.5rem" }, fontWeight: 800, mt: 2, mb: 4 }}
          >
            Start Your Next <br />
            <span style={{ color: "#d4af37" }}>Project With Us</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.125rem",
              mb: 6,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Reach the Sadi Corporation team for services, quotations, or partnership discussions. We
            are ready to deliver structured solutions for your needs.
          </Typography>

          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 4,
                  bgcolor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Typography variant="h6" sx={{ color: "#d4af37", mb: 1, fontWeight: 700 }}>
                  Direct Contact
                </Typography>
                <Stack spacing={1}>
                  <MuiLink
                    href={`tel:${contact.phoneTel}`}
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      "&:hover": { color: "#d4af37" },
                    }}
                  >
                    {contact.phoneDisplay}
                  </MuiLink>
                  <MuiLink
                    href={`mailto:${contact.email}`}
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      "&:hover": { color: "#d4af37" },
                    }}
                  >
                    {contact.email}
                  </MuiLink>
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 4,
                  bgcolor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" sx={{ color: "#d4af37", mb: 1, fontWeight: 700 }}>
                  Inquiries
                </Typography>
                <Typography
                  sx={{ mb: 2, fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" }}
                >
                  For structured requests, use our group form
                </Typography>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-bold text-[#0a0a0b] transition hover:bg-[#d4af37]"
                >
                  Online Inquiry Form
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
