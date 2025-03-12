import React, { useState } from "react";
import "../styles/Contact.css";  // Import the updated CSS file

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    const [faqEmail, setFaqEmail] = useState(""); // New state for FAQ email

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFaqSubmit = (e) => {
        e.preventDefault();
        alert(`Your question has been submitted: ${faqEmail}`);
        setFaqEmail("");  // Clear input after submission
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message sent by ${formData.name}`);
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <div className="contact-container">
            {/* Contact Section */}
            <div className="contact-section">
                {/* Left Side - Contact Info */}
                <div className="contact-info">
                    <h1>Contact Us</h1>
                    <p>Email, call, or complete the form to reach us.</p>
                    <p><strong>Email:</strong> info@restaurant.com</p>
                    <p><strong>Phone:</strong> 518-512-3002</p>
                    <a href="/" style={{ color: "#007bff", textDecoration: "none" }}>Customer Support</a>
                </div>

                {/* Right Side - Contact Form */}
                <div className="contact-form">
                    <h3>Get in Touch</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                        <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} required />
                        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
                        <button type="submit">Submit</button>
                    </form>
                    <p>By contacting us, you agree to our <a href="/">Terms & Privacy Policy</a>.</p>
                </div>
            </div>

            {/* Google Map Section */}
            <div className="map-section">
                <h3>Our Location</h3>
                <p>4 Delaware Ave, Albany, NY 12210</p>
                <iframe
                    title="Google Map"
                    width="100%"
                    height="300"
                    style={{ border: "0", borderRadius: "10px" }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.4330809228663!2d-73.767574!3d42.652177099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0bf2122f33cd%3A0xaae57c007696e4dd!2sShah&#39;s%20Halal%20Food!5e0!3m2!1sen!2sus!4v1741739335467!5m2!1sen!2sus"
                ></iframe>
            </div>

            {/* FAQ Section with Email Submission */}
            <div className="faq-section">
                <h3>Do you have any questions for us?</h3>
                <p>If there are any questions you want to ask, we will answer all of them.</p>
                <form onSubmit={handleFaqSubmit} className="faq-form">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={faqEmail}
                        onChange={(e) => setFaqEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>

                {/* FAQ List */}
                <details>
                    <summary>What makes our restaurant unique?</summary>
                    <p>We use only fresh ingredients and authentic recipes.</p>
                </details>
                <details>
                    <summary>Do we offer catering services?</summary>
                    <p>Yes, we provide catering for events and parties.</p>
                </details>
                <details>
                    <summary>Do we take reservations?</summary>
                    <p>Yes, you can call us to reserve a table.</p>
                </details>
            </div>
        </div>
    );
};

export default Contact;