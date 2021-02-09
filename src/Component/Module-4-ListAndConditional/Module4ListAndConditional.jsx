import React from "react";
import { RenderingContentConditionllyParent } from "./ListAndConditionalClass/RenderingContentConditionally/RenderingContentConditionllyParent";
import { RenderingInJsWayParent } from "./ListAndConditionalClass/RenderingContentConditionally-js-way/RenderingInJsWayParent";
import { Row, Col } from "react-bootstrap";
import { ConditionalRenderingParentInFunc } from "./ListAndConditionalFunctional/ConditionalRendering/ConditionalRenderingParentInFunc";
import { ConditionalRenderingParentInJSWayFunc } from "./ListAndConditionalFunctional/ConditionalRenderingInJSWayInFunc/ConditionalRenderingParentInJSWayFunc";
export const Module4ListAndConditional = () => {
  return (
    <div>
      <Row>
        <Col xs={12} lg={6}>
          <div>
            <h4> Module 4 By Using Class Component</h4>
            <RenderingContentConditionllyParent />
            <RenderingInJsWayParent />
          </div>
        </Col>

        <Col xs={12} lg={6}>
          <div>
            <h4>Module 4 by Using Functional Component</h4>
            <ConditionalRenderingParentInFunc />
            <ConditionalRenderingParentInJSWayFunc />
          </div>
        </Col>
      </Row>
    </div>
  );
};
