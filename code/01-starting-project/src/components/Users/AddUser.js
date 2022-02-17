import React from 'react';
import Button from '../UI/Button';

import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = () => {
  const addUserHandler = (event) => {
    alert('hello');
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' />
        <label htmlFor='age'>Age</label>
        <input type='number' id='age' />
        <Button type='submit' onClick={() => alert('wow')}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
