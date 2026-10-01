import { CtaBand } from "@/components/landing/CtaBand";
import { DiscoverCourses } from "@/components/landing/DiscoverCourses";
import { FeatureHighlight } from "@/components/landing/FeatureHighlight";
import { Hero } from "@/components/landing/Hero";
import { HeroBleed } from "@/components/landing/HeroBleed";
import { LearningPaths } from "@/components/landing/LearningPaths";
import { ManageCourses } from "@/components/landing/ManageCourses";
import { Partners } from "@/components/landing/Partners";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <>
      {/*
        Figma Hero_Frame (1:1695): 1440×1024 design scaled to cover the full
        blue band at 100% zoom. DPR-compensated so Ctrl+/- still works.
      */}
      <HeroBleed>
        <Navbar />
        <Hero />
      </HeroBleed>
      <main>
        <Partners />
        <DiscoverCourses />
        <LearningPaths />
        <FeatureHighlight />
        <ManageCourses />
        <CtaBand />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
