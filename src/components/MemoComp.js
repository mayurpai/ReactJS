import React from "react";

function MemoComp({ name }) {
  return <div>{name}</div>;
}

export default React.memo(MemoComp);

// Pure Component In The Form Of Functional Based Approach => Called As Memo
