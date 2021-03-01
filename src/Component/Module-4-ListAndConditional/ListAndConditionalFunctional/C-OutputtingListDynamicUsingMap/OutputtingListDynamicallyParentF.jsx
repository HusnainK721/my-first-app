import React, { useState } from "react";
import { OutputtingListDynamicallyChildF } from "./OutputtingListDynamicallyChildF";

export const OutputtingListDynamicallyParentF = () => {
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
  const styleLi = {
    backgroundColor: "red",
  };
  return (
    <div>
      <p className="mt-2">2. Dynmaic Loading Data & Conditional Rendering</p>
      <button onClick={handleConditionalRendering}>
        Loading Dynamic Data Using .Map()
      </button>
      {ShowPersonData && (
        <div>
          {PersonData.defaultPersonData.map((itemCurrent) => {
            return (
              <ul style={styleLi}>
                <li>{itemCurrent.name}</li>
                <li>{itemCurrent.age}</li>
              </ul>
              // <OutputtingListDynamicallyChildF
              //   name={itemCurrent.name}
              //   age={itemCurrent.age}
              // />
            );
          })}

          <button onClick={handleNameChange}> Change State</button>
        </div>
      )}
    </div>
  );
};
