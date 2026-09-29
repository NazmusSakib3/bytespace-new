import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Skill = {
  title: string;
  description: string;
  color: string;
  icon: ReactNode;
};

const skills: Skill[] = [
  {
    title: "UI/UX Design",
    description: "Craft intuitive interfaces and delightful user experiences.",
    color: "bg-purple-100 text-purple-700",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    description: "Build responsive sites with modern frameworks and best practices.",
    color: "bg-blue-100 text-brand-blue",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    description: "Grow brands with SEO, content, and data-driven campaigns.",
    color: "bg-amber-100 text-amber-700",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 19V5M4 19h16M8 15v4M12 11v8M16 8v11"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Data Science",
    description: "Analyze data and build models that drive smart decisions.",
    color: "bg-emerald-100 text-emerald-700",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
    ),
  },
  {
    title: "Photography",
    description: "Master composition, lighting, and post-production workflows.",
    color: "bg-rose-100 text-rose-700",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="12" cy="13.5" r="3.5" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 7l1.5-2h5L16 7" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Business Strategy",
    description: "Lead teams and scale ventures with proven frameworks.",
    color: "bg-cyan-100 text-cyan-700",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 19l6-6 3 3 7-8"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14 8h6v6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function SkillsGrid() {
  return (
    <section id="skills" className="py-16 sm:py-20" aria-labelledby="skills-heading">
      <Container>
        <SectionHeading
          title="Discover Your Passion, Build Your Skills"
          subtitle="Explore curated learning paths across high-demand disciplines—each designed to take you from curious beginner to confident professional."
          className="mb-12"
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <li key={skill.title}>
              <article className="group h-full rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-md">
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${skill.color}`}
                  aria-hidden
                >
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-text">{skill.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{skill.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-blue group-hover:underline">
                  View courses →
                </span>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
