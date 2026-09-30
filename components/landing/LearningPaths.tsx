import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type Path = {
  title: string;
  icon: ReactNode;
};

const paths: Path[] = [
  {
    title: "Design",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        {/* Pencil */}
        <path
          d="M14.5 4.5l5 5-9.8 9.8H4.7v-5L14.5 4.5z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M13 6l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        {/* Ruler crossing */}
        <path
          d="M5.5 8.5l10 10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M7.2 10.2l1.2-1.2M9 12l1.2-1.2M10.8 13.8l1.2-1.2M12.6 15.6l1.2-1.2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Development",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="7" y="2.5" width="10" height="19" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10.5 5.5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="18.5" r="0.9" fill="currentColor" />
        <path
          d="M10 10.5l-1.6 1.8L10 14.1M14 10.5l1.6 1.8L14 14.1"
          stroke="currentColor"
          strokeWidth="1.5"
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
        <rect x="3" y="5" width="18" height="11.5" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 19.5h8M12 16.5v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M3 14.5h18" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Business",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 20V9.5h5V20M9 20V5h6v15M15 20v-7h5V20"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M6 12.5h1M6 15h1M11.5 8h1M11.5 11h1M11.5 14h1M17 15h1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Marketing",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 9.5h3.2l6.3-3.8v12.6L7.2 14.5H4V9.5z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M15.8 9.2c.9.7 1.5 1.7 1.5 2.8s-.6 2.1-1.5 2.8M18.2 7.2c1.6 1.2 2.6 3 2.6 5s-1 3.8-2.6 5"
          stroke="currentColor"
          strokeWidth="1.5"
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
          d="M4 8.5h3.2l1.4-2h6.8l1.4 2H20v10.2H4V8.5z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="13.2" r="3.2" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 11.4v3.6M10.2 13.2h3.6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function LearningPaths() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="paths-heading">
      <Container>
        {/* Figma: Poppins SemiBold 48 / Satoshi 18 #82868E — same rhythm as Discover */}
        <div className="mx-auto mb-10 max-w-[935px] text-center sm:mb-12">
          <h2
            id="paths-heading"
            className="font-heading text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.01em] text-text sm:text-[2.5rem] lg:text-[48px]"
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-nav mx-auto mt-5 max-w-[819px] text-base leading-[1.6] text-muted sm:mt-6 sm:text-lg">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range
            of courses spans various fields, ensuring there&apos;s something for everyone. Unleash
            your potential and explore our carefully curated categories.
          </p>
        </div>

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
