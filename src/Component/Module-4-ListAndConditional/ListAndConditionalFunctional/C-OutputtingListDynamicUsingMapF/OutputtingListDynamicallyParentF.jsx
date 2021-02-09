import React, { useState } from "react";
import { OutputtingListDynamicallyChildF } from "./OutputtingListDynamicallyChildF";

export const OutputtingListDynamicallyParentF = () => {
  const [PersonData, setPersonData] = useState({
    person: [
      { name: "Khwaja", age: 27 },
      { name: "Roman", age: 12 },
      { name: "Kashaf", age: 4 },
    ],
  });
  return (
    <div>
      <p className="mt-2">2. Dynmaic Loading Data & Conditional Rendering</p>
      <button>Loading Dynamic Data Using .Map() </button>
      {PersonData.person.map((itemCurrent) => {
        return (
          <OutputtingListDynamicallyChildF
            name={itemCurrent.name}
            age={itemCurrent.age}
          />
        );
      })}
    </div>
  );
};
