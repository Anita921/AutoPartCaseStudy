import React from 'react';
import login from './login.png';
import './Login.css';

const Login = (props) => {
  return (<div class="login">
    
    <img src={login} alt="Avatar" class="avatar"/><br/><br/>
    <label for="uname"><b>Username: </b></label>
    <input type="text" placeholder="Enter Username" name="uname" value={props.username} onChange={props.handleUsername}/><br/>

    <label for="psw"><b>Password: </b></label>
    <input type="password" placeholder="Enter Password" name="psw" value={props.password} onChange={props.handlePassword}/><br/>

    <button onClick={props.submit} type="button">Login</button>
    
   </div>);


};

export default Login;
