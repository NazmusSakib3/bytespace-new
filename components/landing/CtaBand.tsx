import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

type Ornament = {
  src: string;
  /** left/top/width as % of CTA_Frame 1440×488 */
  left: string;
  top: string;
  width: string;
  flip?: boolean;
};

/**
 * Figma CTA_Frame (34:1161) Group 6 (46:78) — tint baked into PNGs, no mix-blend.
 * Positions are absolute within the 1440×488 frame.
 */
const ornaments: Ornament[] = [
  // 34:1206 lime spring — -118,-162 / 385
  {
    src: "/figma/cta/orn-spring-lime-tl.png",
    left: "-8.19%",
    top: "-33.2%",
    width: "26.74%",
  },
  // 34:1236 white spring — 353,5 / 175 (flipped in Figma)
  {
    src: "/figma/cta/orn-spring-white-sm.png",
    left: "24.51%",
    top: "1.02%",
    width: "12.15%",
    flip: true,
  },
  // 46:55 white cone — -48,225 / 188
  {
    src: "/figma/cta/orn-cone-white.png",
    left: "-3.33%",
    top: "46.11%",
    width: "13.06%",
  },
  // 46:67 lime torus — 20,299 / 342
  {
    src: "/figma/cta/orn-torus-lime.png",
    left: "1.39%",
    top: "61.27%",
    width: "23.75%",
  },
  // 46:61 lime pyramid — 1080,0 / 188
  {
    src: "/figma/cta/orn-pyramid.png",
    left: "75%",
    top: "0%",
    width: "13.06%",
  },
  // 46:73 white cylinder — 1226,6 / 370
  {
    src: "/figma/cta/orn-cylinder-white.png",
    left: "85.14%",
    top: "1.23%",
    width: "25.69%",
  },
  // 34:1221 lime spring — 1110,289 / 330
  {
    src: "/figma/cta/orn-spring-lime-br.png",
    left: "77.08%",
    top: "59.22%",
    width: "22.92%",
  },
];

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

      {/* Absolute stage matches Figma 1440×488 CTA_Frame */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {ornaments.map((ornament) => (
          <div
            key={ornament.src + ornament.left}
            className={`absolute aspect-square ${ornament.flip ? "-scale-x-100" : ""}`}
            style={{
              left: ornament.left,
              top: ornament.top,
              width: ornament.width,
            }}
          >
            <Image
              src={ornament.src}
              alt=""
              fill
              unoptimized
              className="object-contain"
              sizes="400px"
            />
          </div>
        ))}
      </div>

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
