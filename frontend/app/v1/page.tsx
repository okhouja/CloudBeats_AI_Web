import { About } from "@/components/About";
import { Creator } from "@/components/Creator";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Manifest } from "@/components/Manifest";
import { Now } from "@/components/Now";
import { PlatformsGrid } from "@/components/PlatformsGrid";

export const metadata = {
  robots: { index: false, follow: false },
};

export default function V1HomePage() {
  return (
    <>
      <Hero />
      <Now />
      <Manifest />
      <About />
      <PlatformsGrid />
      <Creator />
      <Footer />
    </>
  );
}
