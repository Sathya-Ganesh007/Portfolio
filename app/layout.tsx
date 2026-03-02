import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/Components/cursor";

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
  title: "Ganesh | AI-Powered Web Applications & Scalable Systems",
  description:
    "Explore my portfolio featuring AI-first scalable applications, high-performance backend systems, and modern cloud-based architectural solutions designed for impact.",
  openGraph: {
    title: "Ganesh V Portfolio",
    description:
      "Explore my portfolio featuring AI-first scalable applications, high-performance backend systems, and modern cloud-based architectural solutions designed for impact.",
    url: "https://portfolio-woad-rho-d2b5fhr0ad.vercel.app",
    type: "website",
    images: [
      {
        url: "https://portfolio-woad-rho-d2b5fhr0ad.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
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
      </body>
    </html>
  );
}
