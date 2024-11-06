import React, { useState } from 'react';
import './contactus.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        let newErrors = {};

        
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full Name is required';
            isValid = false;
        }

        
        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }

        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            console.log('Form submitted:', formData);
            setIsSubmitted(true);
            setFormData({ fullName: '', email: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 3000); 
        }
    };

    return (
        <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">
                Have questions about our taxi services or need assistance with your booking? Our team is here to help. Reach out to us, and we'll make sure you have a smooth and reliable experience getting where you need to go.
            </p>
            <div className="contact-content">
                <div className="contact-info">
                    <div className="info-item">
                        <span className="info-icon">📍</span>
                        <div>
                            <h3>Address</h3>
                            <p>46H Sugar Camp Road,<br/>Owatonna, Minnesota, 55060</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <span className="info-icon">📞</span>
                        <div>
                            <h3>Phone</h3>
                            <p>577-457-2321</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <span className="info-icon">✉️</span>
                        <div>
                            <h3>Email</h3>
                            <p>naternamroei@imlano.ga</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <h3>Send Message</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            
                        />
                        {errors.fullName && <div className="error">{errors.fullName}</div>}
                        
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            
                        />
                        {errors.email && <div className="error">{errors.email}</div>}
                        
                        <textarea
                            name="message"
                            placeholder="Type your Message..."
                            value={formData.message}
                            onChange={handleChange}
                            
                        ></textarea>
                        {errors.message && <div className="error">{errors.message}</div>}

                        <button type="submit">Send</button>
                        {isSubmitted && <div className="success">Message sent successfully!</div>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
