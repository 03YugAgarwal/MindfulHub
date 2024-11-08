import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="company-info">
                    <h3>MindfulHub</h3>
                    <p>Your source for mindfulness and well-being.</p>
                </div>
                <div className="logo">
                    <Link to="/" onClick={handleLogoClick}>
                        <img src="MindfulHub_LatestLogo.png" alt="Company Logo" />
                    </Link>
                </div>
                <div className="contact-info">
                    <p>
                        <strong>Help:</strong> <a href="mailto:help@mindfulhub.com">help@mindfulhub.com</a>
                    </p>
                    <p>
                        <strong>Contact:</strong>{' '}
                        <a href="mailto:contact@mindfulhub.com">contact@mindfulhub.com</a>
                    </p>
                    <p>
                        <strong>Phone:</strong> +(123)-456-7890
                    </p>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; {currentYear} MindfulHub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
