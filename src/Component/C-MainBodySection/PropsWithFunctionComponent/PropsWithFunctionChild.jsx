import React from "react";

export const PropsWithFunctionChild = (props) => {
  return (
    <React.Fragment>
      <div>
        <p onClick={props.clicked}>
          I am {props.name} and i am {props.age} year old
        </p>
        <input type="text" onChange={props.change} />
      </div>
    </React.Fragment>
  );
};
