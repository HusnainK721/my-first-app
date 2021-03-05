import React from "react";
import "./IntroductionToStyledComponent.css";
export const IntroductionToStyledComponentChildF = (itemCurrent) => {
  // Adding @media query in inline css using radium
  // But you need to bind the entire application with <StyleRoot></StyleRoot>
  // Here i bind in AddingAndUsingRadiumParentF component
  // const buttonStyle = {
  //   "@media(min-width:500px)": {
  //     width: "250px",
  //   },
  // };
  return (
    <div className="person">
      <p onClick={itemCurrent.clicked}>
        my name is {itemCurrent.name} & i am 27 year old
      </p>
      <input type="text" />
    </div>
  );
};
