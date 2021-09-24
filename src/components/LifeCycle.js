import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mayur",
    };
    console.log(this.state.name);
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`getDerivedStateFromProps`);
    return null;
  }

  componentDidMount() {
    console.log(`componentDidMount`);
  }

  shouldComponentUpdate() {
    console.log(`shouldComponentUpdate`);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(`getSnapshotBeforeUpdate`);
    return null;
  }

  componentDidUpdate() {
    console.log(`componentDidUpdate`);
  }

  render() {
    console.log(`Render`);
    return <div>{this.state.name}</div>;
  }
}

export default LifeCycle;
