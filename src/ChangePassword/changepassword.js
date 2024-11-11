
import React, { useState } from 'react';
import axios from 'axios';
import './changepassword.css';
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handlePasswordChange = async () => {
        const email = localStorage.getItem('email');

        if (!email) {
            setError('User not logged in');
            return;
        }

        if (!currentPassword || !newPassword || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        try {
            const response = await axios.get(`http://localhost:8000/users?email=${email}`);
            const user = response.data[0];

            if (user.password !== currentPassword) {
                setError('Current password is incorrect');
                return;
            }

            await axios.patch(`http://localhost:8000/users/${user.id}`, { password: newPassword });
            setSuccess('Password updated successfully');
            setError('');
        } catch (err) {
            setError('Error updating password');
            console.error(err);
        }
    };

    return (
        <div className="change-password-container">
            <h2>Change Password</h2>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            <div>
                <label>Current Password:</label>
                <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                />
            </div>
            <div>
                <label>New Password:</label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>
            <div>
                <label>Confirm New Password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <button onClick={handlePasswordChange}>Update Password</button>
            <button onClick={() => navigate('/myaccount')}>Back to Profile</button>
        </div>
    );
}

export default ChangePassword;
