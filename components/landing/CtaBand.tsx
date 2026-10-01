import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { DesignFrame } from "@/components/layout/DesignFrame";

type Ornament = {
  src: string;
  left: number;
  top: number;
  width: number;
  flip?: boolean;
  motion: string;
};

/**
 * Figma CTA_Frame (34:1161) — ornaments use the same 1440 artboard coords as
 * the copy (inside DesignFrame) so they never drift into the text when the
 * viewport is wider/narrower than 1440.
 */
const ornaments: Ornament[] = [
  {
    src: "/figma/cta/orn-spring-lime-tl.png",
    left: -118,
    top: -162,
    width: 385,
    motion: "animate-float-ornament",
  },
  {
    src: "/figma/cta/orn-spring-white-sm.png",
    left: 353,
    top: 5,
    width: 175,
    flip: true,
    motion: "animate-float-ornament-soft animate-float-delay",
  },
  {
    src: "/figma/cta/orn-cone-white.png",
    left: -48,
    top: 225,
    width: 188,
    motion: "animate-float-ornament-alt animate-float-delay-2",
  },
  {
    src: "/figma/cta/orn-torus-lime.png",
    left: 20,
    top: 299,
    width: 342,
    motion: "animate-float-ornament animate-float-delay-3",
  },
  {
    src: "/figma/cta/orn-pyramid.png",
    left: 1080,
    top: 0,
    width: 188,
    motion: "animate-float-ornament-soft",
  },
  {
    src: "/figma/cta/orn-cylinder-white.png",
    left: 1226,
    top: 6,
    width: 370,
    motion: "animate-float-ornament-alt animate-float-delay",
  },
  {
    src: "/figma/cta/orn-spring-lime-br.png",
    left: 1110,
    top: 289,
    width: 330,
    motion: "animate-float-ornament animate-float-delay-2",
  },
];

function OrnamentImage({
  src,
  width,
  flip,
  motion,
  style,
}: {
  src: string;
  width: number;
  flip?: boolean;
  motion: string;
  style: CSSProperties;
}) {
  return (
    <div className={`absolute aspect-square ${motion}`} style={style}>
      <div className={`relative size-full${flip ? " -scale-x-100" : ""}`}>
        <Image
          src={src}
          alt=""
          fill
          unoptimized
          className="object-contain"
          sizes={`${width}px`}
        />
      </div>
    </div>
  );
}

export function CtaBand() {
  return (
    <section
      className="relative h-[488px] w-full overflow-hidden bg-[#003BE2]"
      aria-labelledby="cta-heading"
    >
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

      <DesignFrame className="relative z-10 h-full">
        {/* Ornaments share the 1440 frame with the copy */}
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          {ornaments.map((ornament) => (
            <OrnamentImage
              key={ornament.src}
              src={ornament.src}
              width={ornament.width}
              flip={ornament.flip}
              motion={ornament.motion}
              style={{
                left: ornament.left,
                top: ornament.top,
                width: ornament.width,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="relative z-20 mx-auto flex w-full max-w-[964px] flex-col items-center gap-10 text-center">
            <h2
              id="cta-heading"
              className="font-heading relative z-20 max-w-[710px] text-[44px] font-semibold leading-[1.2] tracking-[-0.44px] text-[#F5F5F6]"
            >
              Unlock Your Potential as a Creator with ByteSpace
            </h2>
            <p className="font-nav max-w-[964px] text-lg leading-[1.6] text-[#F5F5F6]">
              Experience the collaboration of numerous creators and an expanding selection of
              courses. Register now and become a part of a community comprising over 10,000 local
              and international creators. Utilize our Course Editor, and showcase your expertise by
              publishing your finest course on the ByteSpace Course Library.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-3xl bg-[#D4FB20] px-6 py-3 font-nav text-lg font-medium leading-[1.2] text-[#242528] transition hover:brightness-95"
            >
              Join as Creator
            </Link>
          </div>
        </div>
      </DesignFrame>
    </section>
  );
}
