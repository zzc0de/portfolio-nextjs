import { profilePattern, socialMediaPattern } from "@/pattern/heroPattern";
import Image from "next/image";
import Link from "next/link";
import BlurText from "../atoms/BlurText";
import { Fraunces } from "next/font/google";
import SplitText from "../atoms/SplitText";
import AnimatedContent from "../atoms/AnimatedContent";

const fraunches = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <div className="h-screen flex max-w-screen-xl mx-auto">
      <div
        className={`flex-1 h-full flex justify-center flex-col gap-4 ${fraunches.variable}`}
      >
        {profilePattern.map((item, index) => (
          <SplitText
            text={item.content}
            className={`text-5xl font-semibold ${fraunches.className}`}
            delay={150}
            textAlign="left"
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            key={index}
          />
        ))}
        <AnimatedContent
          distance={150}
          direction="vertical"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <div className="w-full flex gap-4">
            {socialMediaPattern.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.icon}
              </Link>
            ))}
          </div>
        </AnimatedContent>
      </div>
      <div className="flex-1 h-full justify-center items-center flex">
        <Image
          src={"/Banner.svg"}
          width={800}
          height={800}
          priority
          alt="binary"
        />
      </div>
    </div>
  );
};

export default HeroSection;
