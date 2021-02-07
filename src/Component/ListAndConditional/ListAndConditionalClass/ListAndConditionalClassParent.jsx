import React, { Component } from "react";
import { ListAndConditionalClassChild } from "./ListAndConditionalClassChild";

export class ListAndConditionalClassParent extends Component {
  render() {
    return (
      <div>
        <ListAndConditionalClassChild />
      </div>
    );
  }
}
