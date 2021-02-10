import React, { useState } from "react";
import { DeletingStateChildF } from "./DeletingStateChildF";
export const DeletingStateParentF = () => {
  const [personData, setPersonData] = useState({
    person: [
      { name: "khwaja", age: 27 },
      { name: "Zahoor", age: 18 },
      { name: "Rehan", age: 20 },
    ],
  });
  return (
    <div>
      {personData.person.map}
      <DeletingStateChildF />
    </div>
  );
};
