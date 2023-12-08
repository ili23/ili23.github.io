import React from "react";
import Template from "../../components/template.js";
const TrivAI = () => {
  return (
    <Template
      title="TrivAI"
      subtitle="Developer with Cornell Data Science"
      skills="Python, Computer Vision, React, AWS, Git, Agile"
      p1="TrivAI is an iOS app that automatically generates trivia/review questions from user-inputted topics and images. The demo 
      video below shows the app in action!"
      p2="I mainly worked on the frontend which was in React Native as well as the text extraction and computer vision portion. I also gained
      exposure to AWS lambda functions and the Agile development process."
      p3="Try out TrivAI yourself! Download the app using the link below!"
      imageSrc=""
      pres="bro"
      vid="6h2JkV1PLXo"
      num="1"
      link="https://apps.apple.com/us/app/trivai/id6447194187"
      containsLink={true}
    />
  );
};
export default TrivAI;
