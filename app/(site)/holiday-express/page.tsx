import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "@/lib/site-config";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MuiLink from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "@mui/material/Button";

export const metadata: Metadata = {
  title: "Holiday Express — Curated Travel & Holiday Experiences",
  description:
    "Bespoke tour packages, visa assistance, and luxury holiday experiences by Sureswar Group.",
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80";

const PACKAGES = [
  {
    name: "Exotic Maldives Escape",
    location: "Maldives",
    duration: "4 Days, 3 Nights",
    category: "International",
    price: "$899",
    tags: ["Luxury", "Beach"],
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cox's Bazar Getaway",
    location: "Bangladesh",
    duration: "3 Days, 2 Nights",
    category: "Domestic",
    price: "৳12,500",
    tags: ["Leisure", "Sea"],
    image:
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bhutan Mountain Adventure",
    location: "Bhutan",
    duration: "5 Days, 4 Nights",
    category: "International",
    price: "$950",
    tags: ["Adventure", "Nature"],
    image:
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Singapore City Lights",
    location: "Singapore",
    duration: "4 Days, 3 Nights",
    category: "International",
    price: "$750",
    tags: ["City", "Shopping"],
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sylhet Tea Garden Retreat",
    location: "Bangladesh",
    duration: "3 Days, 2 Nights",
    category: "Domestic",
    price: "৳10,800",
    tags: ["Nature", "Relax"],
    image:
      "https://images.unsplash.com/photo-1590001158193-780d0cd2d32b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bali Tropical Paradise",
    location: "Indonesia",
    duration: "6 Days, 5 Nights",
    category: "International",
    price: "$1,100",
    tags: ["Luxury", "Culture"],
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dubai Desert Safari",
    location: "UAE",
    duration: "4 Days, 3 Nights",
    category: "International",
    price: "$1,250",
    tags: ["Adventure", "Luxury"],
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Nepal Trekking Journey",
    location: "Nepal",
    duration: "7 Days, 6 Nights",
    category: "International",
    price: "$850",
    tags: ["Adventure", "Hiking"],
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
  },
];

export default function HolidayExpressPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          position: "relative",
          minHeight: "85vh",
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
              bgcolor: "rgba(15, 61, 62, 0.45)",
              backgroundImage:
                "linear-gradient(to bottom, rgba(15, 61, 62, 0.7), rgba(15, 61, 62, 0.3))",
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
              Travel with Sureswar Group
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 3,
                letterSpacing: "-0.02em",
              }}
            >
              Holiday Express
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.95)",
                mb: 4,
                maxWidth: "600px",
                lineHeight: 1.5,
              }}
            >
              Thoughtfully planned tours, visa assistance, and responsive support for travelers
              seeking memorable journeys.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <MuiLink
                href="#tour-packages"
                sx={{
                  bgcolor: "#1a7a7d",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  borderRadius: "100px",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  transition: "all 0.2s",
                  "&:hover": { bgcolor: "#155f61", transform: "translateY(-2px)" },
                }}
              >
                Explore Packages <ArrowForwardIcon fontSize="small" />
              </MuiLink>
              <MuiLink
                href="#contact"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.15)",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  borderRadius: "100px",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.2s",
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.25)" },
                }}
              >
                Get Assistance
              </MuiLink>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Intro Section */}
      <Box component="section" sx={{ py: { xs: 10, sm: 14 }, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                sx={{ color: "#1a7a7d", fontWeight: 700, letterSpacing: "0.1em" }}
              >
                Our Mission
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
                Crafting Memories, <br />
                <span style={{ color: "#1a7a7d", fontStyle: "italic" }}>Delivering Comfort</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", fontSize: "1.125rem", lineHeight: 1.8, mb: 3 }}
              >
                Holiday Express helps individuals and groups move from itinerary ideas to confirmed
                travel—with transparent inclusions, realistic timelines, and help navigating
                documentation where needed.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", fontSize: "1.125rem", lineHeight: 1.8 }}
              >
                Our curated experiences are designed for those who seek more than just a
                destination—we deliver memories, comfort, and seamless connectivity through our
                global network.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative" }}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"
                  alt="Travel experiences"
                  sx={{ width: "100%", borderRadius: 8, boxShadow: 20 }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -40,
                    left: -40,
                    bgcolor: "#d4af37",
                    p: 3,
                    borderRadius: 4,
                    display: { xs: "none", lg: "block" },
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: 800, color: "#0a0a0b" }}>
                    30+
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 700, color: "#0a0a0b", textTransform: "uppercase" }}
                  >
                    Years of Trust
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Packages */}
      <Box
        id="tour-packages"
        component="section"
        sx={{ py: { xs: 10, sm: 14 }, bgcolor: "#f0f7f7" }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="overline"
              sx={{ color: "#1a7a7d", fontWeight: 700, letterSpacing: "0.1em" }}
            >
              Trending Now
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
              Featured Tour Packages
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {PACKAGES.map((pkg, idx) => (
              <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={idx}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 20px 40px rgba(26, 122, 125, 0.15)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia component="img" height="240" image={pkg.image} alt={pkg.name} />
                    <Chip
                      label={pkg.category}
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        bgcolor: pkg.category === "International" ? "#1a7a7d" : "#d4af37",
                        color: pkg.category === "International" ? "white" : "#0a0a0b",
                        fontWeight: 700,
                      }}
                    />
                  </Box>
                  <CardContent sx={{ p: 3, flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "#0a0a0b" }}>
                      {pkg.name}
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{ mb: 2, color: "text.secondary" }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <LocationOnIcon fontSize="small" sx={{ color: "#1a7a7d" }} />
                        <Typography variant="caption" sx={{ fontWeight: 600 }}>
                          {pkg.location}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <AccessTimeIcon fontSize="small" sx={{ color: "#1a7a7d" }} />
                        <Typography variant="caption" sx={{ fontWeight: 600 }}>
                          {pkg.duration}
                        </Typography>
                      </Box>
                    </Stack>
                    <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                      {pkg.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: "0.65rem", fontWeight: 700 }}
                        />
                      ))}
                    </Stack>
                    <Divider sx={{ mb: 2 }} />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                    >
                      <Box>
                        <Typography variant="caption" sx={{ color: "text.secondary", display: "block" }}>
                          Starting from
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: "#1a7a7d" }}>
                          {pkg.price}
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#0a0a0b",
                          borderRadius: "100px",
                          textTransform: "none",
                          fontWeight: 700,
                          "&:hover": { bgcolor: "#1a7a7d" },
                        }}
                      >
                        Book Now
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Visa Assistance Section */}
      <Box
        id="visa-assistance"
        component="section"
        sx={{ py: { xs: 10, sm: 14 }, bgcolor: "white" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative" }}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80"
                  alt="Visa assistance"
                  sx={{ width: "100%", borderRadius: 8, boxShadow: 10 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                sx={{ color: "#1a7a7d", fontWeight: 700, letterSpacing: "0.1em" }}
              >
                Expert Support
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
                Seamless <span style={{ color: "#1a7a7d" }}>Visa Assistance</span>
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
                Guidance on documentation and application steps—final decisions always rest with
                embassies and consulates. We ensure your application is as strong as possible.
              </Typography>

              <Stack spacing={2}>
                {[
                  "Checklists tailored to destination and traveler profile.",
                  "Appointment planning support and form preparation where applicable.",
                  "Coordination with travel insurance and ticketing timelines.",
                ].map((item, i) => (
                  <Box key={i} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <CheckCircleIcon sx={{ color: "#1a7a7d" }} />
                    <Typography variant="body2" sx={{ fontWeight: 500, color: "text.primary" }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        component="section"
        sx={{ py: { xs: 12, sm: 16 }, bgcolor: "#0f3d3e", color: "white" }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="overline"
            sx={{ color: "#d4af37", fontWeight: 700, letterSpacing: "0.2em" }}
          >
            Ready to Fly?
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2.5rem", sm: "3.5rem" }, fontWeight: 800, mt: 2, mb: 4 }}
          >
            Your Journey <br />
            <span style={{ color: "#d4af37" }}>Starts Here</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "rgba(255,255,255,0.8)", mb: 6, maxWidth: "600px", mx: "auto" }}
          >
            Reach the Holiday Express team for tour packages, visa inquiries, or custom travel
            planning.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 4,
                  bgcolor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
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
                    sx={{ color: "white", textDecoration: "none", "&:hover": { color: "#d4af37" } }}
                  >
                    {contact.email}
                  </MuiLink>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 4,
                  bgcolor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" sx={{ color: "#d4af37", mb: 1, fontWeight: 700 }}>
                  Inquiry Form
                </Typography>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-2.5 text-sm font-bold text-[#0f3d3e] transition hover:bg-[#d4af37]"
                >
                  Message Us
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
