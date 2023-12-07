import React, { useState, useEffect } from "react";
import NavBar from "../components/navBar";
import ResumePDF from "../assets/Iram_Liu_Resume.pdf";
// Resume component
const Resume = () => {
  return (
    <div className="max-w-full h-screen">
      <div className="grid grid-cols-7 ">
        <div className="col-span-6">
          <div className="flex flex-col h-full w-full px-auto pl-44">
            <h1 className="text-5xl py-10">Resume</h1>
            <div className=" pb-5 grow ">
              <iframe
                src={ResumePDF}
                width="80%%"
                height="100%"
                title="PDF Preview"
              />
            </div>
          </div>
        </div>
        <div className="flex col-span-1 bg-[#FFFBF5]  h-screen">
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default Resume;
