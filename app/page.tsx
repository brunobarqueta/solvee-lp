import { Hero } from "@/components/sections/hero";
import { ExpertiseMarquee } from "@/components/sections/expertise-marquee";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ExpertiseMarquee />
      <Stats />
      <Services />
      <Process />
      <FinalCta />
    </>
  );
}
