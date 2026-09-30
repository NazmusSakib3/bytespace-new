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
    <div className={`pointer-events-none absolute z-[15] ${className}`} aria-hidden>
      <div className={`relative size-full ${flip ? "-scale-x-100" : ""}`}>
        <Image
          src={src}
          alt=""
          fill
          unoptimized
          sizes="400px"
          className="object-contain drop-shadow-2xl"
        />
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
    <section className="relative" aria-labelledby="hero-heading">
      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        {/* Headline + search — Figma y≈169–514 */}
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 px-4 pt-2 text-center sm:gap-10 sm:px-6 lg:gap-14 lg:pt-0">
          <div className="flex w-full flex-col items-center gap-6 sm:gap-8">
            <h1
              id="hero-heading"
              className="font-heading w-full max-w-[935px] text-[clamp(2rem,5.2vw,4.5rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-white"
            >
              Get Access to Hundreds Courses Available
            </h1>
            <p className="font-nav max-w-[819px] text-base leading-[1.6] text-[#e5e6e8] sm:text-lg sm:leading-7">
              Unlock your creativity, gain valuable knowledge, and grow your business with our
              wide range of courses.
            </p>
          </div>

          <form
            className="flex w-full max-w-[541px] flex-col items-stretch gap-4 sm:mx-auto sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center"
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

        {/*
          Visual stage — Figma Hero_Frame bottom: person (431,512), ellipse (145,582).
          Ellipse center sits just below the fold so only the upper lime arc shows.
        */}
        <div className="relative mx-auto mt-4 h-[460px] w-full overflow-hidden sm:mt-6 sm:h-[540px] lg:h-[600px]">
          {/* Lime ring — clipped at bottom like Figma */}
          <svg
            className="pointer-events-none absolute left-[5%] top-[18%] z-0 h-[120%] w-[90%] sm:left-[8%] sm:top-[12%] lg:left-[10%] lg:w-[80%]"
            viewBox="0 0 1149 1149"
            fill="none"
            aria-hidden
            preserveAspectRatio="xMidYMin meet"
          >
            <circle
              cx="574.5"
              cy="574.5"
              r="414.5"
              stroke="#CBFC01"
              strokeWidth="320"
            />
          </svg>

          {/* Ornaments — Figma 46:79 */}
          <Ornament
            src="/figma/ornament-cylinder.png"
            tint="#d4fb20"
            className="-left-[6%] top-[-4%] h-[180px] w-[180px] sm:h-[260px] sm:w-[260px] lg:-left-[4%] lg:h-[320px] lg:w-[320px]"
          />
          <Ornament
            src="/figma/ornament-cylinder.png"
            tint="#f5f5f6"
            flip
            className="left-[20%] top-[38%] h-[90px] w-[90px] sm:left-[22%] sm:h-[130px] sm:w-[130px] lg:left-[24%] lg:h-[150px] lg:w-[150px]"
          />
          <Ornament
            src="/figma/ornament-cone.png"
            tint="#f5f5f6"
            className="-left-[1%] bottom-[-6%] h-[160px] w-[160px] sm:h-[220px] sm:w-[220px] lg:left-[1%] lg:h-[260px] lg:w-[260px]"
          />
          <Ornament
            src="/figma/ornament-cone2.png"
            tint="#d4fb20"
            className="-right-[5%] top-[-6%] h-[170px] w-[160px] sm:h-[250px] sm:w-[230px] lg:-right-[2%] lg:h-[300px] lg:w-[270px]"
          />
          <Ornament
            src="/figma/ornament-cone3.png"
            tint="#f5f5f6"
            className="right-[10%] top-[26%] h-[90px] w-[90px] sm:right-[12%] sm:h-[130px] sm:w-[130px] lg:right-[14%] lg:h-[150px] lg:w-[150px]"
          />
          <Ornament
            src="/figma/ornament-spring.png"
            tint="#f5f5f6"
            className="-right-[3%] bottom-[-8%] h-[160px] w-[160px] sm:h-[220px] sm:w-[220px] lg:right-[0%] lg:h-[260px] lg:w-[260px]"
          />

          {/* Person — Figma 578×541, sits on bottom edge */}
          <div
            className="absolute bottom-0 left-1/2 z-10 w-[min(88%,380px)] -translate-x-1/2 sm:w-[500px] lg:w-[560px]"
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

          {/* UI/UX Design — mid-left of person */}
          <aside
            className="absolute left-3 top-[34%] z-30 rounded-2xl bg-white p-4 shadow-[inset_0_4px_0_0_rgba(255,255,255,0.25)] backdrop-blur-[10px] sm:left-[14%] sm:top-[32%] lg:left-[22%]"
            aria-label="UI/UX Design category"
          >
            <p className="font-nav text-base font-medium leading-5 text-text">UI/UX Design</p>
            <div className="mt-1 flex items-start gap-2 text-[#6B7280]">
              <span className="font-nav text-xs leading-5">200 Courses</span>
              <span className="text-[10px] leading-4">•</span>
              <span className="font-nav text-xs leading-5">1000+ Students</span>
            </div>
          </aside>

          {/* Learning Progress — mid-right */}
          <aside
            className="absolute right-3 top-[28%] z-30 w-[180px] rounded-2xl bg-white p-4 shadow-[inset_0_4px_0_0_rgba(255,255,255,0.25)] backdrop-blur-[10px] sm:right-[12%] sm:top-[26%] sm:w-[232px] lg:right-[16%]"
            aria-label="Learning progress"
          >
            <p className="font-nav text-sm font-medium leading-4 text-text">Learning Progress</p>
            <p className="mt-2 font-heading text-5xl font-semibold leading-[1.2] text-text">55%</p>
            <div className="relative mt-2 h-2 w-full overflow-hidden rounded-full bg-[#f6f6f6]">
              <div className="absolute inset-y-0 left-0 w-[56%] rounded-full bg-brand-lime" />
            </div>
          </aside>

          {/* Happy Students — lower left */}
          <aside
            className="absolute bottom-3 left-3 z-30 w-[min(92%,258px)] rounded-2xl bg-white p-4 shadow-[inset_0_4px_0_0_rgba(255,255,255,0.25)] backdrop-blur-[10px] sm:bottom-6 sm:left-[12%] lg:left-[16%]"
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
