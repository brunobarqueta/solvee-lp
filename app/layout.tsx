import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/motion/scroll-progress";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// TODO: replace with the real production domain once it's live
export const metadata: Metadata = {
  metadataBase: new URL("https://solvee.dev"),
  title: "Solvee — Shopify Development, No BS",
  description:
    "Tailored Shopify development for brands who are done explaining their business to developers who don't get it. 3+ years, 30+ stores, zero fluff.",
  openGraph: {
    title: "Solvee — Shopify Development, No BS",
    description:
      "Tailored Shopify development for brands who are done explaining their business to developers who don't get it.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvee — Shopify Development, No BS",
    description:
      "Tailored Shopify development for brands who are done explaining their business to developers who don't get it.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full scroll-smooth antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
