import React, { Component } from "react";
import { DeletingStateChildC } from "./DeletingStateChildC";

export class DeletingStateParentC extends Component {
  state = {
    person: [
      { name: "khwaja", age: 27 },
      { name: "Junaid", age: 28 },
      { name: "Dilshad", age: 29 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.person.map((item) => {
          return <DeletingStateChildC name={item.name} age={item.age} />;
        })}
      </div>
    );
  }
}
