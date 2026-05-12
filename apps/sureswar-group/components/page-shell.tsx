import type { ReactNode } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export function PageShell({
  title,
  subtitle,
  children,
  nested,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  /** Use inside a parent layout that already applies max-width and padding. */
  nested?: boolean;
}) {
  const inner = (
    <>
      <Box component="header" sx={{ mb: 4, maxWidth: "48rem" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "1.875rem", sm: "2.25rem" },
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "text.primary",
          }}
        >
          {title}
        </Typography>
        {subtitle ? (
          <Typography
            variant="subtitle1"
            sx={{ mt: 1.5, fontSize: "1.125rem", color: "text.secondary" }}
          >
            {subtitle}
          </Typography>
        ) : null}
      </Box>
      {children}
    </>
  );
  if (nested) return inner;
  return (
    <Box
      sx={{
        mx: "auto",
        width: "100%",
        maxWidth: "72rem",
        flexGrow: 1,
        px: { xs: 2, sm: 3 },
        pb: { xs: 6, sm: 8 },
        pt: { xs: 12, sm: 14 },
      }}
    >
      {inner}
    </Box>
  );
}

export function ProseSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        scrollMarginTop: "6rem",
        "&:not(:first-of-type)": { borderTop: "1px solid", borderColor: "divider", pt: 5 },
        "&:first-of-type": { pt: 0 },
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "1.25rem", fontWeight: 600, color: "text.primary", mb: 2 }}
      >
        {title}
      </Typography>
      <Box sx={{ maxWidth: "48rem", "& > * + *": { mt: 2 }, color: "text.secondary" }}>
        {children}
      </Box>
    </Box>
  );
}
