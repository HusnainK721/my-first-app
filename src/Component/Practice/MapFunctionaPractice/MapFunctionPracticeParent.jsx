import React, { useState } from "react";
import { MapFunctionPracticeChild } from "./MapFunctionPracticeChild";

export const MapFunctionPracticeParent = () => {
  const PersonData = [
    {
      Company: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda officia labore fugit officiis quaerat rerum eius, quibusdam voluptate eveniet voluptatibus aspernatur omnis, non tempore? Ipsum quibusdam animi vero officiis.`,
      carName: "tesla",
    },
    { Company: "Ford", carName: "indigo" },
    { Company: "Tata", carName: "Nano" },
    { Company: "audi", carName: "audix1" },
    { Company: "mahindra", carName: "Thaar" },
  ];

  const [personDetails, setPersonDetails] = useState(PersonData);
  const togglePersonHandler = () => {};
  return (
    <div>
      <button onClick={togglePersonHandler}>
        loading data using map function
      </button>
      {personDetails.map((fetchedData) => {
        return (
          <MapFunctionPracticeChild
            companyName={fetchedData.Company}
            car={fetchedData.carName}
          />
        );
      })}
    </div>
  );
};
