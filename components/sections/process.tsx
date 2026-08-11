import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

const STEPS = [
  {
    title: "Discovery Call",
    description:
      "We ask direct questions about your store, your goals, and your budget. No sales script.",
  },
  {
    title: "Scope & Quote",
    description:
      "You get a clear plan and a clear price. No vague retainers, no scope creep surprises.",
  },
  {
    title: "Build",
    description:
      "We build, you get regular updates — real progress, not status-meeting theater.",
  },
  {
    title: "Launch & Support",
    description:
      "We ship it, watch it, and stay on call for whatever comes next.",
  },
] as const;

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-20 border-t border-border px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="Four steps. No mystery."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-4">
          {STEPS.map((step, index) => (
            <FadeIn key={step.title} delay={0.1 * index}>
              <div className="border-t-2 border-primary pt-4">
                <span className="font-display text-3xl font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
