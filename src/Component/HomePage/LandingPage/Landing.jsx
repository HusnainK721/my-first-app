import React from "react";
// import { HeaderSection } from "../../A-HeaderSection/HeaderSection";
// import { LeftNavigationSection } from "../../B-LeftNavigationSection/LeftNavigationSection";
// import { MainBodySection } from "../../C-MainBodySection/MainBodySection";
// import { RightNavigationSection } from "../../D-RightNavigationSection/RightNavigationSection";
// import { FooterSection } from "../../E-FooterSection/FooterSection";
import { ListAndConditionalClassParent } from "../../ListAndConditional/ListAndConditionalClass/ListAndConditionalClassParent";
import { ListAndConditionalFunctionalParent } from "../../ListAndConditional/ListAndConditionalFunctional/ListAndConditionalFunctionalParent";
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
      <div>
        <ListAndConditionalClassParent />
        <ListAndConditionalFunctionalParent />
      </div>
    </React.Fragment>
  );
};
