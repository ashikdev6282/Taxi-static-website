import React from 'react';
import './service.css'; 

function Services() {
  return (
    <div className="services-page fade-in">
      <h1>Our Services</h1>
      
      <section className="service fade-in">
        <h2>Cab Booking</h2>
        <p>Book a cab for local travel, airport pickups, or long journeys. Our fleet of well-maintained cabs ensures a comfortable and safe journey.</p>
        <button>Book a Cab</button>
      </section>

      <section className="service fade-in">
        <h2>Auto Booking</h2>
        <p>Choose an auto for short city trips. Fast and affordable, our auto service is perfect for quick travels within the city.</p>
        <button>Book an Auto</button>
      </section>
    </div>
  );
}

export default Services;
