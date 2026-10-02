import Image from "next/image";

const AVATARS = [
  "/figma/avatar1.png",
  "/figma/avatar2.png",
  "/figma/avatar3.png",
  "/figma/avatar4.png",
  "/figma/avatar5.png",
  "/figma/avatar6.png",
  "/figma/avatar7.png",
] as const;

/**
 * Figma Hero_Frame (1:1695) content — absolute layout in the fixed
 * 1440×1024 `.hero-design` space (no CSS scale; browser zoom works).
 */
export function Hero() {
  return (
    <div className="absolute inset-0 overflow-visible">
      {/* Hero copy + search — Figma 1:1769 @ 120,169 / 1200×345 */}
      <div className="absolute left-[120px] top-[169px] z-40 flex w-[1200px] flex-col items-center gap-[60px] text-center">
        <div className="flex w-full max-w-[935px] flex-col items-center gap-8">
          <h1
            id="hero-heading"
            className="font-heading w-full text-[4.5rem] font-semibold leading-[1.2] tracking-[-0.72px] text-white"
          >
            Get Access to Hundreds Courses Available
          </h1>
          <p className="font-nav w-max max-w-none whitespace-nowrap text-lg leading-[1.6] text-[#E5E6E8]">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        <form
          className="relative z-40 flex w-full max-w-[581px] flex-row items-start gap-4"
          role="search"
          action="#courses"
          method="get"
        >
          <div className="flex h-[52px] w-[461px] items-center gap-2 rounded-3xl bg-white px-6">
            <button
              type="submit"
              className="shrink-0 text-[#82868E] transition hover:text-[#242528]"
              aria-label="Search"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
                <path
                  d="M20 20l-3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <label htmlFor="hero-search" className="sr-only">
              Search courses
            </label>
            <input
              id="hero-search"
              name="q"
              type="search"
              placeholder="Course, topic, creator"
              autoComplete="off"
              className="font-nav min-w-0 flex-1 bg-transparent text-lg leading-[1.6] text-[#242528] placeholder:text-[#82868E] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="font-nav inline-flex h-[46px] shrink-0 items-center justify-center rounded-3xl bg-brand-lime px-6 py-3 text-lg font-medium leading-[1.2] text-[#242528] transition hover:brightness-95 sm:mt-[3px]"
          >
            Search
          </button>
        </form>
      </div>

      {/* Ellipse 7 — Figma 1:1866: ring #CBFC01, r=414.5, stroke=320 @ 145,582 */}
      <div
        className="pointer-events-none absolute z-0 size-[1149px]"
        style={{ left: 145, top: 582 }}
        aria-hidden
      >
        <svg
          width={1149}
          height={1149}
          viewBox="0 0 1149 1149"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block size-full max-w-none"
        >
          <circle cx="574.5" cy="574.5" r="414.5" stroke="#CBFC01" strokeWidth="320" />
        </svg>
      </div>

      {/* 3D ornaments — Figma 46:79 (individual @2x assets + float) */}
      <div className="pointer-events-none absolute inset-0 z-[15]" aria-hidden>
        {/* Lime spring — 46:90 @ -118,221 / 385 */}
        <div
          className="animate-float-ornament absolute size-[385px]"
          style={{ left: -118, top: 221 }}
        >
          <Image
            src="/figma/hero/orn-spring-lime@2x.png?v=color3"
            alt=""
            width={385}
            height={385}
            unoptimized
            priority
            className="size-full max-w-none object-contain select-none"
          />
        </div>
        {/* White spring sm — 46:95 @ 358,477 / 175 (mirrored); shifted left so visual mass matches Figma */}
        <div
          className="animate-float-ornament-soft animate-float-delay absolute size-[175px]"
          style={{ left: 280, top: 477 }}
        >
          <div className="size-full -scale-x-100">
            <Image
              src="/figma/hero/orn-spring-white-sm@2x.png?v=color3"
              alt=""
              width={175}
              height={175}
              unoptimized
              priority
              className="size-full max-w-none object-contain select-none"
            />
          </div>
        </div>
        {/* Torus — 46:105 @ 18,682 / 342 */}
        <div
          className="animate-float-ornament-alt animate-float-delay-2 absolute size-[342px]"
          style={{ left: 18, top: 682 }}
        >
          <Image
            src="/figma/hero/orn-torus@2x.png?v=color3"
            alt=""
            width={342}
            height={342}
            unoptimized
            priority
            className="size-full max-w-none object-contain select-none"
          />
        </div>
        {/* Lime cylinder — 46:110 @ 1231,221 / 370 */}
        <div
          className="animate-float-ornament-alt animate-float-delay absolute size-[370px]"
          style={{ left: 1231, top: 221 }}
        >
          <Image
            src="/figma/hero/orn-cylinder@2x.png?v=color3"
            alt=""
            width={370}
            height={370}
            unoptimized
            priority
            className="size-full max-w-none object-contain select-none"
          />
        </div>
        {/* Pyramid — 46:80 @ 1106,464 / 188 */}
        <div
          className="animate-float-ornament-soft absolute size-[188px]"
          style={{ left: 1106, top: 464 }}
        >
          <Image
            src="/figma/hero/orn-pyramid@2x.png?v=color3"
            alt=""
            width={188}
            height={188}
            unoptimized
            priority
            className="size-full max-w-none object-contain select-none"
          />
        </div>
        {/* White spring lg — 46:85 @ 1127,672 / 330 */}
        <div
          className="animate-float-ornament animate-float-delay-3 absolute size-[330px]"
          style={{ left: 1127, top: 672 }}
        >
          <Image
            src="/figma/hero/orn-spring-white-lg@2x.png?v=color3"
            alt=""
            width={330}
            height={330}
            unoptimized
            priority
            className="size-full max-w-none object-contain select-none"
          />
        </div>
      </div>

      {/* Person — Figma 1:1796 @ 431,512 / 578×541 (pointer-events none so search stays typable) */}
      <div
        className="pointer-events-none absolute z-20"
        style={{
          left: 431,
          top: 512,
          width: 578,
          height: 541,
          filter:
            "drop-shadow(51.038px 72.912px 72px rgba(0,0,0,0.13)) drop-shadow(25.838px 36.912px 36px rgba(0,0,0,0.1)) drop-shadow(10.208px 14.582px 16.087px rgba(0,0,0,0.08))",
        }}
      >
        <Image
          src="/figma/hero/hero-person.png"
          alt="Young man with headphones and laptop smiling"
          fill
          unoptimized
          priority
          className="pointer-events-none select-none object-cover object-top"
          sizes="40vw"
        />
      </div>

      {/* UI/UX Design — 404,639 */}
      <aside
        className="animate-float-card absolute z-30"
        style={{ left: 404, top: 639 }}
        aria-label="UI/UX Design category"
      >
        <div className="rounded-2xl bg-white p-4 backdrop-blur-[10px] transition hover:-translate-y-1 hover:shadow-md">
          <p className="font-nav text-base font-medium leading-[1.2] text-[#242528]">UI/UX Design</p>
          <div className="flex items-start gap-2 whitespace-nowrap text-[#82868E]">
            <span className="font-nav text-xs leading-[1.6]">200 Courses</span>
            <span className="text-[10px] leading-[1.5]">•</span>
            <span className="font-nav text-xs leading-[1.6]">1000+ Students</span>
          </div>
        </div>
      </aside>

      {/* Learning Progress — 842,651 / 232 */}
      <aside
        className="animate-float-card animate-float-delay absolute z-30 w-[232px]"
        style={{ left: 842, top: 651 }}
        aria-label="Learning progress"
      >
        <div className="flex flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px] transition hover:-translate-y-1 hover:shadow-md">
          <p className="font-nav text-sm font-medium leading-[1.2] text-[#242528]">
            Learning Progress
          </p>
          <p className="font-heading text-5xl font-semibold leading-[1.2] tracking-[-0.48px] text-[#242528]">
            55%
          </p>
          <div className="relative h-2 w-full max-w-[200px] overflow-hidden rounded-3xl bg-[#F6F6F6]">
            <div className="absolute inset-y-0 left-0 w-[56%] rounded-3xl bg-brand-lime" />
          </div>
        </div>
      </aside>

      {/* Happy Students — 328,837 / 258 */}
      <aside
        className="animate-float-card animate-float-delay-2 absolute z-30 w-[258px]"
        style={{ left: 328, top: 837 }}
        aria-label="Happy students rating"
      >
        <div className="flex flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px] transition hover:-translate-y-1 hover:shadow-md">
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
              className="size-[43px] rounded-full object-cover"
              style={{ marginLeft: i === 0 ? 0 : -16 }}
            />
          ))}
          <span
            className="relative flex size-[43px] items-center justify-center"
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
            <span className="relative font-nav text-xs font-bold leading-[1.5] text-[#242528]">
              2K+
            </span>
          </span>
        </div>
        </div>
      </aside>
    </div>
  );
}
