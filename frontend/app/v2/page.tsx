import { About } from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Now } from "@/components/Now";
import { SystemRoadmap } from "@/components/v2/SystemRoadmap";

/**
 * Experimental v2 route. Navbar from root layout.
 * Section order aligned with Figma_Prototype_v2 home: Hero → Featured Release (Now) → Philosophy (About) → System Roadmap → Footer.
 */
export default function V2Page() {
  return (
    <>
      <Hero />
      <Now />
      <About />
      <SystemRoadmap />
      <Footer />
    </>
  );
}
