import { SectionHeading } from "@/components/shared/section-heading";
import { StatCounter } from "@/components/shared/stat-counter";
import { FadeIn } from "@/components/motion/fade-in";
import { PathRuleDraw } from "@/components/motion/path-rule-draw";

const STATS = [
  { value: 3, suffix: "+", label: "Years shipping Shopify exclusively" },
  { value: 30, suffix: "+", label: "Brands shipped worldwide" },
  { value: 12, suffix: "", label: "Countries our clients operate in" },
] as const;

export function Stats() {
  return (
    <section id="stats" className="scroll-mt-20 px-6 py-24 md:px-8 md:py-32">
      <div className="relative mx-auto max-w-6xl">
        <PathRuleDraw
          variant={2}
          className="pointer-events-none absolute -top-2 right-0 hidden w-28 text-primary md:block"
        />
        <SectionHeading eyebrow="WHY SOLVEE" title="Not our first store" />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STATS.map((stat, index) => (
            <FadeIn key={stat.label} delay={0.1 * index}>
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
