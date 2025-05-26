import React from "react";
import CommonTitle from "../Components/CommonTitle";
import indoorimg1 from "../assets/indoorimg1.png";
import indoorimg2 from "../assets/indoorimg2.png";
import indoorimg3 from "../assets/indoorimg3.png";
import indoorimg4 from "../assets/indoorimg4.png";
import IndooorCirds from "../Components/IndooorCirds";

function Indoor() {
  const indoorData = [
    {
      title: "Philodendron",
      pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      img: indoorimg1,
    },
    {
      title: "Calathea",
      pera: "Lorem ipsum dolor sit  consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      img: indoorimg2,
    },
    {
      title: "Air Purifying",
      pera: "Lorem ipsum dolor sit  consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      img: indoorimg3,
    },
    {
      title: "Low Light Tolerant",
      pera: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
      img: indoorimg4,
    },
  ];
  return (
    <>
      <section className="px-12.5">
        <CommonTitle title="Indoor Collection" />
        <div className="parent">
          {indoorData.map((data, i) => {
            return <IndooorCirds key={i} index={i} data={data} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Indoor;
