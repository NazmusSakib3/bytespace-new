import Image from "next/image";
import { Container } from "@/components/ui/Container";

function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="72"
      height="40"
      viewBox="0 0 72 40"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 20c8-14 16 14 24 0s16 14 24 0 12-10 16-4"
        stroke="#D4FF25"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Torus({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
      <ellipse cx="28" cy="28" rx="22" ry="12" stroke="#FFE566" strokeWidth="10" />
      <ellipse cx="28" cy="28" rx="10" ry="5" fill="#0052FF" />
    </svg>
  );
}

function Cone({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="48" height="56" viewBox="0 0 48 56" fill="none" aria-hidden>
      <path d="M24 4L44 48H4L24 4z" fill="#D4FF25" />
      <ellipse cx="24" cy="48" rx="20" ry="6" fill="#b8e000" />
    </svg>
  );
}

function Cylinder({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="40" height="52" viewBox="0 0 40 52" fill="none" aria-hidden>
      <ellipse cx="20" cy="10" rx="18" ry="8" fill="#FFE566" />
      <rect x="2" y="10" width="36" height="32" fill="#FFE566" />
      <ellipse cx="20" cy="42" rx="18" ry="8" fill="#f5d040" />
      <ellipse cx="20" cy="10" rx="18" ry="8" fill="#fff3a8" opacity="0.7" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-brand-blue pb-16 pt-4 sm:pb-20 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h1
            id="hero-heading"
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-[3.25rem]"
          >
            Get Access to Hundreds Courses Available
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
            Unlock your creativity, gain valuable knowledge, and grow your business with our
            wide range of courses.
          </p>

          <form
            className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-full bg-white p-1.5 shadow-lg"
            role="search"
            action="#courses"
            method="get"
          >
            <span className="pl-3 text-muted" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M20 20l-3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <label htmlFor="hero-search" className="sr-only">
              Search courses
            </label>
            <input
              id="hero-search"
              name="q"
              type="search"
              placeholder="Course, topic, creator"
              className="min-w-0 flex-1 bg-transparent px-2 py-2.5 text-sm text-text placeholder:text-muted focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-brand-lime-bright px-6 py-2.5 text-sm font-bold text-text transition hover:brightness-95"
            >
              Search
            </button>
          </form>
        </div>

        <div className="relative mx-auto mt-14 max-w-lg sm:mt-16 lg:max-w-xl">
          <div
            className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-lime-bright sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px]"
            aria-hidden
          />

          <Squiggle className="animate-float absolute -left-2 top-8 z-20 sm:left-0 sm:top-12" />
          <Torus className="animate-float-slow absolute -right-2 top-4 z-20 sm:right-4 sm:top-8" />
          <Cone className="animate-float-delay absolute bottom-16 -left-4 z-20 sm:bottom-20 sm:left-0" />
          <Cylinder className="animate-float absolute bottom-24 -right-2 z-20 sm:bottom-28 sm:right-2" />

          <div className="relative z-10 mx-auto w-[220px] overflow-hidden rounded-[2rem] sm:w-[260px] lg:w-[280px]">
            <Image
              src="https://images.unsplash.com/photo-1588196749597-9dbc6e1a0f0a?auto=format&fit=crop&w=600&q=80"
              alt="Young person with headphones smiling while using a laptop"
              width={600}
              height={720}
              className="aspect-[3/4] h-auto w-full object-cover object-top"
              priority
            />
          </div>

          <aside
            className="animate-float absolute left-0 top-6 z-30 max-w-[160px] rounded-2xl bg-white p-3 shadow-xl sm:-left-4 sm:max-w-[180px] sm:p-4 lg:-left-16"
            aria-label="UI/UX Design category"
          >
            <p className="text-sm font-bold text-text">UI/UX Design</p>
            <p className="mt-1 text-xs text-muted">200 Courses</p>
            <p className="text-xs text-muted">1000+ Students</p>
          </aside>

          <aside
            className="animate-float-delay absolute right-0 top-20 z-30 max-w-[150px] rounded-2xl bg-white p-3 shadow-xl sm:-right-2 sm:max-w-[170px] sm:p-4 lg:-right-14"
            aria-label="Learning progress"
          >
            <p className="text-xs font-medium text-muted">Learning Progress</p>
            <p className="mt-1 text-lg font-bold text-text">55%</p>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-border">
              <div className="h-full w-[55%] rounded-full bg-brand-lime-bright" />
            </div>
          </aside>

          <aside
            className="animate-float-slow absolute bottom-4 left-1/2 z-30 w-[min(100%,220px)] -translate-x-1/2 rounded-2xl bg-white p-3 shadow-xl sm:bottom-6 sm:w-[240px] sm:p-4 lg:left-auto lg:right-0 lg:translate-x-0 xl:-right-8"
            aria-label="Happy students rating"
          >
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-medium text-muted">Happy Students</p>
                <p className="mt-0.5 text-sm font-bold text-text">
                  4.5{" "}
                  <span className="font-normal text-muted">(240)</span>{" "}
                  <span className="text-brand-yellow" aria-hidden>
                    ★
                  </span>
                </p>
              </div>
              <span className="rounded-full bg-brand-lime-bright px-2 py-0.5 text-xs font-bold text-text">
                +2K
              </span>
            </div>
            <div className="mt-2 flex -space-x-2" aria-hidden>
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=64&q=80",
              ].map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
