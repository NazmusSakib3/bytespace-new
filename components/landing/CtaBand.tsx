"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const FIGMA_W = 1440;

type Ornament = {
  src: string;
  top: number;
  width: number;
  flip?: boolean;
  motion: string;
  left?: number;
  right?: number;
};

/**
 * CTA ornaments sized for the 488px band (not the 1024px hero). Side wings
 * only — center copy column stays clear at 720p / 1080p / ultrawide.
 */
const leftOrnaments: Ornament[] = [
  {
    src: "/figma/cta/orn-spring-lime-tl.png",
    left: -70,
    top: -80,
    width: 220,
    motion: "animate-float-ornament",
  },
  {
    src: "/figma/cta/orn-spring-white-sm.png",
    left: 150,
    top: 18,
    width: 100,
    flip: true,
    motion: "animate-float-ornament-soft animate-float-delay",
  },
  {
    src: "/figma/cta/orn-cone-white.png",
    left: -20,
    top: 250,
    width: 110,
    motion: "animate-float-ornament-alt animate-float-delay-2",
  },
  {
    src: "/figma/cta/orn-torus-lime.png",
    left: -10,
    top: 310,
    width: 190,
    motion: "animate-float-ornament animate-float-delay-3",
  },
];

const rightOrnaments: Ornament[] = [
  {
    src: "/figma/cta/orn-pyramid.png",
    right: 42,
    top: 24,
    width: 110,
    motion: "animate-float-ornament-soft",
  },
  {
    src: "/figma/cta/orn-cylinder-white.png",
    right: -75,
    top: 8,
    width: 210,
    motion: "animate-float-ornament-alt animate-float-delay",
  },
  {
    src: "/figma/cta/orn-spring-lime-br.png",
    right: -30,
    top: 300,
    width: 190,
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
      data-cta="scaled"
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
        {/* Left wing — clipped so shapes cannot enter the copy column */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-0 w-[300px] overflow-hidden"
          aria-hidden
        >
          {leftOrnaments.map((ornament) => (
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

        {/* Right wing */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[300px] overflow-hidden"
          aria-hidden
        >
          {rightOrnaments.map((ornament) => (
            <OrnamentImage
              key={ornament.src}
              src={ornament.src}
              width={ornament.width}
              flip={ornament.flip}
              motion={ornament.motion}
              style={{
                right: ornament.right,
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
      </div>
    </section>
  );
}
