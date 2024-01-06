import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const avatarStyle = { backgroundColor: 'black' };

function Register() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    axios
      .post('your_registration_api_endpoint', {
        name: name,
        dob: dob,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      })
      .then((response) => {
        // Handle successful registration, e.g., redirect to login page
        console.log(response.data);
      })
      .catch((error) => {
        // Handle registration error
        console.error(error);
      });
  };

  return (
    <div className='Are'>
      <form>
        <Grid>
          <Grid align='center'>
            <Avatar style={avatarStyle}><AccountCircleIcon /></Avatar>
          </Grid>
        </Grid>
        <h1>Register</h1>

        <label>NAME</label>
        <br></br>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={name}
          onChange={handleNameChange}
        />
        <br></br>
        <br></br>

        <label>DOB</label>
        <br></br>
        <input
          type="date"
          id="dob"
          name="dob"
          placeholder="Your dob"
          value={dob}
          onChange={handleDobChange}
        />
        <br></br>
        <br></br>

        <label>EMAIL</label>
        <br></br>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your mail"
          value={email}
          onChange={handleEmailChange}
        />
        <br></br>
        <br></br>

        <label>PHONE NUMBER</label>
        <br></br>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Your number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <br></br>
        <br></br>

        <label>PASSWORD</label>
        <br></br>
        <input
          type="password"
          id="password"
          name="password"
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
        />
        <br></br>
        <br></br>

        {/* Use onClick instead of onSubmit to prevent form submission */}
        <button type="button" onClick={handleRegister}>
          Submit
        </button>
        <br></br>
        <br></br>

        <Link to='/' className='Link'>Already have an account? Login here</Link>
      </form>
    </div>
  );
}

export default Register;
