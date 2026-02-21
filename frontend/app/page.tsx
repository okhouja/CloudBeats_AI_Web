import { HomePageContent } from "@/components/HomePageContent";

export const metadata = {
  title: "CloudBeats AI",
  description:
    "Electronic music & sonic systems curated by an Artist Engineer. Where systems shape sound.",
  robots: { index: false, follow: false },
};

export default function HomePage() {
  return <HomePageContent />;
}
