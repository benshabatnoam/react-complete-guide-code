import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([{ username: 'Noam', age: 40 }]);
  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <div>
      <AddUser addUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
