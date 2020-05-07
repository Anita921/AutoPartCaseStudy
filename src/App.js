import React, { Component } from 'react';

import './App.css';
import Login from './Login';

class App extends Component {
  state = {user: '', password:'', loggedin: false, error: ''};
  
  return (
    <div className="App">
    <Login username={this.state.user}
           password={this.state.password}
           error={this.state.error}
           handleUsername={(event) => this.setState({user: event.target.value})}
           handlePassword={(event) => this.setState({password: event.target.value})}
           submit={() =>{
             if(this.state.user === "Jack" &&
                this.state.password === "Jack123$"){
                this.setState({loggedin: true});
                }else{
                  this.setState({error: 'Please enter valid username and password'})
                }
           }
          }
    /></div>);

};

export default App;
