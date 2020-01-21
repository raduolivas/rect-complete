import React from "react";

import classes from "./Person.module.css";
// import styled from 'styled-components';


// const StyledDiv = styled.div`
//   margin: 16px auto;
//   border: 1px solid #eee;
//   width: 60%;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;

//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `

const person = props => {
  
  const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error('Something went wrong');
  }

  return (
    // <div className="Person" style={style}>
    
    <div className={classes.Person}>
      <h2 onClick={props.click}>
        i`m {props.name} and i am {props.age} years old
      </h2>
      <p> {props.children} </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
