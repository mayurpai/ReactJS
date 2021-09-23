import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  // First Approach
  //   render() {
  //     if (this.state.isLoggedIn) {
  //       return <div>Mayur</div>;
  //     } else {
  //       return <div>Pai</div>;
  //     }
  //   }

  // Second Approach
  //     render() {
  //         let message
  //         if (this.state.isLoggedIn)
  //             message = <div>Mayur</div>
  //         else
  //             message = <div>Pai</div>
  //         return <div>{message}</div>
  //     }

// Third Approach
//   render() {
//     return this.state.isLoggedIn ? <div>Mayur</div> : <div>Pai</div>;
//   }

// Forth Approach
    render() {
        return this.state.isLoggedIn && <div>Mayur</div>
    }
}

export default UserGreeting;
