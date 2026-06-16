import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Intech. — Building Software That Drives Your Business Forward",
  description:
    "Intech is a leading software company specializing in custom software development, SaaS solutions, mobile apps, and digital transformation. We turn your ideas into powerful digital products.",
  keywords: [
    "software company",
    "custom software development",
    "SaaS",
    "web development",
    "mobile app development",
    "digital transformation",
    "Intech",
  ],
  openGraph: {
    title: "Intech. — Building Software That Drives Your Business Forward",
    description:
      "We turn your ideas into powerful digital products. Custom software, SaaS, mobile apps, and more.",
    type: "website",
    locale: "en_US",
    siteName: "Intech.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
