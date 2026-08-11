import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { CAL_LINK } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="px-6 py-24 md:px-8 md:py-32">
      <FadeIn>
        <div className="mx-auto max-w-4xl rounded-3xl bg-primary px-8 py-16 text-center md:px-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-primary-foreground sm:text-4xl">
            Ready to stop explaining your business to developers?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-primary-foreground/80">
            Book a call. We&apos;ll tell you straight if we&apos;re the right
            fit.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-8 rounded-full bg-primary-foreground px-8 text-base text-primary hover:bg-primary-foreground/90"
            render={
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                Book a call
              </a>
            }
          />
        </div>
      </FadeIn>
    </section>
  );
}
