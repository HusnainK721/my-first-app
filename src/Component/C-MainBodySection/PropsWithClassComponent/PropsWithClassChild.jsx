import React, { Component } from "react";
import { FormControl } from "react-bootstrap";
import "./PropsWithClassComponent.css";
export class PropsWithClassChild extends Component {
  render() {
    return (
      <div>
        <p>
          I am {this.props.name} i am {this.props.age} year old
        </p>
        {/* random number function detecting age from any number randomly */}
        {/* <h1>
          i am a person and i am {Math.floor(Math.random() * 30)} year old
        </h1> */}
      </div>
    );
  }
}
