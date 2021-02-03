import React from "react";

export const PropsParcticeChild = (props) => {
  return (
    <React.Fragment>
      <div>
        <h1>Props With Functional Component</h1>
        <p>
          I am {props.brand} and i am {props.age} year old
        </p>
        <p> {props.children}</p>
      </div>
    </React.Fragment>
  );
};
