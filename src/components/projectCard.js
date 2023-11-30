import React from "react";
import { Link } from "gatsby";
import SkillsSection from "../components/skillsSection";
const ProjectCard = ({
  name,
  moreDetails,
  imageSrc,
  imageAlt,
  description,
  skills,
}) => {
  return (
    <Link to={moreDetails}>
      <div className="flex h-[40vh] items-center justify-center">
        <div className="group h-72 w-72 [perspective:1000px]">
          <div className="relative h-full w-full rounded-m shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                src={imageSrc}
                alt={imageAlt}
              />
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-[#FFFBF5]/95 px-6 text-center text-[#679186] [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1 className="text-2xl font-bold pb-4">{name}</h1>
                <p className="text-base">{description}</p>

                <SkillsSection skill={skills} />
                <button className="mt-4 rounded-md bg-[#679186] py-1 px-2 text-[#FFFBF5] text-sm hover:bg-neutral-900">
                  Read More!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProjectCard;
