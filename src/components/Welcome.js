import React from "react";

export const Welcome = (props) => {
  return (
    <div>
      <h1>Hello Mayur</h1>
      <h1>Hello {props.name} {props.lname}</h1>
      {props.children}
    </div>
  );
};

// export const Welcome = () => <h1>Hello Mayur</h1>;
