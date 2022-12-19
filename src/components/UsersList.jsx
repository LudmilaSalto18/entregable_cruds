import React from 'react';

const UsersList = ({usersList, selectUser, deleteUsers}) => {
    return (
        <ul className="allUsers">
        {
          usersList.map(user => (
            <li className="usersData" key={user.id}>
  
              <div className="fisrtUser">
                <h3>{user.first_name} {user.last_name}</h3>
                <div>Password: {user.password}</div>
                <div>Birthday: {user.birthday}</div>
                <div>Email: {user.email} </div>
              </div>
  
              <div className="twoBoton">
                <button className="userButton" onClick={() => selectUser(user)}><i className="fa-sharp fa-solid fa-pencil"></i></button>
                <button className="userButton" onClick={() => deleteUsers(user.id)}><i className="fa-sharp fa-solid fa-trash"></i> </button>
              </div>
              
            </li>
          )
          )}
      </ul>
    );
};

export default UsersList;