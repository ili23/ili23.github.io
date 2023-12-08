import React from "react";
import Template from "../../components/template.js";
import FiggiePrezi from "../../assets/figgiePresentation.pdf";
const Figgie = () => {
  return (
    <Template
      title="Figgie Bot"
      subtitle="Backend and Game Engine Developer"
      skills="Python, MongoDB, Websockets, Fast API"
      p1="Figgie Bot was my first project on CDS and also my first time working with a large team of developers."
      p2="Despite my limited experience, I was able to contribute to the project by developing the backend and game engine. 
      Through this project, I learned how to use websockets and Fast APi to create the backend of a game to handle multiplayer games. 
      In addition, I set up a MongoDB database to store user data and game data."
      p3=""
      imageSrc=""
      pres={FiggiePrezi}
      vid=""
      num="2"
      link="https://github.com/CornellDataScience/FiggieBot"
      containsLink={true}
    />
  );
};
export default Figgie;
