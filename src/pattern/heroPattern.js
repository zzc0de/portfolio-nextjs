import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export const profilePattern = [
  {
    type: "title",
    content: "Hello I'm Azed, Web Developer from Indonesia",
  },
  {
    type: "desc",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, nostrum obcaecati? Unde quia distinctio dolores beatae eligendi a vel deserunt? Nostrum, nemo voluptate. Fugiat numquam corrupti neque praesentium, fuga distinctio commodi. Tempore a quam incidunt adipisci, commodi eligendi cumque ratione consequuntur ex provident fugiat recusandae iste nobis molestiae voluptate quae?",
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
