import React from "react";
import { Link } from "gatsby";
import SkillsSection from "../components/skillsSection";
const ExperienceCard = ({
  name,
  date,
  moreDetails,
  imageSrc,
  imageAlt,
  description,
  skills,
}) => {
  return (
    <div className="col-span-1">
      <Link to={moreDetails}>
        <div className="flex items-center justify-center text-[#242e42]">
          <div className="group h-48 w-full  [perspective:1000px]">
            <div className="bg-[#FFFBF5] relative h-full w-full rounded-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 flex items-center">
                <img
                  className="pl-4 h-28 object-cover"
                  src={imageSrc}
                  alt={imageAlt}
                />
                <div className="p-6 h-full w-full">
                  <div className="h-[70%]">
                    <h2 className="text-xl font-bold mb-3 underline underline-offset-2">
                      {name}
                    </h2>
                    <h2 className="text-sm font-bold mb-1">{date}</h2>
                    <p className="text-sm">{description}</p>{" "}
                  </div>
                  <SkillsSection skill={skills} />
                </div>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-[#FFFBF5]/95 px-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h1 className="text-2xl font-bold pb-4">{name}</h1>
                  <p className="text-base">{description}</p>

                  <button className="mt-4 rounded-md bg-[#679186] py-1 px-2 text-[#FFFBF5] text-sm hover:bg-neutral-900">
                    Read More!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ExperienceCard;
