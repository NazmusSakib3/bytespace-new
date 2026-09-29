import Image from "next/image";
import { Container } from "@/components/ui/Container";

function LimeSpring({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="120" height="140" viewBox="0 0 120 140" fill="none" aria-hidden>
      <path
        d="M30 10c40 0 40 28 0 28s-40 28 0 28 40 28 0 28 40 28 0 28"
        stroke="#D4FF25"
        strokeWidth="18"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WhiteSquiggle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="90" height="50" viewBox="0 0 90 50" fill="none" aria-hidden>
      <path
        d="M6 25c12-18 24 18 36 0s24 18 36 0"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Torus({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="110" height="70" viewBox="0 0 110 70" fill="none" aria-hidden>
      <ellipse cx="55" cy="35" rx="48" ry="26" stroke="#FFFFFF" strokeWidth="16" />
      <ellipse cx="55" cy="35" rx="22" ry="12" fill="#0052FF" />
    </svg>
  );
}

function Cone({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="70" height="80" viewBox="0 0 70 80" fill="none" aria-hidden>
      <path d="M35 4L66 68H4L35 4z" fill="#FFFFFF" />
      <ellipse cx="35" cy="68" rx="31" ry="9" fill="#E8EEFF" />
    </svg>
  );
}

function Cylinder({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="56" height="80" viewBox="0 0 56 80" fill="none" aria-hidden>
      <ellipse cx="28" cy="14" rx="26" ry="12" fill="#D4FF25" />
      <rect x="2" y="14" width="52" height="52" fill="#D4FF25" />
      <ellipse cx="28" cy="66" rx="26" ry="12" fill="#b8e000" />
      <ellipse cx="28" cy="14" rx="26" ry="12" fill="#e8ff8a" opacity="0.65" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-brand-blue pb-16 pt-2 sm:pb-20 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h1
            id="hero-heading"
            className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl xl:text-[3.4rem]"
          >
            Get Access to Hundreds Courses Available
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
            Unlock your creativity, gain valuable knowledge, and grow your business with our
            wide range of courses.
          </p>

          <form
            className="mx-auto mt-8 flex max-w-xl items-center rounded-full bg-white p-1.5 shadow-lg"
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
              className="shrink-0 rounded-full bg-brand-lime-bright px-7 py-2.5 text-sm font-bold text-text transition hover:brightness-95"
            >
              Search
            </button>
          </form>
        </div>

        <div className="relative mx-auto mt-12 max-w-2xl sm:mt-14 lg:mt-16 lg:max-w-3xl">
          <div
            className="absolute left-1/2 top-[42%] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-lime-bright sm:h-[380px] sm:w-[380px] lg:h-[440px] lg:w-[440px]"
            aria-hidden
          />

          <LimeSpring className="animate-float pointer-events-none absolute -left-6 top-0 z-20 scale-90 sm:left-0 sm:top-2 sm:scale-100 lg:-left-8" />
          <WhiteSquiggle className="animate-float-delay pointer-events-none absolute left-8 top-36 z-20 sm:left-16 sm:top-40 lg:left-24" />
          <Torus className="animate-float-slow pointer-events-none absolute -left-2 bottom-28 z-20 scale-90 sm:bottom-32 sm:left-4 sm:scale-100 lg:left-0" />
          <Cone className="animate-float-delay pointer-events-none absolute right-6 top-28 z-20 sm:right-16 sm:top-24 lg:right-20" />
          <Cylinder className="animate-float pointer-events-none absolute -right-2 top-2 z-20 sm:right-4 sm:top-0 lg:right-8" />

          <div className="relative z-10 mx-auto w-[210px] overflow-hidden rounded-[1.75rem] sm:w-[250px] lg:w-[280px]">
            <Image
              src="/hero-student.png"
              alt="Young man with headphones and laptop smiling"
              width={600}
              height={760}
              className="aspect-[3/4] h-auto w-full object-cover object-top"
              priority
            />
          </div>

          <aside
            className="absolute left-0 top-10 z-30 max-w-[158px] rounded-2xl bg-white p-3 shadow-xl sm:left-2 sm:top-12 sm:max-w-[180px] sm:p-4 lg:left-8"
            aria-label="UI/UX Design category"
          >
            <p className="text-sm font-bold text-text">UI/UX Design</p>
            <p className="mt-1 text-xs text-muted">200 Courses • 1000+ Students</p>
          </aside>

          <aside
            className="absolute right-0 top-24 z-30 max-w-[150px] rounded-2xl bg-white p-3 shadow-xl sm:right-4 sm:top-20 sm:max-w-[170px] sm:p-4 lg:right-10"
            aria-label="Learning progress"
          >
            <p className="text-xs font-medium text-muted">Learning Progress</p>
            <p className="mt-1 text-lg font-bold text-text">55%</p>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-border">
              <div className="h-full w-[55%] rounded-full bg-brand-lime-bright" />
            </div>
          </aside>

          <aside
            className="absolute bottom-2 left-1/2 z-30 w-[min(100%,230px)] -translate-x-1/2 rounded-2xl bg-white p-3 shadow-xl sm:bottom-4 sm:left-8 sm:w-[250px] sm:translate-x-0 sm:p-4 lg:left-12"
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
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&q=80",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=64&q=80",
              ].map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
