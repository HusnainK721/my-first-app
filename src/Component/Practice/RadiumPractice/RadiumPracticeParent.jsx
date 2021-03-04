import React from "react";
// import RadiumPracticeChild from "./RadiumPracticeChild";
import Radium from "radium";
const RadiumPracticeParent = () => {
  const styledButton = {
    backgroundColor: "salmon",
    boxShadow: "0 0 20px black",
    ":hover": {
      backgroundColor: "green",
      boxShadow: "0 0 20 green",
    },
  };
  return (
    <div>
      <div>
        <h1>hiiiiiiiiiiiii</h1>
        <p>This is radium practice</p>
        <i>first install radium :- npm install radium --save</i>
        <br />
        <button style={styledButton}>RADIUM</button>
        <button>testing</button>
      </div>
    </div>
  );
};

export default Radium(RadiumPracticeParent);
