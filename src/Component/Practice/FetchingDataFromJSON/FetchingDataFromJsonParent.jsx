import React from "react";
import { FetchingDataFromJsonChild } from "./FetchingDataFromJsonChild";
import { PersonReducers } from "../../State/Reducers/PersonReducer";
export const FetchingDataFromJsonParent = () => {
  console.log("testing personReducer=>=>=>=>", PersonReducers);
  return (
    <div>
      {}
      <FetchingDataFromJsonChild />
    </div>
  );
};
