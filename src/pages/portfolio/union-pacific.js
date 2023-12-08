import React from "react";
import Template from "../../components/template.js";
import ApacheNifi from "../../images/apache-nifi.png";
const UP = () => {
  return (
    <Template
      title="Union Pacific Railroad"
      subtitle="Software Engineer Intern"
      skills="Java, Spring Boot, Apache Nifi, Mockito, REST, Jenkins, Git, Jira, Confluence"
      p1="At Union Pacific Railroad, I worked as a software engineer intern on the Genesis Elite Pricing team. Recently, they
      began integrating Apache Nifi into their existing data system but, Apache Nifi lacks the necessary framework to be used 
      in an enterprise setting."
      p2="My project was to integrate a better login system using SSO Login and Yubikey authentication and create a monitor to 
      alert developers and technicians about failures. After completing my main project, I also started researching version control 
      for the data pipeline files."
      p3="Aside from the technical skills, I also learned a lot about the software development process through participation in daily
      scrum calls, code reviews, etc. and how to work in a large enterprise."
      imageSrc={ApacheNifi}
      pres=""
      vid=""
      num="0"
    />
  );
};
export default UP;
