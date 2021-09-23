import React from "react";
import "./myStyles.css";

function StyleSheet() {
  let heading = {
    fontSize: "72px",
    color: "red",
  };
  return (
    <div>
      <h1 className="primary size">StyleSheet</h1>
      <h1 style={heading}>Inline StyleSheet</h1>
    </div>
  );
}

export default StyleSheet;
