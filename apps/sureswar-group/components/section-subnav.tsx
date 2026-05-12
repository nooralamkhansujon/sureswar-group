"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import { usePathname } from "next/navigation";
import Typography from "@mui/material/Typography";

export function SectionSubnav({
  baseLabel,
  items,
}: {
  baseLabel: string;
  items: { href: string; label: string }[];
}) {
  const pathname = usePathname();

  return (
    <Box
      component="nav"
      aria-label={`${baseLabel} sections`}
      sx={{
        mb: 4,
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid",
        borderColor: "divider",
        overflowX: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Box
            key={item.href}
            component={Link}
            href={item.href}
            sx={{
              position: "relative",
              px: 3,
              py: 2,
              textDecoration: "none",
              color: isActive ? "primary.main" : "text.secondary",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                color: "primary.main",
                "& .indicator": {
                  width: "100%",
                  opacity: isActive ? 1 : 0.5,
                },
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: isActive ? 700 : 500,
                fontSize: "0.875rem",
                letterSpacing: "0.01em",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </Typography>
            
            {/* Active Indicator */}
            <Box
              className="indicator"
              sx={{
                position: "absolute",
                bottom: -1,
                left: 0,
                height: 2,
                width: isActive ? "100%" : "0%",
                bgcolor: "primary.main",
                transition: "all 0.3s ease",
                borderRadius: "2px 2px 0 0",
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
}
