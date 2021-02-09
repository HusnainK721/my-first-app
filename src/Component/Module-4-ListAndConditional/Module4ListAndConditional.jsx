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
            <ConditionalRenderingParentInFunc />
            <ConditionalRenderingParentInJSWayFunc />
          </div>
        </Col>
      </Row>
    </div>
  );
};
