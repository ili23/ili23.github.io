import React from "react";
import { Link } from "gatsby";
const ProjectCard = ({
  name,
  moreDetails,
  imageSrc,
  imageAlt,
  description,
}) => {
  return (
    <Link to={moreDetails}>
      <div class="flex h-[40vh] items-center justify-center">
        <div class="group h-72 w-72 [perspective:1000px]">
          <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div class="absolute inset-0">
              <img
                class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                src={imageSrc}
                alt=""
              />
            </div>
            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class="flex min-h-full flex-col items-center justify-center">
                <h1 class="text-3xl font-bold">{name}</h1>
                <p class="text-lg">Photographer & Art</p>
                <p class="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#FFFBF5] text-[#679186] h-[40vh] rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-110">
        <img src={imageSrc} alt={imageAlt} className="h-1/2" />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="">{description}</p>
        </div>
      </div> */}
    </Link>
  );
};
export default ProjectCard;
