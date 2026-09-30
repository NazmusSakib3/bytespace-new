"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";

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

export function DiscoverCourses() {
  const [active, setActive] = useState("Featured");

  return (
    <section id="courses" className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="discover-heading">
      <Container>
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

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {courses.map((course) => (
            <li key={course.title}>
              <article className="flex h-full flex-col rounded-3xl border border-[#CED0D3] bg-white p-4 transition hover:-translate-y-1 hover:shadow-md">
                <div className="relative aspect-[341/195] overflow-hidden rounded-xl">
                  <Image
                    src={course.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="mt-6 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate font-heading text-xl font-semibold leading-6 text-black">
                      {course.title}
                    </h3>
                    <p className="font-nav mt-0.5 text-xs leading-5">
                      <span className="text-[#4F4F4F]">by </span>
                      <span className="text-brand-blue">purepearl studio</span>
                    </p>
                  </div>
                  {/* Figma: plain 18px #4F4F4F + 24px gray star — no pill */}
                  <span className="font-nav inline-flex shrink-0 items-center gap-0.5 text-lg font-normal leading-7 text-[#4F4F4F]">
                    4.5
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M12 3.5l2.12 6.5h6.84l-5.54 4.03 2.12 6.52L12 16.52l-5.54 4.03 2.12-6.52L3.04 10h6.84L12 3.5z"
                        fill="#C5C7CB"
                      />
                    </svg>
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-surface-muted px-3 py-1.5 text-xs font-medium leading-4 text-[#4F4F4F]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <rect x="4" y="14" width="3" height="6" rx="0.5" />
                      <rect x="10.5" y="10" width="3" height="10" rx="0.5" />
                      <rect x="17" y="6" width="3" height="14" rx="0.5" />
                    </svg>
                    Beginner
                  </span>
                  <div className="flex items-center">
                    <div className="flex -space-x-2" aria-hidden>
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
                    </div>
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-brand-lime text-xs font-medium leading-5 text-text">
                      26+
                    </span>
                  </div>
                </div>

                <p className="mt-4 flex items-end">
                  <span className="font-heading text-xl font-semibold leading-6 text-brand-blue">
                    $25
                  </span>
                  <span className="font-nav text-xs leading-5 text-[#4F4F4F]">/lifetime</span>
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
