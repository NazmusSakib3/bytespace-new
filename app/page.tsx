import { CtaBand } from "@/components/landing/CtaBand";
import { FeatureHighlight } from "@/components/landing/FeatureHighlight";
import { Hero } from "@/components/landing/Hero";
import { SkillsGrid } from "@/components/landing/SkillsGrid";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkillsGrid />
        <FeatureHighlight />
        <CtaBand />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
