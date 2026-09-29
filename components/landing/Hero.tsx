import Image from "next/image";
import { Container } from "@/components/ui/Container";

const AVATARS = [
  "/figma/avatar1.png",
  "/figma/avatar2.png",
  "/figma/avatar3.png",
  "/figma/avatar4.png",
];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-brand-blue pb-10 pt-2 sm:pb-14 lg:pb-0"
      aria-labelledby="hero-heading"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />

      <Container className="relative z-10">
        <div className="mx-auto max-w-[935px] text-center text-white">
          <h1
            id="hero-heading"
            className="font-heading text-[2rem] font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[3.4rem] lg:leading-[1.12]"
          >
            Get Access to Hundreds Courses Available
          </h1>
          <p className="mx-auto mt-5 max-w-[819px] text-base text-white/90 sm:text-lg">
            Unlock your creativity, gain valuable knowledge, and grow your business with our
            wide range of courses.
          </p>

          <form
            className="mx-auto mt-8 flex max-w-[581px] items-center rounded-full bg-white p-1.5 shadow-lg sm:mt-10"
            role="search"
            action="#courses"
            method="get"
          >
            <span className="pl-4 text-muted" aria-hidden>
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
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-text placeholder:text-muted focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-brand-lime px-6 py-2.5 text-sm font-bold text-text transition hover:brightness-95 sm:px-7"
            >
              Search
            </button>
          </form>
        </div>

        <div className="relative mx-auto mt-10 h-[420px] max-w-5xl sm:mt-12 sm:h-[500px] lg:mt-8 lg:h-[560px]">
          {/* Large lime circle behind person */}
          <div
            className="absolute left-1/2 top-[38%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-lime sm:h-[380px] sm:w-[380px] lg:top-[42%] lg:h-[520px] lg:w-[520px]"
            aria-hidden
          />

          {/* 3D ornaments */}
          <Image
            src="/figma/ornament-spring.png"
            alt=""
            width={220}
            height={220}
            className="animate-float pointer-events-none absolute -left-8 top-4 z-20 h-auto w-[120px] sm:left-0 sm:w-[160px] lg:-left-6 lg:w-[200px]"
            aria-hidden
          />
          <Image
            src="/figma/ornament-cylinder.png"
            alt=""
            width={160}
            height={160}
            className="animate-float-delay pointer-events-none absolute left-[8%] top-[42%] z-20 h-auto w-[70px] sm:w-[100px] lg:left-[12%] lg:w-[120px]"
            aria-hidden
          />
          <Image
            src="/figma/ornament-cone.png"
            alt=""
            width={200}
            height={200}
            className="animate-float-slow pointer-events-none absolute -left-4 bottom-8 z-20 h-auto w-[110px] sm:left-2 sm:w-[150px] lg:left-0 lg:w-[180px]"
            aria-hidden
          />
          <Image
            src="/figma/ornament-cone2.png"
            alt=""
            width={200}
            height={200}
            className="animate-float pointer-events-none absolute -right-2 top-0 z-20 h-auto w-[110px] sm:right-4 sm:w-[150px] lg:right-0 lg:w-[190px]"
            aria-hidden
          />
          <Image
            src="/figma/ornament-cone3.png"
            alt=""
            width={140}
            height={140}
            className="animate-float-delay pointer-events-none absolute right-[6%] top-[38%] z-20 h-auto w-[70px] sm:right-[10%] sm:w-[95px] lg:w-[110px]"
            aria-hidden
          />
          <Image
            src="/figma/ornament-cylinder.png"
            alt=""
            width={180}
            height={180}
            className="animate-float-slow pointer-events-none absolute -right-6 bottom-4 z-20 h-auto w-[100px] rotate-12 sm:right-0 sm:w-[140px] lg:w-[170px]"
            aria-hidden
          />

          {/* Hero person */}
          <div className="absolute bottom-0 left-1/2 z-10 w-[220px] -translate-x-1/2 sm:w-[280px] lg:w-[340px]">
            <Image
              src="/figma/hero-person.png"
              alt="Young man with headphones and laptop smiling"
              width={680}
              height={760}
              className="h-auto w-full object-contain object-bottom"
              priority
            />
          </div>

          {/* Floating cards */}
          <aside
            className="absolute left-0 top-[28%] z-30 max-w-[170px] rounded-2xl bg-white p-3.5 shadow-xl sm:left-4 sm:top-[32%] sm:max-w-[208px] sm:p-4 lg:left-[8%]"
            aria-label="UI/UX Design category"
          >
            <p className="font-heading text-sm font-bold text-text">UI/UX Design</p>
            <p className="mt-1 text-xs text-muted">200 Courses • 1000+ Students</p>
          </aside>

          <aside
            className="absolute right-0 top-[34%] z-30 max-w-[160px] rounded-2xl bg-white p-3.5 shadow-xl sm:right-4 sm:max-w-[232px] sm:p-4 lg:right-[10%]"
            aria-label="Learning progress"
          >
            <p className="text-xs font-medium text-muted sm:text-sm">Learning Progress</p>
            <p className="mt-1 font-heading text-2xl font-bold text-text sm:text-[2.5rem] sm:leading-none">
              55%
            </p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-border">
              <div className="h-full w-[55%] rounded-full bg-brand-lime" />
            </div>
          </aside>

          <aside
            className="absolute bottom-4 left-0 z-30 w-[min(100%,220px)] rounded-2xl bg-white p-3.5 shadow-xl sm:bottom-8 sm:left-[6%] sm:w-[258px] sm:p-4"
            aria-label="Happy students rating"
          >
            <p className="text-xs font-medium text-muted sm:text-sm">Happy Students</p>
            <p className="mt-0.5 text-sm font-semibold text-text">
              4.5 (240){" "}
              <span className="text-brand-yellow" aria-hidden>
                ★
              </span>
            </p>
            <div className="mt-3 flex items-center">
              <div className="flex -space-x-2.5" aria-hidden>
                {AVATARS.map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={40}
                    height={40}
                    className="h-8 w-8 rounded-full border-2 border-white object-cover sm:h-10 sm:w-10"
                  />
                ))}
              </div>
              <span className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-lime text-[10px] font-bold text-text sm:h-10 sm:w-10 sm:text-xs">
                2K+
              </span>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
