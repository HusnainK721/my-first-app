import React, { useState } from "react";
import { ListAndConditionalFunctionalChild } from "./ListAndConditionalFunctionalChild";

export const ListAndConditionalFunctionalParent = () => {
  const [showPerson, setShowPerson] = useState(false);
  const [personData, setPersonData] = useState({
    person: [
      { name: "Salman", age: 23 },
      { name: "Khuddus", age: 24 },
      { name: "Zeeshan", age: 25 },
    ],
  });
  const changeNameHandler = () => {
    setPersonData({
      person: [
        { name: "Node", age: 23 },
        { name: "Backend", age: 24 },
        { name: "UI", age: 25 },
      ],
    });
  };
  const togglePersonHandler = () => {
    setShowPerson(!showPerson);
  };
  return (
    <div>
      <button onClick={togglePersonHandler}>Click TO Change State 1</button>
      {showPerson ? (
        <div>
          <ListAndConditionalFunctionalChild
            name={personData.person[0].name}
            age={personData.person[0].age}
          />
          <ListAndConditionalFunctionalChild
            name={personData.person[1].name}
            age={personData.person[1].age}
          />
          <ListAndConditionalFunctionalChild
            name={personData.person[2].name}
            age={personData.person[2].age}
            // change={changeNameHandler}
          />
          <button onClick={changeNameHandler}>Click TO Change State 2</button>
        </div>
      ) : null}
    </div>
  );
};
