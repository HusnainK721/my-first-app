import React from "react";
import { FetchingDataFromJsonChild } from "./FetchingDataFromJsonChild";
import { PersonReducers } from "../../State/Reducers/PersonReducer";
export const FetchingDataFromJsonParent = () => {
  console.log("testing personReducer=>=>=>=>", PersonReducers);
  return (
    <div>
      {PersonReducers.personDetail.map((item) => {
        return <FetchingDataFromJsonChild itemCurrent={item} />;
      })}
    </div>
  );
};
