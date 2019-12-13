import React from "react";
import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p>{props.userName}</p>
      <p>Some random text</p>
      <p>i hope i'll be overriden!</p>
    </div>
  );
};

export default userOutput;
