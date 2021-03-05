import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { IntroductionToStyledComponentChildF } from "./IntroductionToStyledComponentChildF";
const StyledButton = styled.button`
  background-color: ${(props) => (props.afterClicked ? "yellow" : "red")};
  color: black;
  border-radius: 2px 20px 2px 20px;
  &:hover {
    background-color: ${(props) => (props.afterClicked ? "red" : "yellow")};
    color: salmon;
  }
`;

export const IntroductionToStyledComponentParentF = () => {
  const defaultPerson = [
    { id: uuidv4(), name: "Rehan", age: 20 },
    { id: uuidv4(), name: "khwaja", age: 27 },
    { id: uuidv4(), name: "Zahoor", age: 18 },
  ];
  const updatedPerson = [
    { id: uuidv4(), name: " Md khwaja", age: 270 },
    { id: uuidv4(), name: " Md Zahoor", age: 180 },
    { id: uuidv4(), name: "Sk Rehan", age: 200 },
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
  }

  return (
    <div className="mt-2">
      <p>4.Styled Component </p>
      <StyledButton afterClicked={showPerson} onClick={toggleNameHandler}>
        Styled Component
      </StyledButton>

      {person}
    </div>
  );
};
