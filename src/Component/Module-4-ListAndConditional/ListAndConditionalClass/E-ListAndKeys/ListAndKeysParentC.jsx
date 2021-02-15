import React, { Component } from "react";
import { ListAndKeysChildC } from "./ListAndKeysChildC";

export class ListAndKeysParentC extends Component {
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
  inputHandler = (e) => {
    this.setState({
      person: [
        { name: e.target.value, age: 25 },
        { name: e.target.value, age: 30 },
        { name: e.target.value, age: 20 },
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
    const style = {
      backgroundColor: "green",
      color: "white",
      cursor: "pointer",
    };

    let displayPersonData = null;
    if (this.state.showPerson) {
      displayPersonData = (
        <div>
          {this.state.person.map((item, index) => {
            return (
              <ListAndKeysChildC
                name={item.name}
                age={item.age}
                key={item.id}
                delete={() => this.deleteStateHandler(index)}
                change={this.inputHandler}
              />
            );
          })}
          <button onClick={this.switchNameHandler} className="mt-2">
            Change State
          </button>
        </div>
      );
      style.backgroundColor = "red";
    }

    return (
      <div>
        <p className="mt-2"> 4.List & Keys</p>
        <button onClick={this.toggleNameHandler} style={style}>
          List & Keys
        </button>
        {displayPersonData}
      </div>
    );
  }
}
