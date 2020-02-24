import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import "../styles.scss";

const Login = ({ history }) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [userLogin, setUserLogin] = useState({
    username: '',
    password: ''
  })

  const handleChange = event => {

    setUserLogin({ ...userLogin, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
      event.preventDefault();
      axiosWithAuth()
        .post('/login', userLogin)
        .then(res => {
            console.log('Here is the response from the Login Post', res.data.payload);
            localStorage.setItem('token', res.data.payload);
            setUserLogin({
                username: '',
                password: ''
            })
            history.push('/bubbles'); 
        })
        .catch(err => {
            localStorage.removeItem('token');
            console.log('Invalid username or password', err);
        })
  };

  return (
    <div>
      <h1 className='top-heading'>Welcome to Kiran's Bubble App!</h1>
      <h2>Enter Login Credentials</h2>
        <form className='form-setup' onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input
              className='enter-input'
              id='username'
              type='text'
              name='username'
              placeholder='Enter Username'
              onChange={handleChange}
              value={userLogin.username}
            />
            <label htmlFor='password'>Password</label>
            <input
              className='enter-input'
              id='password'
              type='password'
              name='password'
              placeholder='Enter Password'
              onChange={handleChange}
              value={userLogin.password}
            />
            <button className='submit-button' type='submit'>Log In</button>
        </form>
    </div>
  );
};

export default Login;
