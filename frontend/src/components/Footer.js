import React from "react";
import "../styles/Footer.css"; // Ensure this file is linked

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left: About Restaurant */}
                <div className="footer-section">
                    <h3>Shah's</h3>
                    <p>
                        We do not use packaged curry powders or canned meat, seafood, or vegetables. 
                        Every Shah's is prepared according to original recipes, which have 
                        become part of Indian culture over thousands of years.
                    </p>
                </div>

                {/* Center: Business Hours */}
                <div className="footer-section business-hours">
                    <h3>Business Hours</h3>
                    <p><strong>Mon - Wed:</strong> 11:30 AM - 3:00 PM | 4:30 PM - 9:00 PM</p>
                    <p><strong>Thursday:</strong> 11:00 AM - 3:00 PM | 4:30 PM - 9:00 PM</p>
                    <p><strong>Friday:</strong> 11:30 AM - 3:00 PM | 4:30 PM - 10:00 PM</p>
                    <p><strong>Saturday:</strong> 11:30 AM - 3:00 PM | 4:30 PM - 10:00 PM</p>
                    <p><strong>Sunday:</strong> 12:00 AM - 3:00 PM | 4:30 PM - 9:00 PM</p>
                </div>

                {/* Right: Contact Information */}
                <div className="footer-section contact-info">
                    <h3>Contact Information</h3>
                    <p>📍 4 Delaware Ave, Albany, NY 12210</p>
                    <p>📞 <a href="tel:+15185123002">518-512-3002</a></p>
                    <div className="footer-social">
                        <a href="#">📘</a>
                        <a href="#">📷</a>
                        <a href="#">🐦</a>
                    </div>
                </div>
                
            </div>

            {/* Copyright */}
            <div className="footer-copyright">
                Copyright © 2023 All rights reserved. Albany Shah's.
            </div>
        </footer>
    );
};

export default Footer;