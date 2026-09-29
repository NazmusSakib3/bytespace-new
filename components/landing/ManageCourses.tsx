import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ManageCourses() {
  return (
    <section className="bg-surface-muted py-16 sm:py-20" aria-labelledby="manage-heading">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
            <div
              className="absolute -left-4 bottom-4 h-[80%] w-[80%] rounded-[40%] bg-brand-blue sm:-left-8"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=800&q=80"
                alt="Creator holding a tablet while managing course content"
                width={800}
                height={900}
                className="relative z-10 h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2
              id="manage-heading"
              className="text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl"
            >
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Publish lessons, track student progress, and grow your teaching business with
              simple tools built for creators—no complex setup required.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Upload videos and organize modules in minutes",
                "See enrollments and engagement at a glance",
                "Get paid securely as your audience grows",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-lime-bright text-text"
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
            <div className="mt-8">
              <Button href="/signup" variant="primary" size="lg">
                Start Creating
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
