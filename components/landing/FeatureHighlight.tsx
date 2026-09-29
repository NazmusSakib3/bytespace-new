import Image from "next/image";
import { Container } from "@/components/ui/Container";

const stats = [
  { value: "10K+", label: "Students" },
  { value: "75+", label: "Courses" },
  { value: "1K", label: "Mentors" },
];

export function FeatureHighlight() {
  return (
    <section
      id="creators"
      className="py-16 sm:py-20"
      aria-labelledby="feature-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="feature-heading"
              className="text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl"
            >
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Build digital skills that open doors. Structured paths, real projects, and a
              community that keeps you motivated from day one.
            </p>

            <ul className="mt-10 flex flex-wrap gap-8 sm:gap-12" aria-label="Platform stats">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <p className="text-3xl font-extrabold text-brand-blue sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-muted">{stat.label}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="absolute -right-4 top-6 h-[85%] w-[85%] rounded-[40%] bg-brand-lime-bright sm:-right-8"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Young professional with glasses learning on a laptop"
                width={800}
                height={900}
                className="relative z-10 h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
