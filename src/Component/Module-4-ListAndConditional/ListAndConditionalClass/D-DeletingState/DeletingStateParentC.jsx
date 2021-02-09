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
  showPerson;
  switchNameHandler = () => {
    const isShow = this.state.showPerson;
    this.setState({ showPerson: !isShow });
  };
  render() {
    let displayPersonData = null;
    if (this.state.showPerson) {
      displayPersonData = (
        <div>
          {this.state.person.map((item, index) => {
            return (
              <DeletingStateChildC
                name={item.name}
                age={item.age}
                // delete={this.deleteStateHandler(index)}
              />
            );
          })}
          <button>Change State</button>
        </div>
      );
    }
    return (
      <div>
        <p> 3.Deleting State onClick Of Button</p>
        <button onClick={this.switchNameHandler}>Toggle Data</button>
        {displayPersonData}
      </div>
    );
  }
}
