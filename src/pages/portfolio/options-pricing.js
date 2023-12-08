import React from "react";
import Template from "../../components/template.js";
import OPPresentation from "../../assets/op.pdf";
const OP = () => {
  return (
    <Template
      title="Options Pricing Model Implementation"
      subtitle="Research Project with Cornell Data Science QF Subteam"
      skills="Python, C++, Matplotlib, Git"
      p1="The goal of this project was to learn about how options are priced in the real world and to compare the various mathematical
      models. As a subteam, we read John Hull's book on Options, Futures, and Other Derivatives and implemented the Binomial, Black-Scholes,
       and Monte Carlo models."
      p2=""
      p3="The main skills that I learned from this project were how to implement a complex mathematical model in code
       and how to use C++ to speed up the computation time of the model. "
      imageSrc=""
      pres={OPPresentation}
      vid=""
      num="2"
    />
  );
};
export default OP;
