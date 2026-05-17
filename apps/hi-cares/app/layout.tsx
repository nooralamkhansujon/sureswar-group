import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";

import { SiteNavbar } from "@/components/site-navbar";
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
    default: "HiCare Services Ltd. | Global Manpower Recruitment",
    template: "%s | HiCare Services Ltd.",
  },
  description:
    "HiCare Services Ltd. — ethical global manpower recruitment, deployment, and workforce solutions from Bangladesh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full">
        <div className="license-strip" role="note">
          Government-approved manpower recruiting agency · License RL-2234 · Ministry of Expatriates&apos; Welfare &amp;
          Overseas Employment · BAIRA member
        </div>
        <SiteNavbar />
        {children}
      </body>
    </html>
  );
}
