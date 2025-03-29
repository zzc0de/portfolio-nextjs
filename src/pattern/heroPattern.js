import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export const profilePattern = [
  {
    type: "title",
    content: "Hello I'm Azed, Web Developer from Indonesia",
  },
];

export const socialMediaPattern = [
  {
    type: "button",
    icon: <FaInstagram size={35} />,
    href: "/",
  },
  {
    type: "button",
    icon: <FaGithub size={35} />,
    href: "/",
  },
  {
    type: "button",
    icon: <FaLinkedin size={35} />,
    href: "/",
  },
];
