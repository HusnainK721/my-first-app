import React from "react";
import { Row, Col } from "react-bootstrap";
// Class component exported here
import { SettingStyleDynamicallyParentC } from "./StylingReactInClass/A-SettingStyleDynamicC/SettingStyleDynamicallyParentC";
import { SettingClassNameDynamicallyParentC } from "./StylingReactInClass/B-SettingClassNameDynamicallyC/SettingClassNameDynamicallyParentC";
import AddingAndUsingRadiumParentC from "./StylingReactInClass/C-AddingAndUsingRadiumC/AddingAndUsingRadiumParentC";
// Functional component exported here

import { SettingStyleDynamicallyParentF } from "./StylingReactInFunctional/A-SettingStyleDynamicallyF/SettingStyleDynamicallyParentF";
import { SettingClassNameDynamicallyParentF } from "./StylingReactInFunctional/B-SettingClassNameDynamicallyF/SettingClassNameDynamicallyParentF";
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
          </div>
        </Col>
        <Col>
          <div>
            <h4>5.Module 5 Using Functional Component</h4>
            <SettingStyleDynamicallyParentF />
            <SettingClassNameDynamicallyParentF />
          </div>
        </Col>
      </Row>
      <AddingAndUsingRadiumParentC />
    </React.Fragment>
  );
};
