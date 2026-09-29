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
          d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "Development",
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
    title: "IT & Software",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
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
    title: "Marketing",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 14v4M8 10v8M12 6v12M16 9v9M20 4v14"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Photography",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 8h3l1.5-2h7L17 8h3v11H4V8z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="13" r="3.5" stroke="currentColor" strokeWidth="1.75" />
      </svg>
    ),
  },
];

export function LearningPaths() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="paths-heading">
      <Container>
        <SectionHeading
          id="paths-heading"
          title="Explore Diverse Learning Paths at Bytespace"
          subtitle="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          className="mb-12"
          maxWidth="max-w-4xl"
        />

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {paths.map((path) => (
            <li key={path.title}>
              <article className="flex aspect-square flex-col items-center justify-center gap-4 rounded-[1.25rem] border border-border bg-white px-3 py-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <span
                  className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-brand-lime text-text"
                  aria-hidden
                >
                  {path.icon}
                </span>
                <h3 className="font-heading text-sm font-semibold text-text sm:text-base">
                  {path.title}
                </h3>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
