import React, { useState } from "react";

export const CounterPractice = () => {
  const [addNumber, setAddNumber] = useState(10);

  const handleAddCounter = () => {
    setAddNumber(<img src="logo192.png" />);
  };
  const handleDeleteCounter = () => {
    setAddNumber(<img src="Assets/Rose.jpg" />);
  };
  return (
    <div>
      <p> Number......</p>
      <button>{addNumber}</button>
      <br />
      <br />
      <button onClick={handleAddCounter}>Add Number </button>
      <br />
      <br />
    </div>
  );
};