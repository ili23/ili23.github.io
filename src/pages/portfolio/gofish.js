import React from "react";
import Template from "../../components/template.js";
import Terminal from "../../images/gofishterminal.png";
const GoFish = () => {
  return (
    <Template
      title="Go Fish"
      subtitle="CS 3110 Final Group Project"
      skills="Ocaml, Collaboration, Git"
      p1="This was a 3 person collaborative final project where we had to implement the card game Go Fish in OCaml. The main
      skills that I learned from was planning out a large project with a team and using the Agile methodology."
      p2=""
      p3=""
      imageSrc={Terminal}
      pres=""
      vid=""
      num="0"
      link="https://github.com/ili23/cs3110-final"
      containsLink={true}
    />
  );
};
export default GoFish;
