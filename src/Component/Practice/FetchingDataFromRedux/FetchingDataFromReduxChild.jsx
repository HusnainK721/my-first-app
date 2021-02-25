import React from "react";

export const FetchingDataFromReduxChild = ({ itemCurrent }) => {
  return (
    <div style={{ display: "inline-block" }}>
      <h1>{itemCurrent.name}</h1>
      <img src={itemCurrent.img} alt="images" width="200px" height="200px" />
    </div>
  );
};
