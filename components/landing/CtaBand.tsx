import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBand() {
  return (
    <section
      className="relative overflow-hidden bg-brand-blue py-14 sm:py-16"
      aria-labelledby="cta-heading"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -left-10 top-6 h-24 w-24 rounded-full bg-brand-lime-bright/80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-6 bottom-4 h-20 w-20 rotate-12 bg-brand-yellow/70"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-6 text-center text-white">
          <h2 id="cta-heading" className="max-w-2xl text-2xl font-bold sm:text-3xl lg:text-4xl">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="max-w-xl text-white/85">
            Join thousands of creators building in-demand skills. Create your free account and
            start your first course in minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Button href="/signup" variant="lime" size="lg">
              Get Started
            </Button>
            <Button href="#courses" variant="outlineLight" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
