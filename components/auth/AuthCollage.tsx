import Image from "next/image";
import type { CSSProperties } from "react";

const CARD_AVATARS = [
  "/figma/auth/avatar-a.png",
  "/figma/auth/avatar-b.png",
  "/figma/auth/avatar-c.png",
  "/figma/auth/avatar-d.png",
] as const;

const STUDENT_AVATARS = [
  "/figma/auth/student-1.png",
  "/figma/auth/student-2.png",
  "/figma/auth/student-3.png",
  "/figma/auth/student-4.png",
  "/figma/auth/student-5.png",
  "/figma/auth/student-6.png",
  "/figma/auth/student-7.png",
] as const;

const TAGS = ["17 Lessons", "2 hours 16 mins", "59 Comments"] as const;

type CourseCardProps = {
  image: string;
  title: string;
  className?: string;
  style?: CSSProperties;
};

/** Figma Course_Card_1 — fixed 373×384 design pixels. */
function CourseCard({ image, title, className = "", style }: CourseCardProps) {
  return (
    <article
      className={`absolute h-[384px] w-[373px] overflow-hidden rounded-[24px] border border-[#CED0D3] bg-white ${className}`}
      style={style}
      aria-hidden
    >
      <div className="absolute left-[15px] top-[15px] h-[195px] w-[341px] overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-[#443131]" aria-hidden />
        <Image
          src={image}
          alt=""
          fill
          unoptimized
          className="object-cover"
          sizes="341px"
        />
        <div className="absolute left-3 top-[150px] flex gap-3">
          {TAGS.map((label) => (
            <span
              key={label}
              className="rounded-3xl bg-[rgba(246,246,246,0.6)] px-3 py-1.5 font-nav text-xs font-medium leading-5 text-[#4F4F4F] backdrop-blur-[4px]"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute left-[15px] top-[231px] flex w-[237px] flex-col gap-4">
        <div>
          <h3 className="font-heading truncate text-xl font-semibold leading-7 tracking-[-0.2px] text-black">
            {title}
          </h3>
          <p className="font-nav text-xs leading-5 text-[#4F4F4F]">
            by <span className="text-brand-blue">purepearl studio</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 rounded-3xl bg-[#F5F5F6] px-3 py-1.5 font-nav text-xs font-medium leading-5 text-[#4B4C53]">
            <Image
              src="/figma/auth/signal.svg"
              alt=""
              width={20}
              height={20}
              unoptimized
              className="size-5"
            />
            Beginner
          </span>
          <div className="flex items-start">
            {CARD_AVATARS.map((src, i) => (
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
            <span className="relative flex size-8 items-center justify-center" style={{ marginLeft: -8 }}>
              <Image
                src="/figma/auth/badge-26.svg"
                alt=""
                width={32}
                height={32}
                unoptimized
                className="absolute inset-0 size-full"
              />
              <span className="relative font-nav text-xs font-medium leading-5 text-white">26+</span>
            </span>
          </div>
        </div>

        <p className="flex items-end">
          <span className="font-heading text-xl font-semibold leading-7 tracking-[-0.2px] text-brand-blue">
            <span className="font-medium">$</span>25
          </span>
          <span className="font-nav text-xs leading-5 text-[#4F4F4F]">/lifetime</span>
        </p>
      </div>

      <div className="absolute left-[305px] top-[231px] flex items-center">
        <span className="font-nav text-lg font-medium leading-7 text-[#4F4F4F]">4.5</span>
        <Image
          src="/figma/auth/star-outline.svg"
          alt=""
          width={24}
          height={24}
          unoptimized
          className="size-6"
        />
      </div>
    </article>
  );
}

/**
 * Figma Login collage Group 7 — fixed 548×585 @ 97,305 on the 1440 artboard.
 */
export function AuthCollage() {
  return (
    <div className="auth-collage" aria-hidden>
      <div className="auth-collage-canvas">
        <CourseCard
          image="/figma/auth/course-digital.png"
          title="Build Digital Asset"
          className="z-10"
          style={{ left: 25, top: 89 }}
        />

        <CourseCard
          image="/figma/auth/course-bigdata.png"
          title="the Power of Big Data"
          className="z-20"
          style={{ left: 136, top: 0 }}
        />

        <div className="animate-float-ornament absolute z-30 size-[146px]" style={{ left: 54, top: 15 }}>
          <Image
            src="/figma/auth/orn-torus-web.png"
            alt=""
            width={146}
            height={146}
            unoptimized
            className="size-full object-contain"
          />
        </div>

        <div
          className="animate-float-ornament-alt absolute z-30 size-[188px]"
          style={{ left: 0, top: 397 }}
        >
          <Image
            src="/figma/auth/orn-pyramid-web.png"
            alt=""
            width={188}
            height={188}
            unoptimized
            className="size-full object-contain"
          />
        </div>

        <div
          className="animate-float-ornament-soft absolute z-50 size-[175px]"
          style={{ left: 373, top: 321 }}
        >
          <Image
            src="/figma/auth/orn-spring-web.png"
            alt=""
            width={175}
            height={175}
            unoptimized
            className="size-full object-contain"
          />
        </div>

        <aside
          className="animate-float-card absolute z-40 flex w-[258px] flex-col gap-2 rounded-2xl bg-[#D4FB20] p-4 backdrop-blur-[10px]"
          style={{ left: 251, top: 435 }}
        >
          <div>
            <p className="font-nav text-base font-medium leading-6 text-[#242528]">Happy Students</p>
            <div className="flex items-center">
              <p className="font-nav text-[10px] leading-[1.5]">
                <span className="font-bold text-[#242528]">4.5 </span>
                <span className="text-[#424348]">(240)</span>
              </p>
              <Image
                src="/figma/auth/star-filled.svg"
                alt=""
                width={16}
                height={16}
                unoptimized
                className="ml-0.5 size-4"
              />
            </div>
          </div>
          <div className="flex items-start">
            {STUDENT_AVATARS.map((src, i) => (
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
                src="/figma/auth/badge-2k.svg"
                alt=""
                width={43}
                height={43}
                unoptimized
                className="absolute inset-0 size-full"
              />
              <span className="relative font-nav text-xs font-bold leading-[1.5] text-[#F5F5F6]">
                2K+
              </span>
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}
