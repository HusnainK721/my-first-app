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
  const deleteParaHandler = (itemIndex) => {
    const personDataCopy = [...personData.person]; // thi is called state immutability (Copy of current state)
    personDataCopy.splice(itemIndex, 1);
    console.log("personDataCopy", personDataCopy);

    setPersonData([personDataCopy]);
  };
  //  const newPeople = people.filter((person) => { person.id !== id;
  //    setPeople( newPeople );
  return (
    <div className="mt-2">
      <p>3. Deleting State onClick of Button </p>
      <button onClick={toggleNameHandler}>Toggle & Delete Content</button>
      {showPerson ? (
        <div>
          {personData.person.map((item, index) => {
            return (
              <DeletingStateChildF
                itemCurrent={item}
                name={item.name}
                age={item.age}
                clicked={() => deleteParaHandler(index)}
              />
            );
          })}
          <button onClick={switchNameHandler}>Change State</button>
        </div>
      ) : null}
    </div>
  );
};
