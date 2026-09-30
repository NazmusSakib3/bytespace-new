import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type Path = {
  title: string;
  icon: ReactNode;
};

/** Figma Material-style filled icons inside lime circles */
const paths: Path[] = [
  {
    title: "Design",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm17.71-10.04a1.003 1.003 0 000-1.42l-2.5-2.5a1.003 1.003 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.999-1.66z" />
      </svg>
    ),
  },
  {
    title: "Development",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17 1H7C5.9 1 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zM9 10.5l1.5 1.5L9 13.5 10.5 15 13 12.5 10.5 10 9 10.5zm6 0L13.5 12 15 13.5 13.5 15 11 12.5 13.5 10 15 10.5z" />
      </svg>
    ),
  },
  {
    title: "IT & Software",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
      </svg>
    ),
  },
  {
    title: "Business",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
      </svg>
    ),
  },
  {
    title: "Marketing",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
      </svg>
    ),
  },
  {
    title: "Photography",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-5h-1.5l-1.1-1.17C15.14 5.3 14.7 5 14.21 5H9.79c-.49 0-.93.3-1.19.83L7.5 7H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
      </svg>
    ),
  },
];

export function LearningPaths() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="paths-heading">
      <Container>
        {/* Figma: Poppins SemiBold 36 / Satoshi 18 #82868E */}
        <div className="mx-auto mb-10 flex max-w-[935px] flex-col items-center gap-4 text-center sm:mb-12">
          <h2
            id="paths-heading"
            className="font-heading text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.01em] text-[#040819] sm:text-4xl sm:leading-10"
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-nav max-w-[917px] text-base leading-[1.6] text-muted sm:text-lg">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range
            of courses spans various fields, ensuring there&apos;s something for everyone. Unleash
            your potential and explore our carefully curated categories.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
          {paths.map((path) => (
            <li key={path.title}>
              <article className="flex aspect-square max-h-[167px] flex-col items-center justify-center gap-3 rounded-3xl border border-[#CED0D3] bg-white px-3 py-6 text-center transition hover:-translate-y-1 hover:shadow-sm">
                <span
                  className="flex items-center justify-center rounded-[40px] bg-brand-lime p-3 text-text"
                  aria-hidden
                >
                  {path.icon}
                </span>
                <h3 className="font-nav text-xl font-medium leading-6 text-text">{path.title}</h3>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
