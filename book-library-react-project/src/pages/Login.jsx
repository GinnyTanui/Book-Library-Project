import React from 'react'
import { useState } from 'react' 
import NavBar from '../components/NavBar';
const Login = () => { 
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("") 
  const [isLoggedIn, setIsLoggedIn] = useState(false);  

  const logIn = () => {
    setIsLoggedIn(true)
  }

  return (
    <div >  
      <NavBar/>
    {!isLoggedIn  ? (
      <div className='flex-col items-center justify-center'>
        <h1>Login</h1> 
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your username...' /> 
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email'/> 
        <input type="text" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder='Enter password'/>  
        <button type="submit" onClick={logIn}>SUBMIT</button>
      </div>
    ) : (
      <div> 
        <h1>Welcome {username}</h1>
        </div>
    )}

    </div>
  )
}

export default Login