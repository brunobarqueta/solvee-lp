const TAGS = [
  "SHOPIFY PLUS",
  "LIQUID",
  "HYDROGEN",
  "CHECKOUT EXTENSIBILITY",
  "CUSTOM APPS",
  "A/B TESTING",
  "STORE MIGRATIONS",
  "PERFORMANCE",
] as const;

function TagRow() {
  return (
    <div className="flex shrink-0 items-center">
      {TAGS.map((tag) => (
        <span
          key={tag}
          className="mx-6 flex items-center gap-6 text-sm font-semibold tracking-widest text-muted-foreground"
        >
          {tag}
          <span aria-hidden className="size-1 rounded-full bg-primary" />
        </span>
      ))}
    </div>
  );
}

export function ExpertiseMarquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-background-alt py-5">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        <TagRow />
        <TagRow />
      </div>
    </div>
  );
}
