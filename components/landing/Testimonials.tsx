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
      className="relative overflow-hidden bg-[#F8F8F9] py-16 sm:py-20 lg:py-[74px]"
      aria-labelledby="testimonials-heading"
    >
      {/* Figma soft blobs — lime + blue */}
      <div
        className="pointer-events-none absolute left-[58%] top-[-30%] h-[720px] w-[720px] rounded-full bg-[#D4FB20]/45 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[20%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[#D4FB20]/30 blur-[80px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-[30%] bottom-[-10%] h-[720px] w-[720px] rounded-full bg-[#003BE2]/18 blur-[100px]"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="mb-[72px] grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-10">
          <h2
            id="testimonials-heading"
            className="font-heading max-w-[577px] text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.01em] text-black sm:text-[2.5rem] lg:mt-[39px] lg:text-[44px] lg:tracking-[-0.44px]"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="font-nav max-w-[580px] text-base leading-[1.6] text-[#4B4C53] sm:text-lg lg:justify-self-end">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[41px]">
          {testimonials.map((item) => (
            <li key={item.name}>
              <article className="flex h-full flex-col gap-6 rounded-3xl bg-white p-6">
                <Image
                  src={item.avatar}
                  alt=""
                  width={80}
                  height={80}
                  className="size-20 rounded-full object-cover"
                />
                <div>
                  <p className="font-heading text-xl font-semibold leading-[1.2] tracking-[-0.2px] text-black sm:leading-7">
                    {item.name}
                  </p>
                  <p className="font-nav text-lg leading-[1.6] text-brand-blue">{item.role}</p>
                </div>
                <blockquote className="font-nav text-base leading-[1.6] text-[#4F4F4F] sm:text-lg">
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
