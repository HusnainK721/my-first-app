import React from "react";
import { RenderingContentConditionllyParent } from "./ListAndConditionalClass/RenderingContentConditionally/RenderingContentConditionllyParent";
import { RenderingInJsWayParent } from "./ListAndConditionalClass/RenderingContentConditionally-js-way/RenderingInJsWayParent";
import { Row, Col } from "react-bootstrap";

export const Module4ListAndConditional = () => {
  return (
    <div>
      <Row>
        <Col>
          <div>
            <p> Module 4 By Using Class Component</p>
            <RenderingContentConditionllyParent />
            <RenderingInJsWayParent />
          </div>
        </Col>

        <Col>
          <div>
            <p>Module 4 by Using Functional Component</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
