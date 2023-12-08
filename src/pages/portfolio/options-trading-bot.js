import React from "react";
import Template from "../../components/template.js";
import OTBPresentation from "../../assets/OTB_presentation.pdf";
const OTB = () => {
  return (
    <Template
      title="Options Trading Bot"
      subtitle="Cornell Data Science Quantitative Finance Project"
      skills="Python, Options Trading Stategies, Web Scraping"
      p1="This was my first finance project on the Quantitative Finance subteam at Cornell Data Science."
      p2="Similar to Figgie, despite being new to the team, I was able to contribute to the project by web scraping
      news headlines which are fed into the NLP model in order to predict volatility."
      p3=""
      imageSrc=""
      pres={OTBPresentation}
      vid=""
      num="2"
    />
  );
};
export default OTB;
