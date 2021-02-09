import React from "react";
import { RenderingContentConditionllyParent } from "./ListAndConditionalClass/A-RenderingContentConditionally/RenderingContentConditionllyParent";
import { RenderingInJsWayParent } from "./ListAndConditionalClass/B-RenderingContentConditionally-js-way/RenderingInJsWayParent";
import { Row, Col } from "react-bootstrap";
import { ConditionalRenderingParentInFunc } from "./ListAndConditionalFunctional/A-ConditionalRendering/ConditionalRenderingParentInFunc";
import { ConditionalRenderingParentInJSWayFunc } from "./ListAndConditionalFunctional/B-ConditionalRenderingInJSWayInFunc/ConditionalRenderingParentInJSWayFunc";
import { OutputtingListDynamicallyParentC } from "./ListAndConditionalClass/C-OutputtingListDynamicallyC/OutputtingListDynamicallyParentC";
import { OutputtingListDynamicallyParentF } from "./ListAndConditionalFunctional/C-OutputtingListDynamicUsingMapF/OutputtingListDynamicallyParentF";
export const Module4ListAndConditional = () => {
  return (
    <div>
      <Row>
        <Col xs={12} lg={6}>
          <div>
            <h4> Module 4 By Using Class Component</h4>
            <RenderingContentConditionllyParent />
            <RenderingInJsWayParent />
            <OutputtingListDynamicallyParentC />
          </div>
        </Col>

        <Col xs={12} lg={6}>
          <div>
            <h4>Module 4 by Using Functional Component</h4>
            <ConditionalRenderingParentInFunc />
            <ConditionalRenderingParentInJSWayFunc />
            <OutputtingListDynamicallyParentF />
          </div>
        </Col>
      </Row>
    </div>
  );
};
