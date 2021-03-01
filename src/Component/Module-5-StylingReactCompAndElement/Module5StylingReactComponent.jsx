import React from "react";
import { Row, Col } from "react-bootstrap";
import { SettingStyleDynamicallyParentC } from "./StylingReactInClass/A-SettingStyleDynamicC/SettingStyleDynamicallyParentC";
import { SettingStyleDynamicallyParentF } from "./StylingReactInFunctional/A-SettingStyleDynamicallyF/SettingStyleDynamicallyParentF";
export const Module5StylingReactComponent = () => {
  return (
    <React.Fragment>
      <h1>5.Styling React Component </h1>
      <Row>
        <Col>
          <div>
            <h4>Module 5 Using Class Component</h4>
            <SettingStyleDynamicallyParentC />
          </div>
        </Col>
        <Col>
          <div>
            <h4>5.Module 5 Using Functional Component</h4>
            <SettingStyleDynamicallyParentF />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};
