import React, { Component } from "react";
import { PropsWithClassChild } from "./PropsWithClassChild";

export class PropsWithClassParent extends Component {
  render() {
    return (
      <div>
        <PropsWithClassChild name="Aamer Khan" age="56" />
        <PropsWithClassChild name="salman khan" age="55" />
        <PropsWithClassChild name="shahrukh khan" age="53" />
      </div>
    );
  }
}
