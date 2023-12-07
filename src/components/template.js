import React from "react";
import { Link } from "gatsby";
import { TiArrowBackOutline } from "react-icons/ti";
const Template = ({
  title,
  subtitle,
  skills,
  p1,
  p2,
  p3,
  imageSrc,
  pres,
  vid,
  num,
  link,
  containsLink,
}) => {
  return (
    <div className="m-10 p-20 bg-[#FFFBF5] text-[#242e42] h-[90vh]">
      <div className="pb-10 flex justify-between">
        <h1 className="text-5xl">{title}</h1>
        <Link
          to="/#portfolio"
          className="w-max px-4 py-2 bg-[#679186] text-[#FFFBF5] hover:bg-[#242e42] flex items-center "
        >
          Back <TiArrowBackOutline className="text-2xl" />
        </Link>{" "}
      </div>

      <div className="grid grid-cols-6 h-[60vh] gap-x-4">
        <div className="col-span-3">
          <h2 className="text-3xl pb-4">{subtitle}</h2>
          <h3 className="text-2xl pb-4 font-bold">{`Skills: ` + skills}</h3>
          <p className="pb-2">{p1}</p>
          <p className="pb-2">{p2}</p>
          <p className="pb-2">{p3}</p>
          {containsLink && (
            <a className="text-xl font-bold" target="_blank" href={link}>
              {`Link to ` + title}
            </a>
          )}
        </div>
        <div className="col-span-3 flex items-center justify-center">
          {num === "0" && (
            <img
              src={imageSrc}
              className="h-[50vh]"
              alt="Image of Experience"
            />
          )}
          {num === "1" && (
            <iframe
              width="88%"
              height="66%"
              src={`https://www.youtube.com/embed/` + vid}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          )}
          {num === "2" && (
            <iframe
              width="100%"
              height="80%"
              src={pres}
              title="YouTube video player"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Template;
