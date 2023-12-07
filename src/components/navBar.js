import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import LinkedIn and GitHub icons
import Logo from "../images/logo.png";
const NavItem = (section, to) => {
  return (
    <li className=" text-[#242e42] hover:border-b-2 border-b-2 border-transparent hover:border-[#242e42] cursor-pointer">
      <ScrollLink to={to} smooth={true} duration={800}>
        {section}
      </ScrollLink>
    </li>
  );
};

const NavBar = () => {
  return (
    <div className="mx-10 flex flex-col justify-center w-full relative">
      <div className="flex justify-center absolute w-full top-10">
        <img src={Logo} className="h-20 w-20 rounded-full" />
      </div>
      <ul className="text-2xl flex flex-col gap-y-2 text-left justify-center">
        {NavItem("About", "about")}
        {NavItem("My Work", "portfolio")}
        {NavItem("Contact", "contact")}
        {NavItem("Resume", "resume")}
      </ul>
      <div className="flex justify-center absolute bottom-10 w-full gap-x-2">
        <a
          href="https://www.linkedin.com/in/iram-liu/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2867B2] px-3 py-3 rounded-full hover:bg-[#1D4C8F] focus:outline-none focus:ring focus:border-blue-300 flex items-center"
        >
          <FaLinkedin className="text-xl" />
        </a>
        <a
          href="https://github.com/ili23"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#333] px-3 py-3 rounded-full hover:bg-[#000] focus:outline-none focus:ring focus:border-blue-300 flex items-center"
        >
          <FaGithub className="text-xl" />
        </a>
      </div>
    </div>
  );
};
export default NavBar;
