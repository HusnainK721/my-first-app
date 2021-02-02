import React, { Component } from "react";

export class PropsWithClassChild extends Component {
  render() {
    return (
      <div>
        <h1>I am 2nd react app</h1>
        <p>
          I am {this.props.name} i am {this.props.age} year old
        </p>
      </div>
    );
  }
}

// export default PropsWithClassChild;
