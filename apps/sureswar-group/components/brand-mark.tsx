import Box from "@mui/material/Box";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

const COLORS = {
  gold: "#d4af37",
  goldBright: "#f0c956",
  surface: "#0a0a0b",
} as const;

const GOLD_GRADIENT = `linear-gradient(135deg, ${COLORS.goldBright} 0%, ${COLORS.gold} 60%, #b8901e 100%)`;

export function BrandMark() {
  return (
    <Box
      aria-hidden
      sx={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: GOLD_GRADIENT,
        color: COLORS.surface,
        boxShadow: "0 4px 14px rgba(212,175,55,0.35), inset 0 1px 0 rgba(255,255,255,0.4)",
        flexShrink: 0,
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.25)",
          pointerEvents: "none",
        },
      }}
    >
      <FlightTakeoffIcon sx={{ fontSize: 18 }} />
    </Box>
  );
}
