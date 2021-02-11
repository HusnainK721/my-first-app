import React, { useState } from "react";
import { DeletingStateChildF } from "./DeletingStateChildF";
export const DeletingStateParentF = () => {
  const [showPerson, setShowPerson] = useState(false);
  const [personData, setPersonData] = useState({
    person: [
      { name: "khwaja", age: 27 },
      { name: "Zahoor", age: 18 },
      { name: "Rehan", age: 20 },
    ],
  });
  const switchNameHandler = () => {
    setPersonData({
      person: [
        { name: " Md khwaja", age: 270 },
        { name: " Md Zahoor", age: 180 },
        { name: "Sk Rehan", age: 200 },
      ],
    });
  };
  const toggleNameHandler = () => {
    setShowPerson(!showPerson);
  };
  return (
    <div className="mt-2">
      <button onClick={toggleNameHandler}>Toggle & Delete Content</button>
      {showPerson && (
        <div>
          {personData.person.map((item) => {
            return (
              <DeletingStateChildF
                itemCurrent={item}
                name={item.name}
                age={item.age}
                // clicked={deleteParaHandler}
              />
            );
          })}
          <button onClick={switchNameHandler}>Change State</button>
        </div>
      )}
    </div>
  );
};
