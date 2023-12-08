import React from "react";
import Template from "../../components/template.js";
import Cornell from "../../images/cuseal.png";
const TA = () => {
  return (
    <Template
      title="Cornell University - College of Engineering"
      subtitle="Teaching Assistant"
      skills="Java, Object Oriented Programming, Data Structures, OCaml, Functional Programming, Communication"
      p1="I started TAing for MATH 1920 - Multivariable Calculus for Engineers in the Fall of 2022. Since then, I
      have been a TA for CS 2110 - Object Oriented Programming and Data Structures and CS 3110 - Functional Programming and Data Structures."
      p2="As a TA, I hold office hours, grade assignments, and hold review sessions for students. 
      I also hold weekly recitation sections where I help students recall and apply concepts from lecture."
      p3="Some of the main skills that I have developed apart from gaining a deeper understanding of the course material is breaking down complex
      technical concepts to students with different backgrounds and learning styles."
      imageSrc={Cornell}
      pres=""
      vid=""
      num="0"
    />
  );
};
export default TA;
