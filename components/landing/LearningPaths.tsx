import Image from "next/image";
import { Container } from "@/components/ui/Container";

type Path = {
  title: string;
  icon: string;
};

const paths: Path[] = [
  { title: "Design", icon: "/figma/paths/design.svg" },
  { title: "Development", icon: "/figma/paths/development.svg" },
  { title: "IT & Software", icon: "/figma/paths/it-software.svg" },
  { title: "Business", icon: "/figma/paths/business.svg" },
  { title: "Marketing", icon: "/figma/paths/marketing.svg" },
  { title: "Photography", icon: "/figma/paths/photography.svg" },
];

export function LearningPaths() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="paths-heading">
      <Container>
        <div className="mx-auto mb-10 flex max-w-[935px] flex-col items-center gap-4 text-center sm:mb-12">
          <h2
            id="paths-heading"
            className="font-heading text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.01em] text-[#040819] sm:text-4xl sm:leading-10"
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-nav max-w-[917px] text-base leading-[1.6] text-muted sm:text-lg">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range
            of courses spans various fields, ensuring there&apos;s something for everyone. Unleash
            your potential and explore our carefully curated categories.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-10">
          {paths.map((path) => (
            <li key={path.title}>
              <article className="flex aspect-square max-h-[167px] flex-col items-center justify-center gap-3 rounded-3xl border border-[#CED0D3] bg-white px-3 py-6 text-center transition hover:-translate-y-1 hover:shadow-sm">
                <span
                  className="flex size-[60px] items-center justify-center rounded-[40px] bg-brand-lime"
                  aria-hidden
                >
                  <Image src={path.icon} alt="" width={36} height={36} unoptimized />
                </span>
                <h3 className="font-nav text-xl font-medium leading-6 text-text">{path.title}</h3>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
