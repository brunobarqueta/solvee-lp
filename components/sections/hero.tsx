import { ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { HighlightUnderline } from "@/components/motion/highlight-underline";
import { PathRuleDraw } from "@/components/motion/path-rule-draw";
import { CAL_LINK } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 text-center md:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklch,var(--primary),transparent_88%),transparent_60%)]"
      />

      <PathRuleDraw
        variant={1}
        delay={0.5}
        className="pointer-events-none absolute right-6 top-24 hidden w-28 text-primary md:block lg:right-16"
      />

      <FadeIn>
        <Badge
          variant="secondary"
          className="rounded-full border border-border px-4 py-1.5 text-xs font-semibold tracking-widest text-muted-foreground"
        >
          SHOPIFY DEVELOPMENT AGENCY
        </Badge>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="mt-8 max-w-4xl font-display text-5xl font-bold tracking-tight text-balance text-foreground sm:text-6xl md:text-7xl">
          Shopify is our language.{" "}
          <HighlightUnderline delay={0.7}>No BS.</HighlightUnderline>
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
          We build, migrate, and scale Shopify stores for brands who are done
          explaining their business to developers who don&apos;t get it. 3+
          years, 30+ stores, zero fluff.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            size="lg"
            nativeButton={false}
            className="rounded-full px-8 text-base shadow-[0_0_0_0_transparent] transition-shadow duration-300 hover:shadow-[0_0_36px_-8px_var(--primary)]"
            render={
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                Book a call
              </a>
            }
          />
          <a
            href="#services"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            See what we do
            <ArrowDown className="size-4" />
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
