import React, { Component } from "react";

export class ListAndKeysChildC extends Component {
  render() {
    return (
      <div>
        <p onClick={this.props.delete}>
          This is {this.props.name} i am {this.props.age} year old
        </p>
      </div>
    );
  }
}
