"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
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
    <section id="courses" className="py-16 sm:py-20 lg:py-24" aria-labelledby="discover-heading">
      <Container>
        <SectionHeading
          id="discover-heading"
          title="Discover Your Passion, Build Your Skills"
          subtitle="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          className="mb-10"
          maxWidth="max-w-4xl"
        />

        <div
          className="mb-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          role="tablist"
          aria-label="Course categories"
        >
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat)}
                className={[
                  "rounded-full px-4 py-2.5 text-sm font-medium transition",
                  isActive
                    ? "bg-brand-lime font-semibold text-text shadow-sm"
                    : "border border-border bg-white text-text hover:border-brand-blue/30",
                ].join(" ")}
              >
                {cat}
              </button>
            );
          })}
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
                  <div className="absolute inset-x-2 bottom-2 flex flex-wrap gap-1.5">
                    {[course.lessons, course.duration, course.comments].map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full bg-black/45 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm sm:text-xs"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate font-heading text-base font-semibold text-text">
                      {course.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-brand-blue">by purepearl studio</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-0.5 text-sm font-semibold text-text">
                    4.5
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M12 3l2.4 6.8H22l-5.5 4.2 2.1 6.8L12 16.8 5.4 20.8l2.1-6.8L2 9.8h7.6L12 3z"
                        stroke="#82868E"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
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
