"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const FIGMA_W = 1440;

/**
 * Figma Frame 2 (1:1794) — full-bleed #F5F5F6, 1440×202 artboard scaled to
 * cover the band (same pattern as hero / CTA).
 */
const logos = [
  { src: "/figma/partners/logo-1.svg", width: 167, height: 41, name: "Logoipsum" },
  { src: "/figma/partners/logo-2.svg", width: 168, height: 41, name: "Logoipsum" },
  { src: "/figma/partners/logo-3.svg", width: 170, height: 41, name: "Logoipsum" },
  { src: "/figma/partners/logo-4.svg", width: 170, height: 41, name: "Logoipsum" },
  { src: "/figma/partners/logo-5.svg", width: 169, height: 42, name: "Logoipsum" },
] as const;

export function Partners() {
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
    "--partners-scale": String(scale),
  } as CSSProperties;

  return (
    <section
      ref={rootRef}
      className="partners-bleed"
      style={style}
      aria-label="Trusted by partners"
      data-partners="cover"
    >
      <div className="partners-design flex items-center">
        <ul className="flex w-full items-end justify-between px-[154px]">
          {logos.map((logo, i) => (
            <li
              key={`${logo.name}-${i}`}
              className="relative h-[42px] shrink-0"
              style={{ width: logo.width }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                unoptimized
                className="object-contain object-left-bottom"
                sizes="170px"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
