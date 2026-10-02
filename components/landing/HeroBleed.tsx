"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const FIGMA_W = 1440;

/**
 * Full-bleed hero shell. Scales the 1440 Figma Hero_Frame to cover the blue
 * band at the current window size. Uses devicePixelRatio so Ctrl+/- browser
 * zoom is not cancelled by re-fitting to the shrunk CSS viewport.
 */
export function HeroBleed({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const baseDprRef = useRef<number | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const client =
        rootRef.current?.clientWidth ||
        document.documentElement.clientWidth ||
        window.innerWidth;
      const dpr = window.devicePixelRatio || 1;

      // Freeze the DPR from first paint as the "100% zoom" baseline for this
      // session. Browser zoom multiplies DPR while shrinking clientWidth —
      // multiplying them back keeps --hero-scale stable so native zoom works.
      if (baseDprRef.current == null) {
        baseDprRef.current = dpr;
      }

      const zoomRatio = dpr / baseDprRef.current;
      setScale((client * zoomRatio) / FIGMA_W);
    };

    update();
    window.addEventListener("resize", update);
    // Chrome fires this on Ctrl+/- zoom in addition to resize.
    window.visualViewport?.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("resize", update);
    };
  }, []);

  const style = {
    "--hero-scale": String(scale),
  } as CSSProperties;

  return (
    <div ref={rootRef} className="hero-bleed bg-brand-blue" style={style}>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/figma/hero/grid.svg"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>
      <section className="hero-design" aria-labelledby="hero-heading">
        {children}
      </section>
    </div>
  );
}
