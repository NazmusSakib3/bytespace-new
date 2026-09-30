import Image from "next/image";
import { Container } from "@/components/ui/Container";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const AVATARS = [
  "/figma/avatar1.png",
  "/figma/avatar2.png",
  "/figma/avatar3.png",
  "/figma/avatar4.png",
];

const META_CHIPS = ["17 Lessons", "2 hours 16 mins", "59 Comments"];

export function FeatureHighlight() {
  return (
    <section
      id="creators"
      className="relative overflow-hidden bg-[#F8F8F9] pb-10 pt-16 sm:pb-12 sm:pt-20 lg:pb-14 lg:pt-24"
      aria-labelledby="feature-heading"
    >
      {/* Frame 15 soft blobs */}
      <div
        className="pointer-events-none absolute -left-[10%] -top-[20%] h-[720px] w-[720px] rounded-full bg-[#D4FB20]/35 blur-[80px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[15%] top-[10%] h-[720px] w-[720px] rounded-full bg-[#003BE2]/15 blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-10%] left-[35%] h-[560px] w-[560px] rounded-full bg-[#D4FB20]/25 blur-[70px]"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-[63px]">
          {/* Text column — Figma 574px */}
          <div className="flex w-full max-w-[574px] flex-col gap-10 lg:shrink-0">
            <h2
              id="feature-heading"
              className="font-heading max-w-[577px] text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.01em] text-[#242528] sm:text-[2.5rem] lg:text-[44px] lg:tracking-[-0.44px]"
            >
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="font-nav max-w-[477px] text-base leading-[1.6] text-[#4B4C53] sm:text-lg">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>

            <ul className="flex flex-wrap gap-10 sm:gap-14" aria-label="Platform stats">
              {stats.map((stat) => (
                <li key={stat.label} className="flex flex-col items-start">
                  <p className="font-heading text-3xl font-medium leading-[44px] tracking-[-0.01em] text-brand-blue sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="font-nav text-base leading-[1.6] text-[#4B4C53] sm:text-lg">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Collage — Figma Frame 11: 621 × 552 */}
          <div className="relative mx-auto h-[420px] w-full max-w-[621px] sm:h-[500px] lg:mx-0 lg:h-[552px] lg:shrink-0">
            {/* Course card behind person — 373×384 at 0,0 */}
            <article className="absolute left-0 top-0 z-0 w-[min(68%,373px)] overflow-hidden rounded-3xl border border-[#CED0D3] bg-white">
              <div className="relative m-4 aspect-[341/195] overflow-hidden rounded-xl">
                <Image
                  src="/figma/growth-course-thumb.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="341px"
                />
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  {META_CHIPS.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-3xl bg-[rgba(246,246,246,0.6)] px-3 py-1.5 font-nav text-xs font-medium leading-5 text-[#4F4F4F] backdrop-blur-[4px]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative px-4 pb-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-heading text-xl font-semibold leading-7 tracking-[-0.2px] text-black">
                      Learn Figma from Basic
                    </h3>
                    <p className="font-nav text-xs leading-5">
                      <span className="text-[#4F4F4F]">by </span>
                      <span className="text-brand-blue">purepearl studio</span>
                    </p>
                  </div>
                  <span className="font-nav inline-flex shrink-0 items-center gap-0.5 text-lg font-medium leading-7 text-[#4F4F4F]">
                    4.5
                    <Image
                      src="/figma/star.svg"
                      alt=""
                      width={24}
                      height={24}
                      unoptimized
                      className="size-6"
                      aria-hidden
                    />
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 rounded-3xl bg-[#F5F5F6] px-3 py-1.5 font-nav text-xs font-medium leading-5 text-[#4B4C53]">
                    <Image
                      src="/figma/signal-cellular.svg"
                      alt=""
                      width={20}
                      height={20}
                      unoptimized
                      className="size-5"
                      aria-hidden
                    />
                    Beginner
                  </span>
                  <div className="flex items-start">
                    {AVATARS.map((src, i) => (
                      <Image
                        key={src}
                        src={src}
                        alt=""
                        width={32}
                        height={32}
                        className="size-8 rounded-full object-cover"
                        style={{ marginLeft: i === 0 ? 0 : -8 }}
                      />
                    ))}
                    <span
                      className="flex size-8 items-center justify-center rounded-full bg-black font-nav text-xs font-medium text-white"
                      style={{ marginLeft: -8 }}
                    >
                      26+
                    </span>
                  </div>
                </div>

                <p className="mt-4 flex items-end">
                  <span className="font-heading text-xl font-semibold leading-7 tracking-[-0.2px] text-brand-blue">
                    <span className="font-medium">$</span>25
                  </span>
                  <span className="font-nav text-xs leading-5 text-[#4F4F4F]">/lifetime</span>
                </p>
              </div>
            </article>

            {/* Person cutout — 577×540 at 0,12 */}
            <div
              className="absolute left-0 top-[2%] z-10 w-[min(100%,577px)]"
              style={{
                filter:
                  "drop-shadow(16.9px 24.2px 24px rgba(0,0,0,0.09)) drop-shadow(10.2px 14.6px 16px rgba(0,0,0,0.08)) drop-shadow(5.4px 7.7px 9.6px rgba(0,0,0,0.07))",
              }}
            >
              <Image
                src="/figma/growth-person.png"
                alt="Young professional learning on a laptop"
                width={577}
                height={540}
                className="h-auto w-full object-contain"
                priority={false}
              />
            </div>

            {/* Lime spring ornament — Figma ~406,67 / 215×215 */}
            <div
              className="pointer-events-none absolute right-[2%] top-[12%] z-[5] size-[120px] sm:size-[160px] lg:size-[215px]"
              aria-hidden
            >
              <Image
                src="/figma/growth-ornament.png"
                alt=""
                fill
                className="object-contain"
                sizes="215px"
              />
              <div
                className="absolute inset-0 mix-blend-hard-light"
                style={{
                  backgroundColor: "#d4fb20",
                  WebkitMaskImage: "url(/figma/growth-ornament.png)",
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: "url(/figma/growth-ornament.png)",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              />
            </div>

            {/* Learning Progress — Figma 345,213 */}
            <aside
              className="absolute right-0 top-[38%] z-20 w-[min(42%,232px)] rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)] backdrop-blur-[10px] sm:top-[39%]"
              aria-label="Learning progress"
            >
              <p className="font-nav text-sm font-medium leading-6 text-[#242528]">
                Learning Progress
              </p>
              <p className="font-heading text-[2.5rem] font-semibold leading-[1.2] tracking-[-0.48px] text-[#242528] sm:text-5xl">
                55%
              </p>
              <div className="relative mt-2 h-2 w-full overflow-hidden rounded-3xl bg-[#f6f6f6]">
                <div className="absolute inset-y-0 left-0 w-[56%] rounded-3xl bg-brand-lime" />
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
