import React from "react";
import { HeaderSection } from "../../A-HeaderSection/HeaderSection";
import { LeftNavigationSection } from "../../B-LeftNavigationSection/LeftNavigationSection";
// import { MainBodySection } from "../../C-MainBodySection/MainBodySection";
import { RightNavigationSection } from "../../D-RightNavigationSection/RightNavigationSection";
import { FooterSection } from "../../E-FooterSection/FooterSection";
//all module 4 exported here
import { Module4ListAndConditional } from "../../Module-4-ListAndConditional/Module4ListAndConditional";
// all module 5 exported here
import { Module5StylingReactComponent } from "../../Module-5-StylingReactCompAndElement/Module5StylingReactComponent";
// import { CounterPractice } from "../../Practice/UseStatePractice/CounterPractice/CounterPractice";

// All Practice Component Exported Here
// import { FetchingDataFromReduxParent } from "../../Practice/FetchingDataFromRedux/FetchingDataFromReduxParent";
// import { MapFunctionPracticeParent } from "../../Practice/MapFunctionaPractice/MapFunctionPracticeParent";
import RadiumPracticeParent from "../../Practice/RadiumPractice/RadiumPracticeParent";
export const Landing = () => {
  return (
    <React.Fragment>
      {/* <div>
        <h1>React Class Practice</h1>
        <MapFunctionPracticeParent />
        <FetchingDataFromReduxParent />
      </div> */}

      <div>
        <HeaderSection />
        <LeftNavigationSection />
        {/* <MainBodySection /> */}
        <RightNavigationSection />
        <FooterSection />
        {/* <CounterPractice /> */}
      </div>
      {/* <div>
        <Module4ListAndConditional />
      </div>*/}
      <hr />
      <div>
        <Module5StylingReactComponent />
      </div>
      <RadiumPracticeParent />
    </React.Fragment>
  );
};
