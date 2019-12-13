import React, { useState } from "react";
import "./App.css";

import Person from "./Person/Person";

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "1", name: "Max", age: 34 },
      { id: "2", name: "Manu", age: 31 },
      { id: "3", name: "Stephane", age: 32 }
    ],
    showPersons: true
  });

  const deletePersonHandler = (personIndex) => {
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState(prevState => { 
      return {...prevState, persons: persons } 
    });
  }

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState(prevState => { 
      return { ...prevState, showPersons: !doesShow }
     });
  };

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...personsState.persons[personIndex]
    }

    // const person = Object.assign({}, personsState.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState(prevState => {return {...prevState, persons: persons}});
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  let persons = null;
  
  if (personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return <Person 
            click={() => deletePersonHandler(index)}
            name={person.name}
            age={person.age} 
            key={person.id}
            changed={(event) => nameChangedHandler(event, person.id)}/>
        })}
      </div>
    )
  }

  return (
    <div className="App">
      <button style={style} onClick={togglePersonsHandler}>
        Toggle Persons
      </button>
         { persons }
    </div>
  );
};

export default App;
