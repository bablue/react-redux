import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserDetails/userList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The List of Users Are</h1>
        <UserList></UserList>
      </div>
    );
  }
}

export default App;
