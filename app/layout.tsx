import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/Components/cursor";

import { SpeedInsights } from "@vercel/speed-insights/next";

import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-woad-rho-d2b5fhr0ad.vercel.app"),
  title: "Ganesh | Software Developer",
  description:
    "Helping startups and businesses turn ideas into AI-powered, scalable backend architecture and modern cloud-based applications.",
  openGraph: {
    title: "Ganesh | Software Developer",
    description:
      "Helping startups and businesses turn ideas into AI-powered, scalable backend architecture and modern cloud-based applications.",
    url: "https://portfolio-woad-rho-d2b5fhr0ad.vercel.app",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ganesh | Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganesh | Software Developer",
    description:
      "Helping startups and businesses turn ideas into AI-powered, scalable backend architecture and modern cloud-based applications.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
