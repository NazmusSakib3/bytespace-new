import { Container } from "@/components/ui/Container";

const logos = [
  {
    name: "Logoipsum",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" aria-hidden>
        <circle cx="14" cy="14" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M8 14c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="14" cy="14" r="3" />
      </svg>
    ),
  },
  {
    name: "Logoipsum",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" aria-hidden>
        <path d="M6 8h6a5 5 0 010 10H6V8zm8 0h4a4 4 0 010 8h-4V8z" />
      </svg>
    ),
  },
  {
    name: "Logoipsum",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" aria-hidden>
        <path d="M8 6v16h4V6H8zm8 0l8 16h-4.5l-1.5-3h-4.5L14 6h2z" />
      </svg>
    ),
  },
  {
    name: "Logoipsum",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" aria-hidden>
        <rect x="5" y="5" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10 14h8M14 10v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Logoipsum",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" aria-hidden>
        <path d="M14 4l10 18H4L14 4z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="14" cy="16" r="2.5" />
      </svg>
    ),
  },
];

export function Partners() {
  return (
    <section
      className="border-b border-border bg-surface-muted py-12 sm:py-16 lg:py-[80px]"
      aria-label="Trusted by partners"
    >
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 lg:justify-between lg:gap-x-8">
          {logos.map((logo, i) => (
            <li
              key={`${logo.name}-${i}`}
              className="flex items-center gap-2.5 text-[#5B5F67]/80"
            >
              {logo.icon}
              <span className="font-heading text-base font-semibold tracking-tight sm:text-lg">
                {logo.name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
