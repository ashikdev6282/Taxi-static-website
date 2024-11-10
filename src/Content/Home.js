import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
    const navigate = useNavigate();
    const [bookingTypes, setBookingTypes] = useState([]);

    useEffect(() => {
        const fetchBookingTypes = async () => {
            try {
                const response = await axios.get('http://localhost:8000/bookingTypes');
                setBookingTypes(response.data);
            } catch (error) {
                console.error("Error fetching booking types:", error);
            }
        };
        fetchBookingTypes();
    }, []);

    return (
        <div className="container card-container">
            <div className="card-deck">
                {bookingTypes.map((booking) => (
                    <div className="card custom-card" key={booking.id}>
                        <img 
                            className="card-img-top" 
                            src={booking.image} 
                            alt={booking.name} 
                        />
                        <div className="card-body">
                            <h5 className="card-title">{booking.name}</h5>
                            <p className="card-text">{booking.description}</p>
                            <p className="card-text">
                                <small className="text-muted">Updated just now</small>
                            </p>
                            <button 
                                className="btn btn-primary mt-3" 
                                onClick={() => {
                                    console.log("naviagting to", booking.route);
                                    navigate(booking.route)}}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
