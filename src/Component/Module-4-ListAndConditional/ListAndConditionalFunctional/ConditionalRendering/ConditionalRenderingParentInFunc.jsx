import React, { useState } from "react";

export const ConditionalRenderingParentInFunc = () => {
  const [showPerson, setShowPerson] = useState(false);
  const [personData, setPersonData] = useState({
    person: [
      { name: "Salman", age: 23 },
      { name: "Khuddus", age: 24 },
      { name: "Zeeshan", age: 25 },
    ],
  });
  // this is switch name handler
  const switchNameHandler = () => {
    setPersonData({
      person: [
        { name: "Node", age: 23 },
        { name: "Backend", age: 24 },
        { name: "UI", age: 25 },
      ],
    });
  };
  const changeNameHandler = (e) => {
    setPersonData({
      person: [
        { name: "UI", age: 23 },
        { name: "Backend", age: 24 },
        { name: e.target.value, age: 25 },
      ],
    });
  };
  const togglePersonHandler = () => {
    setShowPerson(!showPerson);
  };
  let person = null;
  if (showPerson) {
    person = (
      <div>
        <ConditionalRenderingChildInFunc
          name={personData.person[0].name}
          age={personData.person[0].age}
        />
        <ConditionalRenderingChildInFunc
          name={personData.person[1].name}
          age={personData.person[1].age}
        />
        <ConditionalRenderingChildInFunc
          name={personData.person[2].name}
          age={personData.person[2].age}
          change={changeNameHandler}
        />
        <button onClick={switchNameHandler}>Click TO Change State 2</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={togglePersonHandler}>Click TO Change State 1</button>

      {person}
    </div>
  );
};
