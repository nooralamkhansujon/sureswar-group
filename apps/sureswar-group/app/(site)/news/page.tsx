import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

import { NewsList, type NewsItem } from "./news-content";

export const metadata: Metadata = {
  title: "News & Updates — Sureswar Group",
  description:
    "Latest announcements, milestones, and press releases from across the Sureswar Group of companies.",
};

const NEWS: NewsItem[] = [
  {
    date: "2026-05-01",
    category: "Announcement",
    title: "Sureswar Group launches new corporate website",
    excerpt:
      "A unified digital home for Sureswar Travels, Sadi Corporation, HiCare Services, and Holiday Express is now live, with streamlined navigation and updated service information.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function NewsPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Hero / Header */}
      <Box
        component="section"
        sx={{
          bgcolor: "#0f3d3e",
          color: "white",
          pt: { xs: 14, sm: 18 },
          pb: { xs: 8, sm: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(212,175,55,0.12), transparent 50%), radial-gradient(circle at 80% 60%, rgba(26,122,125,0.25), transparent 55%)",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 2 }}>
            <NotificationsActiveOutlinedIcon sx={{ color: "#d4af37" }} />
            <Typography
              variant="overline"
              sx={{ color: "#d4af37", fontWeight: 700, letterSpacing: "0.2em" }}
            >
              Newsroom
            </Typography>
          </Stack>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.25rem", sm: "3rem", md: "3.5rem" },
              fontWeight: 800,
              lineHeight: 1.1,
              mb: 2,
              letterSpacing: "-0.02em",
              maxWidth: "780px",
            }}
          >
            News & Updates
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem" },
              fontWeight: 400,
              color: "rgba(255,255,255,0.85)",
              maxWidth: "640px",
              lineHeight: 1.6,
            }}
          >
            Announcements, milestones, and press releases from across the Sureswar Group of
            companies.
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Box component="section" sx={{ py: { xs: 8, sm: 12 }, bgcolor: "#fafafa", flexGrow: 1 }}>
        <Container maxWidth="lg">
          <NewsList items={NEWS} />
        </Container>
      </Box>

      {/* CTA Footer */}
      <Box component="section" sx={{ py: { xs: 8, sm: 10 }, bgcolor: "white" }}>
        <Container maxWidth="md">
          <Box
            sx={{
              p: { xs: 4, sm: 6 },
              borderRadius: 4,
              color: "white",
              textAlign: "center",
              backgroundImage: "linear-gradient(135deg, #0f3d3e 0%, #155f61 100%)",
            }}
          >
            <Typography
              variant="overline"
              sx={{ color: "#d4af37", fontWeight: 700, letterSpacing: "0.2em" }}
            >
              Stay in the loop
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontSize: { xs: "1.5rem", sm: "2rem" }, fontWeight: 700, mt: 1, mb: 2 }}
            >
              Have a press inquiry?
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.85)", mb: 4, maxWidth: 540, mx: "auto" }}>
              Our communications team is happy to help with media requests, interviews, and
              partnership announcements.
            </Typography>
            <Button
              href="/contact"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "#d4af37",
                color: "#0a0a0b",
                px: 4,
                py: 1.25,
                borderRadius: "100px",
                fontWeight: 700,
                textTransform: "none",
                "&:hover": { bgcolor: "#e0bf52" },
              }}
            >
              Contact our team
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
