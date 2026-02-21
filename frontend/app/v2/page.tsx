import { About } from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Now } from "@/components/Now";
import { ContactSection } from "@/components/v2/ContactSection";
import { ListenSection } from "@/components/v2/ListenSection";
import { SystemRoadmap } from "@/components/v2/SystemRoadmap";

export const metadata = {
  title: "v2 Preview | CloudBeats AI",
  description: "CloudBeats AI v2 preview — experimental layout and sections.",
  robots: { index: false, follow: false },
};

/**
 * Experimental v2 route. Navbar from root layout.
 * Sections: Hero → Now (#now) → Listen (#listen) → About → System Roadmap → Contact (#contact) → Footer.
 */
export default function V2Page() {
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
