import React, { useState } from 'react';
import '../assets/styles/Login.css'
import axios from 'axios';
import { Grid, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const avatarStyle = { backgroundColor: 'black' };

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    axios
      .post('your_login_api_endpoint', {
        username: username,
        password: password,
      })
      .then((response) => {
        // Handle successful login, e.g., redirect to home page
        console.log(response.data);
      })
      .catch((error) => {
        // Handle login error
        console.error(error);
      });
  };

  return (
    <div>
      <form className='m1'>
        <Grid>
          <Grid align='center'>
            <Avatar style={avatarStyle}><AccountCircleIcon /></Avatar>
          </Grid>
        </Grid>
        <h1>Login </h1>
        <br></br>

        <label>NAME</label>
        <br></br>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="your name"
          value={username}
          onChange={handleUsernameChange}
        />
        <br></br>
        <br></br>

        <label>PASSWORD</label>
        <br></br>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br></br>
        <br></br>

        {/* Use onClick instead of onSubmit to prevent form submission */}
        <button type="button" onClick={handleLogin}>
          Submit
        </button>
        <br></br>
        <br></br>

        <Link to='/register' className='Link'><h3>Don't have an account? signup here</h3></Link>

      </form>
    </div>
  );
}

export default Login;
