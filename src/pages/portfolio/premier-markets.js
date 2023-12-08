import React from "react";
import Template from "../../components/template.js";
import PM from "../../assets/premier.pdf";
const PremierMarkets = () => {
  return (
    <Template
      title="Premier Markets"
      subtitle="Developer and Project Manager"
      skills="Python, AWS, DynamoDB, React, Git, Agile"
      p1="Currently, sports books charge 7-10% vig on every bet. This means that if you bet $100 on a game that is a coin flip, 
      you will lose $7-10 on average. Premier Markets is a sports betting platform that tries to minimize this vig through market 
      making."
      p2="I mainly worked on the backend and frontend of the betting platform while also creating tickets and managing the progress.
      The main skills that I developed through this were project management, 
      DynamoDB, Python, and React."
      p3=""
      imageSrc=""
      pres={PM}
      vid=""
      num="2"
      link="https://youtu.be/SHMrEmoMpAI"
      containsLink={true}
    />
  );
};
export default PremierMarkets;
