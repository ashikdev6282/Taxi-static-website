import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminlogin.css';

function AdminLogin({onLogin}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const adminCredentials = {
    email: 'admin@gmail.com',
    password: 'admin@123'
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    
    const { email, password } = formData;
    
    if (email === adminCredentials.email && password === adminCredentials.password) {
      alert('Admin login successful!');
      localStorage.setItem('isAdminLoggedIn', 'true');
      onLogin();
      navigate('/adminpage'); 
    } else {
      setError('Invalid admin credentials');
    }
  };

  return (
    <div className='admin-login-container'>
      <form className='admin-login-form' onSubmit={handleAdminLogin}>
        <h2>Admin Login</h2>
        <div className='admin-login-input'>
          <label htmlFor='email'>Email</label> 
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter admin email'
            
          />
        </div>
        <div className='admin-login-input'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter admin password'
            
          />
        </div>
        {error && <p className='error'>{error}</p>}
        <button type='submit' className='admin-login-button'>Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
