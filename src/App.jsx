import './App.css';
import axios from 'axios';
import { TextField , Button} from '@mui/material';
import React, {useState, useEffect} from "react"


function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [logged, setLogged] = useState(false)
  const loginEndpoint = "https://62913677665ea71fe142a512.mockapi.io/api/v1/login/"

  useEffect(() => {
    let token = localStorage.getItem("token")
    if(token !== null){
      setLogged(true)
    }
  })

  const catEmail = (e) => {
    let emailInputValue = e.target.value
    setEmail(emailInputValue)
  }

  const catPassword = (e) => {
    let passwordInputValue = e.target.value
    setPassword(passwordInputValue)
  }

  const sendLoginData = () => {
    let data = {
      email: email,
      password: password
    }

    axios.post(loginEndpoint, data)
    .then((res) => {
      let loginResponse = res.data
      let token = loginResponse.token
      localStorage.setItem("token", token)
      setLogged(true)
    })
  }

  const logout = () => {
    localStorage.clear()
    setLogged(false)
  }

  return (
    <div className="App">
      <h1 className='title'>Login</h1>
      <TextField 
        label="Email"  
        margin="normal" 
        color="secondary" 
        onChange={catEmail}
        value={email}
      />
      <TextField 
        label="Password" 
        type="password" 
        margin="normal" 
        color="secondary" 
        onChange={catPassword}
        value={password}
      />
      <div className="buttonBox">
        <Button 
          variant="contained" 
          color="secondary"
          onClick={sendLoginData}
        >
          Login
        </Button>
        <Button 
          variant="contained" 
          color="secondary"
          onClick={logout}
        >
          Logout
        </Button>
      </div>
      <p>{logged ? "You are logged!" : "You aren't logged!"}</p>
    </div>
    
  );
}

export default App;
