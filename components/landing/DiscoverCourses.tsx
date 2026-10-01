"use client";

import Image from "next/image";
import { useState } from "react";

const categoryRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking", "+ More"],
];

const courses = [
  {
    title: "Learn Figma from Basic",
    image: "/figma/course-1-figma.png",
  },
  {
    title: "Build Digital Asset",
    image: "/figma/course-2-digital.png",
  },
  {
    title: "the Power of Big Data",
    image: "/figma/course-3-bigdata.png",
  },
  {
    title: "Balancing Productivity and Self-Care",
    image: "/figma/course-4-productivity.png",
  },
  {
    title: "Mastering Money Management",
    image: "/figma/course-5-money.png",
  },
  {
    title: "From Idea to Startup Success",
    image: "/figma/course-6-startup.png",
  },
];

const AVATARS = [
  "/figma/avatar1.png",
  "/figma/avatar2.png",
  "/figma/avatar3.png",
  "/figma/avatar4.png",
];

const META_CHIPS = ["17 Lessons", "2 hours 16 mins", "59 Comments"];

/**
 * Figma Frame 8 (33:683) — 1199×808 grid; cards 373×384; gap 40.
 */
export function DiscoverCourses() {
  const [active, setActive] = useState("Featured");

  return (
    <section
      id="courses"
      className="bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="discover-heading"
    >
      <div className="mx-auto w-full max-w-[1199px] px-4 sm:px-6 lg:px-0">
        {/* Figma: Poppins SemiBold 44 / Satoshi 18 #82868E, gap 16 */}
        <div className="mx-auto mb-10 flex max-w-[935px] flex-col items-center gap-4 text-center sm:mb-12">
          <h2
            id="discover-heading"
            className="font-heading max-w-[588px] text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.01em] text-[#040819] sm:text-[2.5rem] lg:text-[44px] lg:leading-[52.8px] lg:tracking-[-0.44px]"
          >
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="font-nav max-w-[917px] text-base leading-[1.6] text-muted sm:text-lg">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety
            of courses across different fields, from technology to the arts, and make a difference
            in your career and life.
          </p>
        </div>

        <div
          className="mb-12 flex flex-col items-center gap-4"
          role="tablist"
          aria-label="Course categories"
        >
          {categoryRows.map((row) => (
            <div
              key={row.join("-")}
              className="flex flex-wrap items-center justify-center gap-4 min-[900px]:flex-nowrap"
            >
              {row.map((cat) => {
                const isActive = active === cat;
                const isMore = cat === "+ More";
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(cat)}
                    className={[
                      "font-nav shrink-0 whitespace-nowrap rounded-full px-4 py-3 text-base font-medium leading-5 transition",
                      isMore
                        ? "bg-transparent px-0 text-brand-blue hover:underline"
                        : isActive
                          ? "bg-brand-lime text-text"
                          : "bg-surface-muted text-[#4B4C53] hover:bg-[#e5e6e8] hover:text-text",
                    ].join(" ")}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Frame 8: 3×2 of 373×384 cards, column/row gap 40 */}
        <ul className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:justify-items-stretch">
          {courses.map((course) => (
            <li key={course.title} className="flex w-full max-w-[373px] lg:max-w-none">
              <article className="flex w-full flex-col overflow-visible rounded-3xl border border-[#CED0D3] bg-white p-4 transition hover:-translate-y-1 hover:shadow-md lg:min-h-[384px] lg:w-[373px]">
                <div className="relative aspect-[341/195] w-full shrink-0 overflow-hidden rounded-xl lg:h-[195px] lg:w-[341px] lg:aspect-auto">
                  <Image
                    src={course.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="341px"
                  />
                  {/* Figma 13:251 — left 13 / top 150 / gap 12, single row inside 341×195 */}
                  <div className="absolute left-[13px] top-[150px] flex items-start gap-2.5">
                    {META_CHIPS.map((chip) => (
                      <span
                        key={chip}
                        className="shrink-0 whitespace-nowrap rounded-3xl bg-[rgba(246,246,246,0.6)] px-3 py-1.5 font-nav text-xs font-medium leading-[1.2] text-[#4F4F4F] backdrop-blur-[4px]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative mt-5 flex flex-1 flex-col gap-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 max-w-[280px]">
                      <h3 className="font-heading text-xl font-semibold leading-[1.2] tracking-[-0.2px] text-black">
                        {course.title}
                      </h3>
                      <p className="font-nav text-xs leading-[1.6]">
                        <span className="text-[#4F4F4F]">by </span>
                        <span className="text-brand-blue">purepearl studio</span>
                      </p>
                    </div>
                    <span className="font-nav inline-flex shrink-0 items-center gap-0 text-lg font-normal leading-7 text-[#4F4F4F]">
                      4.5
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path
                          d="M12 3.5l2.12 6.5h6.84l-5.54 4.03 2.12 6.52L12 16.52l-5.54 4.03 2.12-6.52L3.04 10h6.84L12 3.5z"
                          fill="#C5C7CB"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 rounded-3xl bg-[#F5F5F6] px-3 py-1.5 text-xs font-medium leading-[1.2] text-[#4B4C53]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <rect x="4" y="14" width="3" height="6" rx="0.5" />
                        <rect x="10.5" y="10" width="3" height="10" rx="0.5" />
                        <rect x="17" y="6" width="3" height="14" rx="0.5" />
                      </svg>
                      Beginner
                    </span>
                    <div className="flex items-start" aria-hidden>
                      {AVATARS.map((src) => (
                        <Image
                          key={src}
                          src={src}
                          alt=""
                          width={32}
                          height={32}
                          className="relative mr-[-8px] size-8 rounded-full object-cover"
                        />
                      ))}
                      <span className="relative flex size-8 items-center justify-center rounded-full bg-brand-lime font-nav text-xs font-medium leading-5 text-[#242528]">
                        26+
                      </span>
                    </div>
                  </div>

                  <p className="mt-auto flex items-end pb-0.5">
                    <span className="font-heading text-xl font-semibold leading-[1.2] tracking-[-0.2px] text-brand-blue">
                      $25
                    </span>
                    <span className="font-nav text-xs leading-[1.6] text-[#4F4F4F]">/lifetime</span>
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
