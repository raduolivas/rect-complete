import  React from 'react'

import Person from './Person/Person'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

const persons = ({persons, clicked, changed }) => persons.map((person, index) => {
        return <ErrorBoundary key={person.id}> 
          <Person 
            click={() => clicked(index)}
            name={person.name}
            age={person.age} 
            changed={(event) => changed(event, person.id)}/>
        </ErrorBoundary>
      })

export default persons