import React, { Component } from "react";

class SettingStyleDynamicallyChildC extends Component {
  render() {
    return (
      <div>
        <p onClick={this.props.clicked}>
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

export default SettingStyleDynamicallyChildC;
