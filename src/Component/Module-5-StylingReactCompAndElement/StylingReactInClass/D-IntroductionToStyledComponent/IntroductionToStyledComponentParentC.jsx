import React, { Component } from "react";
import IntroductionToStyledComponentChildC from "./IntroductionToStyledComponentChildC";
import styled from "styled-components";

// const StyledButton = styled.button`
//   background-color: ${(props) => (props.any ? "green" : "red")};
//    &:hover {
//           background-color: ${(props) => (props.any ? "lightgreen" : "salmon")};
//           color: black;
//         },
// `;
const StyledButton = styled.button`
  background-color: red;
   &:hover {
          background-color: green;
          color: black;
        },
`;

const StyledA = styled.a`
  color: yellow;
  &:hover {
    color: red;
  }
`;
class IntroductionToStyledComponentParentC extends Component {
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
              <IntroductionToStyledComponentChildC
                name={item.name}
                age={item.age}
                delete={() => this.deleteStateHandler(index)}
              />
            );
          })}
          {/* <button onClick={this.switchNameHandler} className="mt-2"> */}
          <button onClick={this.switchNameHandler} className="mt-2">
            Change State
          </button>
        </div>
      );
    }

    return (
      <div>
        <p> 4. Introduction To Styled Component</p>
        <StyledButton
          any={this.state.showPerson}
          onClick={this.toggleNameHandler}
        >
          styled-Component
        </StyledButton>
        {displayPersonData}
        <button>testing</button>
        <StyledButton>testing</StyledButton>

        <input type="" />
        <p>jhdgjf</p>
        <StyledButton>second</StyledButton>
        <StyledA>this is a anchor</StyledA>
      </div>
    );
  }
}
export default IntroductionToStyledComponentParentC;
