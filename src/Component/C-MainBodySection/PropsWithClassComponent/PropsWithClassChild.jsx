// import React, { Component } from "react";

// export class PropsWithClassChild extends Component {
//   render() {
//     return (
//       <div>

//         <h1>Props With Class Component</h1>
//         <p>
//           I am {this.props.name} i am {this.props.age} year old
//         </p>
//         {/* random number function detecting age from any number randomly */}
//         {/* <h1>
//           i am a person and i am {Math.floor(Math.random() * 30)} year old
//         </h1> */}
//       </div>
//     );
//   }
// }

import React, { Component } from "react";

class PropsWithClassChild extends Component {
  render() {
    return (
      <div>
        <h1>This is class component</h1>
      </div>
    );
  }
}
export default PropsWithClassChild;
