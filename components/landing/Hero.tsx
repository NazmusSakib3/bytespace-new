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
    <section
      className="relative overflow-hidden bg-brand-blue"
      aria-labelledby="hero-heading"
    >
      {/* Figma grid (120px cells, 12% white) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/figma/hero-grid.svg"
          alt=""
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        {/* Headline + search — Figma Hero cluster */}
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-4 pt-6 text-center sm:gap-[60px] sm:px-6 sm:pt-10 lg:pt-8">
          <div className="flex w-full flex-col items-center gap-6 sm:gap-8">
            <h1
              id="hero-heading"
              className="font-heading w-full max-w-[935px] text-[clamp(2rem,5.2vw,4.5rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-white"
            >
              Get Access to Hundreds Courses Available
            </h1>
            <p className="max-w-[900px] text-base leading-[1.6] text-[#e5e6e8] sm:text-lg">
              Unlock your creativity, gain valuable knowledge, and grow your business with our
              wide range of courses.
            </p>
          </div>

          {/* Search — Figma visual: lime Search button inside white pill */}
          <form
            className="mx-auto flex h-[52px] w-full max-w-[581px] items-center gap-2 rounded-[24px] bg-white py-1.5 pl-6 pr-1.5 shadow-sm"
            role="search"
            action="#courses"
            method="get"
          >
            <span className="shrink-0 text-muted" aria-hidden>
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
              className="min-w-0 flex-1 bg-transparent text-base leading-[1.6] text-text placeholder:text-muted focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-full shrink-0 items-center justify-center rounded-[20px] bg-brand-lime px-6 text-lg font-medium text-text transition hover:brightness-95"
            >
              Search
            </button>
          </form>
        </div>

        {/* Visual stage — person, lime circle, ornaments, floating cards */}
        <div className="relative mx-auto mt-6 h-[460px] w-full sm:mt-2 sm:h-[520px] lg:h-[560px]">
          {/* Lime circle behind person (Figma ~520–560 visible disc) */}
          <div
            className="absolute left-1/2 top-[8%] z-0 size-[280px] -translate-x-1/2 rounded-full bg-brand-lime sm:size-[400px] lg:top-[6%] lg:size-[520px]"
            aria-hidden
          />

          {/* 3D ornaments — positions approx. Figma 1440 layout */}
          <Ornament
            src="/figma/ornament-cylinder.png"
            tint="#d4fb20"
            className="-left-4 top-0 h-[160px] w-[140px] sm:left-[2%] sm:h-[220px] sm:w-[190px] lg:left-[4%] lg:h-[280px] lg:w-[240px]"
          />
          <Ornament
            src="/figma/ornament-cylinder.png"
            tint="#f5f5f6"
            flip
            className="left-[8%] top-[38%] h-[90px] w-[80px] sm:left-[14%] sm:h-[120px] sm:w-[110px] lg:left-[18%] lg:h-[140px] lg:w-[120px]"
          />
          <Ornament
            src="/figma/ornament-cone.png"
            tint="#f5f5f6"
            className="-left-2 bottom-0 h-[140px] w-[150px] sm:left-[6%] sm:h-[190px] sm:w-[200px] lg:left-[8%] lg:h-[230px] lg:w-[240px]"
          />
          <Ornament
            src="/figma/ornament-cone2.png"
            tint="#d4fb20"
            className="-right-2 top-0 h-[150px] w-[130px] sm:right-[1%] sm:h-[210px] sm:w-[180px] lg:right-[2%] lg:h-[260px] lg:w-[220px]"
          />
          <Ornament
            src="/figma/ornament-cone3.png"
            tint="#f5f5f6"
            className="right-[6%] top-[36%] h-[95px] w-[85px] sm:right-[12%] sm:h-[130px] sm:w-[115px] lg:right-[14%] lg:h-[150px] lg:w-[130px]"
          />
          <Ornament
            src="/figma/ornament-spring.png"
            tint="#f5f5f6"
            className="-right-4 bottom-0 h-[130px] w-[140px] sm:right-[2%] sm:h-[180px] sm:w-[190px] lg:right-[4%] lg:h-[220px] lg:w-[230px]"
          />

          {/* Hero person */}
          <div className="absolute bottom-0 left-1/2 z-10 w-[min(72%,340px)] -translate-x-1/2 sm:w-[420px] lg:w-[500px]">
            <Image
              src="/figma/hero-person.png"
              alt="Young man with headphones and laptop smiling"
              width={916}
              height={902}
              className="h-auto w-full object-contain object-bottom"
              style={{
                filter:
                  "drop-shadow(51px 73px 72px rgba(0,0,0,0.13)) drop-shadow(17px 24px 24px rgba(0,0,0,0.09))",
              }}
              priority
            />
          </div>

          {/* UI/UX Design card — Figma left ~404, mid height */}
          <aside
            className="absolute left-2 top-[28%] z-30 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-[10px] sm:left-[10%] sm:top-[26%] lg:left-[18%]"
            aria-label="UI/UX Design category"
          >
            <p className="text-base font-medium leading-[1.2] text-text">UI/UX Design</p>
            <div className="mt-1 flex items-start gap-2 text-muted">
              <span className="text-xs leading-[1.6]">200 Courses</span>
              <span className="text-[10px] leading-[1.5]">•</span>
              <span className="text-xs leading-[1.6]">1000+ Students</span>
            </div>
          </aside>

          {/* Learning Progress — Figma left ~842 */}
          <aside
            className="absolute right-2 top-[30%] z-30 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-[10px] sm:right-[8%] sm:top-[28%] lg:right-[14%]"
            aria-label="Learning progress"
          >
            <p className="text-sm font-medium leading-[1.2] text-text">Learning Progress</p>
            <p className="mt-1 font-heading text-[2.5rem] font-semibold leading-[1.2] tracking-[-0.01em] text-text sm:text-[3rem]">
              55%
            </p>
            <div className="mt-2 h-2 w-[160px] overflow-hidden rounded-full bg-[#f6f6f6] sm:w-[200px]">
              <div className="h-full w-[56%] rounded-full bg-brand-lime" />
            </div>
          </aside>

          {/* Happy Students — Figma left ~328, lower */}
          <aside
            className="absolute bottom-3 left-2 z-30 w-[min(100%,258px)] rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-[10px] sm:bottom-6 sm:left-[8%] lg:left-[12%]"
            aria-label="Happy students rating"
          >
            <p className="text-base font-medium leading-[1.2] text-text">Happy Students</p>
            <p className="mt-0.5 flex items-center gap-1 text-xs leading-[1.6]">
              <span className="text-text">4.5</span>
              <span className="text-muted">(240)</span>
              <span className="text-brand-yellow" aria-hidden>
                ★
              </span>
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
                className="-ml-4 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand-lime text-[10px] font-bold text-text sm:h-[43px] sm:w-[43px] sm:text-xs"
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
