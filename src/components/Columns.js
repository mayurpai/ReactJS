import React from "react";

function Columns() {
  const items = ["Mayur", "Pai"];
  return (
    <React.Fragment>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Mayur</td>
    </React.Fragment>
  );
}

export default Columns;
