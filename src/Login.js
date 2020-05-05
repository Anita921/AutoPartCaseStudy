import React from 'react';
import login from './login.png';
import './Login.css';

function Login() {
  return (
    <div class="login">
    <p><b>Hi,Welcome to the Store. Please login!!!</b></p>
    <img src={login} alt="Avatar" class="avatar"/><br/><br/>
    <label for="uname"><b>Username: </b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/><br/>

    <label for="psw"><b>Password: </b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/><br/>

    <button type="submit">Login</button>
    
   </div>

  );
}

export default Login;
