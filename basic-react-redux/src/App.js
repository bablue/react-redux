import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserDetails/userList';
import UserAge from './UserDetails/userAgeView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The List of Users Are</h1>
        <UserList></UserList>
        <hr></hr>
        <h1>The age of the user is</h1>
        <UserAge></UserAge>
      </div>
    );
  }
}

export default App;
