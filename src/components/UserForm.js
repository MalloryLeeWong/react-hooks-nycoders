import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';

// converted this from class to func component with hooks
// if using arrow can't use export default on first line
const UserForm = props => {
  // we are getting rid of the former state in the class component
  // state = {
  //   name: '',
  //   username: '',
  //   email: '',
  // };

  // APPROACH 1 to access state:
  // pass in the state, then func that changes the state
  // best practice to follow the obj structure of the state when it was a class component, and pass the obj into useState
  // access state like:
  // state.username
  // state.name
  // state.email

  // const [state, setState] = useState({
  //   name: '',
  //   username: '',
  //   email: '',
  // });

  // APPROACH 2 to access state: (possibly preferred way?)
  // so you don't have to destructure to get different parts of state properties?
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  // if you have a number type you could pass in null if you dont want one, or 0; eg:
  // const [age, setAge] = useState(0)

  // DELETE this handlechange method, and instead in input onChange, use the setX from useState, passing in e.target.value as arg

  // const handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // APPROACH 3 to access state:

  // setState({...state,})

  // const {name, username, email} = this.state

  // replace handlechange

  return (
    <Container>
      <form
        onSubmit={e =>
          this.props.addUser(
            e,
            this.state.name,
            this.state.username,
            this.state.email
          )
        }
      >
        <label>Username</label>
        <input
          type="text"
          value={this.state.username}
          name="username"
          placeholder="username"
          onChange={e => setUserName(e.target.value)}
        />

        <label>Name</label>
        <input
          type="text"
          value={this.state.name}
          name="name"
          placeholder="name"
          onChange={e => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="text"
          value={this.state.email}
          name="email"
          placeholder="email"
          onChange={e => setEmail(e.target.value)}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default UserForm;

UserForm.propTypes = {
  addUser: PropTypes.func.isRequired,
};
