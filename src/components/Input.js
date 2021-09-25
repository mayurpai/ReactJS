import React, { Component } from "react";
import FocusInput from "./FocusInput";

class Input extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  handler = () => {
    this.componentRef.current.FocusInput();
  };

  render() {
    return (
      <div>
        <FocusInput ref={this.componentRef} />
        <button onClick={this.handler}>Focus Input</button>
      </div>
    );
  }
}

export default Input;
