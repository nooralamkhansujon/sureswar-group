/** Replace with real URLs when available. */
export const externalUrls = {
  sureswarTravels:
    process.env.NEXT_PUBLIC_SURESWAR_TRAVELS_URL ?? "https://example.com/sureswar-travels",
  hiCareServices:
    process.env.NEXT_PUBLIC_HICARE_SERVICES_URL ?? "https://example.com/hicare-services",
} as const;

export const contact = {
  phoneDisplay: "+880 1711-000000",
  phoneTel: "+8801711000000",
  email: "info@sureswargroup.com",
  /** Used for the embedded map search; update to your registered address. */
  mapQuery: "Dhaka, Bangladesh",
} as const;

export const BRANDING = {
  primary: "#6A1B75",         // Central deep purple color
  primaryBright: "#8E24AA",   // Bright accent purple
  primaryDark: "#4A148C",     // Dark accent purple
  gradient: "linear-gradient(135deg, #8E24AA 0%, #6A1B75 50%, #4A148C 100%)",
  gradientHeader: "linear-gradient(135deg, #8E24AA 0%, #6A1B75 60%, #4A148C 100%)",
  glow: "rgba(106, 27, 117, 0.35)",
  glowLight: "rgba(106, 27, 117, 0.12)",
  transparentBg: "rgba(106, 27, 117, 0.05)",
  transparentBorder: "rgba(106, 27, 117, 0.15)",
  hoverBg: "rgba(106, 27, 117, 0.04)",
  hoverBorder: "rgba(106, 27, 117, 0.25)",
} as const;
