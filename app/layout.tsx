import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://relayreport.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RelayReport — Client reporting in hours, not weeks",
    template: "%s · RelayReport",
  },
  description:
    "Live client reporting for agency teams: one hub, one-click exports, alerts before surprises. Start free — no credit card.",
  keywords: [
    "client reporting",
    "agency analytics",
    "SaaS reporting",
    "customer dashboards",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "RelayReport",
    title: "RelayReport — Client reporting in hours, not weeks",
    description:
      "Stop rebuilding decks every week. Live client rooms, board-ready exports, alerts that buy you time.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RelayReport — Client reporting in hours, not weeks",
    description:
      "Live client rooms, one-click exports, fewer fire drills. Built for agency leads who sell outcomes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
