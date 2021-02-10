import React, { useState } from "react";

export const CounterPractice = () => {
  const [addNumber, setAddNumber] = useState(10);

  const loadImageHandler1 = () => {
    setAddNumber(<img src="logo192.png" alt="react img" />);
  };
  const loadImageHandler2 = () => {
    setAddNumber(<img src="Assets/Rose.jpg" alt="react img" />);
  };
  return (
    <div>
      <p> Number......</p>
      <button>{addNumber}</button>
      <br />
      <br />
      <button onClick={loadImageHandler1}>change img 1 </button>
      <br />
      <br />
      <button onClick={loadImageHandler2}>change img 2</button>
    </div>
  );
};
