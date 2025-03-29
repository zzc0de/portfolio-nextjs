import Section from "@/components/atoms/Section";
import About from "@/components/organism/About";
import Contact from "@/components/organism/Contact";
import HeroSection from "@/components/organism/HeroSection";
import Project from "@/components/organism/Project";
import Skills from "@/components/organism/Skills";

export default function Home() {
  return (
    <>
      <Section index={1}>
        <HeroSection />
      </Section>
      <Section index={2}>
        <About />
      </Section>
      <Section index={3} className="py-4">
        <Skills />
      </Section>
      <Section index={4}>
        <Project />
      </Section>
      <Section index={5}>
        <Contact />
      </Section>
    </>
  );
}
