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
      <div className="bg-[#FFFBF5] text-[#679186] h-[66vh] rounded-lg overflow-hidden shadow-md">
        <img src={imageSrc} alt={imageAlt} className="h-1/2" />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="">{description}</p>
        </div>
      </div>
    </Link>
  );
};
export default ProjectCard;
