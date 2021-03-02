import React, { useState } from "react";
import { SettingClassNameDynamicallyChildF } from "./SettingClassNameDynamicallyChildF";
import "./SettingClassNameDynamically.css";
export const SettingClassNameDynamicallyParentF = () => {
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
  // Default css of button
  const buttonStyle = {
    backgroundColor: "Yellow",
  };

  let person = null;
  if (showPerson) {
    person = (
      <div>
        {personData.map((item, index) => {
          return (
            <SettingClassNameDynamicallyChildF
              itemCurrent={item}
              name={item.name}
              age={item.age}
              clicked={removePersonData}
            />
          );
        })}
        <button onClick={switchNameHandler} className="mt-2">
          Change State
        </button>
      </div>
    );
    buttonStyle.backgroundColor = "pink";
  }

  //   const classes = ["para-color", "para-look"].join(" ");4
  // OR
  const classes = [];
  if (personData.length <= 1) {
    classes.push("para-color");
  }
  if (personData.length <= 2) {
    classes.push("para-look");
  }
  return (
    <div className="mt-2">
      <p className={classes.join(" ")}>2.Setting className Dynamically </p>
      <button onClick={toggleNameHandler} style={buttonStyle}>
        Delete To Apply CSS
      </button>

      {person}
    </div>
  );
};
