import React, { useState, useEffect } from "react";
import pfp from "../images/pfp.jpg";
import frisbee from "../images/frisbee.png";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import CULogo from "../images/cuseal.png";
import UPLogo from "../images/uplogo.png";
import CDSLogo from "../images/cds_logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import LinkedIn and GitHub icons
import Typewriter from "typewriter-effect";
import TrivAI from "../images/trivai.png";
import BackgroundMap from "../images/map.png";
import ExperienceCard from "../components/experienceCard";
import WohohiameLogo from "../images/wohohiameLogo.png";
import TalrooLogo from "../images/talroo.png";
import Python from "../images/python.png";
import Collab from "../images/collab.jpg";
import headerPfp from "../images/Header.png";
import NextButton from "../components/nextButton";
import teamPhoto from "../images/team.jpg";
import JavaLogo from "../images/java.png";
import SpringBootLogo from "../images/springboot.png";
import JenkinsLogo from "../images/jenkins.png";
import NifiLogo from "../images/nifi.jpeg";
import MLLogo from "../images/ml.png";
import DatabricksLogo from "../images/databricks.jpeg";
import SportsBetting from "../images/betting.svg";
import OCamlLogo from "../images/ocaml.png";
import Finance from "../images/finance.jpeg";
import Options from "../images/options.png";
import ReactLogo from "../images/react.png";
import TypeScriptLogo from "../images/typescript.svg";
const Home = () => {
  const [showTypeWriter, setShowTypeWriter] = useState(true);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setShowTypeWriter(false);
    }, 14000); // Set the delay time in milliseconds (2 seconds in this example)

    return () => clearTimeout(delayTimer);
  }, []);
  return (
    <div className="max-w-full">
      <div className="grid grid-cols-7 h-screen ">
        <div className="flex flex-row justify-center items-center col-span-6 px-20 ">
          <div className="flex flex-col justify-center w-full relative">
            <h1 className="text-7xl py-20">Hi, I'm Iram!</h1>
            <h2 className="text-4xl  pb-16">
              {showTypeWriter ? (
                <Typewriter
                  options={{
                    strings: ["Welcome to my portfolio site."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              ) : (
                "Welcome to my portfolio site."
              )}
            </h2>
          </div>
          <div className="h-screen w-full flex flex-col justify-center items-center gap-y-20">
            <img
              src={headerPfp}
              alt="headerPfp"
              className="h-[50vh] w-[50vh] rounded-full shadow-lg shadow-slate-500/50"
            />
            <NextButton to="about" text="Learn More" />
          </div>
        </div>
        <div className="flex col-span-1 bg-[#FFFBF5]">
          <NavBar />
        </div>
      </div>
      <div className="mx-24">
        <div className="h-[125vh] mx-[-7rem] w-screen relative">
          <img
            className="h-full w-full object-cover overflow-hidden -z-50 opacity-10 absolute"
            src={BackgroundMap}
            alt=""
          ></img>
          <div className="py-14 h-1/3 mx-28">
            <div
              className=" bg-[#FFFBF5] text-[#242e42] px-8 pb-10 mb-10"
              id="about"
            >
              <h1 className="text-4xl pt-10 pb-10 font-bold underline underline-offset-8">
                {" "}
                A Little About Myself
              </h1>
              <div className="space-y-4 text-xl">
                I'm <strong>Iram</strong> (pronounced "I-Rum"), a junior at{" "}
                <strong>Cornell University</strong> pursuing a{" "}
                <strong>Bachelor of Science</strong> in{" "}
                <strong>computer science</strong> from Brooklyn, New York.
                Aspiring to become a software engineer, I am drawn to the world
                of <strong>problem-solving</strong>, whether it's unraveling
                chess tactics, conquering the NYT daily crosswords, or debugging
                intricate code. <br></br>
                <br></br>I'm mainly interested in{" "}
                <strong>backend development</strong>,{" "}
                <strong> data science</strong>, and{" "}
                <strong>machine learning</strong>, but I also have experience
                and exposure with <strong>full stack development </strong> and
                the <strong>financial markets</strong>. Beyond academics, I
                captain Cornell's Ultimate Frisbee Team and I'm always up for
                board games. I'm enthusiastic to leverage the{" "}
                <strong>power of technology</strong> in addressing{" "}
                <strong>diverse challenges</strong> and contributing to{" "}
                <strong>meaningful solutions</strong>.
              </div>
            </div>
            <div className="flex justify-center items-center space-x-10">
              <img
                className="h-[40vh] transition-transform transform hover:scale-110  shadow-lg shadow-slate-500/50"
                src={frisbee}
                alt="frisbee"
              />
              <img
                className="h-[40vh] transition-transform transform hover:scale-110  shadow-lg shadow-slate-500/50s"
                src={pfp}
                alt="pfp"
              />
              <img
                className="h-[40vh] transition-transform transform hover:scale-110  shadow-lg shadow-slate-500/50"
                src={teamPhoto}
                alt="pfp"
              />
            </div>
            <div className="flex justify-end mt-10">
              <NextButton to="portfolio" text="Check Out My Work!" />
            </div>
          </div>
        </div>

        <div className="h-[170vh] mt-10" id="portfolio">
          <h1 className="text-4xl py-16 font-bold">My Work</h1>
          <div className="grid grid-cols-3  md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-8 py-5">
            <ExperienceCard
              name="Talroo"
              moreDetails="/portfolio/talroo"
              date="Summer 2024"
              imageSrc={TalrooLogo}
              imageAlt="Project 2"
              description="Incoming Machine Learning Engineer Intern"
              skills={[Python, MLLogo, DatabricksLogo]}
            />

            <ExperienceCard
              name="Cornell Data Science"
              moreDetails="/portfolio/cds"
              date="Present"
              imageSrc={CDSLogo}
              imageAlt="Project 3"
              description="Quantitative Finance Subteam Lead"
              skills={[Python, Collab, Finance]}
            />

            {/* Project 2 */}
            <ExperienceCard
              name="Cornell University"
              moreDetails="/experiences"
              date="Present"
              imageSrc={CULogo}
              imageAlt="Project 2"
              description="Teaching Assistant"
              skills={[Python, OCamlLogo, Collab]}
            />
            <ExperienceCard
              name="Premier Markets"
              moreDetails="/portfolio/premier_markets"
              date="Fall 2023"
              imageSrc={SportsBetting}
              imageAlt="Project 1"
              description="Collaborative Project with CDS Project Team "
              skills={[JavaLogo, SpringBootLogo, JenkinsLogo, NifiLogo]}
            />
            {/* Project 1 */}
            <ExperienceCard
              name="Union Pacific Railroad"
              moreDetails="/portfolio/union_pacific"
              date="Summer 2023"
              imageSrc={UPLogo}
              imageAlt="Project 1"
              description="Software Engineer Intern"
              skills={[JavaLogo, SpringBootLogo, JenkinsLogo, NifiLogo]}
            />
            <ExperienceCard
              name="TrivAI"
              moreDetails="/experiences"
              date="Spring 2023"
              imageSrc={TrivAI}
              imageAlt="Project 1"
              description="Collaborative Project with CDS Project Team"
              skills={[ReactLogo, Python, Collab]}
            />
            {/* Project 2 */}
            <ExperienceCard
              name="Options Pricing Model"
              moreDetails="/experiences"
              date="Spring 2023"
              imageSrc={Options}
              imageAlt="Project 2"
              description="Collaborative Project with CDS Project Team"
              skills={[Python, Finance, Collab]}
            />
            {/* Project 1 */}
            <ExperienceCard
              name="GoFish Card Game"
              moreDetails="/experiences"
              imageSrc={WohohiameLogo}
              date="Spring 2023"
              imageAlt="Project 1"
              description="Final Group Project for CS 3110 (Functional Programming)"
              skills={[OCamlLogo, Collab]}
            />
            <ExperienceCard
              name="Wohohiame"
              moreDetails="/experiences"
              imageSrc={WohohiameLogo}
              date="Winter 2022"
              imageAlt="Project 1"
              description="Software Engineer Intern"
              skills={[ReactLogo, TypeScriptLogo]}
            />

            {/* <ExperienceCard
              name="Wohohiame"
              moreDetails="/experiences"
              imageSrc={WohohiameLogo}
              imageAlt="Project 1"
              description="Software Engineer Intern"
              skills={[Python, Collab]}
            /> */}
            <ExperienceCard
              name="Options Trading Bot"
              moreDetails="/experiences"
              imageSrc={WohohiameLogo}
              date="Fall 2022"
              imageAlt="Project 1"
              description="Collaborative Project with CDS Project Team"
              skills={[Python, Collab]}
            />
            <ExperienceCard
              name="Figgie Bot"
              moreDetails="/experiences"
              imageSrc={CULogo}
              date="Fall 2022"
              imageAlt="Project 2"
              description="Collaborative Project with CDS Project Team"
              skills={[Python, Collab]}
            />
          </div>
        </div>
      </div>
      <div
        className="h-[50vh] pt-[10vh] text-[#242e42] bg-[#FFFBF5]"
        id="contact"
      >
        <div className="max-w-full mt-16">
          <h1 className="text-4xl mb-8 font-bold">Get In Touch!</h1>
          <div className="flex flex-col items-center">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/iram-liu/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2867B2] text-white px-6 py-3 rounded-md mb-4 hover:bg-[#1D4C8F] focus:outline-none focus:ring focus:border-blue-300 flex items-center"
            >
              <FaLinkedin className="text-xl mr-2" /> LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ili23"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#333] text-white px-6 py-3 rounded-md hover:bg-[#000] focus:outline-none focus:ring focus:border-blue-300 flex items-center"
            >
              <FaGithub className="text-xl mr-2" /> GitHub
            </a>
          </div>
        </div>
      </div>
      {/* <div className="h-screen" id="resume">
        Resume
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;

export const Head = () => <title>Iram Liu</title>;
