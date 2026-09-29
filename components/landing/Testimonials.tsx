import Image from "next/image";
import { Container } from "@/components/ui/Container";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    avatar: "/figma/testimonial-1.png",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    avatar: "/figma/testimonial-2.png",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    avatar: "/figma/testimonial-3.png",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-brand-lime/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 -top-20 h-[420px] w-[420px] rounded-full bg-brand-lime/15 blur-3xl"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-16">
          <h2
            id="testimonials-heading"
            className="font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-[2.5rem] lg:leading-tight"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what
            we do. Hear directly from those who have experienced the transformative journey of
            learning and creating on our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {testimonials.map((item) => (
            <li key={item.name}>
              <article className="flex h-full flex-col rounded-[1.25rem] border border-border bg-white p-6 shadow-sm sm:p-7">
                <Image
                  src={item.avatar}
                  alt=""
                  width={80}
                  height={80}
                  className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
                />
                <div className="mt-5">
                  <p className="font-heading text-base font-semibold text-text">{item.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{item.role}</p>
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted sm:text-base">
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
