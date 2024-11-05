import React, { useState } from 'react';
import './autobooking.css';
import Footer from '../footer/footer';
import axios from 'axios';

function Autobooking() {
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
      pickUpdate
    };

   
    axios
      .post('http://localhost:8000/autoBookings', bookingDetails)
      .then(() => {
        alert('Auto booked successfully!');
        setEmail('');
        setPickupLocation('');
        setDropLocation('');
        setPickupUptime('');
        setPickUpdate('');
      })
      .catch((err) => {
        console.error('Error booking auto:', err);
        alert('Error booking the auto. Please try again.');
      });
  };

  return (
    <>
      <div className="container">
        <h1>Auto Booking</h1>
        <div className="card">
          <form onSubmit={handleFormSubmit}>
            <div className='form-group'>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="pickupLocation">Pickup Location:</label>
              <input type="text" id="pickupLocation"  name="pickupLocation" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="dropLocation">Drop Location:</label>
              <input type="text" id="dropLocation" name="dropLocation" value={dropLocation} onChange={(e) => setDropLocation(e.target.value)} required />
            </div>
            <div className='form-group'>
                <label htmlFor='pickupUptime'>Pickup Uptime:</label>
                <input type="time" id="pickupUptime" name="pickupUptime" required value={pickupUptime} onChange={(e) => setPickupUptime(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="pickUpdate">Pick-up Date:</label>
              <input type="date" id="pickUpdate" name="pickUpdate" value={pickUpdate}  onChange={(e) => setPickUpdate(e.target.value)} required />
            </div>
            <button type="submit">Book Auto</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Autobooking;
