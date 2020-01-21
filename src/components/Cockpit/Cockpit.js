import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = ({showPerson, persons, clicked}) => {

    const assignClasses = [];
    let btnClasses = ''
    
    if(showPerson) {
        btnClasses = classes.Red;
    }

    if(persons.length <= 2) {
        assignClasses.push(classes.Red)
    }else 
    
    if(persons.length <= 1) {
        assignClasses.push(classes.Bold)  
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, i'm the React App</h1>
            <p className={assignClasses}> This is really working</p>
            <button className={btnClasses} onClick={clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;