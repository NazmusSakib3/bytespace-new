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

export function FeatureHighlight() {
  return (
    <section
      id="creators"
      className="relative overflow-hidden bg-neutral-50 py-16 sm:py-20 lg:py-24"
      aria-labelledby="feature-heading"
    >
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-brand-lime/40 blur-[20px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[560px] w-[560px] rounded-full bg-brand-blue/20 blur-[20px]"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="feature-heading"
              className="font-heading text-2xl font-semibold tracking-[-0.01em] text-text sm:text-3xl lg:text-[44px] lg:leading-[52.8px]"
            >
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="font-nav mt-10 max-w-[477px] text-base leading-[1.6] text-muted sm:text-lg">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>

            <ul className="mt-10 flex flex-wrap gap-10 sm:gap-14" aria-label="Platform stats">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <p className="font-heading text-3xl font-medium text-brand-blue sm:text-4xl sm:leading-10">
                    {stat.value}
                  </p>
                  <p className="font-nav mt-1 text-base leading-7 text-muted sm:text-lg">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Figma collage: course card behind person + progress + lime ornament */}
          <div className="relative mx-auto h-[480px] w-full max-w-[621px] sm:h-[520px] lg:h-[552px]">
            {/* Course card behind person */}
            <article className="absolute left-0 top-0 z-0 w-[min(100%,373px)] rounded-3xl border border-[#CED0D3] bg-white p-4">
              <div className="relative aspect-[341/195] overflow-hidden rounded-xl">
                <Image
                  src="/figma/course-1-figma.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="373px"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="truncate font-heading text-xl font-semibold text-black">
                    Learn Figma from Basic
                  </h3>
                  <p className="font-nav text-xs leading-5">
                    <span className="text-[#4F4F4F]">by </span>
                    <span className="text-brand-blue">purepearl studio</span>
                  </p>
                </div>
                <span className="font-nav inline-flex shrink-0 items-center gap-0.5 text-lg text-[#4F4F4F]">
                  4.5
                  <Image
                    src="/figma/star.svg"
                    alt=""
                    width={20}
                    height={20}
                    unoptimized
                    className="size-5"
                    aria-hidden
                  />
                </span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-surface-muted px-3 py-1.5 text-xs font-medium text-[#4F4F4F]">
                  Beginner
                </span>
                <div className="flex -space-x-2">
                  {AVATARS.map((src) => (
                    <Image
                      key={src}
                      src={src}
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ))}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-medium text-white">
                    26+
                  </span>
                </div>
              </div>
              <p className="mt-4 flex items-end">
                <span className="font-heading text-xl font-semibold text-brand-blue">$25</span>
                <span className="text-xs text-[#4F4F4F]">/lifetime</span>
              </p>
            </article>

            {/* Person cutout overlapping card */}
            <div
              className="absolute bottom-0 left-[8%] z-10 w-[min(92%,520px)] sm:left-[12%] lg:left-[15%]"
              style={{
                filter:
                  "drop-shadow(16px 24px 24px rgba(0,0,0,0.09)) drop-shadow(5px 8px 10px rgba(0,0,0,0.07))",
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

            {/* Lime ornament — Figma right of head */}
            <div
              className="pointer-events-none absolute right-0 top-[8%] z-[5] size-[140px] sm:size-[180px] lg:size-[216px]"
              aria-hidden
            >
              <Image
                src="/figma/ornament-cylinder.png"
                alt=""
                fill
                className="object-contain"
                sizes="216px"
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

            {/* Learning Progress — Figma right of head */}
            <aside
              className="absolute right-0 top-[35%] z-20 w-[180px] rounded-2xl bg-white p-4 shadow-[inset_0_4px_0_0_rgba(255,255,255,0.25)] backdrop-blur-[10px] sm:w-[200px]"
              aria-label="Learning progress"
            >
              <p className="font-nav text-sm font-medium leading-6 text-text">Learning Progress</p>
              <p className="mt-1 font-heading text-5xl font-semibold leading-[1.2] text-text">55%</p>
              <div className="relative mt-2 h-2 w-full overflow-hidden rounded-full bg-[#f6f6f6]">
                <div className="absolute inset-y-0 left-0 w-[56%] rounded-full bg-brand-lime" />
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
