import React, { useState } from 'react';
import Button from '../UI/Button';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0) {
      setError({ title: 'Invalid Input', message: 'Username must be entered' });
      return;
    } else if (enteredAge.trim().length === 0) {
      setError({ title: 'Invalid Input', message: 'Age must be entered' });
      return;
    } else if (+enteredAge < 1) {
      setError({ title: 'Invalid Input', message: 'Age must be greater than 0' });
      return;
    }
    props.addUser({ username: enteredUsername, age: enteredAge });
    setEnteredUsername('');
    setEnteredAge('');
  };

  const closeErrorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} close={closeErrorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' onChange={usernameChangeHandler} value={enteredUsername} />
          <label htmlFor='age'>Age</label>
          <input type='number' id='age' onChange={ageChangeHandler} value={enteredAge} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
