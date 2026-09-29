import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Product Designer",
    quote:
      "ByteSpace transformed how I learn. The project-based courses helped me land my dream job in just six months.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "Full-Stack Developer",
    quote:
      "Clear lessons, supportive mentors, and a vibrant community. I went from beginner to building production apps.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    rating: 5,
  },
  {
    name: "Elena Vasquez",
    role: "Marketing Lead",
    quote:
      "The digital marketing track gave me practical skills I use every day. Worth every minute I invested.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-brand-yellow"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <SectionHeading
          id="testimonials-heading"
          title="Discover What Our Community is Saying"
          subtitle="Real stories from learners who grew their skills and advanced their careers with ByteSpace."
          className="mb-12"
        />

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.name}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <Image
                    src={item.avatar}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-text">{item.name}</p>
                    <p className="text-sm text-muted">{item.role}</p>
                  </div>
                </div>
                <Stars count={item.rating} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
