import React from "react";
// import { HeaderSection } from "../../A-HeaderSection/HeaderSection";
// import { LeftNavigationSection } from "../../B-LeftNavigationSection/LeftNavigationSection";
// import { MainBodySection } from "../../C-MainBodySection/MainBodySection";
// import { RightNavigationSection } from "../../D-RightNavigationSection/RightNavigationSection";
// import { FooterSection } from "../../E-FooterSection/FooterSection";
//all module 4 exported here
import { Module4ListAndConditional } from "../../Module-4-ListAndConditional/Module4ListAndConditional";
// all module 5 exported here
import { Module5StylingReactComponent } from "../../Module-5-StylingReactCompAndElement/Module5StylingReactComponent";

// All Practice Component Exported Here
// import AllPractice from "../../Practice/AllPractice";

export const Landing = () => {
  return (
    <React.Fragment>
      {/* <div>
        <HeaderSection />
        <LeftNavigationSection />
        <MainBodySection />
        <RightNavigationSection />
        <FooterSection />
      </div> */}
      {/* <div>
        <AllPractice />
      </div> */}
      <hr />
      <div>
        <Module4ListAndConditional />
      </div>
      <hr />
      <div>
        <Module5StylingReactComponent />
      </div>
    </React.Fragment>
  );
};
