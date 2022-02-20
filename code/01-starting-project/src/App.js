import React from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const users = [{ username: 'Noam', age: 40 }];
  const userAddedHandler = (user) => {
    console.log(...user);
  };

  return (
    <div>
      <AddUser userAdded={userAddedHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
