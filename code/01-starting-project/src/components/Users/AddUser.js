import React, { useState } from 'react';
import Button from '../UI/Button';

import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    console.log(enteredUsername, enteredAge);
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' onChange={usernameChangeHandler} />
        <label htmlFor='age'>Age</label>
        <input type='number' id='age' onChange={ageChangeHandler}/>
        <Button type='submit'>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
