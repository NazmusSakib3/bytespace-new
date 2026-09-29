import { CtaBand } from "@/components/landing/CtaBand";
import { DiscoverCourses } from "@/components/landing/DiscoverCourses";
import { FeatureHighlight } from "@/components/landing/FeatureHighlight";
import { Hero } from "@/components/landing/Hero";
import { Partners } from "@/components/landing/Partners";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <>
      <div className="bg-brand-blue">
        <Navbar />
        <Hero />
      </div>
      <main>
        <Partners />
        <DiscoverCourses />
        <FeatureHighlight />
        <CtaBand />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
