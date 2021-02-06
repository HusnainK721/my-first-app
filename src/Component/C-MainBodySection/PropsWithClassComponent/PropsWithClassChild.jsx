import React, { Component } from "react";
export class PropsWithClassChild extends Component {
  render() {
    return (
      <div>
        <p onClick={this.props.kuchbi}>
          I am {this.props.name} i am {this.props.age} year old
        </p>
      </div>
    );
  }
}
