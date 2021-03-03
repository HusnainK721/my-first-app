import React, { useState } from "react";
import { SettingStyleDynamicallyChildF } from "./SettingStyleDynamicallyChildF";

export const SettingStyleDynamicallyParentF = () => {
  const [ShowPersonData, setShowPersonData] = useState(false);
  const [PersonData, setPersonData] = useState({
    defaultPersonData: [
      { name: "Khwaja", age: 27 },
      { name: "Roman", age: 12 },
      { name: "Kashaf", age: 4 },
      { name: "Kashaf", age: 4 },
      { name: "Kashaf", age: 40 },
    ],
  });
  const handleNameChange = () => {
    setPersonData({
      defaultPersonData: [
        { name: "Khwajaaaaa", age: 27 },
        { name: "Roman", age: 12 },
        { name: "Kashaf", age: 4 },
        { name: "Kashaf", age: 4 },
        { name: "Kashaf", age: 40 },
      ],
    });
  };
  const handleConditionalRendering = () => {
    setShowPersonData(!ShowPersonData);
  };
  const styleButton = {
    backgroundColor: "green",
    boxShadow: "10px 30px 40px red",
  };
  let person = null;
  if (ShowPersonData) {
    person = (
      <div>
        {PersonData.defaultPersonData.map((itemCurrent) => {
          return (
            <SettingStyleDynamicallyChildF
              name={itemCurrent.name}
              age={itemCurrent.age}
            />
          );
        })}

        <button onClick={handleNameChange}> Change State</button>
      </div>
    );
    styleButton.backgroundColor = "red";
    styleButton.boxShadow = "10px 30px 40px black";
    styleButton.border = "5px solid blue";
  }
  return (
    <div>
      <p className="mt-2">1. Setting Dynamic Style </p>
      <button onClick={handleConditionalRendering} style={styleButton}>
        Loading Dynamic Data Using .Map()
      </button>

      {person}
    </div>
  );
};
