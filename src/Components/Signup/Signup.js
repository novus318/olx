import React, { useContext, useState } from 'react';
import Logo from '../../Logo_OLX_-_OK.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';

export default function Signup() {
  const history=useHistory()
const [Username, setUsername] = useState('')
const [Email, setEmail] = useState('')
const [Phone, setPhone] = useState('')
const [Password, setPassword] = useState('')
const {firebase} = useContext(FirebaseContext)

const handleSubmit=(e)=>{
e.preventDefault()
firebase.auth().createUserWithEmailAndPassword(Email,Password).then((result)=>{
  result.user.updateProfile({displayName:Username}).then(()=>{
    firebase.firestore().collection('users').add({
      id:result.user.uid,
      username:Username,
      phone:Phone
    }).then(()=>{
      history.push('/login')
    })
  })
}).catch((error)=>{
  alert(error.message)
})
}
  return (
    <div>
      <div className="signupParentDiv">
        <img width="100%" height="290em" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={Username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={Phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a className='login'>Login</a>
      </div>
    </div>
  );
}