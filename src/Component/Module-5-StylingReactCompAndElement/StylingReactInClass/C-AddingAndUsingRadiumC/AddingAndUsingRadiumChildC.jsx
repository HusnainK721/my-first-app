import React, { Component } from "react";

class AddingAndUsingRadiumChildC extends Component {
  render() {
    const divStyle = {
      '@media(min-width:"500px")': {
        width: "350px",
      },
    };
    return (
      <div style={divStyle}>
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
