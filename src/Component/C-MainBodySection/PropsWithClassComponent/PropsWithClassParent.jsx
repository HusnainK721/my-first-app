import React, { Component } from "react";
import { PropsWithClassChild } from "./PropsWithClassChild";

export class PropsWithClassParent extends Component {
  state = {
    person: [
      { name: "Thor", age: 25 },
      { name: "Superman", age: 30 },
      { name: "Wonder Woman", age: 56 },
    ],
  };
  render() {
    return (
      <div>
        <PropsWithClassChild
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <PropsWithClassChild
          name={this.state.person[1].name}
          age={this.state.person[1].age}
        />
        <PropsWithClassChild
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
      </div>
    );
  }
}
