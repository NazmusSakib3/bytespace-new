"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = [
  "UI/UX",
  "Web Development",
  "Data Science",
  "Marketing",
  "Business",
  "Technology",
];

const courses = [
  {
    title: "Complete UI/UX Design Bootcamp",
    instructor: "Nora Blake",
    category: "UI/UX",
    rating: 4.9,
    price: "$49",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Full-Stack Web Development",
    instructor: "Jordan Wells",
    category: "Web Development",
    rating: 4.8,
    price: "$79",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Data Science with Python",
    instructor: "Ava Chen",
    category: "Data Science",
    rating: 4.9,
    price: "$69",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=64&q=80",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Digital Marketing Mastery",
    instructor: "Marcus Lee",
    category: "Marketing",
    rating: 4.8,
    price: "$39",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=64&q=80",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Business Strategy Essentials",
    instructor: "Sofia Reyes",
    category: "Business",
    rating: 4.7,
    price: "$55",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=64&q=80",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Cloud Technology Fundamentals",
    instructor: "Kenji Park",
    category: "Technology",
    rating: 4.6,
    price: "$59",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&q=80",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  },
];

export function DiscoverCourses() {
  const [active, setActive] = useState("UI/UX");

  const filtered = courses.filter((c) => c.category === active);
  const others = courses.filter((c) => c.category !== active);
  const visible = [...filtered, ...others].slice(0, 3);

  return (
    <section id="courses" className="py-16 sm:py-20" aria-labelledby="discover-heading">
      <Container>
        <SectionHeading
          id="discover-heading"
          title="Discover Your Passion, Build Your Skills"
          subtitle="Browse curated courses across creative and technical disciplines."
          className="mb-10"
        />

        <div
          className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
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
                  "rounded-full px-4 py-2 text-sm font-semibold transition",
                  isActive
                    ? "bg-brand-yellow text-text shadow-sm"
                    : "border border-border bg-white text-muted hover:border-brand-blue/30 hover:text-text",
                ].join(" ")}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((course) => (
            <li key={course.title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={course.image}
                    alt=""
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                    {course.category}
                  </p>
                  <h3 className="mt-1 text-base font-semibold leading-snug text-text">
                    {course.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2">
                    <Image
                      src={course.avatar}
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-7 rounded-full object-cover"
                    />
                    <p className="text-sm text-muted">{course.instructor}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-border pt-4 mt-4">
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-text">
                      <span className="text-brand-yellow" aria-hidden>
                        ★
                      </span>
                      {course.rating}
                    </span>
                    <span className="text-base font-bold text-brand-blue">{course.price}</span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
