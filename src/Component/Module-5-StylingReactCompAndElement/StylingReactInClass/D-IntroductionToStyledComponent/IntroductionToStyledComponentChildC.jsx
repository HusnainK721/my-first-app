import React, { Component } from "react";
import styled from "styled-components";
import "./IntroductionToStyledComponent.css";
class IntroductionToStyledComponentChildC extends Component {
  render() {
    const StyledDiv = styled.div`
      width: 60%;
      margin: 16px auto;
      border: 0 solid #eee;
      box-shadow: 0 2px 3px red;
      padding: 16px;
      text-align: center;
     
      }

      @media (min-width: 500px) {
        width: 450px;
      }
    `;
    return (
      // <div className="person" style={divStyle}>
      <StyledDiv>
        <p onClick={this.props.delete}>
          I am {this.props.name} i am {this.props.age} year old
        </p>
        <input
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
      </StyledDiv>
    );
  }
}
export default IntroductionToStyledComponentChildC;
