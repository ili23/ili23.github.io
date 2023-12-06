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
import ProjectCard from "../components/projectCard";
import TrivAI from "../images/trivai.png";
import BackgroundMap from "../images/map.png";
import ExperienceCard from "../components/experienceCard";
import WohohiameLogo from "../images/wohohiameLogo.png";
import TalrooLogo from "../images/talroo.png";
import Python from "../images/python.png";
import Collab from "../images/collab.jpg";
import headerPfp from "../images/Header.png";
import NextButton from "../components/nextButton";
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
        <div className="flex col-span-1 bg-[#FEF4E7]">
          <NavBar />
        </div>
      </div>
      <div className="mx-24">
        <div className="h-screen mx-[-7rem] w-screen relative">
          <img
            className="h-full w-full object-cover overflow-hidden -z-50 opacity-10 absolute"
            src={BackgroundMap}
            alt=""
          ></img>
          <div className="py-14 h-1/3 mx-28">
            <div
              className=" bg-[#FFFBF5] text-[#679186] px-8 pb-10 mb-10"
              id="about"
            >
              <h1 className="text-4xl pt-10 pb-10 font-bold">
                {" "}
                A Little About Myself:
              </h1>
              <div className="space-y-4 text-2xl">
                I'm <strong>Iram</strong> (pronounced "I-Rum"), a current junior
                at <strong>Cornell University </strong>pursuing a{" "}
                <strong>Bachelor of Science</strong> in{" "}
                <strong>computer science</strong>. I'm interested in{" "}
                <strong>software development</strong>,{" "}
                <strong>machine learning</strong>, and{" "}
                <strong>financial markets</strong>. Some of my hobbies are
                playing <u>ultimate frisbee</u>, solving <u>chess puzzles</u>,
                and cooking <u>ramen</u>. I'm excited to share my experiences
                with you!
              </div>
            </div>
            <div className="flex justify-center items-center space-x-10">
              <img
                className="h-[40vh] transition-transform transform hover:scale-110"
                src={pfp}
                alt="pfp"
              />
              <img
                className="h-[40vh] transition-transform transform hover:scale-110"
                src={frisbee}
                alt="frisbee"
              />
              <img
                className="h-[40vh] transition-transform transform hover:scale-110"
                src={pfp}
                alt="pfp"
              />
              <img
                className="h-[40vh] transition-transform transform hover:scale-110"
                src={frisbee}
                alt="frisbee"
              />
            </div>
          </div>
        </div>

        <div className="h-screen mt-10" id="experiences">
          <h1 className="text-4xl py-8 font-bold">Experiences</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5">
            {/* Project 2 */}
            <ExperienceCard
              name="Talroo"
              moreDetails="/experiences"
              imageSrc={TalrooLogo}
              imageAlt="Project 2"
              description="Incoming Machine Learning Engineer Intern"
            />
            {/* Project 1 */}
            <ExperienceCard
              name="Union Pacific Railroad"
              moreDetails="/experiences"
              imageSrc={UPLogo}
              imageAlt="Project 1"
              description="Software Engineer Intern"
            />

            {/* Project 3 */}
            <ExperienceCard
              name="Cornell Data Science"
              moreDetails="/experiences"
              imageSrc={CDSLogo}
              imageAlt="Project 3"
              description="Quantitative Finance Subteam Lead"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5">
            {/* Project 2 */}
            <ExperienceCard
              name="Cornell University"
              moreDetails="/experiences"
              imageSrc={CULogo}
              imageAlt="Project 2"
              description="Teaching Assistant"
            />
            {/* Project 1 */}
            <ExperienceCard
              name="Wohohiame"
              moreDetails="/experiences"
              imageSrc={WohohiameLogo}
              imageAlt="Project 1"
              description="Software Engineer Intern"
            />
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-[#679186] text-white px-6 py-3 rounded-md hover:bg-[#527670] focus:outline-none focus:ring focus:border-blue-300">
              Learn More By Clicking On Each Card
            </button>
          </div>
        </div>
        <div className="h-screen" id="projects">
          <h1 className="text-4xl py-8 font-bold">Projects</h1>
          <div className="gap-4 flex h-[40vh] justify-center mb-4">
            {/* Project 1 */}
            <ProjectCard
              name="TrivAI"
              moreDetails="/project"
              imageSrc={TrivAI}
              imageAlt="TrivAI Logo"
              description="iOS app that generates review question from user inputs and textbook
          images"
              skills={[Python, Collab]}
            />
            <ProjectCard
              name="Cloud Based Options Trading Bot"
              moreDetails="/project"
              imageSrc={TrivAI}
              imageAlt="TrivAI Logo"
              description="Researched and implemented the long straddle strategy to
          generate alpha"
              skills={[Python, Collab]}
            />
            <ProjectCard
              name="Options Pricing Models"
              moreDetails="/project"
              imageSrc={TrivAI}
              imageAlt="TrivAI Logo"
              description="Analyzed Black-Scholes, Monte Carlo, and Binomial Tree pricing models for options"
              skills={[Python, Collab]}
            />

            <ProjectCard
              name="Figgie Bot"
              moreDetails="/project"
              imageSrc={TrivAI}
              imageAlt="TrivAI Logo"
              description="Developed game engine for card game Figgie"
              skills={[Python, Collab]}
            />
          </div>
          <div className="gap-4 flex h-[40vh] justify-center">
            {/* Project 1 */}
            <ProjectCard
              name="Sports Market Exchange"
              moreDetails="/project"
              imageSrc={TrivAI}
              imageAlt="TrivAI Logo"
              description="Reduce the vig charged by sportsbooks by creating a market for sports betting"
              skills={[Python, Collab]}
            />

            {/* Project 3 */}
            <ProjectCard
              name="Go Fish Card Game"
              moreDetails="/project"
              imageSrc={TrivAI}
              imageAlt="TrivAI Logo"
              description="Implementation of the popular card game Go Fish in OCaml"
              skills={[Python, Collab]}
            />
            {/* Project 3 */}
            <ProjectCard
              name="Go Fish Card Game"
              moreDetails="/project"
              imageSrc={TrivAI}
              imageAlt="TrivAI Logo"
              description="Implementation of the popular card game Go Fish in OCaml"
              skills={[Python, Python]}
            />
            <ProjectCard
              name="Cloud Based Options Trading Bot"
              moreDetails="/project"
              imageSrc={TrivAI}
              imageAlt="TrivAI Logo"
              description="Researched and implemented the long straddle strategy to
          generate alpha"
              skills={[Python, Python]}
            />
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-[#679186] text-white px-6 py-3 rounded-md hover:bg-[#527670] focus:outline-none focus:ring focus:border-blue-300">
              Show More
            </button>
          </div>
        </div>

        <div className="h-[50vh] pt-[10vh]" id="contact">
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
    </div>
  );
};

export default Home;

export const Head = () => <title>Iram Liu</title>;
