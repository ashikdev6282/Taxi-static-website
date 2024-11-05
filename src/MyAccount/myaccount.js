import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './myaccount.css';
import { useNavigate } from 'react-router-dom';

function MyProfile() {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(''); 
    const navigate = useNavigate();

    useEffect(() => {
        const email = localStorage.getItem('email'); 
        console.log('Fetching user data for email:', email); 

        if (email) {
            axios.get(`http://localhost:8000/users?email=${email}`)
                .then(response => {
                    console.log('API response:', response);
                    if (response.data.length > 0) {
                        setUserInfo(response.data[0]);
                    } else {
                        console.error('User not found');
                        setError('User not found');
                    }
                })
                .catch(err => {
                    console.error('Error fetching user data:', err);
                    setError('Error fetching user data');
                })
                .finally(() => {
                    setLoading(false); 
                });
        } else {
            console.error('No email found in localStorage');
            setError('No email found in localStorage');
            setLoading(false);
        }
    }, []);
        
    if (loading) return <div>Loading...</div>; 
    if (error) return <div>{error}</div>;

    return (
        <div className="profile-container">
            <h2>My Profile</h2>
            <div className="profile-content">
                <div className="profile-info">
                    <img src="https://img.freepik.com/free-vector/taxi-app-concept_23-2148496627.jpg?t=st=1730736758~exp=1730740358~hmac=e232a69467e6d4dba9f395d6d767db0f1da6cd7ebca8662ff1460edbaf1c43ed&w=740" alt="Profile" className="profile-picture" />
                    <p><strong>Name:</strong> {userInfo.username}</p>
                    <p><strong>Email:</strong> {userInfo.email}</p>
                    <p><strong>Phone:</strong> {userInfo.phone}</p>
                </div>

                <div className="profile-management">
                    <h3>Management</h3>
                    <button onClick={() => navigate('/editprofile')}>Edit Profile</button>
                    <button onClick={() => navigate('/ridehistory')}>Ride History</button>
                    <button>Change Password</button>
                    <button className="logout-button">Log Out</button>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;
