import React from "react";
import StyledComponentparent from "./StyledComponent/StyledComponentparent";
import { CounterPractice } from "./UseStatePractice/CounterPractice/CounterPractice";
import { FetchingDataFromReduxParent } from "./FetchingDataFromRedux/FetchingDataFromReduxParent";
import { MapFunctionPracticeParent } from "./MapFunctionaPractice/MapFunctionPracticeParent";
import RadiumPracticeParent from "./RadiumPractice//RadiumPracticeParent";
const AllPractice = () => {
  return (
    <div>
      <div>
        <h1>React Class Practice</h1>
        <h4>Counter Practice</h4>
        <CounterPractice />
        <hr />
        <hr />
        <h4>MapFunctionPracticeParent</h4>
        <MapFunctionPracticeParent />
        <hr />
        <hr />
        <h4>FetchingDataFromReduxParent</h4>
        <FetchingDataFromReduxParent />
        <hr />
        <hr />
        RadiumPracticeParent
        <RadiumPracticeParent />
        <hr />
        <hr />
        StyledComponentparent
        <StyledComponentparent />
        <hr />
        <hr />
      </div>
    </div>
  );
};

export default AllPractice;
