//components

import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Cta from "@/components/Cta";


export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Skills />
      <Work />
      <Education />
      <Cta />
    </main>
  );
}
