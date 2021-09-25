import React from "react";

function Hero({ heroName }) {
  if (heroName === "Pai") {
    throw new Error("Not A Hero");
  }
  return <div>{heroName}</div>;
}

export default Hero;
