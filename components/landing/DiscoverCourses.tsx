"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = [
  "Programming",
  "Marketing",
  "Data Science",
  "Cyber Security",
  "Design",
  "Writing",
];

const courses = [
  {
    title: "Full-Stack Web Development",
    instructor: "Jordan Wells",
    category: "Programming",
    rating: 4.8,
    price: "$79",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
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
    title: "Data Science with Python",
    instructor: "Ava Chen",
    category: "Data Science",
    rating: 4.9,
    price: "$69",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Ethical Hacking Basics",
    instructor: "Kenji Park",
    category: "Cyber Security",
    rating: 4.7,
    price: "$59",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Complete UI/UX Design Bootcamp",
    instructor: "Nora Blake",
    category: "Design",
    rating: 4.9,
    price: "$49",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Creative Writing Workshop",
    instructor: "Sofia Reyes",
    category: "Writing",
    rating: 4.6,
    price: "$35",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
  },
];

function Sparkline() {
  return (
    <svg width="48" height="20" viewBox="0 0 48 20" fill="none" aria-hidden>
      <path
        d="M1 14 L8 10 L15 12 L22 6 L29 9 L36 4 L47 8"
        stroke="#D4FF25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="47" cy="8" r="2.5" fill="#0052FF" />
    </svg>
  );
}

export function DiscoverCourses() {
  const [active, setActive] = useState("Programming");

  const filtered = courses.filter((c) => c.category === active);
  const visible = (filtered.length > 0 ? filtered : courses).slice(0, 6);

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
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                        {course.category}
                      </p>
                      <h3 className="mt-1 text-base font-semibold leading-snug text-text">
                        {course.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{course.instructor}</p>
                    </div>
                    <Sparkline />
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
