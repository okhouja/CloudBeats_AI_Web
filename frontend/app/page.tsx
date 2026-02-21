import { HomePageContent } from "@/components/HomePageContent";

const title = "CloudBeats AI";
const description =
  "Electronic music & sonic systems curated by an Artist Engineer. Where systems shape sound.";
const ogImage = "/og/og-image.jpg";

export const metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "CloudBeats AI",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "CloudBeats AI" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function HomePage() {
  return <HomePageContent />;
}
