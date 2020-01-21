import React, { useState } from "react";
import classes from "./App.module.css";

// import styled from 'styled-components';

import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `
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


  let persons = null;
  
  
  if (personsState.showPersons) {
    persons = (
      <div>
        <Persons 
          persons={personsState.persons}
          clicked={deletePersonHandler}
          changed={nameChangedHandler} />
      </div>
    );
  }
  
  

  return (
    <div className={classes.App}>
        <Cockpit 
        showPerson={personsState.showPersons} 
        persons={personsState}
        clicked={togglePersonsHandler}/>
        { persons }
    </div>
  );
};

export default App;
