import Image from "next/image";

const AVATARS = [
  "/figma/avatar1.png",
  "/figma/avatar2.png",
  "/figma/avatar3.png",
  "/figma/avatar4.png",
  "/figma/avatar5.png",
  "/figma/avatar6.png",
  "/figma/avatar7.png",
];

/**
 * Figma Hero_Frame (1:1695) — 1440×1024 absolute layout.
 * Parent must be aspect-[1440/1024] with overflow hidden.
 * Ellipse 7 + 3D ornaments use Figma-rendered PNGs (tint baked in, no mix-blend).
 */
export function Hero() {
  return (
    <section className="absolute inset-0" aria-labelledby="hero-heading">
      {/* Headline + search — Figma top 169, gap 60 */}
      <div
        className="absolute left-1/2 z-20 flex w-[min(100%,1200px)] -translate-x-1/2 flex-col items-center gap-[clamp(1.5rem,5.8vw,3.75rem)] px-4 text-center"
        style={{ top: "16.5%" }}
      >
        <div className="flex w-full flex-col items-center gap-6 sm:gap-8">
          <h1
            id="hero-heading"
            className="font-heading w-full max-w-[935px] text-[clamp(1.75rem,5vw,4.5rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-white"
          >
            Get Access to Hundreds Courses Available
          </h1>
          <p className="font-nav max-w-[819px] text-sm leading-[1.6] text-[#e5e6e8] sm:text-lg">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide
            range of courses.
          </p>
        </div>

        <form
          className="flex w-full max-w-[581px] flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          role="search"
          action="#courses"
          method="get"
        >
          <div className="flex h-[52px] w-full items-center gap-2 rounded-3xl bg-white px-6 sm:w-[461px]">
            <span className="shrink-0 text-[#82868E]" aria-hidden>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
                <path
                  d="M20 20l-3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
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
              className="font-nav min-w-0 flex-1 bg-transparent text-lg leading-7 text-text placeholder:text-[#82868E] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="font-nav inline-flex h-[52px] shrink-0 items-center justify-center rounded-3xl bg-brand-lime px-6 text-lg font-medium leading-[1.2] text-[#242528] transition hover:brightness-95"
          >
            Search
          </button>
        </form>
      </div>

      {/* Ellipse 7 — Figma 1:1866 @ 145,582 / 1149×1149 (export = visible top slice) */}
      <div
        className="pointer-events-none absolute z-0"
        style={{ left: "10.07%", top: "56.84%", width: "79.79%" }}
        aria-hidden
      >
        <Image
          src="/figma/hero/ellipse7.png"
          alt=""
          width={1149}
          height={442}
          unoptimized
          priority
          className="h-auto w-full select-none"
        />
      </div>

      {/* Person — Figma 431,512 / 578×541 */}
      <div
        className="absolute z-10"
        style={{
          left: "29.9%",
          top: "50%",
          width: "40.1%",
          filter:
            "drop-shadow(25.8px 36.9px 36px rgba(0,0,0,0.1)) drop-shadow(16.9px 24.2px 24px rgba(0,0,0,0.09)) drop-shadow(5.4px 7.7px 9.6px rgba(0,0,0,0.07))",
        }}
      >
        <Image
          src="/figma/hero/hero-person.png"
          alt="Young man with headphones and laptop smiling"
          width={578}
          height={541}
          unoptimized
          priority
          className="pointer-events-none h-auto w-full select-none object-contain object-top"
        />
      </div>

      {/* 3D ornaments — Figma 46:79 children, tint baked into PNGs (no mix-blend) */}
      <div
        className="pointer-events-none absolute aspect-square z-[5]"
        style={{ left: "-8.19%", top: "21.58%", width: "26.74%" }}
        aria-hidden
      >
        <Image
          src="/figma/hero/orn-spring-lime.png"
          alt=""
          fill
          unoptimized
          priority
          className="object-contain"
          sizes="400px"
        />
      </div>
      <div
        className="pointer-events-none absolute aspect-square z-[5]"
        style={{ left: "24.86%", top: "46.58%", width: "12.15%" }}
        aria-hidden
      >
        <Image
          src="/figma/hero/orn-spring-white-sm.png"
          alt=""
          fill
          unoptimized
          className="object-contain"
          sizes="200px"
        />
      </div>
      <div
        className="pointer-events-none absolute aspect-square z-[5]"
        style={{ left: "1.25%", top: "66.6%", width: "23.75%" }}
        aria-hidden
      >
        <Image
          src="/figma/hero/orn-torus.png"
          alt=""
          fill
          unoptimized
          className="object-contain"
          sizes="350px"
        />
      </div>
      <div
        className="pointer-events-none absolute aspect-square z-[5]"
        style={{ left: "85.49%", top: "21.58%", width: "25.69%" }}
        aria-hidden
      >
        <Image
          src="/figma/hero/orn-cylinder.png"
          alt=""
          fill
          unoptimized
          priority
          className="object-contain"
          sizes="400px"
        />
      </div>
      <div
        className="pointer-events-none absolute aspect-square z-[5]"
        style={{ left: "76.81%", top: "45.31%", width: "13.06%" }}
        aria-hidden
      >
        <Image
          src="/figma/hero/orn-pyramid.png"
          alt=""
          fill
          unoptimized
          className="object-contain"
          sizes="200px"
        />
      </div>
      <div
        className="pointer-events-none absolute aspect-square z-[5]"
        style={{ left: "78.26%", top: "65.63%", width: "22.92%" }}
        aria-hidden
      >
        <Image
          src="/figma/hero/orn-spring-white-lg.png"
          alt=""
          fill
          unoptimized
          className="object-contain"
          sizes="350px"
        />
      </div>

      {/* UI/UX Design — 404, 639 */}
      <aside
        className="absolute z-30 rounded-2xl bg-white p-4 backdrop-blur-[10px]"
        style={{ left: "28%", top: "62.4%" }}
        aria-label="UI/UX Design category"
      >
        <p className="font-nav text-base font-medium leading-[1.2] text-[#242528]">UI/UX Design</p>
        <div className="mt-0.5 flex items-start gap-2 text-[#82868E]">
          <span className="font-nav text-xs leading-[1.6]">200 Courses</span>
          <span className="text-[10px] leading-[1.5]">•</span>
          <span className="font-nav text-xs leading-[1.6]">1000+ Students</span>
        </div>
      </aside>

      {/* Learning Progress — 842, 651 */}
      <aside
        className="absolute z-30 flex w-[min(42%,232px)] flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]"
        style={{ left: "58.5%", top: "63.6%" }}
        aria-label="Learning progress"
      >
        <p className="font-nav text-sm font-medium leading-[1.2] text-[#242528]">
          Learning Progress
        </p>
        <p className="font-heading text-[clamp(2rem,3.3vw,3rem)] font-semibold leading-[1.2] tracking-[-0.48px] text-[#242528]">
          55%
        </p>
        <div className="relative h-2 w-full max-w-[200px] overflow-hidden rounded-3xl bg-[#f6f6f6]">
          <div className="absolute inset-y-0 left-0 w-[56%] rounded-3xl bg-brand-lime" />
        </div>
      </aside>

      {/* Happy Students — 328, 837 */}
      <aside
        className="absolute z-30 flex w-[min(48%,258px)] flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]"
        style={{ left: "22.8%", top: "81.7%" }}
        aria-label="Happy students rating"
      >
        <div>
          <p className="font-nav text-base font-medium leading-[1.2] text-[#242528]">
            Happy Students
          </p>
          <p className="flex items-center font-nav text-xs leading-[1.6]">
            <span className="text-[#242528]">4.5 </span>
            <span className="text-[#82868E]">(240)</span>
            <Image
              src="/figma/hero/star.svg"
              alt=""
              width={16}
              height={16}
              unoptimized
              className="ml-0.5 size-4"
              aria-hidden
            />
          </p>
        </div>
        <div className="flex items-start" aria-hidden>
          {AVATARS.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={43}
              height={43}
              className="size-[34px] rounded-full object-cover sm:size-[43px]"
              style={{ marginLeft: i === 0 ? 0 : -16 }}
            />
          ))}
          <span
            className="relative flex size-[34px] items-center justify-center sm:size-[43px]"
            style={{ marginLeft: -16 }}
          >
            <Image
              src="/figma/hero/2k.svg"
              alt=""
              width={43}
              height={43}
              unoptimized
              className="absolute inset-0 size-full"
            />
            <span className="relative font-nav text-[10px] font-bold leading-[1.5] text-[#242528] sm:text-xs">
              2K+
            </span>
          </span>
        </div>
      </aside>
    </section>
  );
}
