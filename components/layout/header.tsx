import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CAL_LINK, NAV_LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-foreground"
        >
          Solvee<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          className="rounded-full shadow-[0_0_0_0_transparent] transition-shadow duration-300 hover:shadow-[0_0_24px_-6px_var(--primary)]"
          nativeButton={false}
          render={
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
              Book a call
            </a>
          }
        />
      </div>
    </header>
  );
}
