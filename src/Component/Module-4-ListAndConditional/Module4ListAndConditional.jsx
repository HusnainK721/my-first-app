import React from "react";
import { RenderingContentConditionllyParent } from "./ListAndConditionalClass/A-RenderingContentConditionally/RenderingContentConditionllyParent";
import { RenderingInJsWayParent } from "./ListAndConditionalClass/B-RenderingContentConditionally-js-way/RenderingInJsWayParent";
import { Row, Col } from "react-bootstrap";
import { ConditionalRenderingParentInFunc } from "./ListAndConditionalFunctional/A-ConditionalRendering/ConditionalRenderingParentInFunc";
import { ConditionalRenderingParentInJSWayFunc } from "./ListAndConditionalFunctional/B-ConditionalRenderingInJSWay/ConditionalRenderingParentInJSWayFunc";
import { OutputtingListDynamicallyParentC } from "./ListAndConditionalClass/C-OutputtingListDynamically/OutputtingListDynamicallyParentC";
import { OutputtingListDynamicallyParentF } from "./ListAndConditionalFunctional/C-OutputtingListDynamicUsingMap/OutputtingListDynamicallyParentF";
import { DeletingStateParentC } from "./ListAndConditionalClass/D-DeletingState/DeletingStateParentC";
import { DeletingStateParentF } from "./ListAndConditionalFunctional/D-DeletingState/DeletingStateParentF";

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
            <DeletingStateParentC />
          </div>
        </Col>

        <Col xs={12} lg={6}>
          <div>
            <h4>Module 4 by Using Functional Component</h4>
            <ConditionalRenderingParentInFunc />
            <ConditionalRenderingParentInJSWayFunc />
            <OutputtingListDynamicallyParentF />
            <DeletingStateParentF />
          </div>
        </Col>
      </Row>
    </div>
  );
};
