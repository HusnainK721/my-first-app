import React from "react";

export const FetchingDataFromReduxChild = ({ itemCurrent }) => {
  return (
    <div style={{ display: "inline-block", padding: "30px" }}>
      <h1>{itemCurrent.name}</h1>
      <img src={itemCurrent.image} alt="images" width="200px" height="200px" />
      <p>{itemCurrent.desc}</p>
    </div>
  );
};
