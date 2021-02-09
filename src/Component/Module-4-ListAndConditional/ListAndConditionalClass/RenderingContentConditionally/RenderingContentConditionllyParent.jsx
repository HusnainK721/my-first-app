import React, { Component } from "react";
import { RenderingContentConditionllyChild } from "./RenderingContentConditionllyChild";

export class RenderingContentConditionllyParent extends Component {
  state = {
    person: [
      { name: "Batman", age: 25 },
      { name: "Superman", age: 30 },
      { name: "Captain America", age: 56 },
    ],
  };

  // onClick of button it will execute & Changing the existing state to new state

  changeNameHandler1 = (e) => {
    this.setState({
      person: [
        { name: e.target.value, age: 25 },
        { name: "Clark", age: 30 },
        { name: "Steve", age: 20 },
      ],
    });
  };
  showPerson = false;

  toggleNamePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggleNamePersonHandler}>
          Conditional Rendering
        </button>
        {this.showPerson ? (
          <div>
            <RenderingContentConditionllyChild
              name={this.state.person[0].name}
              age={this.state.person[0].age}
            />
            <RenderingContentConditionllyChild
              name={this.state.person[1].name}
              age={this.state.person[1].age}
            />
            <RenderingContentConditionllyChild
              name={this.state.person[2].name}
              age={this.state.person[2].age}
              clicked={this.changeNameHandler}
              change={this.changeNameHandler1}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
