import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { FixedWhatsAppSocialLink } from "@/components/whatsapp-social-link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: {
    default: "Sureswar Travels | Travels Agency of Bangladesh",
    template: "%s | Sureswar Travels",
  },
  description:
    "Sureswar Travels — air ticketing, Hajj & Umrah packages, visa assistance, and holiday tours. Trusted travel partner since 1993.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full">
        <div className="group-strip" role="note">
          A Sureswar Group company · Established 1993 · Premium travel &amp; pilgrimage services
        </div>
        <SiteNavbar />
        <FixedWhatsAppSocialLink />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
