import React from "react";

// export const Destructuring = ({ name, lname }) => {
export const Destructuring = (props) => {
  const { name, lname } = props;
  return (
    <div>
      <h1>
        My Name Is {name} {lname}
      </h1>
    </div>
  );
};

// import React, { Component } from "react";

// export default class Destructuring extends Component {
//   render() {
//     const { name, lname } = this.props;
//     const { state1, state2 } = this.state;
//     return (
//       <div>
//         <h1>
//           My Name Is {name} {lname}
//         </h1>
//       </div>
//     );
//   }
// }
