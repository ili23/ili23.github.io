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
      <div className="bg-[#FFFBF5] text-[#679186] rounded-lg overflow-hidden shadow-md flex">
        <img src={imageSrc} alt={imageAlt} className="h-40 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{name}</h2>

          <p className="">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
