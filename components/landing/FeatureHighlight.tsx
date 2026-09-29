import Image from "next/image";
import { Container } from "@/components/ui/Container";

const stats = [
  { value: "65k+", label: "Active learners" },
  { value: "1.2k+", label: "Expert courses" },
  { value: "98%", label: "Satisfaction rate" },
];

const checklist = [
  "Expert mentors with real-world experience",
  "Hands-on projects for your portfolio",
  "Flexible learning that fits your schedule",
  "Certificates recognized by hiring partners",
];

export function FeatureHighlight() {
  return (
    <section
      id="creators"
      className="bg-surface-muted py-16 sm:py-20"
      aria-labelledby="feature-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                alt="Professionals collaborating and growing their careers"
                width={900}
                height={700}
                className="h-auto w-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-5 -right-3 rounded-2xl bg-brand-lime-bright px-5 py-3 shadow-lg sm:-right-6 sm:px-6 sm:py-4"
              aria-hidden
            >
              <p className="text-2xl font-extrabold text-text sm:text-3xl">65k+</p>
              <p className="text-xs font-medium text-text/80 sm:text-sm">Active learners</p>
            </div>
          </div>

          <div>
            <h2
              id="feature-heading"
              className="text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl"
            >
              Your Path to Professional Growth
            </h2>
            <p className="mt-4 text-muted">
              Build digital skills that open doors. Structured paths, real projects, and a
              community that keeps you motivated from day one.
            </p>

            <ul className="mt-8 grid grid-cols-3 gap-4" aria-label="Platform stats">
              {stats.map((stat) => (
                <li key={stat.label} className="text-center sm:text-left">
                  <p className="text-xl font-extrabold text-brand-blue sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
                </li>
              ))}
            </ul>

            <ul className="mt-8 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white"
                    aria-hidden
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12l5 5L20 7"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-text sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
