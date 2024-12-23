import React, { useState } from 'react';
import './cab-booking.css';
import Footer from '../footer/footer';
import axios from 'axios';

function CabBooking() {
    const [email,setEmail] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropLocation, setDropLocation] = useState('');
    const [pickupUptime, setPickupUptime] = useState('');
    const [pickUpdate, setPickUpdate] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        

        if (!email || !pickupLocation || !dropLocation || !pickupUptime || !pickUpdate) {
            alert('Please fill in all the required fields.');
            return;
        }

        const bookingDetails = {
            email, 
            pickupLocation,
            dropLocation,
            pickupUptime,
            pickUpdate,
            date: new Date().toISOString()
        };

        axios.post('http://localhost:8000/bookings', bookingDetails)
        .then(() => {
            alert('Cab booked successfully!');
            setEmail('');
            setPickupLocation('');
            setDropLocation('');
            setPickupUptime('');
            setPickUpdate('');  
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to book cab. Please try again later.');
        });
    };

    return (
        <>
            <div className="container">
                <h1>Cab Booking</h1>
                <div className='card'>
                    <form onSubmit={handleFormSubmit}>
                        <div className='form-group'>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pickupLocation">Pickup Location:</label>
                            <input
                                type="text"
                                id="pickupLocation"
                                name="pickupLocation"
                                required
                                value={pickupLocation}
                                onChange={(e) => setPickupLocation(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dropLocation">Drop Location:</label>
                            <input
                                type="text"
                                id="dropLocation"
                                name="dropLocation"
                                required
                                value={dropLocation}
                                onChange={(e) => setDropLocation(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pickupUptime">Pickup Uptime:</label>
                            <input
                                type="time"
                                id="pickupUptime"
                                name="pickupUptime"
                                required
                                value={pickupUptime}
                                onChange={(e) => setPickupUptime(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pickUpdate">Pickup Date:</label>
                            <input
                                type="date"
                                id="pickUpdate"
                                name="pickUpdate"
                                required
                                value={pickUpdate}
                                onChange={(e) => setPickUpdate(e.target.value)}
                            />
                        </div>
                        <button type="submit">Book Cab</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CabBooking;
