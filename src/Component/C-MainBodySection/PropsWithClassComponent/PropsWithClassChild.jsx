import React, { Component } from "react";
export class PropsWithClassChild extends Component {
  render() {
    const style = {
      backgroundColor: "pink",
      border: "none",
      bottomBorder: "doted",
    };
    return (
      <div>
        <p onClick={this.props.clicked}>
          I am {this.props.name} i am {this.props.age} year old
        </p>
        <input type="text" onChange={this.props.change} style={style} />
      </div>
    );
  }
}
