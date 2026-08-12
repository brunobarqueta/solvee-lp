import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/brand/solvee-icon-concept-D-transparent.svg"
                alt=""
                width={143}
                height={123}
                className="h-6 w-auto"
              />
              <span className="font-display text-lg font-bold text-foreground">
                Solvee
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Shopify development, no BS.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors hover:text-foreground"
            >
              {CONTACT_EMAIL}
            </a>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-xs font-semibold tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© 2026 Solvee. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
