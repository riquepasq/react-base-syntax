import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    username: 'Username'
  }

  changeUsernameHandler = (event) => {
      this.setState({
        username: event.target.value
      })
  }

  render() {
    const style = {
      border: 'px solid blue',
      width: '100%',
      color: 'blue',
      margin: '16px auto',
      padding: '16px'
    }

    return (
      <div className="App">
        <h1 style={style}>React Base Syntax Assignment</h1>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserInput 
          name={this.state.username}
          changed={this.changeUsernameHandler}/>
      </div>
    );
  }
}

export default App;
