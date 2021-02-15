import React, { Component } from "react";
import { DeletingStateChildC } from "./DeletingStateChildC";

export class DeletingStateParentC extends Component {
  state = {
    person: [
      { id: "khwaja1", name: "khwaja", age: 27 },
      { id: "khwaja2", name: "Junaid", age: 28 },
      { id: "khwaja3", name: "Dilshad", age: 29 },
      { id: "khwaja4", name: "Sulaiman", age: 30 },
      { id: "khwaja5", name: "Saleem", age: 31 },
    ],
  };
  showPerson;
  toggleNameHandler = () => {
    const isShow = this.state.showPerson;
    this.setState({ showPerson: !isShow });
  };
  switchNameHandler = () => {
    this.setState({
      person: [
        { name: "khwaja Muhammad", age: 27 },
        { name: "Junaid Lala", age: 28 },
        { name: "Dilshad Khan", age: 29 },
        { name: "Sulaiman Chause", age: 30 },
        { name: "Saleem Shaikh", age: 31 },
      ],
    });
  };
  deleteStateHandler = (personDataIndex) => {
    const personData = this.state.person;
    // instead of above line you can write as follow:-
    // 1. const personData= this.state.person.slice()===>>> it will copy original array & make changes in copied data
    // OR
    // 2. const personData=[...this.state.person]===>> this is latest feature of copying data (spread operator)
    // this two method is called state immutability (copying existing state to new variable)
    // now you are deleting the state from copied state instead of original state
    personData.splice(personDataIndex, 1);
    this.setState({ personData: personData });
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
                delete={() => this.deleteStateHandler(index)}
              />
            );
          })}
          <button onClick={this.switchNameHandler} className="mt-2">
            Change State
          </button>
        </div>
      );
    }
    return (
      <div>
        <p className="mt-2"> 3.Deleting State onClick Of Button</p>
        <button onClick={this.toggleNameHandler}>Toggle & Delete Data</button>
        {displayPersonData}
      </div>
    );
  }
}
