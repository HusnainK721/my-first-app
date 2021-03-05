import React, { useState } from "react";
import { IntroductionToStyledComponentChildF } from "./IntroductionToStyledComponentChildF";
export const IntroductionToStyledComponentParentF = () => {
  const defaultPerson = [
    { id: "khwaja3", name: "Rehan", age: 20 },
    { id: "khwaja1", name: "khwaja", age: 27 },
    { id: "khwaja2", name: "Zahoor", age: 18 },
  ];
  const updatedPerson = [
    { id: "khwaja4", name: " Md khwaja", age: 270 },
    { id: "khwaja5", name: " Md Zahoor", age: 180 },
    { id: "khwaja6", name: "Sk Rehan", age: 200 },
  ];
  const [showPerson, setShowPerson] = useState(false);
  const [personData, setPersonData] = useState(defaultPerson);
  const switchNameHandler = () => {
    setPersonData(updatedPerson);
  };
  const toggleNameHandler = () => {
    setShowPerson(!showPerson);
  };

  const removePersonData = (indexPerson) => {
    const newPersonData = [...personData]; // called state immutability OR (Copying existing state)
    newPersonData.splice(indexPerson, 1);
    setPersonData(newPersonData);
  };

  let person = null;
  if (showPerson) {
    person = (
      <div>
        {personData.map((item, index) => {
          return (
            <IntroductionToStyledComponentChildF
              itemCurrent={item}
              name={item.name}
              age={item.age}
              clicked={() => removePersonData(index)}
            />
          );
        })}
        <button onClick={switchNameHandler} className="mt-2">
          Change State
        </button>
      </div>
    );
    //   buttonStyle.backgroundColor = "pink";
    //   buttonStyle[":hover"] = {
    //     backgroundColor: "black",
    //     color: "pink",
    //   };
  }

  //   const classes = ["para-color", "para-look"].join(" ");4
  // OR
  // const classes = [];
  // if (personData.length <= 1) {
  //   classes.push("para-color");
  // }
  // if (personData.length <= 2) {
  //   classes.push("para-look");
  // }
  return (
    <div className="mt-2">
      <p>3.Styled Component </p>
      <button onClick={toggleNameHandler}>Added Radium</button>

      {person}
    </div>
  );
};
