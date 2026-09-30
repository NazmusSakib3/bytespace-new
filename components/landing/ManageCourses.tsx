import Image from "next/image";
import { Container } from "@/components/ui/Container";

const checklist = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const AVATARS = [
  "/figma/avatar1.png",
  "/figma/avatar2.png",
  "/figma/avatar3.png",
  "/figma/avatar4.png",
  "/figma/avatar5.png",
  "/figma/avatar6.png",
  "/figma/avatar7.png",
];

export function ManageCourses() {
  return (
    <section
      className="relative overflow-hidden bg-neutral-50 py-16 sm:py-20 lg:py-24"
      aria-labelledby="manage-heading"
    >
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-brand-blue/20 blur-[20px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 -bottom-20 h-[420px] w-[420px] rounded-full bg-brand-lime/40 blur-[20px]"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative order-2 mx-auto h-[520px] w-full max-w-[541px] sm:h-[560px] lg:order-1 lg:h-[596px] lg:max-w-none">
            {/* Woman cutout — no blue disc behind (Figma freestanding) */}
            <div
              className="absolute bottom-0 left-[6%] z-10 w-[min(88%,400px)]"
              style={{
                filter:
                  "drop-shadow(16px 24px 24px rgba(0,0,0,0.09)) drop-shadow(5px 8px 10px rgba(0,0,0,0.07))",
              }}
            >
              <Image
                src="/figma/manage-woman.png"
                alt="Creator with headset holding a tablet"
                width={435}
                height={596}
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Lime ornament */}
            <div
              className="pointer-events-none absolute right-[2%] top-[18%] z-[5] size-[140px] sm:size-[180px] lg:size-[200px]"
              aria-hidden
            >
              <Image
                src="/figma/ornament-cylinder.png"
                alt=""
                fill
                className="object-contain"
                sizes="200px"
              />
              <div
                className="absolute inset-0 mix-blend-hard-light"
                style={{
                  backgroundColor: "#d4fb20",
                  WebkitMaskImage: "url(/figma/ornament-cylinder.png)",
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: "url(/figma/ornament-cylinder.png)",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
            </div>

            <aside
              className="absolute left-0 top-[8%] z-20 w-[150px] rounded-2xl bg-brand-blue p-4 shadow-[inset_0_4px_0_0_rgba(255,255,255,0.25)] backdrop-blur-[10px] sm:w-[200px]"
              aria-label="Total revenue"
            >
              <p className="font-nav text-xs font-medium text-neutral-100 sm:text-base sm:leading-5">
                Total Revenue
              </p>
              <p className="text-[10px] leading-3 text-neutral-100">July 1-28</p>
              <div className="mt-2 flex items-center justify-between gap-2">
                <p className="font-heading text-lg font-semibold text-neutral-100 sm:text-2xl sm:leading-8">
                  $120.29
                </p>
                <span className="rounded-full bg-brand-lime px-2 py-0.5 text-[10px] font-medium text-text">
                  +12$
                </span>
              </div>
              <div className="relative mt-2 h-2 w-full overflow-hidden rounded-full bg-white">
                <div className="absolute inset-y-0 left-0 w-[70%] rounded-full bg-brand-lime" />
              </div>
            </aside>

            <aside
              className="absolute left-0 top-[34%] z-20 w-[128px] rounded-2xl bg-brand-blue p-4 shadow-[inset_0_4px_0_0_rgba(255,255,255,0.25)] backdrop-blur-[10px]"
              aria-label="Year to date revenue"
            >
              <p className="font-nav text-base font-medium leading-5 text-neutral-100">Year to Date</p>
              <p className="text-[10px] leading-3 text-neutral-100">2023</p>
              <p className="mt-2 font-heading text-2xl font-semibold leading-8 text-neutral-100">
                $1,200.38
              </p>
              <span className="mt-2 inline-block rounded-full bg-brand-lime px-2 py-0.5 text-[10px] font-medium text-text">
                +12$
              </span>
            </aside>

            <aside
              className="absolute bottom-6 right-0 z-20 w-[min(100%,258px)] rounded-2xl bg-white p-4 shadow-[inset_0_4px_0_0_rgba(255,255,255,0.25)] backdrop-blur-[10px]"
              aria-label="Happy students"
            >
              <p className="font-nav text-base font-medium leading-6 text-text">Happy Students</p>
              <p className="mt-0.5 flex items-center gap-0.5 text-[10px] leading-4">
                <span className="font-bold text-text">4.5 </span>
                <span className="text-[#6B7280]">(240)</span>
                <Image
                  src="/figma/star.svg"
                  alt=""
                  width={13}
                  height={13}
                  unoptimized
                  className="ml-0.5 size-[13px]"
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

          <div className="order-1 lg:order-2">
            <h2
              id="manage-heading"
              className="font-heading max-w-md text-2xl font-semibold tracking-[-0.01em] text-text sm:text-3xl lg:text-[44px] lg:leading-[52.8px]"
            >
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="font-nav mt-10 max-w-[574px] text-base leading-[1.6] text-muted sm:text-lg">
              <span className="font-bold text-text">ByteSpace</span> supports individuals or
              entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="mt-10 space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-end gap-2">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center text-brand-blue"
                    aria-hidden
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </span>
                  <span className="font-nav text-base font-medium leading-5 text-text sm:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
