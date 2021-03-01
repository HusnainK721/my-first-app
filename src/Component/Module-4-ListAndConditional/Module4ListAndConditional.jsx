import React from "react";
import { Row, Col } from "react-bootstrap";
// All Class Component Exported Here
// All Class Component Exported Here
import { RenderingContentConditionllyParent } from "./ListAndConditionalClass/A-RenderingContentConditionally/RenderingContentConditionllyParent";
import { RenderingInJsWayParent } from "./ListAndConditionalClass/B-RenderingContentConditionally-js-way/RenderingInJsWayParent";
import { OutputtingListDynamicallyParentC } from "./ListAndConditionalClass/C-OutputtingListDynamically/OutputtingListDynamicallyParentC";
import { DeletingStateParentC } from "./ListAndConditionalClass/D-DeletingState/DeletingStateParentC";
import { ListAndKeysParentC } from "./ListAndConditionalClass/E-ListAndKeys/ListAndKeysParentC";
// All Functional Component EXport Here
// All Functional Component EXport Here
import { ConditionalRenderingParentInFunc } from "./ListAndConditionalFunctional/A-ConditionalRendering/ConditionalRenderingParentInFunc";
import { ConditionalRenderingParentInJSWayFunc } from "./ListAndConditionalFunctional/B-ConditionalRenderingInJSWay/ConditionalRenderingParentInJSWayFunc";
import { OutputtingListDynamicallyParentF } from "./ListAndConditionalFunctional/C-OutputtingListDynamicUsingMap/OutputtingListDynamicallyParentF";
import { DeletingStateParentF } from "./ListAndConditionalFunctional/D-DeletingState/DeletingStateParentF";
import { ListAndKeysParentF } from "./ListAndConditionalFunctional/E-ListAndKeys/ListAndKeysParentF";
// import { FetchingDataFromJsonParent } from "../Practice/FetchingDataFromJSON/FetchingDataFromJsonParent";
export const Module4ListAndConditional = () => {
  return (
    <div>
      <h1>Conditional Rendering</h1>
      <Row>
        <Col xs={6} lg={6} md={6}>
          <div>
            <h4> Module 4 By Using Class Component</h4>
            <RenderingContentConditionllyParent />
            <RenderingInJsWayParent />
            <OutputtingListDynamicallyParentC />
            <DeletingStateParentC />
            <ListAndKeysParentC />
          </div>
        </Col>

        <Col xs={6} lg={6} md={6}>
          <div>
            <h4>Module 4 by Using Functional Component</h4>
            <ConditionalRenderingParentInFunc />
            <ConditionalRenderingParentInJSWayFunc />
            <OutputtingListDynamicallyParentF />
            <DeletingStateParentF />
            <ListAndKeysParentF />
          </div>
        </Col>
      </Row>
    </div>
  );
};
