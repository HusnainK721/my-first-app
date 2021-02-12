import React, { useState } from "react";
import { MapFunctionPracticeChild } from "./MapFunctionPracticeChild";

export const MapFunctionPracticeParent = () => {
  const [show, setShow] = useState(false);

  const [personDetails, setPersonDetails] = useState({
    PersonData: [
      { Company: "Ford", carName: "indigo" },
      { Company: "Tata", carName: "Nano" },
      { Company: "audi", carName: "audix1" },
      { Company: "mahindra", carName: "Thaar" },
    ],
  });
  const handlePersonSwitch = () => {
    setPersonDetails({
      PersonData: [
        { Company: "Ford1", carName: "indigo" },
        { Company: "Tata1", carName: "Nano" },
        { Company: "audi1", carName: "audix1" },
        { Company: "mahindra1", carName: "Thaar" },
      ],
    });
  };
  const togglePersonHandler = () => {
    setShow(!show);
  };
  return (
    <div>
      <button onClick={togglePersonHandler} className="mt-2">
        loading data using map function
      </button>
      {show && (
        <div>
          {personDetails.PersonData.map((fetchedData) => {
            return (
              <MapFunctionPracticeChild
                companyName={fetchedData.Company}
                car={fetchedData.carName}
              />
            );
          })}
          <button onClick={handlePersonSwitch}>change state</button>
        </div>
      )}
    </div>
  );
};
