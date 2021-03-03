import React, { Component } from "react";

class AddingAndUsingRadiumChildC extends Component {
  render() {
    return (
      <div>
        <p onClick={this.props.delete}>
          I am {this.props.name} i am {this.props.age} year old
        </p>
        <input
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
      </div>
    );
  }
}
export default AddingAndUsingRadiumChildC;
