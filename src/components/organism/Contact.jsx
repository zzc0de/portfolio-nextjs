import GradientText from "../atoms/GradientText";
import Lanyard from "../atoms/Lanyard";
import { FaInstagram } from "react-icons/fa6";

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
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 p-4 min-w-1/2 flex gap-4 rounded-lg items-center">
          <FaInstagram size={35} />
          <p>Instagram DM</p>
        </div>
      </div>
      <div className="flex-1 h-full flex justify-center items-center">
        <Lanyard />
      </div>
    </div>
  );
};

export default Contact;
