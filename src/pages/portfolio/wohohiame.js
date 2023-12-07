import React from "react";
import Template from "../../components/template.js";
import WohohiamePic from "../../images/wohohiame_home.png";
const Wohohiame = () => {
  return (
    <Template
      title="Wohohiame"
      subtitle="Software Engineer Intern"
      skills="TypeScript, React, Node.js, UI/UX Design, Figma, Git"
      p1="Over my winter break during my sophomore year, I worked as a software engineer intern at Wohohiame, 
      a nonprofit organization dedicated to promoting wellness and health."
      p2="During this internship, I revamped their website by increasing the accessibility
       of the website through the addition of breadcrumb navigation, audio voiceovers, and responsive design."
      p3="While I didn't have much web-development experience at the start of the internship, I gained experience in
      TypeScript, React and Node.js through the development of their website."
      imageSrc={WohohiamePic}
      pres="bro"
      vid=""
      num="0"
      link="https://www.wohohiame.com/"
      containsLink={true}
    />
  );
};
export default Wohohiame;
