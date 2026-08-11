import { SectionHeading } from "@/components/shared/section-heading";
import { StatCounter } from "@/components/shared/stat-counter";
import { FadeIn } from "@/components/motion/fade-in";

const STATS = [
  { value: 3, suffix: "+", label: "Years shipping Shopify exclusively" },
  { value: 40, suffix: "+", label: "Stores launched and scaled" },
  { value: 12, suffix: "", label: "Countries our clients operate in" },
  // TODO: confirm real retention number before launch
  { value: 98, suffix: "%", label: "Client retention rate" },
] as const;

export function Stats() {
  return (
    <section className="px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="WHY SOLVEE" title="Not our first store" />

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
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
