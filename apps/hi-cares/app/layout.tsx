import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";

import { SiteNavbar } from "@/components/site-navbar";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
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
    <html lang="en" className={`${syne.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full antialiased">
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
