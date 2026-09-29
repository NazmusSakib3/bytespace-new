import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBand() {
  return (
    <section className="bg-brand-blue py-14 sm:py-16" aria-labelledby="cta-heading">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center text-white">
          <h2 id="cta-heading" className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Ready to level up your career?
          </h2>
          <p className="max-w-xl text-blue-100">
            Join thousands of learners building in-demand skills today. Create your free
            account and start your first course in minutes.
          </p>
          <Button href="/signup" variant="lime" size="lg">
            Join Now
          </Button>
        </div>
      </Container>
    </section>
  );
}
