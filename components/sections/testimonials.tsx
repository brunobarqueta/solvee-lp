import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

// TODO: replace with real client testimonials
const TESTIMONIALS = [
  {
    quote:
      "They didn't just build what we asked for — they told us what we actually needed. Store's been running clean for a year.",
    name: "Placeholder Name",
    role: "Founder, Placeholder Co.",
    location: "US",
  },
  {
    quote:
      "Migration from our old platform was the smoothest part of our whole rebrand. Genuinely surprised.",
    name: "Placeholder Name",
    role: "Ops Lead, Placeholder Co.",
    location: "UK",
  },
  {
    quote:
      "No fluff, no filler calls. They just get it done and tell you exactly what's happening.",
    name: "Placeholder Name",
    role: "CEO, Placeholder Co.",
    location: "AU",
  },
] as const;

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="WHAT CLIENTS SAY"
          title="Straight talk, real results"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={testimonial.name + index} delay={0.1 * index}>
              <Card className="h-full rounded-2xl border-border bg-card">
                <CardContent className="flex h-full flex-col p-6">
                  <p className="flex-1 text-sm text-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-secondary text-xs font-semibold text-foreground">
                        {initials(testimonial.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role} · {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
