import React, { Component } from "react";
import AddingAndUsingRadiumChildC from "./AddingAndUsingRadiumChildC";

class AddingAndUsingRadiumParentC extends Component {
  render() {
    return (
      <div>
        <AddingAndUsingRadiumChildC />
      </div>
    );
  }
}

export default AddingAndUsingRadiumParentC;
