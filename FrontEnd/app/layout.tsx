import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const siteUrl = "https://cloudbeats.ai";
const ogImage = "/og/og-image.jpg";
const title = "CloudBeats AI";
const description =
  "Electronic music & sonic systems curated by an Artist Engineer. Where systems shape sound.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "CloudBeats AI",
    images: [
      { url: ogImage, width: 1200, height: 630, alt: "CloudBeats AI" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
