import Section from "@/components/atoms/Section";
import About from "@/components/organism/About";
import Contact from "@/components/organism/Contact";
import HeroSection from "@/components/organism/HeroSection";
import Project from "@/components/organism/Project";
import Skills from "@/components/organism/Skills";

export default function Home() {
  return (
    <>
      <Section index={2}>
        <HeroSection />
      </Section>
      <Section index={1}>
        <About />
      </Section>
      <Section index={2} className="py-4">
        <Skills />
      </Section>
      <Section index={1}>
        <Project />
      </Section>
      <Section index={2}>
        <Contact />
      </Section>
    </>
  );
}
