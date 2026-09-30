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

/**
 * Figma Frame 14 (34:1158) — 1200×596, collage Frame 12 (541×596) + text (580), gap 79.
 * https://www.figma.com/design/vIVChSxtAIVN2jOkX7Erp7/…?node-id=34-1158
 */
export function ManageCourses() {
  return (
    <section
      className="relative overflow-hidden bg-[#F8F8F9] py-16 sm:py-20 lg:py-[74px]"
      aria-labelledby="manage-heading"
    >
      <Container className="relative z-10 lg:px-0">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-[79px]">
          {/* Frame 12 — 541 × 596 absolute composition */}
          <div className="relative order-2 mx-auto aspect-[541/596] w-full max-w-[541px] shrink-0 lg:order-1 lg:mx-0">
            {/* Woman — Figma 34:1011 @ 28,0 / 435×596 */}
            <div
              className="absolute z-10"
              style={{
                left: "5.18%",
                top: 0,
                width: "80.41%",
                height: "100%",
                filter:
                  "drop-shadow(25.8px 36.9px 36px rgba(0,0,0,0.1)) drop-shadow(16.9px 24.2px 24px rgba(0,0,0,0.09)) drop-shadow(10.2px 14.6px 16px rgba(0,0,0,0.08)) drop-shadow(5.4px 7.7px 9.6px rgba(0,0,0,0.07))",
              }}
            >
              <Image
                src="/figma/manage/woman.png"
                alt="Creator with headset holding a tablet"
                fill
                unoptimized
                className="object-contain object-bottom"
                sizes="435px"
              />
            </div>

            {/* Lime spring — Figma 34:1006 @ 305,114 / 215×215 (tint baked in) */}
            <div
              className="pointer-events-none absolute z-[5]"
              style={{ left: "56.38%", top: "19.13%", width: "39.74%", aspectRatio: "1" }}
              aria-hidden
            >
              <Image
                src="/figma/manage/ornament.png"
                alt=""
                fill
                unoptimized
                className="object-contain"
                sizes="215px"
              />
            </div>

            {/* Total Revenue — 34:987 @ 0,44 */}
            <aside
              className="absolute left-0 z-20 flex w-[min(48%,232px)] flex-col gap-2 rounded-2xl bg-[#003BE2] p-4 backdrop-blur-[10px]"
              style={{ top: "7.38%" }}
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
                <div className="absolute inset-y-0 left-0 w-[56%] rounded-3xl bg-[#D4FB20]" />
              </div>
            </aside>

            {/* Year to Date — 34:998 @ 0,194 / 134 wide */}
            <aside
              className="absolute left-0 z-20 flex w-[134px] flex-col gap-2 rounded-2xl bg-[#003BE2] p-4 backdrop-blur-[10px]"
              style={{ top: "32.55%" }}
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

            {/* Happy Students — 34:1038 @ 283,413 / 258 wide — white card */}
            <aside
              className="absolute z-20 flex w-[min(100%,258px)] flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]"
              style={{ left: "52.31%", top: "69.3%" }}
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
                    src="/figma/manage/star.svg"
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
                    src="/figma/manage/2k.svg"
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

          {/* Text — 34:897 */}
          <div className="order-1 flex w-full max-w-[580px] flex-col gap-10 lg:order-2 lg:shrink-0">
            <h2
              id="manage-heading"
              className="font-heading max-w-[391px] text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.01em] text-[#242528] sm:text-[2.5rem] lg:text-[44px] lg:tracking-[-0.44px]"
            >
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="font-nav max-w-[574px] text-base leading-[1.6] text-[#4B4C53] sm:text-lg sm:leading-7">
              <span className="font-bold text-[#242528]">ByteSpace</span> supports individuals or
              entities in the creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-end gap-2">
                  <Image
                    src="/figma/manage/check.svg"
                    alt=""
                    width={24}
                    height={24}
                    unoptimized
                    className="size-6 shrink-0"
                    aria-hidden
                  />
                  <span className="font-nav text-base font-medium leading-[1.2] text-[#242528] sm:text-lg">
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
