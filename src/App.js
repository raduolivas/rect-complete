import React, { useState } from "react";
import "./App.css";

import Person from "./Person/Person";

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 34 },
      { name: "Manu", age: 31 },
      { name: "Stephane", age: 32 }
    ]
  });

  const switchNameHandler = newName => {
    setPersonsState({
      persons: [
        { name: newName, age: 34 },
        { name: "Manu", age: 31 },
        { name: "Stephane", age: 100 }
      ]
    });
  };

  const nameChangedHandler = event => {
    setPersonsState({
      persons: [
        { name: "Person", age: 34 },
        { name: event.target.value, age: 31 },
        { name: "Stephane", age: 100 }
      ]
    });
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  return (
    <div className="App">
      <button
        style={style}
        onClick={switchNameHandler.bind(this, "Raduh from the button!!!")}
      >
        Switch Name
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        changed={nameChangedHandler}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, "raduholivas")}
        changed={nameChangedHandler}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
        changed={nameChangedHandler}
      />
    </div>
  );
};

export default App;
