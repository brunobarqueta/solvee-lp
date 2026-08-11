import {
  Layers,
  Plug,
  Gauge,
  ArrowRightLeft,
  LifeBuoy,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

const SERVICES = [
  {
    icon: Layers,
    title: "Custom Theme Development",
    description:
      "Pixel-perfect, fast, and built to convert — not another recycled template with your logo slapped on.",
  },
  {
    icon: Plug,
    title: "App & Platform Integrations",
    description:
      "ERP, 3PL, subscriptions, custom checkout logic — if it needs to talk to Shopify, we'll make it talk.",
  },
  {
    icon: Gauge,
    title: "Performance & CRO",
    description:
      "Slow stores lose money. We find the bottlenecks and fix them, then optimize the funnel around what's left.",
  },
  {
    icon: ArrowRightLeft,
    title: "Store Migrations",
    description:
      "Moving to Shopify or off a legacy platform? We've done it enough times to not break your revenue doing it.",
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
      className="border-t border-border bg-background-alt px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="Shopify work, done properly"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.title} delay={0.1 * index}>
              <Card className="h-full rounded-2xl border-border bg-card">
                <CardContent className="p-6">
                  <service.icon className="size-6 text-primary" />
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
