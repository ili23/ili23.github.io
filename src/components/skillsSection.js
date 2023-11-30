import React from "react";

const SkillsSection = ({ skill }) => {
  console.log(skill);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-wrap justify-center">
        {skill.map((img) => {
          return (
            <div className="m-2">
              <img src={img} className="h-10 w-10" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SkillsSection;
