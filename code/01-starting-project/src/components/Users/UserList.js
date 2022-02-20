import Card from '../UI/Card';
import classes from './UserList.module.css';

export const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              <div>
                {user.username} is {user.age} years old
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
