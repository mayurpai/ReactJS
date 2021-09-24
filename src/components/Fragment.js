import React from "react";

function Fragment() {
  let heading = {
    color: "red",
  };
  return (
    <React.Fragment>
      <h2 style={heading}>Fragment Demo</h2>
      <p>This Describes The Fragment Demo Component</p>
    </React.Fragment>
  );
}

export default Fragment;
