import Image from "next/image";
import { Container } from "@/components/ui/Container";

const checklist = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const AVATARS = [
  "/figma/manage-avatar1.png",
  "/figma/manage-avatar2.png",
  "/figma/manage-avatar3.png",
  "/figma/manage-avatar4.png",
  "/figma/manage-avatar5.png",
  "/figma/manage-avatar6.png",
  "/figma/manage-avatar7.png",
];

export function ManageCourses() {
  return (
    <section
      className="relative overflow-hidden bg-[#F8F8F9] pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14"
      aria-labelledby="manage-heading"
    >
      <div
        className="pointer-events-none absolute -left-[20%] top-[5%] h-[720px] w-[720px] rounded-full bg-[#003BE2]/12 blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[10%] bottom-[-5%] h-[640px] w-[640px] rounded-full bg-[#D4FB20]/30 blur-[80px]"
        aria-hidden
      />

      <Container className="relative z-10">
        {/* Figma Frame 14: collage 541 + gap + text 580 */}
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-[79px]">
          {/* Collage — Figma Frame 12: 541 × 596 */}
          <div className="relative order-2 mx-auto h-[480px] w-full max-w-[541px] sm:h-[540px] lg:order-1 lg:h-[596px] lg:shrink-0 lg:max-w-none">
            {/* Woman cutout — centered, slightly left */}
            <div
              className="absolute left-1/2 top-0 z-10 h-full w-[min(80%,435px)] -translate-x-[55%]"
              style={{
                filter:
                  "drop-shadow(16.9px 24.2px 24px rgba(0,0,0,0.09)) drop-shadow(10.2px 14.6px 16px rgba(0,0,0,0.08)) drop-shadow(5.4px 7.7px 9.6px rgba(0,0,0,0.07))",
              }}
            >
              <Image
                src="/figma/manage-woman.png"
                alt="Creator with headset holding a tablet"
                width={435}
                height={596}
                className="h-full w-full object-contain object-bottom"
                priority={false}
              />
            </div>

            {/* Lime spring ornament — Figma ~305,114 / 215×215 */}
            <div
              className="pointer-events-none absolute right-[4%] top-[19%] z-[5] size-[120px] sm:size-[160px] lg:size-[215px]"
              aria-hidden
            >
              <Image
                src="/figma/manage-ornament.png"
                alt=""
                fill
                className="object-contain"
                sizes="215px"
              />
              <div
                className="absolute inset-0 mix-blend-hard-light"
                style={{
                  backgroundColor: "#d4fb20",
                  WebkitMaskImage: "url(/figma/manage-ornament.png)",
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: "url(/figma/manage-ornament.png)",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
            </div>

            {/* Total Revenue — left 0, top 44 */}
            <aside
              className="absolute left-0 top-[7%] z-20 flex w-[min(48%,232px)] flex-col gap-2 rounded-2xl bg-brand-blue p-4 backdrop-blur-[10px]"
              aria-label="Total revenue"
            >
              <div>
                <p className="font-nav text-base font-medium leading-[1.2] text-[#F5F5F6]">
                  Total Revenue
                </p>
                <p className="font-nav text-[10px] leading-[1.2] text-[#F5F5F6]">July 1-28</p>
              </div>
              <div className="flex w-full max-w-[200px] items-center justify-between gap-2">
                <p className="font-heading text-xl font-semibold leading-8 tracking-[-0.24px] text-[#F5F5F6] sm:text-2xl">
                  $120.29
                </p>
                <span className="rounded-3xl bg-[#CBFC01] px-2 py-0.5 font-nav text-[10px] font-medium leading-5 text-[#242528]">
                  +12$
                </span>
              </div>
              <div className="relative h-2 w-full max-w-[200px] overflow-hidden rounded-3xl bg-white">
                <div className="absolute inset-y-0 left-0 w-[56%] rounded-3xl bg-brand-lime" />
              </div>
            </aside>

            {/* Year to Date — left 0, top 194, width 134 */}
            <aside
              className="absolute left-0 top-[32%] z-20 flex w-[134px] flex-col gap-2 rounded-2xl bg-brand-blue p-4 backdrop-blur-[10px]"
              aria-label="Year to date revenue"
            >
              <div>
                <p className="font-nav text-base font-medium leading-[1.2] text-[#F5F5F6]">
                  Year to Date
                </p>
                <p className="font-nav text-[10px] leading-[1.2] text-[#F5F5F6]">2023</p>
              </div>
              <p className="font-heading text-2xl font-semibold leading-8 tracking-[-0.24px] text-[#F5F5F6]">
                $1,200.38
              </p>
              <span className="w-fit rounded-3xl bg-[#CBFC01] px-2 py-0.5 font-nav text-[10px] font-medium leading-5 text-[#242528]">
                +12$
              </span>
            </aside>

            {/* Happy Students — left 283, top 413, width 258 */}
            <aside
              className="absolute bottom-[10%] right-0 z-20 flex w-[min(100%,258px)] flex-col gap-2 rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-[10px]"
              aria-label="Happy students"
            >
              <div>
                <p className="font-nav text-base font-medium leading-6 text-[#242528]">
                  Happy Students
                </p>
                <p className="flex items-center font-nav text-[10px] leading-[1.5]">
                  <span className="font-bold text-[#242528]">4.5 </span>
                  <span className="text-[#82868E]">(240)</span>
                  <Image
                    src="/figma/manage-star.svg"
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
                    src="/figma/manage-2k.svg"
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
          </div>

          {/* Text column */}
          <div className="order-1 flex w-full max-w-[580px] flex-col gap-10 lg:order-2 lg:shrink-0">
            <h2
              id="manage-heading"
              className="font-heading max-w-[391px] text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.01em] text-[#242528] sm:text-[2.5rem] lg:text-[44px] lg:tracking-[-0.44px]"
            >
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="font-nav max-w-[574px] text-base leading-[1.6] text-[#4B4C53] sm:text-lg">
              ByteSpace supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="flex size-6 shrink-0 text-brand-blue" aria-hidden>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </span>
                  <span className="font-nav text-base font-medium leading-[22px] text-[#242528] sm:text-lg">
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
