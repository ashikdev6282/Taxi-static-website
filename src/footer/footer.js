import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaHome } from 'react-icons/fa';
import './footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    <img 
                        src="https://img.freepik.com/premium-vector/yellow-car-with-yellow-roof-that-says-naja_969863-205367.jpg?ga=GA1.1.1726865468.1725101172&semt=ais_hybrid" 
                        alt="Taxi Booking Logo" 
                        className="footer-logo-img"
                    />
                    <h4>Taxi Service</h4>
                </div>
                <div className="newsletter-form">
                  <input type="email" name="email" placeholder="Subscribe to our newsletter" />
                  <input type="submit" value="Subscribe" />
                </div>
                <div className="footer-columns">
                    <div className="footer-column contact">
                        <h5>Contact Us</h5>
                        <p><FaPhone /> +123-456-7890</p>
                        <p><FaEnvelope /> info@taxibooking.com</p>
                        <p><FaHome /> 123 Taxi Lane, City, Country</p>
                    </div>
                    <div className="footer-column links">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="/"><FaHome /> Home</a></li>
                            <li><a href="/about"><FaHome /> About Us</a></li>
                            <li><a href="/services"><FaHome /> Services</a></li>
                            <li><a href="/contact"><FaHome /> Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-column social">
                        <h5>Follow Us</h5>
                        <div className="social-icons" style={{ display: "flex", gap: "10px"}}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-gallery">
                    <h5>Gallery</h5>
                    <div className="gallery-cards">
                        <div className="card">
                            <img src="https://images.pexels.com/photos/462867/pexels-photo-462867.jpeg?auto=compress&cs=tinysrgb&w=600" className='card-img' alt="Gallery Image 1" />
                        </div>
                        <div className="card">
                            <img src="https://images.pexels.com/photos/1310781/pexels-photo-1310781.jpeg?auto=compress&cs=tinysrgb&w=600" className='card-img' alt="Gallery Image 2" />
                        </div>
                        <div className="card">
                            <img src="https://images.pexels.com/photos/4606338/pexels-photo-4606338.jpeg?auto=compress&cs=tinysrgb&w=600" className='card-img' alt="Gallery Image 3" />
                        </div>
                        <div className="card">
                            <img src="https://images.pexels.com/photos/1115207/pexels-photo-1115207.jpeg?auto=compress&cs=tinysrgb&w=600" className='card-img' alt="Gallery Image 4" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Taxi Service. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
