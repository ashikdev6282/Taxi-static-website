import React, { useState, useEffect } from 'react';
import './editprofile.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditProfile() {
    const [formData, setFormData] = useState({
        id: '',
        username: '',
        email: '',
        phone: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8000/users?email=${formData.email}`);
            const user = response.data[0];

            if (user) {
                await axios.put(`http://localhost:8000/users/${user.id}`, formData);
                navigate('/myaccount');
            } else {
                setError('User not found');
            }
        } catch (error) {
            setError('An error occurred while updating user. Please try again.');
        }
    };

    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            axios.get(`http://localhost:8000/users?email=${email}`)
                .then(response => {
                    const userData = response.data[0];
                    if (userData) {
                        setFormData(userData);
                    }
                })
                .catch(error => {
                    console.error('Error fetching user:', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            console.error('No email found in localStorage');
        }
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='editprofile'>
            <button className="back-button" onClick={() => navigate(-1)} style={{backgroundColor: 'hsl(38, 92%, 65%)'}}>← Back</button>
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </label>
                {error && <div className='error'>{error}</div>}
                <button type="submit" style={{backgroundColor: 'hsl(38, 92%, 65%)'}}>Save Changes</button>
            </form>
        </div>
    );
}

export default EditProfile;
