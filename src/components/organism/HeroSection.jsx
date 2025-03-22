import { profilePattern, socialMediaPattern } from "@/pattern/heroPattern";
import { Fraunces } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <div className="h-screen flex max-w-screen-xl mx-auto">
      <div className="flex-1 h-full flex justify-center items-center flex-col gap-4">
        {profilePattern.map((item, index) =>
          item.type === "title" ? (
            <h1 className={`text-5xl ${fraunces.className}`} key={index}>
              {item.content}
            </h1>
          ) : (
            <p className="text-lg text-slate-600" key={index}>
              {item.content}
            </p>
          )
        )}
        <div className="w-full flex gap-4">
          {socialMediaPattern.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.icon}
            </Link>
          ))}
        </div>
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
