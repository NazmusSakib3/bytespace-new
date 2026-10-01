import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { DesignFrame } from "@/components/layout/DesignFrame";

/**
 * Figma CTA_Frame (34:1161) — fixed 1440×488 artboard (no JS scale).
 * Browser zoom scales the whole page uniformly so ornaments keep spacing.
 * Positions nudged from Figma so side clusters do not stack on each other.
 */
type Ornament = {
  src: string;
  left: number;
  top: number;
  width: number;
  zIndex: number;
  flip?: boolean;
};

const ornaments: Ornament[] = [
  // Top-left lime spring — sits mostly outside the frame edge
  {
    src: "/figma/cta/orn-spring-lime-tl.png",
    left: -100,
    top: -140,
    width: 300,
    zIndex: 1,
  },
  // Small white spring — kept left of the headline
  {
    src: "/figma/cta/orn-spring-white-sm.png",
    left: 240,
    top: 12,
    width: 130,
    zIndex: 2,
    flip: true,
  },
  // Bottom-left white cone — clear of the torus
  {
    src: "/figma/cta/orn-cone-white.png",
    left: -70,
    top: 200,
    width: 150,
    zIndex: 3,
  },
  // Bottom-left torus — shifted right/down so it does not cover the cone
  {
    src: "/figma/cta/orn-torus-lime.png",
    left: 95,
    top: 318,
    width: 230,
    zIndex: 4,
  },
  // Top-right pyramid — clear of the cylinder
  {
    src: "/figma/cta/orn-pyramid.png",
    left: 1090,
    top: 16,
    width: 140,
    zIndex: 1,
  },
  // Top-right cylinder — pushed to the outer edge
  {
    src: "/figma/cta/orn-cylinder-white.png",
    left: 1310,
    top: 24,
    width: 250,
    zIndex: 3,
  },
  // Bottom-right lime spring — below the cylinder, not through it
  {
    src: "/figma/cta/orn-spring-lime-br.png",
    left: 1185,
    top: 318,
    width: 230,
    zIndex: 2,
  },
];

function OrnamentImage({
  src,
  width,
  flip,
  style,
}: {
  src: string;
  width: number;
  flip?: boolean;
  style: CSSProperties;
}) {
  return (
    <div className="absolute" style={{ ...style, height: width }}>
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
      data-cta="stable"
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

      {/*
        Locked 1440 artboard — no transform scale. Zoom / different monitors
        only change browser magnification or side gutters, not ornament spacing.
      */}
      <DesignFrame className="relative z-10 h-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          {ornaments.map((ornament) => (
            <OrnamentImage
              key={ornament.src}
              src={ornament.src}
              width={ornament.width}
              flip={ornament.flip}
              style={{
                left: ornament.left,
                top: ornament.top,
                width: ornament.width,
                zIndex: ornament.zIndex,
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
