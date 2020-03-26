import React, { useEffect, useState } from 'react';
import UsersContainer from './components/UsersContainer';
import UserForm from './components/UserForm';
import { Container } from 'react-bootstrap';

// there is still an error on this page - maybe misplaced bracket

const App = () => {
  // state = {
  //   users: []
  // };
  const [users, setUsers] = useState([]);

  // this wil run every time
  // ComponentDidMount, componentDidUpdate, componentWillmount
  // if you want it to run every 1st and 2nd render, don't use 2nd param of useEffect

  useEffect(() => {
    getUsers();
  }, [users]);

  // HANDLE EVENT FUNCTIONS
  const handleAddUser = (e, name, username, email) => {
    e.preventDefault();
    this.postUser(name, username, email);
  };

  const handleDelete = id => {
    const resp = window.confirm(`Do you want to delete user with id ${id}?`);

    if (resp) {
      this.deleteUser(id);
    }
  };

  // DELETE lifecycle hook, no longer have access to it like this
  // componentDidMount() {
  //   this.getUsers();
  // }

  return (
    <Container>
      <UserForm addUser={this.handleAddUser} />
      <UsersContainer users={this.state.users} deleteUser={this.deleteUser} />
    </Container>
  );
};
// FETCH FUNCTIONS

//GET
const getUsers = () => {
  fetch('http://localhost:3004/users')
    .then(resp => resp.json())
    .then(usersOBJ => {
      this.setState({
        users: usersOBJ,
      });
    });
};

//POST
const postUser = (name, username, email) => {
  fetch('http://localhost:3004/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      username,
      email,
    }),
  })
    .then(resp => resp.json())
    .then(user => {
      // convert this.setState into useState()
      setUsers([...users, user]);
      // this.setState({
      //   users: [...this.state.users, user]
      // });
    });
};

//DELETE
const deleteUser = id => {
  fetch(`http://localhost:3004/users/${id}`, {
    method: 'DELETE',
  }).then(resp => {
    this.setState({
      users: this.state.users.filter(user => user.id !== id),
    });
  });
};

export default App;
