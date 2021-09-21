import React, { Component } from "react";

export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello Visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank You For Clicking!"
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Click Meyhh!</button>
      </div>
    );
  }
}
