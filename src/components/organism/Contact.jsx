import Card from "../atoms/Card";
import GradientText from "../atoms/GradientText";
import Lanyard from "../atoms/Lanyard";
import { FaInstagram } from "react-icons/fa6";
import StarBorder from "../atoms/StarBorder";

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
        {/* <Card
          className={
            "border-2 p-2 min-w-1/2 flex gap-4 rounded-sm items-center font-semibold hover:text-white hover:border-black shadow-md bg-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-yellow-500 transition duration-500"
          }
        >
          <FaInstagram size={35} />
          <p>Instagram DM</p>
        </Card> */}
        <StarBorder as="button" color="cyan" speed="6s">
          Hahaaha
        </StarBorder>
      </div>
      <div className="flex-1 h-full flex justify-center items-center">
        <Lanyard />
      </div>
    </div>
  );
};

export default Contact;
