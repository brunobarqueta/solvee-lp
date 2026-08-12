import type { SVGProps } from "react";

interface PathRuleProps extends SVGProps<SVGSVGElement> {
  /** 1 and 2 are horizontal mirrors of each other, meant to alternate
   * down the page so the trace reads as one continuous line turning
   * back on itself section to section. */
  variant?: 1 | 2;
}

export const PATH_RULE_D: Record<1 | 2, string> = {
  1: "M2 4H24C27.3137 4 30 6.68629 30 10V10C30 13.3137 32.6863 16 36 16H84C87.3137 16 90 18.6863 90 22V22C90 25.3137 87.3137 28 84 28H2",
  2: "M118 4H96C92.6863 4 90 6.68629 90 10V10C90 13.3137 87.3137 16 84 16H36C32.6863 16 30 18.6863 30 22V22C30 25.3137 32.6863 28 36 28H118",
};

export function PathRule({ variant = 1, className, ...props }: PathRuleProps) {
  return (
    <svg
      viewBox="0 0 120 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d={PATH_RULE_D[variant]}
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
