import Image from "next/image";
import { Container } from "@/components/ui/Container";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export function FeatureHighlight() {
  return (
    <section
      id="creators"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="feature-heading"
    >
      <div
        className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-brand-lime/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[480px] w-[480px] rounded-full bg-brand-lime/20 blur-3xl"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="feature-heading"
              className="font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-[2.5rem] lg:leading-tight"
            >
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>

            <ul className="mt-10 flex flex-wrap gap-10 sm:gap-14" aria-label="Platform stats">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <p className="font-heading text-3xl font-extrabold text-brand-blue sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-muted">{stat.label}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="absolute -right-6 top-10 h-[70%] w-[70%] rounded-full bg-brand-lime sm:-right-10"
              aria-hidden
            />
            <div className="relative z-10 overflow-hidden rounded-[2rem]">
              <Image
                src="/figma/growth-person.png"
                alt="Young professional learning on a laptop"
                width={800}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>

            <aside
              className="absolute -left-2 bottom-10 z-20 max-w-[200px] rounded-2xl bg-white p-4 shadow-xl sm:left-4 sm:max-w-[232px]"
              aria-label="Learning progress"
            >
              <p className="text-sm font-medium text-muted">Learning Progress</p>
              <p className="mt-1 font-heading text-3xl font-bold text-text">55%</p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-border">
                <div className="h-full w-[55%] rounded-full bg-brand-lime" />
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
