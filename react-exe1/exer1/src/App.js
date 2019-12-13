import React, { useState } from "react";
import "./App.css";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

const App = () => {
  const [state, setState] = useState({
    username: "Rodolfo Super FullStack"
  });

  const changeStateHandler = event => {
    setState({
      username: event.target.value
    });
  };
  return (
    <div className="App">
      <UserInput
        changeUserName={changeStateHandler}
        currentName={state.username}
      />
      <UserOutput userName={state.username} />
      <UserOutput userName={state.username} />
      <UserOutput userName="Raduh" />
    </div>
  );
};

export default App;
