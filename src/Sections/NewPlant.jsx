import React from "react";
import CommonTitle from "../Components/CommonTitle";
import newplant1 from "../assets/newplant1.png";
import newplant2 from "../assets/newplant2.png";
import newplant3 from "../assets/newplant3.png";
import NewPlantCird from "../Components/NewPlantCird";

function NewPlant() {
  const newplantCirsdata = [
    {
      img: newplant1,
      title: "Peperomia Plants",
      pera: "Moist but well-drained",
      price: "122,056",
    },
    {
      img: newplant2,
      title: "Fiddle-Leaf Fig",
      pera: "Moist but well-drained",
      price: "162,056",
    },
    {
      img: newplant3,
      title: "Calathea Orbifolia",
      pera: "Moist but well-drained",
      price: "102,056",
    },
  ];
  return (
    <>
      <section className="py-[125px] px-[55px]">
        <CommonTitle
          title="New Plants"
          pera="Bring nature insider and shop our big selections of fresh indoor plants including Instagram-worthy houseplants, pet-friendly plants, orchids and one-of-a-kind rare plants."
        />
        <div className="grid grid-cols-3 gap-5">
          {newplantCirsdata.map((data, i) => {
            return <NewPlantCird key={i} data={data} />;
          })}
        </div>
      </section>
    </>
  );
}

export default NewPlant;
