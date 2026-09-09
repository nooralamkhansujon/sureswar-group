/** Replace with real URLs when available. */
export const externalUrls = {
  sureswarTravels:
    process.env.NEXT_PUBLIC_SURESWAR_TRAVELS_URL ?? "https://www.sureswartravels.com",
  hiCareServices:
    process.env.NEXT_PUBLIC_HICARE_SERVICES_URL ?? "https://www.hicare.com.bd",
} as const;

export const contact = {
  addressLines: [
    "Bashati Condominium, House# 15, (Suite# C5)",
    "Road # 17, Banani, Dhaka-1212",
    "Bangladesh",
  ],
  phoneDisplay: "+880 1711-000000",
  phoneTel: "+8801711000000",
  email: "info@sureswargroup.com",
  facebook: "https://www.facebook.com/share/1BVc5q6XqX/?mibextid=wwXIfr",
  /** Pre-filled message when opening WhatsApp chat. */
  whatsappMessage: "Hello, I would like to get in touch with Sureswar Group.",
  /** Used for the embedded map search; update to your registered address. */
  mapQuery: "Bashati Condominium, Road 17, Banani, Dhaka 1212, Bangladesh",
} as const;

/** Opens WhatsApp Web or the mobile app for the configured contact number. */
export function getWhatsAppUrl(message = contact.whatsappMessage): string {
  const phone = contact.phoneTel.replace(/\D/g, "");
  const base = `https://wa.me/${phone}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const BRANDING = {
  logoSrc: "/images/sureswar-group-logo.jpeg",
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
