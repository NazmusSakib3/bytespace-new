"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = [
  "Featured",
  "Music",
  "Drawing",
  "Marketing",
  "Animation",
  "UI/UX",
  "Coding",
  "Photography",
];

const courses = [
  {
    title: "Complete UI/UX Design Bootcamp",
    instructor: "Ava Chen",
    category: "UI/UX",
    rating: 4.9,
    price: "$49",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Digital Marketing Mastery",
    instructor: "Marcus Lee",
    category: "Marketing",
    rating: 4.8,
    price: "$39",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Music Production Fundamentals",
    instructor: "Sofia Reyes",
    category: "Music",
    rating: 4.7,
    price: "$59",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Character Animation Essentials",
    instructor: "Kenji Park",
    category: "Animation",
    rating: 4.9,
    price: "$69",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Illustration for Beginners",
    instructor: "Nora Blake",
    category: "Drawing",
    rating: 4.6,
    price: "$35",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Full-Stack Web Development",
    instructor: "Jordan Wells",
    category: "Coding",
    rating: 4.8,
    price: "$79",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Portrait Photography Pro",
    instructor: "Elena Vasquez",
    category: "Photography",
    rating: 4.7,
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e282?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Brand Strategy & Identity",
    instructor: "Priya Shah",
    category: "Featured",
    rating: 4.9,
    price: "$55",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80",
  },
];

export function DiscoverCourses() {
  const [active, setActive] = useState("Featured");

  const filtered =
    active === "Featured"
      ? courses
      : courses.filter((c) => c.category === active || c.category === "Featured");

  const visible = filtered.slice(0, 8);

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
                    : "bg-surface-muted text-muted hover:bg-border hover:text-text",
                ].join(" ")}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((course) => (
            <li key={course.title}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={course.image}
                    alt=""
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-text">
                    {course.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-base font-semibold leading-snug text-text">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{course.instructor}</p>
                  <div className="mt-auto flex items-center justify-between pt-4">
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
