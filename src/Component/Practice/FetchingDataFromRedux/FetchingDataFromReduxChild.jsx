import React from "react";

export const FetchingDataFromReduxChild = ({ itemCurrent }) => {
  return (
    <div>
      <h1>{itemCurrent.name}</h1>
      <img src={itemCurrent.image} alt="images" width="200px" height="200px" />
    </div>
  );
};
