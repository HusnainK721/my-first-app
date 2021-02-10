import React, { useState } from "react";

export const CounterPractice = () => {
  const [addNumber, setAddNumber] = useState(10);

  const handleAddCounter = () => {
    setAddNumber(<img src="logo192.png" />);
  };
  const handleDeleteCounter = () => {
    setAddNumber(<img src="Assets/Rose.jpg" style={{ float: "right" }} />);
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
      <a href="#" onClick={handleDeleteCounter} style={{ float: "left" }}>
        Delete Number
      </a>
    </div>
  );
};
