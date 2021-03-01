import React, { Component } from "react";
import OutputtingListDynamicallyChildC from "./OutputtingListDynamicallyChildC";

export class OutputtingListDynamicallyParentC extends Component {
  state = {
    person: [
      { name: "Batman", age: 25 },
      { name: "Superman", age: 30 },
      { name: "Captain America", age: 56 },
    ],
  };

  // onClick of button it will execute & Changing the existing state to new state

  changeNameHandler = () => {
    this.setState({
      person: [
        { name: "Bruce", age: 25 },
        { name: "Clark", age: 30 },
        { name: "Steve", age: 20 },
      ],
    });
  };
  inputHandler = (e) => {
    this.setState({
      person: [
        { name: e.target.value, age: 25 },
        { name: e.target.value, age: 30 },
        { name: e.target.value, age: 20 },
      ],
    });
  };

  showPerson = false;

  toggleNamePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };
  render() {
    // Conditinally rendering div onClick of button
    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.person.map((item) => {
            return (
              <OutputtingListDynamicallyChildC
                name={item.name}
                age={item.age}
                change={this.inputHandler}
              />
            );
          })}
          <button onClick={this.changeNameHandler}>Change local State</button>
        </div>
      );
    }
    return (
      <div>
        <p className="mt-2">2. Conditional Rendering & .Map Function </p>
        <button onClick={this.toggleNamePersonHandler}>
          Loading Dynamic Data using Map
        </button>

        {person}
      </div>
    );
  }
}
