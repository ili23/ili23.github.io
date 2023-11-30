import React from "react";
import { Link } from "gatsby";

const ExperienceCard = ({
  name,
  moreDetails,
  imageSrc,
  imageAlt,
  description,
}) => {
  return (
    <Link to={moreDetails}>
      <div className="bg-[#FFFBF5] h-48 relative text-[#679186] rounded-lg overflow-hidden shadow-md flex items-center cursor-pointer transition-transform transform hover:scale-110 ">
        <img src={imageSrc} alt={imageAlt} className="pl-4 h-32 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
