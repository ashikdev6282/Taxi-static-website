
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './adminnav.css';

function AdminNavbar({onLogout}) {
  const navigate = useNavigate();
  
  const handleLogout = () => {
      onLogout();
      localStorage.removeItem('isAdminLoggedIn');
      navigate('/');
  }
      return (
        <nav className="admin-navbar">
          <div className="admin-navbar-content">
            <h2 className="admin-navbar-title">Admin Dashboard</h2>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </nav>
      );
   
  }

export default AdminNavbar;
