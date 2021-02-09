import React, { Component } from "react";
import { DeletingStateChildC } from "./DeletingStateChildC";

export class DeletingStateParentC extends Component {
  state = {
    person: [
      { name: "khwaja", age: 27 },
      { name: "Junaid", age: 28 },
      { name: "Dilshad", age: 29 },
      { name: "Sulaiman", age: 30 },
      { name: "Saleem", age: 31 },
    ],
  };
  render() {
    return (
      <div>
        <p> 3.Deleting State onClick Of Button</p>
        <button></button>
        <div>
          {this.state.person.map((item) => {
            return <DeletingStateChildC name={item.name} age={item.age} />;
          })}
        </div>
      </div>
    );
  }
}
