import React, { useContext, useState } from 'react';

import Logo from '../../Logo_OLX_-_OK.png';
import './Login.css';
import { FirebaseContext } from '../../store/Context';
import {useHistory} from 'react-router-dom';

function Login() {
  const history=useHistory()
  const  {firebase}= useContext(FirebaseContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
const handleLogin=(e)=>{
  e.preventDefault()
firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
  history.push('/')
}).catch((error)=>{
  alert(error.message)
})
}
  return (
    <div>
      <div className="loginParentDiv">
        <img width="100%" height="290em" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a className='signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;