import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* Column 1: Logo & Socials */}
        <div className="footer-col footer-brand-col">
          <Link to="/" onClick={scrollToTop} className="footer-logo">
            <span className="logo-black">VELA</span>
            <span className="logo-orange">ROVA</span>
          </Link>
          <p className="footer-text">
            Discover the magic of Kashmir with authentic local hospitality, handcrafted itineraries, and 24/7 on-ground support.
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/share/1DX2AtqXAG/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="Facebook"
            >
              <div className="icon-circle">
                <Facebook size={18} />
              </div>
            </a>
            <a
              href="https://www.instagram.com/vela_rova?igsi=MWUwc3htbHQ2NXNyeg=="
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="Instagram"
            >
              <div className="icon-circle">
                <Instagram size={18} />
              </div>
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-col footer-links-col">
          <h3>Quick Links</h3>
          <ul className="footer-nav-list">
            <li>
              <Link to="/" onClick={scrollToTop}>Home</Link>
            </li>
            <li>
              <Link to="/Transport" onClick={scrollToTop}>Transport</Link>
            </li>
            <li>
              <Link to="/AboutPage" onClick={scrollToTop}>About</Link>
            </li>
            <li>
              <Link to="/Tourgallery" onClick={scrollToTop}>Tours</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-col footer-contact-col">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <MapPin className="contact-icon" size={19} />
            <p>
              <strong>Address:</strong>
              <span>Rakhi Shilvat Sumbal, Bandipora, J&amp;K - 193501</span>
            </p>
          </div>
          <div className="contact-item">
            <Mail className="contact-icon" size={19} />
            <p>
              <strong>Email:</strong>
              <a href="mailto:velarovatours@gmail.com" className="contact-link">velarovatours@gmail.com</a>
            </p>
          </div>
          <div className="contact-item">
            <Phone className="contact-icon" size={19} />
            <p>
              <strong>Phone / WhatsApp:</strong>
              <a href="https://wa.me/919103115848" target="_blank" rel="noopener noreferrer" className="contact-link">+91 9103115848</a>
            </p>
          </div>
        </div>

      </div>

      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} <span>Velarova Tours</span> — Bandipora, Kashmir. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;