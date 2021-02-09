import React, { Component } from "react";

export class DeletingStateChildC extends Component {
  render() {
    return (
      <div>
        <p>
          This is {this.props.name} i am {this.props.age} year old
        </p>
      </div>
    );
  }
}
