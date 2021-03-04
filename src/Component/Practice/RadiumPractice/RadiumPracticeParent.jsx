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
  const styledDiv = {
    border: "solid 2px lightblue",
    boxShadow: "0 2px 5px black",
    width: "60%",
  };
  return (
    <div>
      <div style={styledDiv}>
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
