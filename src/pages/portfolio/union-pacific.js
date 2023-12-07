import React from "react";
import Template from "../../components/template.js";
import TalrooImg from "../../images/talroo.png";
const Talroo = () => {
  return (
    <Template
      title="Talroo"
      subtitle="Machine Learning Engineering Intern"
      skills="TBD"
      p1="I'm excited to join Talroo Inc. this summer!"
      p2="From my conversations with the team throughout the recruiting process, 
      I will be interacting with standard ML and data tools and packages such as 
      Docker, AWS, Databricks, Snowflake, and many more."
      p3="By the end of my internship, I hope to learn more about the ML pipeline 
      and building scalable systems to deploy large machine learning models."
      imageSrc={TalrooImg}
      pres="bro"
      vid="6h2JkV1PLXo"
      num="0"
    />
  );
};
export default Talroo;
