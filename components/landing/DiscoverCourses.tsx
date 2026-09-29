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
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    title: "Build Digital Asset",
    image: "/figma/course-2-digital.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    title: "the Power of Big Data",
    image: "/figma/course-3-bigdata.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    title: "Balancing Productivity and Self-Care",
    image: "/figma/course-4-productivity.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    title: "Mastering Money Management",
    image: "/figma/course-5-money.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
  },
  {
    title: "From Idea to Startup Success",
    image: "/figma/course-6-startup.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
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
        {/* Figma: Poppins SemiBold 48 / Satoshi 18 #82868E — title breaks after comma */}
        <div className="mx-auto mb-10 max-w-[935px] text-center sm:mb-12">
          <h2
            id="discover-heading"
            className="font-heading text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.01em] text-text sm:text-[2.5rem] lg:text-[48px]"
          >
            Discover Your Passion,
            <br className="hidden sm:block" /> Build Your Skills
          </h2>
          <p className="font-nav mx-auto mt-5 max-w-[819px] text-base leading-[1.6] text-muted sm:mt-6 sm:text-lg">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety
            of courses across different fields, from technology to the arts, and make a difference
            in your career and life.
          </p>
        </div>

        <div
          className="mb-12 flex flex-col items-center gap-2.5 sm:gap-3"
          role="tablist"
          aria-label="Course categories"
        >
          {categoryRows.map((row) => (
            <div
              key={row.join("-")}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 min-[900px]:flex-nowrap"
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
                      "font-nav shrink-0 whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium leading-none transition sm:px-3 sm:py-2.5 sm:text-sm",
                      isMore
                        ? "bg-transparent px-1.5 text-brand-blue hover:underline sm:px-2"
                        : isActive
                          ? "bg-brand-lime text-text"
                          : "bg-surface-muted text-muted hover:bg-[#e5e6e8] hover:text-text",
                    ].join(" ")}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {courses.map((course) => (
            <li key={course.title}>
              <article className="flex h-full flex-col rounded-[1.25rem] border border-border bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="relative aspect-[341/195] overflow-hidden rounded-xl">
                  <Image
                    src={course.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="mt-4 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate font-heading text-base font-semibold text-text">
                      {course.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-brand-blue">by purepearl studio</p>
                  </div>
                  <span className="font-nav inline-flex shrink-0 items-center gap-1 rounded-full border border-[#e5e6e8] bg-white px-2.5 py-1 text-[18px] font-normal leading-[1.6] tracking-normal text-[#4F4F4F]">
                    4.5
                    <svg width="14" height="14" viewBox="0 0 13 13" fill="none" aria-hidden>
                      <path
                        d="M6.106 0.344c.15-.46.8-.46.95 0l1.218 3.72a.5.5 0 0 0 .475.344l3.914.009c.483.001.684.619.294.904L9.795 7.63a.5.5 0 0 0-.181.557l1.201 3.725c.148.46-.377.842-.769.559L6.874 10.177a.5.5 0 0 0-.586 0L3.116 12.47c-.392.283-.917-.099-.769-.559l1.201-3.725a.5.5 0 0 0-.181-.557L.206 5.321c-.39-.285-.189-.903.294-.904l3.914-.009a.5.5 0 0 0 .474-.344L6.106.344Z"
                        fill="#4F4F4F"
                      />
                    </svg>
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-muted px-3 py-1.5 text-xs font-medium text-muted">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
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
                          width={28}
                          height={28}
                          className="h-7 w-7 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                    </div>
                    <span className="ml-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-brand-lime text-[10px] font-bold text-text">
                      26+
                    </span>
                  </div>
                </div>

                <p className="mt-4">
                  <span className="font-heading text-lg font-bold text-brand-blue">$25</span>
                  <span className="text-sm text-muted">/lifetime</span>
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
