import React, { useState } from "react";
import { ImageInUseState } from "../ImagePractice/ImageInUseState";

export const CounterPractice = () => {
  const [addNumber, setAddNumber] = useState(10);

  const addCunterHandler = () => {
    setAddNumber(addNumber + 1);
  };
  const removeCunterHandler = () => {
    setAddNumber(addNumber - 1);
  };
  return (
    <div>
      <p> Number......</p>
      <button>{addNumber}</button>
      <br />
      <br />
      <button onClick={addCunterHandler}>Increase Count</button>
      <br />
      <br />
      <button onClick={removeCunterHandler}>Decrease Count</button>
      <ImageInUseState />
    </div>
  );
};
