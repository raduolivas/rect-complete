import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const App = props =>  {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 34}, 
      {name: 'Manu', age: 31 }, 
      {name: 'Stephane', age:32}
    ]
  });
  
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Radu', age: 34}, 
        {name: 'Manu', age: 31 }, 
        {name: 'Stephane', age:100}
      ]
    })
  }

  return (
    <div className="App">
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default App;
