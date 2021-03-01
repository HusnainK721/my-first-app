import React from "react";
import { Row, Col } from "react-bootstrap";
import { SettingStyleDynamicallyParentC } from "./StylingReactInClass/A-SettingStyleDynamicC/SettingStyleDynamicallyParentC";
export const Module5StylingReactComponent = () => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <div>
            Module 5 Using Class Component
            <SettingStyleDynamicallyParentC />
          </div>
        </Col>
        <Col>
          <div>Module 5 Using Functional Component</div>
        </Col>
      </Row>
    </React.Fragment>
  );
};
