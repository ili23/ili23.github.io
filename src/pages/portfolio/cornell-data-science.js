import React from "react";
import Template from "../../components/template.js";
import CDS from "../../images/cds_logo.png";
const CornellDataScience = () => {
  return (
    <Template
      title="Cornell Data Science"
      subtitle="Quantiative Finance Subteam Lead"
      skills="Python, Finance, Agile, Project Management, Collaboration, Leadership, "
      p1="Cornell Data Science (CDS) is a student run project team at Cornell University
      where we build data driven solutions for real world problems. I joined CDS my sophomore 
      year and have been a part of the Quantitative Finance subteam since then."
      p2="As a member of the Quantitative Finance subteam, I have worked on a variety of projects
      in the financial, software engineering, and machine learning space such as Options Pricing, 
      TrivAI, Premier Markets, and more. (Some of them are listed on this website!) This year, I
      have the privilege of leading the Quantitative Finance subteam and hope to continue building
      the team's technical skills and project portfolio."
      p3="Check out Cornell Data Science's Website Below."
      imageSrc={CDS}
      pres="bro"
      vid=""
      num="0"
      link="https://cornelldata.science/"
      containsLink={true}
    />
  );
};
export default CornellDataScience;
