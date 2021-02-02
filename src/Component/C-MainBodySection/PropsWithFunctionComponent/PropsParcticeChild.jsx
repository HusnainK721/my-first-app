import React from "react";

export const PropsParcticeChild = (props) => {
  return (
    <React.Fragment>
      <div>
        <h1>Props With Functional Component</h1>
        <p>
          I am {props.name} and i am {props.age} year old
        </p>
      </div>
    </React.Fragment>
  );
};
