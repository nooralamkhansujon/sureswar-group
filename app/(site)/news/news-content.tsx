"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

export type NewsCategory = "Announcement" | "Press Release" | "Event" | "Update";

export type NewsItem = {
  /** ISO date (YYYY-MM-DD). Use empty string for undated drafts. */
  date: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  image?: string;
  href?: string;
};

const CATEGORY_STYLES: Record<NewsCategory, { bg: string; color: string }> = {
  Announcement: { bg: "#1a7a7d", color: "#ffffff" },
  "Press Release": { bg: "#0f3d3e", color: "#ffffff" },
  Event: { bg: "#d4af37", color: "#0a0a0b" },
  Update: { bg: "#155f61", color: "#ffffff" },
};

function formatDate(iso: string): string {
  if (!iso) return "Coming soon";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function CategoryChip({ category }: { category: NewsCategory }) {
  const styles = CATEGORY_STYLES[category];
  return (
    <Chip
      label={category}
      size="small"
      sx={{
        bgcolor: styles.bg,
        color: styles.color,
        fontWeight: 700,
        fontSize: "0.7rem",
        letterSpacing: "0.04em",
      }}
    />
  );
}

function DateRow({ date }: { date: string }) {
  return (
    <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", color: "text.secondary" }}>
      <CalendarTodayIcon sx={{ fontSize: 14 }} />
      <Typography variant="caption" sx={{ fontWeight: 600, letterSpacing: "0.04em" }}>
        {formatDate(date)}
      </Typography>
    </Stack>
  );
}

function FeaturedCard({ item }: { item: NewsItem }) {
  const href = item.href ?? "#";
  return (
    <Card
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <CardActionArea LinkComponent={Link} href={href} sx={{ display: "block" }}>
        <Grid container>
          <Grid size={{ xs: 12, md: 7 }}>
            {item.image ? (
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 240, sm: 320, md: "100%" },
                  minHeight: { md: 360 },
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 240, sm: 320, md: "100%" },
                  minHeight: { md: 360 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#f0f7f7",
                }}
              >
                <ArticleOutlinedIcon sx={{ fontSize: 64, color: "#1a7a7d" }} />
              </Box>
            )}
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <CardContent sx={{ p: { xs: 3, sm: 5 }, height: "100%" }}>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 2 }}>
                <CategoryChip category={item.category} />
                <Typography
                  variant="overline"
                  sx={{ color: "#1a7a7d", fontWeight: 700, letterSpacing: "0.18em" }}
                >
                  Featured
                </Typography>
              </Stack>
              <DateRow date={item.date} />
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "1.875rem" },
                  fontWeight: 700,
                  lineHeight: 1.25,
                  mt: 1.5,
                  mb: 2,
                  color: "#0a0a0b",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.7, mb: 3 }}
              >
                {item.excerpt}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{ alignItems: "center", color: "#1a7a7d", fontWeight: 700 }}
              >
                <Typography component="span" sx={{ fontWeight: 700 }}>
                  Read story
                </Typography>
                <ArrowForwardIcon fontSize="small" />
              </Stack>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  const href = item.href ?? "#";
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
        transition: "all 0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 16px 32px rgba(26, 122, 125, 0.12)",
          borderColor: "#1a7a7d",
        },
      }}
    >
      <CardActionArea
        LinkComponent={Link}
        href={href}
        sx={{ display: "flex", flexDirection: "column", alignItems: "stretch", height: "100%" }}
      >
        {item.image ? (
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt={item.title}
              sx={{ objectFit: "cover" }}
            />
            <Box sx={{ position: "absolute", top: 14, left: 14 }}>
              <CategoryChip category={item.category} />
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#f0f7f7",
              position: "relative",
            }}
          >
            <ArticleOutlinedIcon sx={{ fontSize: 56, color: "#1a7a7d" }} />
            <Box sx={{ position: "absolute", top: 14, left: 14 }}>
              <CategoryChip category={item.category} />
            </Box>
          </Box>
        )}
        <CardContent
          sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column", width: "100%" }}
        >
          <DateRow date={item.date} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mt: 1,
              mb: 1.5,
              color: "#0a0a0b",
              lineHeight: 1.35,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              lineHeight: 1.6,
              mb: 2,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {item.excerpt}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: "center",
              mt: "auto",
              color: "#1a7a7d",
              fontWeight: 700,
              fontSize: "0.875rem",
            }}
          >
            <Typography component="span" sx={{ fontWeight: 700, fontSize: "0.875rem" }}>
              Read more
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function EmptyState() {
  return (
    <Box
      sx={{
        py: { xs: 8, sm: 12 },
        textAlign: "center",
        border: "1px dashed",
        borderColor: "divider",
        borderRadius: 4,
        bgcolor: "#fafafa",
      }}
    >
      <NotificationsActiveOutlinedIcon sx={{ fontSize: 56, color: "#1a7a7d", mb: 2 }} />
      <Typography variant="h5" sx={{ fontWeight: 700, color: "#0a0a0b", mb: 1 }}>
        No updates yet
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 480, mx: "auto" }}>
        Check back soon for announcements, press releases, and event news from across the
        Sureswar Group.
      </Typography>
    </Box>
  );
}

export function NewsList({ items }: { items: NewsItem[] }) {
  if (items.length === 0) return <EmptyState />;
  const [featured, ...rest] = items;
  return (
    <Stack spacing={{ xs: 6, sm: 8 }}>
      {featured ? <FeaturedCard item={featured} /> : null}

      {rest.length > 0 ? (
        <Box>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              mb: 4,
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box>
              <Typography
                variant="overline"
                sx={{ color: "#1a7a7d", fontWeight: 700, letterSpacing: "0.18em" }}
              >
                Latest
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "1.875rem" },
                  fontWeight: 700,
                  color: "#0a0a0b",
                  mt: 0.5,
                }}
              >
                More from the Group
              </Typography>
            </Box>
          </Stack>

          <Grid container spacing={4}>
            {rest.map((item) => (
              <Grid key={item.title + item.date} size={{ xs: 12, sm: 6, md: 4 }}>
                <NewsCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : null}
    </Stack>
  );
}
