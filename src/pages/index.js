import * as React from "react";
import pfp from "../images/pfp.jpg";
import { Link } from "gatsby";
const Home = () => {
  return (
    <div className="grid grid-cols-6 max-w-full h-screen mx-28">
      <div className="flex col-start-1 col-end-5 flex-col justify-center">
        <h1 className="text-7xl pb-8">Hi, I'm Iram!</h1>
        <h2 className="text-4xl pb-16"> Welcome to my portfolio site </h2>
        <ul className="text-2xl flex flex-col gap-y-2">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/experiences">Experiences</Link>
          </li>
          <li>
            <Link href="/projects">TProjects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
        </ul>
      </div>
      <div className="col-start-5 col-end-7 flex items-center ">
        <img src={pfp} alt="pfp"></img>
      </div>
    </div>
  );
};

export default Home;

export const Head = () => <title>Iram Liu</title>;
