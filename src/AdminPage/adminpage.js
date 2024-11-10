import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './adminpage.css';

function AdminPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [cabBookings, setCabBookings] = useState([]);
  const [autoBookings, setAutoBookings] = useState([]);
  const [bookingTypes, setBookingTypes] = useState([]);
  const [newBookingType, setNewBookingsType] = useState({ name:'',description:'', image:''});

  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isAdminLoggedIn) {
      navigate('/adminlogin');
    }

    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:8000/users');
      setUsers(response.data);
    };

    const fetchCabBookings = async () => {
      const response = await axios.get('http://localhost:8000/bookings');
      setCabBookings(response.data);
    };

    const fetchAutoBookings = async () => {
      const response = await axios.get('http://localhost:8000/autoBookings');
      setAutoBookings(response.data);
    };

    const fetchBookingTypes = async () => {
      const response = await axios.get('http://localhost:8000/bookingTypes');
      setBookingTypes(response.data);
    };

    fetchUsers();
    fetchCabBookings();
    fetchAutoBookings();
    fetchBookingTypes();
  }, [navigate]);

  const updateCabStatus = async (id, status) => {
    const updatedCabBookings = cabBookings.map(booking => 
      booking.id === id ? { ...booking, status } : booking
    );
    setCabBookings(updatedCabBookings);
    await axios.patch(`http://localhost:8000/bookings/${id}`, { status });
  };

  const updateAutoStatus = async (id, status) => {
    const updatedAutoBookings = autoBookings.map(booking => 
      booking.id === id ? { ...booking, status } : booking
    );
    setAutoBookings(updatedAutoBookings);
    await axios.patch(`http://localhost:8000/autoBookings/${id}`, { status });
  };

  const addBookingType = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/bookingTypes', newBookingType);
    setNewBookingsType({ name:'',description:'', image:''});
    const fetchAutoBookings = async () => {
      const response = await axios.get('http://localhost:8000/bookingTypes');
      setBookingTypes(response.data);
    };
  };

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>

      <h2>Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>User Cab Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Pickup Location</th>
            <th>Drop Location</th>
            <th>Pickup Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cabBookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.pickupLocation}</td>
              <td>{booking.dropLocation}</td>
              <td>{booking.pickupUptime}</td>
              <td>{booking.status}</td>
              <td>
                <button onClick={() => updateCabStatus(booking.id, 'Confirmed')}>
                  Confirm
                </button>
                <button onClick={() => updateCabStatus(booking.id, 'Waiting')}>
                  Waiting
                </button>
                <button onClick={() => updateCabStatus(booking.id, 'Pending')}>
                  Pending
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>User Auto Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Pickup Location</th>
            <th>Drop Location</th>
            <th>Pickup Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {autoBookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.pickupLocation}</td>
              <td>{booking.dropLocation}</td>
              <td>{booking.pickupUptime}</td>
              <td>{booking.status}</td>
              <td>
                <button onClick={() => updateAutoStatus(booking.id, 'Confirmed')}>
                  Confirm
                </button>
                <button onClick={() => updateAutoStatus(booking.id, 'Waiting')}>
                  Waiting
                </button>
                <button onClick={() => updateAutoStatus(booking.id, 'Pending')}>
                  Pending
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add New Booking Type</h2>
      <form onSubmit={addBookingType}>
        <input
          type="text"
          placeholder="Booking Type Name"
          value={newBookingType.name}
          onChange={(e) => setNewBookingsType({ ...newBookingType, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newBookingType.description}
          onChange={(e) => setNewBookingsType({ ...newBookingType, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newBookingType.image}
          onChange={(e) => setNewBookingsType({ ...newBookingType, image: e.target.value })}
        />
        <button type="submit">Add Booking Type</button>
      </form>

      

      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us!</p> 
      <p>Email: support@taxibooking.com</p>
      <p>Phone: 123-456-7890</p>
    </div>
  );
}

export default AdminPage;
