import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Path = {
  title: string;
  icon: ReactNode;
};

const paths: Path[] = [
  {
    title: "Design",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Programming",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    title: "Marketing",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    title: "Business",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "Technology",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function LearningPaths() {
  return (
    <section className="bg-surface-muted py-16 sm:py-20" aria-labelledby="paths-heading">
      <Container>
        <SectionHeading
          id="paths-heading"
          title="Explore Diverse Learning Paths at ByteSpace"
          subtitle="Pick a track and follow a structured path from beginner to job-ready."
          className="mb-12"
        />

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {paths.map((path) => (
            <li key={path.title}>
              <article className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-white px-4 py-8 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-md">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-lime-bright text-text">
                  {path.icon}
                </span>
                <h3 className="text-sm font-semibold text-text sm:text-base">{path.title}</h3>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
