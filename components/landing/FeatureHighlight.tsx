import Image from "next/image";
import { Container } from "@/components/ui/Container";

const checklist = [
  "Expert mentors with real-world experience",
  "Hands-on projects you can add to your portfolio",
  "Flexible schedules that fit your lifestyle",
  "Certificates recognized by hiring partners",
];

export function FeatureHighlight() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="feature-heading">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                alt="Learner working on a laptop with online course materials"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-4 rounded-2xl bg-brand-lime-bright px-6 py-4 shadow-lg sm:-right-8"
              aria-label="65 thousand plus active learners"
            >
              <p className="text-3xl font-extrabold text-brand-blue-deep">65k+</p>
              <p className="text-sm font-medium text-brand-blue-deep/80">Active learners</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2
              id="feature-heading"
              className="text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl"
            >
              Build Digital Skills That Employers Value
            </h2>
            <p className="mt-4 text-muted">
              Our platform combines structured curricula with community support so you can
              learn faster, stay motivated, and land the role you want.
            </p>
            <ul className="mt-8 space-y-4">
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
                  <span className="text-sm sm:text-base text-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
