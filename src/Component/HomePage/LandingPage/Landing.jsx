import React from "react";
import { HeaderSection } from "../../A-HeaderSection/HeaderSection";
import { LeftNavigationSection } from "../../B-LeftNavigationSection/LeftNavigationSection";
import { MainBodySection } from "../../C-MainBodySection/MainBodySection";
import { RightNavigationSection } from "../../D-RightNavigationSection/RightNavigationSection";
import { FooterSection } from "../../E-FooterSection/FooterSection";
import { Module4ListAndConditional } from "../../Module-4-ListAndConditional/Module4ListAndConditional";
export const Landing = () => {
  return (
    <React.Fragment>
      <div>
        <HeaderSection />
        <LeftNavigationSection />
        <MainBodySection />
        <RightNavigationSection />
        <FooterSection />
      </div>
      <div>{/* <Module4ListAndConditional /> */}</div>
    </React.Fragment>
  );
};
