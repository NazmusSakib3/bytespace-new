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
      className="relative overflow-x-clip bg-[#F8F8F9] py-16 sm:py-20 lg:pb-[74px] lg:pt-[72px]"
      aria-labelledby="manage-heading"
    >
      {/* Frame 15 blobs — continues gradient from creators section */}
      <div
        className="pointer-events-none absolute -left-[20%] top-[-30%] h-[720px] w-[720px] rounded-full bg-[#003BE2]/15 blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[10%] top-[-40%] h-[900px] w-[900px] rounded-full bg-[#D4FB20]/30 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-20%] left-[40%] h-[720px] w-[720px] rounded-full bg-[#D4FB20]/25 blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-[5%] bottom-[-15%] h-[500px] w-[500px] rounded-full bg-[#003BE2]/12 blur-[80px]"
        aria-hidden
      />

      <Container className="relative z-10 lg:px-0">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-[79px]">
          {/* Frame 12 — 541 × 596; overflow visible so spring isn't clipped */}
          <div className="relative order-2 mx-auto aspect-[541/596] w-full max-w-[541px] shrink-0 overflow-visible lg:order-1 lg:mx-0 lg:h-[596px]">
            {/* Total Revenue — 34:987 @ 0,44 / 232×119 */}
            <aside
              className="absolute left-0 top-[44px] z-10 flex w-[232px] shrink-0 flex-col items-start gap-2 rounded-2xl bg-[#003BE2] p-4 backdrop-blur-[10px]"
              aria-label="Total revenue"
            >
              <div className="flex flex-col items-start text-[#F5F5F6]">
                <p className="font-nav text-base font-medium leading-[1.2]">Total Revenue</p>
                <p className="font-nav text-[10px] font-normal leading-[1.2]">July 1-28</p>
              </div>
              <div className="flex w-[200px] items-center justify-between">
                <p className="font-heading text-2xl font-semibold leading-8 tracking-[-0.24px] text-[#F5F5F6]">
                  $120.29
                </p>
                <span className="rounded-3xl bg-[#CBFC01] px-2 py-0.5 font-nav text-[10px] font-medium leading-5 text-[#242528]">
                  +12$
                </span>
              </div>
              <div className="relative h-2 w-[200px]">
                <div className="absolute inset-0 rounded-3xl bg-white" />
                <div className="absolute inset-y-0 left-0 w-[112px] rounded-3xl bg-[#D4FB20]" />
              </div>
            </aside>

            {/* Year to Date — 34:998 @ 0,194 / 134×135 */}
            <aside
              className="absolute left-0 top-[194px] z-10 flex w-[134px] shrink-0 flex-col items-start gap-2 rounded-2xl bg-[#003BE2] p-4 backdrop-blur-[10px]"
              aria-label="Year to date revenue"
            >
              <div className="flex flex-col items-start text-[#F5F5F6]">
                <p className="font-nav text-base font-medium leading-[1.2]">Year to Date</p>
                <p className="font-nav text-[10px] font-normal leading-[1.2]">2023</p>
              </div>
              <p className="font-heading whitespace-nowrap text-2xl font-semibold leading-8 tracking-[-0.24px] text-[#F5F5F6]">
                $1,200.38
              </p>
              <span className="rounded-3xl bg-[#CBFC01] px-2 py-0.5 font-nav text-[10px] font-medium leading-5 text-[#242528]">
                +12$
              </span>
            </aside>

            {/* Woman — Figma 34:1011 @ 28,0 / 435×596 */}
            <div
              className="pointer-events-none absolute z-20"
              style={{
                left: `${(28 / 541) * 100}%`,
                top: 0,
                width: `${(435 / 541) * 100}%`,
                height: "100%",
                filter:
                  "drop-shadow(0.5px 0.7px 3px rgba(0,0,0,0.04)) drop-shadow(2.2px 3.2px 5.7px rgba(0,0,0,0.06)) drop-shadow(5.4px 7.7px 9.6px rgba(0,0,0,0.07)) drop-shadow(10.2px 14.6px 16px rgba(0,0,0,0.08)) drop-shadow(16.9px 24.2px 24px rgba(0,0,0,0.09)) drop-shadow(25.8px 36.9px 36px rgba(0,0,0,0.1)) drop-shadow(37.1px 53px 56px rgba(0,0,0,0.11)) drop-shadow(51px 72.9px 72px rgba(0,0,0,0.13))",
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/figma/manage/woman.png"
                  alt="Creator with headset holding a tablet"
                  className="absolute top-0 max-w-none"
                  style={{ left: "-28.51%", width: "157.01%", height: "114.6%" }}
                />
              </div>
            </div>

            {/* Happy Students — 34:1038 @ 283,413 / 258 wide — white card */}
            <aside
              className="absolute z-30 flex w-[min(100%,258px)] flex-col gap-2 rounded-2xl bg-white p-4 backdrop-blur-[10px]"
              style={{
                left: `${(283 / 541) * 100}%`,
                top: `${(413 / 596) * 100}%`,
              }}
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

            {/* Lime spring — Figma 34:1006 @ 305,114 / 215×215 */}
            <div
              className="animate-float-ornament-alt pointer-events-none absolute z-40"
              style={{
                left: `${(305 / 541) * 100}%`,
                top: `${(114 / 596) * 100}%`,
                width: `${(215 / 541) * 100}%`,
                aspectRatio: "1",
              }}
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
          </div>

          {/* Text — 34:897 */}
          <div className="order-1 flex w-full max-w-[600px] flex-col gap-10 lg:order-2 lg:shrink-0">
            <h2
              id="manage-heading"
              className="font-heading max-w-[391px] text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.01em] text-[#242528] sm:text-[2.5rem] lg:text-[44px] lg:tracking-[-0.44px]"
            >
              Create &amp; Manage Courses Easily.
            </h2>
            {/* Figma 34:901 — Bold ByteSpace; wrap after "publication," (needs ~600px for Satoshi) */}
            <p className="font-nav max-w-[600px] text-[18px] leading-7 text-[#4B4C53]">
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
