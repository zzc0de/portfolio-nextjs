import { iconPattern } from "@/pattern/skillPattern";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div className="h-screen flex flex-col w-full border-2">
      <h1 className="text-center text-4xl">
        My<span className="font-bold"> Skills</span>
      </h1>
      {iconPattern.map((item, index) => (
        <Marquee key={index} speed={150}>
          <Image src={item.path} width={100} height={100} alt="icon" />
        </Marquee>
      ))}
    </div>
  );
};

export default Skills;
