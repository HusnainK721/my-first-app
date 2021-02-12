import React, { useState } from "react";
import { MapFunctionPracticeChild } from "./MapFunctionPracticeChild";

export const MapFunctionPracticeParent = () => {
  const PersonData = [
    { Company: "Pickupbiz", carName: "tesla" },
    { Company: "Ford", carName: "indigo" },
    { Company: "Tata", carName: "Nano" },
    { Company: "audi", carName: "audix1" },
    { Company: "mahindra", carName: "Thaar" },
  ];

  const [personDetails, setPersonDetails] = useState(PersonData);
  return (
    <div>
      {personDetails.map((fetchedData) => {
        return <MapFunctionPracticeChild />;
      })}
    </div>
  );
};
