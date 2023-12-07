import React from "react";

const SkillsSection = ({ skill }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-2">
      <div className="flex flex-wrap justify-center">
        {skill.map((img) => {
          return (
            <div className="m-2">
              <img src={img} className="h-8 w-8 rounded-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SkillsSection;
