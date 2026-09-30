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

type OrnamentProps = {
  src: string;
  tint: "#d4fb20" | "#f5f5f6";
  className: string;
  flip?: boolean;
};

function Ornament({ src, tint, className, flip = false }: Readonly<OrnamentProps>) {
  return (
    <div className={`pointer-events-none absolute z-20 ${className}`} aria-hidden>
      <div className={`relative size-full ${flip ? "-scale-x-100" : ""}`}>
        <Image src={src} alt="" fill sizes="400px" className="object-contain drop-shadow-2xl" />
        <div
          className="absolute inset-0 mix-blend-hard-light"
          style={{
            backgroundColor: tint,
            WebkitMaskImage: `url(${src})`,
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskImage: `url(${src})`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        {/* Headline + search — Figma Hero cluster y≈169 */}
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-4 pt-6 text-center sm:gap-14 sm:px-6 sm:pt-10 lg:pt-8">
          <div className="flex w-full flex-col items-center gap-6 sm:gap-8">
            <h1
              id="hero-heading"
              className="font-heading w-full max-w-[935px] text-[clamp(2rem,5.2vw,4.5rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-white"
            >
              Get Access to Hundreds Courses Available
            </h1>
            <p className="font-nav max-w-[819px] text-base leading-[1.6] text-[#e5e6e8] sm:text-lg">
              Unlock your creativity, gain valuable knowledge, and grow your business with our
              wide range of courses.
            </p>
          </div>

          <form
            className="flex w-full max-w-[541px] flex-col items-stretch gap-4 sm:mx-auto sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4"
            role="search"
            action="#courses"
            method="get"
          >
            <div className="flex h-12 w-full items-center gap-2 rounded-3xl bg-white px-6 sm:w-[461px]">
              <span className="shrink-0 text-[#6B7280]" aria-hidden>
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
                className="font-nav min-w-0 flex-1 bg-transparent text-lg leading-7 text-text placeholder:text-[#6B7280] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="font-nav inline-flex h-12 shrink-0 items-center justify-center rounded-3xl bg-brand-lime px-6 text-lg font-medium leading-5 text-text transition hover:brightness-95"
            >
              Search
            </button>
          </form>
        </div>

        {/* Visual stage — Figma person y=512 relative to 1024 hero frame */}
        <div className="relative mx-auto mt-2 h-[420px] w-full sm:mt-0 sm:h-[520px] lg:h-[560px]">
          {/* Figma Ellipse 7: thick lime stroke ring (not filled disc) */}
          <div
            className="pointer-events-none absolute left-1/2 top-[42%] z-0 h-[min(90vw,720px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/4 sm:top-[38%] lg:h-[900px] lg:w-[900px]"
            aria-hidden
          >
            <Image
              src="/figma/lime-circle.svg"
              alt=""
              fill
              unoptimized
              className="object-contain"
              sizes="900px"
            />
          </div>

          {/* 3D ornaments — Figma 46:79 absolute positions scaled */}
          <Ornament
            src="/figma/ornament-cylinder.png"
            tint="#d4fb20"
            className="-left-[8%] top-[-8%] h-[200px] w-[200px] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px]"
          />
          <Ornament
            src="/figma/ornament-cylinder.png"
            tint="#f5f5f6"
            flip
            className="left-[22%] top-[42%] h-[100px] w-[100px] sm:h-[140px] sm:w-[140px] lg:left-[24%] lg:h-[160px] lg:w-[160px]"
          />
          <Ornament
            src="/figma/ornament-cone.png"
            tint="#f5f5f6"
            className="-left-[2%] bottom-[-8%] h-[180px] w-[180px] sm:h-[240px] sm:w-[240px] lg:h-[280px] lg:w-[280px]"
          />
          <Ornament
            src="/figma/ornament-cone2.png"
            tint="#d4fb20"
            className="-right-[6%] top-[-10%] h-[200px] w-[180px] sm:h-[280px] sm:w-[250px] lg:h-[320px] lg:w-[280px]"
          />
          <Ornament
            src="/figma/ornament-cone3.png"
            tint="#f5f5f6"
            className="right-[8%] top-[28%] h-[100px] w-[100px] sm:right-[12%] sm:h-[140px] sm:w-[140px] lg:h-[160px] lg:w-[160px]"
          />
          <Ornament
            src="/figma/ornament-spring.png"
            tint="#f5f5f6"
            className="-right-[4%] bottom-[-10%] h-[180px] w-[180px] sm:h-[240px] sm:w-[240px] lg:h-[280px] lg:w-[280px]"
          />

          {/* Person — Figma 431,512 / 578×541 */}
          <div
            className="absolute bottom-0 left-1/2 z-10 w-[min(82%,360px)] -translate-x-1/2 sm:w-[480px] lg:w-[578px]"
            style={{
              filter:
                "drop-shadow(25px 36px 36px rgba(0,0,0,0.1)) drop-shadow(10px 14px 16px rgba(0,0,0,0.08))",
            }}
          >
            <Image
              src="/figma/hero-person.png"
              alt="Young man with headphones and laptop smiling"
              width={516}
              height={483}
              unoptimized
              className="pointer-events-none h-auto w-full select-none"
              style={{ aspectRatio: "516 / 483" }}
              priority
            />
          </div>

          {/* UI/UX Design — Figma 404,639 */}
          <aside
            className="absolute left-2 top-[38%] z-30 rounded-2xl bg-white/95 p-4 shadow-[inset_0_4px_0_0_rgba(255,255,255,0.25)] backdrop-blur-[10px] sm:left-[12%] sm:top-[36%] lg:left-[22%]"
            aria-label="UI/UX Design category"
          >
            <p className="font-nav text-base font-medium leading-5 text-text">UI/UX Design</p>
            <div className="mt-1 flex items-start gap-2 text-[#6B7280]">
              <span className="font-nav text-xs leading-5">200 Courses</span>
              <span className="text-[10px] leading-4">•</span>
              <span className="font-nav text-xs leading-5">1000+ Students</span>
            </div>
          </aside>

          {/* Learning Progress — Figma 842,651 */}
          <aside
            className="absolute right-2 top-[32%] z-30 w-[200px] rounded-2xl bg-white/95 p-4 shadow-[inset_0_4px_0_0_rgba(255,255,255,0.25)] backdrop-blur-[10px] sm:right-[10%] sm:top-[30%] sm:w-[232px] lg:right-[16%]"
            aria-label="Learning progress"
          >
            <p className="font-nav text-sm font-medium leading-4 text-text">Learning Progress</p>
            <p className="mt-2 font-heading text-5xl font-semibold leading-[1.2] text-text">55%</p>
            <div className="relative mt-2 h-2 w-full overflow-hidden rounded-full bg-[#f6f6f6]">
              <div className="absolute inset-y-0 left-0 w-[56%] rounded-full bg-brand-lime" />
            </div>
          </aside>

          {/* Happy Students — Figma 328,837 */}
          <aside
            className="absolute bottom-2 left-2 z-30 w-[min(100%,258px)] rounded-2xl bg-white/95 p-4 shadow-[inset_0_4px_0_0_rgba(255,255,255,0.25)] backdrop-blur-[10px] sm:bottom-4 sm:left-[10%] lg:left-[14%]"
            aria-label="Happy students rating"
          >
            <p className="font-nav text-base font-medium leading-5 text-text">Happy Students</p>
            <p className="mt-0.5 flex items-center gap-0.5 text-xs leading-5">
              <span className="text-text">4.5 </span>
              <span className="text-[#6B7280]">(240)</span>
              <Image
                src="/figma/star.svg"
                alt=""
                width={16}
                height={16}
                unoptimized
                className="ml-0.5 size-4"
                aria-hidden
              />
            </p>
            <div className="mt-2 flex items-center">
              <div className="flex" aria-hidden>
                {AVATARS.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={43}
                    height={43}
                    className="h-[34px] w-[34px] rounded-full border-2 border-white object-cover sm:h-[43px] sm:w-[43px]"
                    style={{ marginLeft: i === 0 ? 0 : -16 }}
                  />
                ))}
              </div>
              <span
                className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-white bg-brand-lime text-[10px] font-bold text-text sm:h-[43px] sm:w-[43px] sm:text-xs"
                style={{ marginLeft: -16 }}
              >
                2K+
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
