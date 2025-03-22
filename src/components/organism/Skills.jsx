import { iconPattern, skillPattern } from "@/pattern/skillPattern";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Card from "../atoms/Card";

const Skills = () => {
  return (
    <div className="h-screen flex flex-col w-full gap-10 max-w-screen-xl mx-auto">
      <h1 className="text-center text-4xl">
        My<span className="font-bold"> Skills</span>
      </h1>
      <Marquee
        className="overflow-hidden py-2"
        speed={60}
        pauseOnHover
        loop={0}
      >
        <div className="flex gap-8">
          {iconPattern.map((item, index) => (
            <Image
              key={index}
              src={item.path}
              width={100}
              height={100}
              className="filter grayscale hover:grayscale-0 transition duration-500 hover:scale-105"
              alt="icon"
            />
          ))}
        </div>
      </Marquee>
      <div className="w-full grid grid-cols-2 gap-6 h-full">
        {skillPattern.map((item, index) => (
          <Card
            className="transition duration-500 flex flex-col gap-4 hover:bg-black hover:text-white"
            key={index}
          >
            <h1 className="text-xl font-bold">{item.name}</h1>
            <ul className="flex flex-col gap-2">
              {item.list?.map((item, index) => (
                <li key={index}>{item.content}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
