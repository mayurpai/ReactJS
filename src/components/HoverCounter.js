import React, { Component } from "react";

class HoverCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementer = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <button onMouseOver={this.incrementer}>Youhhh Hovered {count} Times!</button>
    );
  }
}

export default HoverCounter;
