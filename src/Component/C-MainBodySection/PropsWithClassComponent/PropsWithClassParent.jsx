import React, { Component } from "react";
import { PropsWithClassChild } from "./PropsWithClassChild";

export class PropsWithClassParent extends Component {
  // This is the state of component by default this state is loading
  state = {
    person: [
      { name: "Batman", age: 25 },
      { name: "Superman", age: 30 },
      { name: "Captain America", age: 56 },
    ],
  };

  // onClick of button it will execute & Changing the existing state to new state
  // changeNameHandler = () => {
  //   this.setState({
  //     person: [
  //       { name: "Bruce", age: 25 },
  //       { name: "Clark", age: 30 },
  //       { name: "Steve Rogers", age: 200 },
  //     ],
  //   });
  // };
  switchNameHandler = () => {
    this.setState({
      person: [
        { name: "Iron Man", age: 25 },
        { name: "Spider Man", age: 22 },
        { name: "Hulk", age: 35 },
      ],
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.switchNameHandler}>On Click Event</button>
        {/* Passing state as props to child component */}
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
