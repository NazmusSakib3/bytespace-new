import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-brand-blue pt-6 pb-16 sm:pb-20 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -right-20 top-10 h-40 w-40 rounded-full bg-brand-yellow/30 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 h-32 w-32 rotate-12 bg-brand-lime/40"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="text-white">
            <p className="mb-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              E-learning platform
            </p>
            <h1
              id="hero-heading"
              className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
            >
              Get Access to Hundreds of Courses Available
            </h1>
            <p className="mt-4 max-w-lg text-base text-blue-100 sm:text-lg">
              Learn from industry experts, grow at your own pace, and unlock career
              opportunities with structured paths in design, development, and more.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/signup" variant="lime" size="lg">
                Start Learning
              </Button>
              <Button
                href="#skills"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Browse Courses
              </Button>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-brand-yellow/80"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Students collaborating on laptops in a modern classroom"
                width={800}
                height={560}
                className="h-auto w-full object-cover"
                priority
              />
              <button
                type="button"
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brand-blue shadow-lg transition hover:scale-105"
                aria-label="Play course preview video"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
