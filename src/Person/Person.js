import React from 'react';
const person = (props) => {
    return (
        <div>
            <h2>i`m {props.name} and i am {props.age} years old</h2>
            <p>{props.children}</p>
        </div>
    )
}

export default person;