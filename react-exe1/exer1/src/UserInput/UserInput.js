import React from "react";

const unserInput = props => {
  const style = {
    border: "2px solid red"
  };

  return (
    <input
      style={style}
      type="text"
      onChange={props.changeUserName}
      value={props.currentName}
    />
  );
};

export default unserInput;
