import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mayur",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Pai",
      });
    }, 2000);
  }

  render() {
    console.log("Pure Component");
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default PureComp;

// Shallow Comparison Over States And Props => Re-Rendering Not Done If Either Of These Don't Chnage - Performance Boost
// Pure Components Work Only With CLass Based Components