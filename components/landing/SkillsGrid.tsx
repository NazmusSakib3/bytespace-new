import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const skills = [
  {
    title: "UI/UX Design",
    description: "Craft intuitive interfaces and delightful user experiences.",
    icon: "🎨",
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Web Development",
    description: "Build responsive sites with modern frameworks and best practices.",
    icon: "💻",
    color: "bg-blue-100 text-brand-blue",
  },
  {
    title: "Digital Marketing",
    description: "Grow brands with SEO, content, and data-driven campaigns.",
    icon: "📈",
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "Data Science",
    description: "Analyze data and build models that drive smart decisions.",
    icon: "📊",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Photography",
    description: "Master composition, lighting, and post-production workflows.",
    icon: "📷",
    color: "bg-rose-100 text-rose-700",
  },
  {
    title: "Business Strategy",
    description: "Lead teams and scale ventures with proven frameworks.",
    icon: "🚀",
    color: "bg-cyan-100 text-cyan-700",
  },
];

export function SkillsGrid() {
  return (
    <section id="skills" className="py-16 sm:py-20" aria-labelledby="skills-heading">
      <Container>
        <SectionHeading
          title="Discover Your Passion, Build Your Skills"
          subtitle="Explore curated learning paths across high-demand disciplines—each designed to take you from curious beginner to confident professional."
          className="mb-12"
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <li key={skill.title}>
              <article
                className="group h-full rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-md"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-xl ${skill.color}`}
                  aria-hidden
                >
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-text">{skill.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{skill.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-blue group-hover:underline">
                  View courses →
                </span>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
