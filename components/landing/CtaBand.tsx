import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBand() {
  return (
    <section
      className="relative overflow-hidden bg-brand-blue py-16 sm:py-20 lg:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden />

      <Image
        src="/figma/ornament-spring.png"
        alt=""
        width={200}
        height={200}
        className="pointer-events-none absolute -left-10 -top-8 z-[1] h-auto w-[140px] opacity-90 sm:w-[180px]"
        aria-hidden
      />
      <Image
        src="/figma/ornament-cone.png"
        alt=""
        width={160}
        height={160}
        className="pointer-events-none absolute -left-4 bottom-0 z-[1] h-auto w-[110px] opacity-90 sm:w-[140px]"
        aria-hidden
      />
      <Image
        src="/figma/ornament-cone2.png"
        alt=""
        width={180}
        height={180}
        className="pointer-events-none absolute -right-6 top-4 z-[1] h-auto w-[120px] opacity-90 sm:w-[160px]"
        aria-hidden
      />
      <Image
        src="/figma/ornament-cylinder.png"
        alt=""
        width={160}
        height={160}
        className="pointer-events-none absolute -right-4 bottom-2 z-[1] h-auto w-[100px] opacity-90 sm:w-[140px]"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center text-white">
          <h2
            id="cta-heading"
            className="font-heading max-w-2xl text-2xl font-bold sm:text-3xl lg:text-[2.5rem] lg:leading-tight"
          >
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base">
            Experience the collaboration of numerous creators and an expanding selection of
            courses. Register now and become a part of a community comprising over 10,000 local
            and international creators. Utilize our Course Editor, and showcase your expertise by
            publishing your finest course on the ByteSpace Course Library.
          </p>
          <Button href="/signup" variant="lime" size="lg">
            Join as Creator
          </Button>
        </div>
      </Container>
    </section>
  );
}
