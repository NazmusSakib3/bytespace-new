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
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
        <path
          d="M7.5 28.5L25 11l3 3-17.5 17.5H7.5v-3z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 25.5l2-2M13.5 22.5l2-2M16.5 19.5l2-2M19.5 16.5l2-2"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M20 8.5l7.5 7.5-3.5 3.5-7.5-7.5L20 8.5z"
          fill="currentColor"
        />
        <path d="M26.5 6.5l3 3-1.5 1.5-3-3 1.5-1.5z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Development",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" aria-hidden>
        <path d="M24.5 4H11.5C10.12 4 9 5.12 9 6.5v23c0 1.38 1.12 2.5 2.5 2.5h13c1.38 0 2.5-1.12 2.5-2.5v-23C27 5.12 25.88 4 24.5 4zm0 23.5h-13v-19h13v19z" />
        <path d="M14.5 15.5L12 18l2.5 2.5 1.5-1.5L15 18l1-1-1.5-1.5zm7 0L20 17l1 1-1.5 1.5 1.5 1.5L24 18l-2.5-2.5z" />
        <rect x="15.5" y="7.5" width="5" height="1.5" rx="0.75" />
        <circle cx="18" cy="26.5" r="1.2" />
      </svg>
    ),
  },
  {
    title: "IT & Software",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" aria-hidden>
        <path d="M30 24c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2H1v2h34v-2h-5zM6 10h24v12H6V10z" />
      </svg>
    ),
  },
  {
    title: "Business",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" aria-hidden>
        <path d="M18 10V4H4v28h28V10H18zM10 28H7v-3h3v3zm0-5H7v-3h3v3zm0-5H7v-3h3v3zm0-5H7V10h3v3zm7 15h-3v-3h3v3zm0-5h-3v-3h3v3zm0-5h-3v-3h3v3zm0-5h-3V10h3v3zm12 15h-9v-3h3v-3h-3v-3h3v-3h-3v-3h9v15zm-3-11h-3v3h3v-3zm0 5h-3v3h3v-3z" />
      </svg>
    ),
  },
  {
    title: "Marketing",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" aria-hidden>
        <path d="M5 13v10h5l7 6V7l-7 6H5zm16.5 5c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM19 6.23v2.06c3.39.86 6 4.02 6 7.71s-2.61 6.85-6 7.71v2.06c4.52-.9 8-5.03 8-9.77s-3.48-8.87-8-9.77z" />
      </svg>
    ),
  },
  {
    title: "Photography",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" aria-hidden>
        <path d="M18 15c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm10-6h-2.6l-1.7-2c-.4-.5-1-.8-1.6-.8h-7.2c-.6 0-1.2.3-1.6.8L11.6 9H9c-1.7 0-3 1.3-3 3v14c0 1.7 1.3 3 3 3h19c1.7 0 3-1.3 3-3V12c0-1.7-1.3-3-3-3zm-10 17c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z" />
      </svg>
    ),
  },
];

export function LearningPaths() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="paths-heading">
      <Container>
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
                  className="flex size-[60px] items-center justify-center rounded-[40px] bg-brand-lime text-text"
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
