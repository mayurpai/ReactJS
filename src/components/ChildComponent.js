import React from "react";

export default function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('Mayur')}>Greet Parent</button>
    </div>
  );
}
