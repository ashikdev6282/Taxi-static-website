import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleLoginclick = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    
    if (!email || !password) {
      setError('Please provide a valid email and password');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    axios
      .get('http://localhost:8000/users')
      .then((response) => {
        const users = response.data;
        const existingUser = users.find((user) => user.email === email);

        if (existingUser) {

          if (existingUser.password === password) {
            alert('Login successful!');
            navigate('/');
          } else {
            setError('Invalid password');
          }
        } else {
          
          alert('User not found. Redirecting to registration...');
          navigate('/register');
        }
      })
      .catch((err) => {
        console.error('Error fetching user details:', err);
        setError('An error occurred while checking user details. Please try again.');
      });
  };

  return (
    <div className='login-container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
      <form className='login-form' onSubmit={handleLoginclick}>
        <h2>Login</h2>
        <div className='login-input'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={handleChange}
            placeholder='Enter your email'
            
          />
        </div>
        <div className='login-input'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={handleChange}
            placeholder='Enter your password'
            
          />
        </div>
        {error && <p className='error' style={{ color: 'red' }}>{error}</p>}
        <button type='submit' className='login-button'>Login</button>
        <p className='signup-link' style={{textDecoration: 'none'}}>
          Don't have an account? <a href='/register' style={{textDecoration: 'none'}}>Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
