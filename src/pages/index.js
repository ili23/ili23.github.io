import React, { useState, useEffect } from "react";
import pfp from "../images/pfp.jpg";
import Footer from "../components/footer";
import { Link as ScrollLink } from "react-scroll";
import ReactTyped from "react-typed";

const Home = () => {
  const [showSecondTyped, setShowSecondTyped] = useState(false);
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setShowSecondTyped(true);
    }, 3000); // Set the delay time in milliseconds (2 seconds in this example)

    return () => clearTimeout(delayTimer);
  }, []);

  return (
    <div className="max-w-full mx-28">
      <div className="grid grid-cols-6  h-screen ">
        <div className="flex col-start-1 col-end-5 flex-col justify-center">
          <h1 className="text-7xl pb-8">
            <ReactTyped
              strings={["Hi, I'm Iram."]}
              showCursor={false}
              typeSpeed={100}
              backSpeed={30}
            />
          </h1>
          <h2 className="text-4xl pb-16">
            <ReactTyped
              strings={["Welcome to my portfolio site!"]}
              startDelay={2000}
              typeSpeed={100}
              showCursor={true}
              cursorChar=""
              loop
              backSpeed={30}
            />
          </h2>
        </div>
        {showSecondTyped && (
          <div className="col-start-5 col-end-7 flex items-center justify-end">
            <ul className="text-2xl flex flex-col gap-y-2 text-right">
              <li className="hover:border-b-2 border-b-2 border-transparent hover:border-[#FEF4E7] cursor-pointer">
                <ScrollLink to="about" smooth={true} duration={800}>
                  About
                </ScrollLink>
              </li>
              <li className="hover:border-b-2 border-b-2 border-transparent hover:border-[#FEF4E7] cursor-pointer">
                <ScrollLink to="projects" smooth={true} duration={800}>
                  Projects
                </ScrollLink>
              </li>
              <li className="hover:border-b-2 border-b-2 border-transparent hover:border-[#FEF4E7] cursor-pointer">
                <ScrollLink to="experiences" smooth={true} duration={800}>
                  Experiences
                </ScrollLink>
              </li>

              <li className="hover:border-b-2 border-b-2 border-transparent hover:border-[#FEF4E7] cursor-pointer">
                <ScrollLink to="contact" smooth={true} duration={800}>
                  Contact
                </ScrollLink>
              </li>
              <li className="hover:border-b-2 border-b-2 border-transparent hover:border-[#FEF4E7] cursor-pointer">
                <ScrollLink to="resume" smooth={true} duration={800}>
                  Resume
                </ScrollLink>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="h-screen">
        <img className="h-1/2" src={pfp} alt="pfp"></img>{" "}
      </div>
      <div className="h-screen" id="about">
        <h1 className="text-4xl"> A Little About Myself:</h1>
        <p>
          {" "}
          I'm currently a junior at Cornell University working towards a
          Bachelor of Science in Computer Science. Next summer, I'm interning at
          Talroo as a Machine Learning Engineer Intern.'{" "}
        </p>
      </div>
      <div className="h-screen" id="projects">
        Projects
      </div>
      <div className="h-screen" id="experiences">
        Experiences
      </div>
      <div className="h-screen" id="contact">
        Contact
      </div>
      <div className="h-screen" id="resume">
        Resume
      </div>
      <Footer />
    </div>
  );
};

export default Home;

export const Head = () => <title>Iram Liu</title>;
