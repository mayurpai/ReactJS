import React from "react";

function NameList() {
  const names = ["Mayur", "Pai"];

  const persons = [
    {
      id: 1,
      fname: "Mayur",
      lname: "Pai",
    },
    {
      id: 2,
      fname: "Swathi S",
      lname: "Nayak",
    },
  ];
  const personList = persons.map((person) => (
    <h2>
      My Name Is {person.fname} {person.lname}
    </h2>
  ));
  const nameList = names.map((name) => <h2>{name}</h2>);
  return (
    <div>
      <div>{nameList}</div>
      <div>{personList}</div>
    </div>
  );
}

export default NameList;
