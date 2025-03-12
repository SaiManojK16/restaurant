import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Import styles

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link to="/">🍽️ Dosa Delight</Link>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

                {/* Navigation Menu */}
                <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
                    <ul className="nav-links">
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link></li>
                        <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
                        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                        <li><Link to="/franchise" onClick={() => setMenuOpen(false)}>Franchise</Link></li>
                    </ul>
                </nav>

                {/* Order Online Button */}
                <Link to="/order" className="order-button">Order Online</Link>
            </div>
        </header>
    );
};

export default Header;