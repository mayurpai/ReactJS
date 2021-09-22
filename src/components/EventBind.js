import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hey",
    };
  }

  eventHandler = () => {
    this.setState({
      message: "Hello",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.eventHandler}>Click!</button>
        {/* <button onClick={this.eventHandler.bind(this)}>Click!</button> */}
      </div>
    );
  }
}

export default EventBind;
