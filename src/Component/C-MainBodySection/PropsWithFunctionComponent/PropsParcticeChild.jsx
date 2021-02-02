import React from "react";

export const PropsParcticeChild = (props) => {
  return (
    <React.Fragment>
      <div>
        <h1>Props With Functional Component</h1>
        <p>
          I am {props.brand} and i am {props.age} year old
        </p>
        <p>I am {props.name} and i am year old</p>
      </div>
    </React.Fragment>
  );
};
