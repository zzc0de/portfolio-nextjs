import GradientText from "../atoms/GradientText";
import Lanyard from "../atoms/Lanyard";
import { FaInstagram } from "react-icons/fa6";
import StarBorder from "../atoms/StarBorder";
import { contactListPattern } from "@/pattern/contactPattern";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="h-screen flex max-w-screen-xl mx-auto">
      <div className="flex-1 h-full flex justify-center flex-col items-center gap-6">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="font-extrabold text-6xl"
        >
          Get In Touch
        </GradientText>
        <div className="w-full flex flex-col gap-4">
          {contactListPattern.map((item, index) => (
            <Link href={item.link}>
              <StarBorder
                as="button"
                color="cyan"
                speed="6s"
                key={index}
                className="hover:scale-101 transition duration-500 w-full"
              >
                <item.icon size={35} />
                <p>{item.desc}</p>
              </StarBorder>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-1 h-full flex justify-center items-center">
        <Lanyard />
      </div>
    </div>
  );
};

export default Contact;
