"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const FIGMA_W = 1440;

/**
 * Figma CTA_Frame (34:1161) Group 6 (46:78) — exact artboard coords & sizes.
 * Overlaps are intentional layering (cylinder over pyramid/spring; torus over
 * cone). The 488 band clips edges via overflow, matching Figma.
 * Paint order = Figma stack (back → front).
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
  // 46:61 Cone / pyramid
  {
    src: "/figma/cta/orn-pyramid.png",
    left: 1080,
    top: 0,
    width: 188,
    zIndex: 1,
  },
  // 34:1221 lime spring BR
  {
    src: "/figma/cta/orn-spring-lime-br.png",
    left: 1110,
    top: 289,
    width: 330,
    zIndex: 2,
  },
  // 34:1206 lime spring TL
  {
    src: "/figma/cta/orn-spring-lime-tl.png",
    left: -118,
    top: -162,
    width: 385,
    zIndex: 3,
  },
  // 34:1236 white spring (mirrored)
  {
    src: "/figma/cta/orn-spring-white-sm.png",
    left: 353,
    top: 5,
    width: 175,
    zIndex: 4,
    flip: true,
  },
  // 46:55 white cone
  {
    src: "/figma/cta/orn-cone-white.png",
    left: -48,
    top: 225,
    width: 188,
    zIndex: 5,
  },
  // 46:67 lime torus — in front of cone
  {
    src: "/figma/cta/orn-torus-lime.png",
    left: 20,
    top: 299,
    width: 342,
    zIndex: 6,
  },
  // 46:73 white cylinder — in front of pyramid / spring on the right
  {
    src: "/figma/cta/orn-cylinder-white.png",
    left: 1226,
    top: 6,
    width: 370,
    zIndex: 7,
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
    <div className="absolute aspect-square" style={style}>
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
  const rootRef = useRef<HTMLElement>(null);
  const baseDprRef = useRef<number | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const client =
        rootRef.current?.clientWidth ||
        document.documentElement.clientWidth ||
        window.innerWidth;
      const dpr = window.devicePixelRatio || 1;

      if (baseDprRef.current == null) {
        baseDprRef.current = dpr;
      }

      const zoomRatio = dpr / baseDprRef.current;
      setScale((client * zoomRatio) / FIGMA_W);
    };

    update();
    window.addEventListener("resize", update);
    window.visualViewport?.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("resize", update);
    };
  }, []);

  const style = {
    "--cta-scale": String(scale),
  } as CSSProperties;

  return (
    <section
      ref={rootRef}
      className="cta-bleed"
      style={style}
      aria-labelledby="cta-heading"
      data-cta="figma"
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

      <div className="cta-design">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
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
      </div>
    </section>
  );
}
