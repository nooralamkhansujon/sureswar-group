import { PageShell } from "@/components/page-shell";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SecurityIcon from "@mui/icons-material/Security";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Link from "next/link";

export const metadata = {
  title: "About Sureswar Group",
  description: "Learn about the history, vision, leadership, and core business values of Sureswar Group.",
};

export default function AboutPage() {
  return (
    <PageShell
      title="About Sureswar Group"
      subtitle="A diversified international business organization built on trust, integrity, and operational excellence since 1993."
    >
      <Box sx={{ "& > section": { mb: 12 } }}>
        {/* Our Story / Vision */}
        <Box component="section">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.5fr 1fr" },
              gap: 6,
            }}
          >
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "text.primary" }}>
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 2, fontSize: "1.125rem", lineHeight: 1.8 }}>
                Founded in 1993, Sureswar Group has evolved into a diversified international-standard
                business organization with a strong presence across travel services, global manpower
                solutions, contracting, supply chain operations, and international trade.
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 2, fontSize: "1.125rem", lineHeight: 1.8 }}>
                Our vision is to grow each venture with discipline: clear scope, measurable outcomes,
                and relationships that last beyond a single project or booking. We aim to be a trusted
                regional partner known for dependable execution and ethical business practice.
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  height: "100%",
                  minHeight: 300,
                  borderRadius: 4,
                  bgcolor: "rgba(212, 175, 55, 0.05)",
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: 4,
                  textAlign: "center",
                }}
              >
                <Typography variant="h2" sx={{ color: "gold", fontWeight: 900, mb: 1 }}>
                  30+
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  Years of Excellence
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Serving individuals, corporations, and institutional partners with unwavering dedication since 1993.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Business Values */}
        <Box component="section" sx={{ bgcolor: "rgba(10, 10, 11, 0.02)", p: { xs: 4, md: 8 }, borderRadius: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 5, textAlign: "center" }}>
            Our Core Values
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 4,
            }}
          >
            {[
              {
                icon: <VerifiedUserIcon sx={{ color: "gold" }} />,
                title: "Integrity",
                desc: "We maintain absolute transparency and honesty in every interaction. We say what we do and do what we say.",
              },
              {
                icon: <SecurityIcon sx={{ color: "gold" }} />,
                title: "Safety & Compliance",
                desc: "Committed to the highest safety standards across contracting, electrical works, and international trade.",
              },
              {
                icon: <FavoriteIcon sx={{ color: "gold" }} />,
                title: "Respect for People",
                desc: "We value our customers, partners, and colleagues, fostering an environment of mutual respect and growth.",
              },
              {
                icon: <TrendingUpIcon sx={{ color: "gold" }} />,
                title: "Continuous Improvement",
                desc: "Constantly refining our processes and service quality to stay ahead of industry standards and client needs.",
              },
            ].map((value) => (
              <Box key={value.title} sx={{ display: "flex", gap: 2.5 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 56,
                    height: 56,
                    borderRadius: 3,
                    bgcolor: "white",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    flexShrink: 0,
                  }}
                >
                  {value.icon}
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                    {value.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Leadership */}
        <Box component="section">
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
            Leadership & Governance
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4, fontSize: "1.125rem", lineHeight: 1.8 }}>
            Group leadership sets direction, allocates capital responsibly, and ensures each
            operating company maintains strong governance and safety standards. Our management
            team combines deep industry expertise with strategic foresight to drive sustainable growth.
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", fontStyle: "italic" }}>
            For media or partnership inquiries, please reach out to our corporate office via the{" "}
            <Link
              href="/contact"
              className="font-semibold text-[#1a7a7d] hover:underline"
            >
              contact form
            </Link>
            .
          </Typography>
        </Box>
      </Box>
    </PageShell>
  );
}
