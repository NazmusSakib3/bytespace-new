import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Path = {
  title: string;
  bg: string;
  text: string;
  icon: ReactNode;
};

const paths: Path[] = [
  {
    title: "Design",
    bg: "bg-brand-yellow",
    text: "text-text",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    title: "Development",
    bg: "bg-brand-lime-bright",
    text: "text-text",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    title: "Business",
    bg: "bg-[#B8D4FF]",
    text: "text-text",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "Marketing",
    bg: "bg-brand-blue",
    text: "text-white",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    title: "Technology",
    bg: "bg-[#4ADE80]",
    text: "text-text",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
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

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {paths.map((path) => (
            <li key={path.title}>
              <article
                className={[
                  "flex aspect-square h-full flex-col items-center justify-center gap-4 rounded-3xl px-4 py-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md",
                  path.bg,
                  path.text,
                ].join(" ")}
              >
                <span className="flex items-center justify-center" aria-hidden>
                  {path.icon}
                </span>
                <h3 className="text-base font-bold sm:text-lg">{path.title}</h3>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
