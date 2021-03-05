import React from "react";
import { Row, Col } from "react-bootstrap";
// Class component exported here
import { SettingStyleDynamicallyParentC } from "./StylingReactInClass/A-SettingStyleDynamicC/SettingStyleDynamicallyParentC";
import { SettingClassNameDynamicallyParentC } from "./StylingReactInClass/B-SettingClassNameDynamicallyC/SettingClassNameDynamicallyParentC";
import AddingAndUsingRadiumParentC from "./StylingReactInClass/C-AddingAndUsingRadiumC/AddingAndUsingRadiumParentC";
import IntroductionToStyledComponentParentC from "./StylingReactInClass/D-IntroductionToStyledComponent/IntroductionToStyledComponentParentC";
// Functional component exported here

import { SettingStyleDynamicallyParentF } from "./StylingReactInFunctional/A-SettingStyleDynamicallyF/SettingStyleDynamicallyParentF";
import { SettingClassNameDynamicallyParentF } from "./StylingReactInFunctional/B-SettingClassNameDynamicallyF/SettingClassNameDynamicallyParentF";
import AddingAndUsingRadiumParentF from "./StylingReactInFunctional/C-AddingAndUsingRadium/AddingAndUsingRadiumParentF";
import { IntroductionToStyledComponentParentF } from "./StylingReactInFunctional/D-IntroductionToStyledComponent/IntroductionToStyledComponentParentF";

export const Module5StylingReactComponent = () => {
  return (
    <React.Fragment>
      <h1>5.Styling React Component </h1>
      <Row>
        <Col>
          <div>
            <h4>Module 5 Using Class Component</h4>
            <SettingStyleDynamicallyParentC />
            <SettingClassNameDynamicallyParentC />
            <AddingAndUsingRadiumParentC />
            <IntroductionToStyledComponentParentC />
          </div>
        </Col>
        <Col>
          <div>
            <h4>5.Module 5 Using Functional Component</h4>
            <SettingStyleDynamicallyParentF />
            <SettingClassNameDynamicallyParentF />
            <AddingAndUsingRadiumParentF />

            <IntroductionToStyledComponentParentF />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};
