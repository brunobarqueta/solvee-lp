import {
  Layers,
  Plug,
  Gauge,
  ArrowRightLeft,
  LifeBuoy,
} from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { PathRuleDraw } from "@/components/motion/path-rule-draw";

const SERVICES = [
  {
    icon: Layers,
    title: "Custom Theme Development",
    description:
      "Pixel-perfect, fast, and built to convert on Shopify and Shopify Plus — not another recycled template with your logo slapped on.",
  },
  {
    icon: Plug,
    title: "App & Platform Integrations",
    description:
      "ERP, 3PL, subscriptions, Shopify Plus checkout extensibility — if it needs to talk to Shopify, we'll make it talk.",
  },
  {
    icon: Gauge,
    title: "Performance & CRO",
    description:
      "Slow stores lose money. We find the bottlenecks, fix them, then run structured A/B tests on the funnel instead of guessing what converts.",
  },
  {
    icon: ArrowRightLeft,
    title: "Store Migrations",
    description:
      "Moving to Shopify, upgrading to Shopify Plus, or leaving a legacy platform — we've done it enough times to not break your revenue doing it.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support & Scaling",
    description:
      "Launch day isn't the finish line. We stick around to keep things fast, stable, and growing.",
  },
] as const;

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 border-t border-border bg-background-alt px-6 py-24 md:px-8 md:py-32"
    >
      <div className="relative mx-auto max-w-6xl">
        <PathRuleDraw
          variant={1}
          className="pointer-events-none absolute -top-2 right-0 hidden w-28 text-primary md:block"
        />
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="Shopify work, done properly"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.title} delay={0.1 * index}>
              <SpotlightCard className="h-full rounded-2xl bg-card">
                <CardContent className="p-6">
                  <service.icon className="size-6 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
