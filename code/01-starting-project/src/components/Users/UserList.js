import Card from '../UI/Card';
import classes from './UserList.module.css';

export const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user, index) => {
          return (
            <li key={index}>
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
