import React from "react";

export const PropsWithFunctionChild = (props) => {
  return (
    <React.Fragment>
      <div>
        <p>
          I am {props.name} and i am {props.age} year old
        </p>
        <button onClick={props.click}>I am from child component</button>
      </div>
    </React.Fragment>
  );
};
