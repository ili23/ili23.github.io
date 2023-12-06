import React from "react";
import "./button.css";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowAltCircleDown } from "react-icons/fa";
const NextButton = ({ to, text }) => {
  return (
    <ScrollLink to={to} smooth={true} duration={800}>
      <button className="bg-[#679186] py-1 px-2 rounded-lg text-[#FFFBF5] text-lg hover:bg-neutral-900 bounce flex flex-row justify-center items-center gap-x-2">
        {text}
        <FaArrowAltCircleDown />
      </button>
    </ScrollLink>
  );
};
export default NextButton;
