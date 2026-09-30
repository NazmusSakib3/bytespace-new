import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

type Ornament = {
  src: string;
  tint: "#d4fb20" | "#f5f5f6";
  className: string;
  flip?: boolean;
};

/** Figma CTA_Frame 1440×488 ornament placements */
const ornaments: Ornament[] = [
  // Large lime spring — top left (overflows)
  {
    src: "/figma/cta/cta-spring-b.png",
    tint: "#d4fb20",
    className: "left-[-8%] top-[-33%] size-[min(28vw,385px)]",
  },
  // White spring (flipped) — upper mid-left
  {
    src: "/figma/cta/cta-spring-b.png",
    tint: "#f5f5f6",
    className: "left-[24%] top-[1%] size-[min(14vw,175px)]",
    flip: true,
  },
  // Lime cone — top right area
  {
    src: "/figma/cta/cta-cone-a.png",
    tint: "#d4fb20",
    className: "right-[12%] top-0 size-[min(14vw,188px)]",
  },
  // White cone/marshmallow — far top right
  {
    src: "/figma/cta/cta-cone-d.png",
    tint: "#f5f5f6",
    className: "right-[-8%] top-[1%] size-[min(26vw,370px)]",
  },
  // White cone — mid left
  {
    src: "/figma/cta/cta-cone-b.png",
    tint: "#f5f5f6",
    className: "left-[-3%] top-[46%] size-[min(14vw,188px)]",
  },
  // Large lime ring/cone — bottom left
  {
    src: "/figma/cta/cta-cone-c.png",
    tint: "#d4fb20",
    className: "left-[1%] top-[61%] size-[min(24vw,342px)]",
  },
  // Lime spring — bottom right
  {
    src: "/figma/cta/cta-spring-a.png",
    tint: "#d4fb20",
    className: "right-[-2%] top-[59%] size-[min(24vw,330px)]",
  },
];

function TintedOrnament({ src, tint, className, flip }: Ornament) {
  return (
    <div
      className={`pointer-events-none absolute z-[1] ${className} ${flip ? "-scale-x-100" : ""}`}
      aria-hidden
    >
      <Image src={src} alt="" fill className="object-contain" sizes="400px" />
      <div
        className="absolute inset-0 mix-blend-hard-light"
        style={{
          backgroundColor: tint,
          WebkitMaskImage: `url(${src})`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskImage: `url(${src})`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      />
    </div>
  );
}

export function CtaBand() {
  return (
    <section
      className="relative overflow-hidden bg-brand-blue py-[85px]"
      aria-labelledby="cta-heading"
    >
      {/* Figma grid overlay */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/figma/cta/cta-grid.svg"
          alt=""
          fill
          className="object-cover object-top opacity-80"
          sizes="100vw"
          unoptimized
        />
      </div>

      {ornaments.map((ornament, i) => (
        <TintedOrnament key={i} {...ornament} />
      ))}

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-[964px] flex-col items-center gap-10 text-center">
          <h2
            id="cta-heading"
            className="font-heading max-w-[710px] text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.01em] text-[#F5F5F6] sm:text-[2.5rem] lg:text-[44px] lg:tracking-[-0.44px]"
          >
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="font-nav max-w-[964px] text-base leading-[1.6] text-[#F5F5F6] sm:text-lg">
            Experience the collaboration of numerous creators and an expanding selection of
            courses. Register now and become a part of a community comprising over 10,000 local and
            international creators. Utilize our Course Editor, and showcase your expertise by
            publishing your finest course on the ByteSpace Course Library.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-3xl bg-brand-lime px-6 py-3 font-nav text-lg font-medium leading-[1.2] text-[#242528] transition hover:brightness-95"
          >
            Join as Creator
          </Link>
        </div>
      </Container>
    </section>
  );
}
