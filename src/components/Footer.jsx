import { Youtube, Twitter, Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* Column 1: Logo & Socials */}
        <div className="footer-col">
          <div className="footer-logo">
            <span className="logo-black">VELA</span>
            <span className="logo-orange">ROVA</span>
          </div>
          <p className="footer-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.
          </p>
          <div className="social-icons">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="icon-link">
              <div className="icon-circle"><Youtube size={18} /></div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-link">
              <div className="icon-circle"><Twitter size={18} /></div>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-link">
              <div className="icon-circle"><Facebook size={18} /></div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-link">
              <div className="icon-circle"><Instagram size={18} /></div>
            </a>
          </div>
        </div>

        {/* Column 2: Discover */}
        <div className="footer-col">
          <h3>Discover</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#tours">Tours</a></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#login">Login</a></li>
            <li><a href="#register">Register</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <div className="contact-item">
            <MapPin className="contact-icon" size={18} />
            <p><strong>Address :</strong>Rakhi Shilvat Sumbal Bandipora J&K-193501</p>
          </div>
          <div className="contact-item">
            <Mail className="contact-icon" size={18} />
            <p><strong>Email :</strong>velarovatours@gmail.com</p>
          </div>
          <div className="contact-item">
            <Phone className="contact-icon" size={18} />
            <p><strong>Phone :</strong> +91 9103115848</p>
          </div>
        </div>

      </div>

      {/* <div className="footer-bottom">
        <p>© 2024 <span className="highlight">Vipin_uidesigns</span>. All Rights Reserved</p>
      </div> */}
    </footer>
  );
};

export default Footer;