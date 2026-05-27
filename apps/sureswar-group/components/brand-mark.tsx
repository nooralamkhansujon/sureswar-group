import Box from "@mui/material/Box";
import { BRANDING } from "@/lib/site-config";

type BrandMarkProps = {
  size?: number;
};

export function BrandMark({ size = 36 }: BrandMarkProps) {
  return (
    <Box
      aria-hidden
      sx={{
        width: size,
        height: size,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        boxShadow: `0 4px 14px ${BRANDING.glow}, inset 0 1px 0 rgba(255,255,255,0.4)`,
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
      <Box
        component="img"
        src={BRANDING.logoSrc}
        alt=""
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
