import { Container } from "@/components/ui/Container";

const logos = [
  { name: "Logoipsum", path: "M4 12h4l2-6 2 12 2-8 2 4h6" },
  { name: "Logoipsum", path: "M6 8c4-4 10 0 12 4s2 10-4 12-12-2-12-8 0-6 4-8z" },
  { name: "Logoipsum", path: "M4 18V6h4c4 0 6 2 6 6s-2 6-6 6H4zm14-12v12h6" },
  { name: "Logoipsum", path: "M4 6h8a4 4 0 010 8H8v4H4V6zm16 0v12h-4V6h4z" },
  { name: "Logoipsum", path: "M5 18l7-14 7 14H5zm4-3h6" },
];

export function Partners() {
  return (
    <section
      className="border-y border-border bg-surface-muted py-10 sm:py-12"
      aria-label="Trusted by partners"
    >
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-muted">
          Trusted by leading teams
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {logos.map((logo, i) => (
            <li key={`${logo.name}-${i}`} className="flex items-center gap-2 text-muted/70">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
                <path
                  d={logo.path}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-semibold tracking-tight sm:text-base">
                {logo.name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
