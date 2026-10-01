import Image from "next/image";
import { DesignFrame } from "@/components/layout/DesignFrame";

/**
 * Figma Frame 2 (1:1794) — full-bleed #F5F5F6, content 1440×202.
 */
const logos = [
  { src: "/figma/partners/logo-1.svg", width: 167, height: 41, name: "Logoipsum" },
  { src: "/figma/partners/logo-2.svg", width: 168, height: 41, name: "Logoipsum" },
  { src: "/figma/partners/logo-3.svg", width: 170, height: 41, name: "Logoipsum" },
  { src: "/figma/partners/logo-4.svg", width: 170, height: 41, name: "Logoipsum" },
  { src: "/figma/partners/logo-5.svg", width: 169, height: 42, name: "Logoipsum" },
] as const;

export function Partners() {
  return (
    <section className="relative w-full bg-[#F5F5F6]" aria-label="Trusted by partners">
      <DesignFrame className="relative flex h-[202px] items-center">
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
      </DesignFrame>
    </section>
  );
}
