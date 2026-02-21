import { About } from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Now } from "@/components/Now";
import { ContactSection } from "@/components/v2/ContactSection";
import { ListenSection } from "@/components/v2/ListenSection";
import { SystemRoadmap } from "@/components/v2/SystemRoadmap";

/**
 * Main home page content (v2 layout). Used by / and /v2.
 */
export function HomePageContent() {
  return (
    <>
      <Hero />
      <Now />
      <ListenSection />
      <About />
      <SystemRoadmap />
      <ContactSection />
      <Footer />
    </>
  );
}
