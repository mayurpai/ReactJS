import React, { Component } from "react";

class Greet extends Component {
  render() {
    return <h1>Hello {this.props.name} {this.props.lname}</h1>;
  }
}

export default Greet;
