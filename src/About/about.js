import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading" style={{ color: "white" }}>About Us</h1>
            <p className="about-description" style={{ color: "white" }}>
                Welcome to our taxi booking service! We are dedicated to providing you with safe, reliable, and comfortable rides to your destination. Our fleet consists of well-maintained vehicles and experienced drivers who prioritize your satisfaction.
            </p>
            <div className="services-section">
                <h2 className="services-heading" style={{ color: "white" }}>Our Fleet</h2>
                <div className="fleet">
                    <div className="fleet-item">
                        <img src="https://img.freepik.com/free-vector/taxi-app-concept_23-2148496604.jpg?size=626&ext=jpg&ga=GA1.1.1726865468.1725101172&semt=ais_hybrid" alt="Taxi" className="fleet-image" />
                        <h3 className="fleet-title">Standard Taxi</h3>
                        <p className="fleet-description">A comfortable ride for your everyday needs.</p>
                    </div>
                    <div className="fleet-item">
                        <img src="https://images.unsplash.com/photo-1482287068671-7fb7325e1a8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRheGl8ZW58MHx8MHx8fDA%3D" alt="Luxury Car" className="fleet-image" />
                        <h3 className="fleet-title">Luxury Car</h3>
                        <p className="fleet-description">Travel in style with our premium vehicles.</p>
                    </div>
                </div>
            </div>
            <section className="our-services">
                <h2 style={{ color: "white" }}>Our Services</h2>
                <div className="services-grid">
                    <div className="service-item">
                        <img src="https://plus.unsplash.com/premium_photo-1729018715478-3297aa41f2ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFpcnBvcnQlMjB0cmFuc2ZlciUyMGNhYnxlbnwwfHwwfHx8MA%3D%3D" alt="Airport Transfers" className="service-image" />
                        <h3 className="service-title">Airport Transfers</h3>
                        <p className="service-description">We provide prompt and reliable airport transfer services. Travel with peace of mind knowing your ride will be on time, every time.</p>
                    </div>
                    <div className="service-item">
                        <img src="https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fHww" alt="City Tours" className="service-image" />
                        <h3 className="service-title">City Tours</h3>
                        <p className="service-description">Explore the best spots in the city with our guided city tours. Perfect for tourists and locals who want to experience the city in comfort.</p>
                    </div>
                    <div className="service-item">
                        <img src="https://images.unsplash.com/photo-1459482565928-0acbdd0dceb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhbnNwb3J0YXRpb258ZW58MHx8MHx8fDA%3D" alt="Business Travel" className="service-image" />
                        <h3 className="service-title">Business Travel</h3>
                        <p className="service-description">Our corporate taxi services ensure you and your business partners get to meetings on time and in style.</p>
                    </div>
                    <div className="service-item">
                        <img src="https://plus.unsplash.com/premium_photo-1661550011562-537183c5670c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhY2thZ2UlMjBkZWxpdmVyeSUyMGNhYnxlbnwwfHwwfHx8MA%3D%3D" alt="Package Delivery" className="service-image" />
                        <h3 className="service-title">Package Delivery</h3>
                        <p className="service-description">Need to send a package quickly? Our package delivery service ensures your items are delivered safely and promptly.</p>
                    </div>
                </div>
            </section>
            <div className="why-choose-us">
                <div className="why-choose-us-content">
                    <img src="https://images.pexels.com/photos/5835458/pexels-photo-5835458.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Why Choose Us" className="why-choose-us-image" />
                    <div className="why-choose-us-text">
                        <h2 style={{ color: "white" }}>Why Choose Us</h2>
                        <p style={{ color: "white" }}>
                            We prioritize your safety and comfort. Our professional drivers and well-maintained vehicles ensure you arrive at your destination on time and in style. With competitive pricing and exceptional service, we strive to make your ride experience seamless.
                        </p>
                    </div>
                </div>
            </div>
            <div className="contact-section" style={{ color: "white" }}>
                <h2 className="contact-heading">Contact Us</h2>
                <p className="contact-info">Phone: (123) 456-7890</p>
                <p className="contact-info">Email: info@taxibooking.com</p>
                <p className="contact-info">Address: 123 Taxi Lane, City, Country</p>
            </div>
            <div className="follow-section">
                <h2 className="follow-heading" style={{ color: "white" }}>Follow Us</h2>
                <div className="social-links">
                    <a href="#" className="social-link" aria-label='Facebook'>
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="social-link">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-link">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
