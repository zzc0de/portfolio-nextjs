import { aboutPattern } from "@/pattern/aboutPattern";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-screen flex max-w-screen-xl mx-auto">
      <div className="flex-1 h-full flex justify-center items-center">
        <Image
          src={"/profile.svg"}
          width={500}
          height={300}
          priority
          alt="profile"
        />
      </div>
      <div className="flex-1 h-full flex flex-col justify-center items-start gap-6">
        <h1 className="text-4xl font-bold">About Me</h1>
        {aboutPattern.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div>
    </div>
  );
};

export default About;
