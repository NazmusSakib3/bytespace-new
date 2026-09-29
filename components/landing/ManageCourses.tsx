import Image from "next/image";
import { Container } from "@/components/ui/Container";

const checklist = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const AVATARS = [
  "/figma/avatar1.png",
  "/figma/avatar2.png",
  "/figma/avatar3.png",
  "/figma/avatar4.png",
];

export function ManageCourses() {
  return (
    <section
      className="bg-surface-muted py-16 sm:py-20 lg:py-24"
      aria-labelledby="manage-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
            <div
              className="absolute -left-8 bottom-8 h-[75%] w-[75%] rounded-full bg-brand-blue/90 sm:-left-12"
              aria-hidden
            />
            <div className="relative z-10 overflow-hidden">
              <Image
                src="/figma/manage-woman.png"
                alt="Creator with headset holding a tablet"
                width={800}
                height={1000}
                className="relative z-10 h-auto w-full object-contain"
              />
            </div>

            <aside
              className="absolute left-0 top-[8%] z-20 w-[150px] rounded-2xl bg-white p-3.5 shadow-xl sm:w-[200px] sm:p-4"
              aria-label="Total revenue"
            >
              <p className="text-xs font-medium text-text sm:text-sm">Total Revenue</p>
              <p className="text-[10px] text-muted">July 1-28</p>
              <div className="mt-2 flex items-center justify-between gap-2">
                <p className="font-heading text-lg font-bold text-text sm:text-2xl">$120.29</p>
                <span className="rounded-full bg-brand-lime px-2 py-0.5 text-[10px] font-semibold text-text">
                  +12$
                </span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
                <div className="h-full w-[70%] rounded-full bg-brand-lime" />
              </div>
            </aside>

            <aside
              className="absolute right-0 top-[22%] z-20 w-[120px] rounded-2xl bg-white p-3 shadow-xl sm:w-[140px] sm:p-3.5"
              aria-label="Year to date revenue"
            >
              <p className="text-xs font-medium text-text">Year to Date</p>
              <p className="text-[10px] text-muted">2023</p>
              <p className="mt-2 font-heading text-base font-bold text-text sm:text-lg">
                $1,200.38
              </p>
              <span className="mt-2 inline-block rounded-full bg-brand-lime px-2 py-0.5 text-[10px] font-semibold text-text">
                +12$
              </span>
            </aside>

            <aside
              className="absolute bottom-4 right-0 z-20 w-[200px] rounded-2xl bg-white p-3.5 shadow-xl sm:bottom-8 sm:w-[240px] sm:p-4"
              aria-label="Happy students"
            >
              <p className="text-xs font-medium text-muted sm:text-sm">Happy Students</p>
              <p className="mt-0.5 text-sm font-semibold text-text">
                4.5 (240){" "}
                <span className="text-brand-yellow" aria-hidden>
                  ★
                </span>
              </p>
              <div className="mt-2 flex items-center">
                <div className="flex -space-x-2" aria-hidden>
                  {AVATARS.map((src) => (
                    <Image
                      key={src}
                      src={src}
                      alt=""
                      width={36}
                      height={36}
                      className="h-8 w-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <span className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-brand-lime text-[10px] font-bold text-text">
                  2K+
                </span>
              </div>
            </aside>
          </div>

          <div className="order-1 lg:order-2">
            <h2
              id="manage-heading"
              className="font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-[2.5rem] lg:leading-tight"
            >
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              ByteSpace supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="mt-8 space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white"
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
                  <span className="text-sm font-medium text-text sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
