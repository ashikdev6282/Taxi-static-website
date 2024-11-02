import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const navigates = useNavigate();
    const TaxiBooking = () => {
        navigate('/cab-booking');
    }
    const AutoBooking = () => {
        navigates('/autobooking');
    }

    return (
        <div className="container card-container">
            <div className="card-deck">
                {/* Card 1 */}
                <div className="card custom-card">
                    <img 
                        className="card-img-top" 
                        src="https://www.shutterstock.com/image-vector/new-york-yellow-taxi-simple-260nw-2235262191.jpg" 
                        alt="Taxi Booking App" 
                    />
                    <div className="card-body">
                        <h5 className="card-title">Book Your Ride</h5>
                        <p className="card-text">
                            Discover the easiest way to book a taxi. Quick, convenient, and reliable rides are just a tap away!
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Updated 10 mins ago</small>
                        </p>
                        <button className="btn btn-primary mt-3" onClick={TaxiBooking}>
                            Book Now
                        </button>
                    </div>
                </div>
                
                {/* Card 2 */}
                <div className="card custom-card">
                    <img 
                        className="card-img-top" 
                        src="https://media.istockphoto.com/id/1394781305/vector/tuk-tuk-icon-simple-line-element-tuk-tuk-symbol-for-templates-web-design-and-infographics.jpg?s=612x612&w=0&k=20&c=har3yDAiLNjPw-2yOiiqiB8vyQSeYikZgm6FzYmw198=" 
                        alt="Driver App" 
                    />
                    <div className="card-body">
                        <h5 className="card-title">Become a Driver</h5>
                        <p className="card-text">
                            Join our fleet and earn on your schedule. Flexible hours and guaranteed earnings for dedicated drivers.
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Updated 20 mins ago</small>
                        </p>
                        <button className="btn btn-primary mt-3" onClick={AutoBooking}>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
