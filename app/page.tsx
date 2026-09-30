import Image from "next/image";
import { CtaBand } from "@/components/landing/CtaBand";
import { DiscoverCourses } from "@/components/landing/DiscoverCourses";
import { FeatureHighlight } from "@/components/landing/FeatureHighlight";
import { Hero } from "@/components/landing/Hero";
import { LearningPaths } from "@/components/landing/LearningPaths";
import { ManageCourses } from "@/components/landing/ManageCourses";
import { Partners } from "@/components/landing/Partners";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <>
      {/* Figma Hero_Frame 1:1695 — 1440×1024 */}
      <div className="relative overflow-hidden bg-brand-blue">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src="/figma/hero/grid.svg"
            alt=""
            fill
            priority
            unoptimized
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 mx-auto h-[max(680px,min(1024px,calc(100vw*0.711)))] w-full max-w-[1440px] overflow-hidden">
          <Navbar />
          <Hero />
        </div>
      </div>
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
