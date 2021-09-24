import React, { Component, createRef } from "react";

export class InputRefs extends Component {
  constructor(props) {
    super(props);
    this.InputRefs = React.createRef();
  }

  componentDidMount() {
    this.InputRefs.current.focus();
    console.log(this.InputRefs);
  }

  handler = () => {
    alert(this.InputRefs.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.InputRefs}></input>
        <button onClick={this.handler}>Click</button>
      </div>
    );
  }
}

export default InputRefs;
