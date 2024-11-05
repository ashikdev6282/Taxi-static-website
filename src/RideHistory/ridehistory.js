import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ridehistory.module.css';

function RideHistory() {
    const [rideHistory, setRideHistory] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            Promise.all([
                axios.get(`http://localhost:8000/bookings?email=${email}`),
                axios.get(`http://localhost:8000/autoBookings?email=${email}`)
            ])
            .then(([cabResponse, autoResponse]) => {
                setRideHistory([...cabResponse.data, ...autoResponse.data]);
            })
            .catch(err => {
                console.error('Error fetching ride history:', err);
                setError('Failed to load ride history.');
            });
        } else {
            setError('No email found in localStorage');
        }
    }, []);

    if (error) return <div className={styles.errorMessage}>{error}</div>;

    return (
        <div className={styles.rideHistoryContainer}>
            <h2 className={styles.rideHistoryTitle}>Ride History</h2>
            {rideHistory.length > 0 ? (
                <ul className={styles.rideHistoryList}>
                    {rideHistory.map((ride, index) => (
                        <li key={index} className={styles.rideCard}>
                            <p><strong>Pickup Location:</strong> {ride.pickupLocation}</p>
                            <p><strong>Drop Location:</strong> {ride.dropLocation}</p>
                            <p><strong>Pickup Date:</strong> {ride.pickUpdate}</p>
                            <p><strong>Pickup Time:</strong> {ride.pickupUptime}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={styles.noHistoryMessage}>No ride history available.</p>
            )}
        </div>
    );
}

export default RideHistory;
