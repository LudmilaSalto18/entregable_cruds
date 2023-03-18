
import { useState, useEffect } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import axios from 'axios'
function App() {
  const [usersList, setUsersList] = useState([])
  const [userselected, setUserSelected] = useState (null)
  useEffect(() => {
    axios.get("http://localhost:8080/users")
      .then(res => setUsersList(res.data))
  }, []);
  const getUsers = () => {
    axios.get('http://localhost:8080/users')
      .then((res) => setUsersList(res.data))
  };

  const selectUser = (user) => {
    setUserSelected(user)
  };

  const deleteUsers = (id)=>{
    axios.delete (`http://localhost:8080/users/u${id}/`)
         .then(() => getUsers())
  }

  const deselectusers = () => setUserSelected(null);


  console.log(usersList)

  return (
    <div className="App_users">
      <div className='userList'>
          <UsersList
                usersList={usersList}
                selectUser={selectUser}
                deleteUsers={deleteUsers}
          />
      </div>
      <div className='userForm'>
          <UsersForm
              getUsers={getUsers}
              userselected={userselected}
              deselectusers={deselectusers}
          />
      </div>
    </div>
  )
}

export default App
