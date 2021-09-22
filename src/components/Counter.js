import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Call Back Value : ", this.state.count);
    //   }
    // );
    this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
  }

  incrementCountFive() {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={() => this.incrementCount()}>Increment Meyhhh!</button>
        <button onClick={() => this.incrementCountFive()}>
          Increment Meyhhh! 5 Times
        </button>
      </div>
    );
  }
}

export default Counter;
