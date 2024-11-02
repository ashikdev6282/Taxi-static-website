import React, { useState } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmpassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { username, email, phone, password, confirmpassword } = formData;

    
    if (!username || !email || !phone || !password || !confirmpassword) {
      setError('Please provide valid details');
      return;
    }
    if (username.length < 3) {
      setError('Username must be at least 3 characters');
      return;
    }
    if (phone.length !== 10) {
      setError('Phone number must be 10 digits');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format');
      return;
    }
    if (password !== confirmpassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    
    const userData = { username, email, phone, password };

    
    axios.post('http://localhost:8000/users', userData)
      .then(() => {
        alert('Registration successful!');
        navigate('/login'); 
      })
      .catch((err) => {
        console.error('Error registering user:', err);
        setError('An error occurred during registration. Please try again.');
      });
  };

  return (
    <div className='register-container'>
      <div className='col-12'>
        <div className='d-flex gap-3 flex-column'>
          <form className='register-form' onSubmit={handleRegister}>
            <h2 className='register-heading'>Register</h2>
            <div className='register-input'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                name='username'
                id='username'
                placeholder='Username'
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className='register-input'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='register-input'>
              <label htmlFor='phone'>Phone Number</label>
              <input
                type='text'
                name='phone'
                id='phone'
                placeholder='Phone Number'
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className='register-input'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className='register-input'>
              <label htmlFor='confirmpassword'>Confirm Password</label>
              <input
                type='password'
                name='confirmpassword'
                id='confirmpassword'
                placeholder='Confirm Password'
                value={formData.confirmpassword}
                onChange={handleChange}
                required
              />
            </div>
            {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
            <button type='submit' className='register-button'>Register</button>
            <p className='register-text'>
              Already have an account? <a href='/login' style={{textDecoration: 'none'}}>Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
