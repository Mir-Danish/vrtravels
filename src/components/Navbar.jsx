import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import Logo from '../assets/images/Logo2.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <Link to="/" className="navbar-logo">
                <img src={Logo} alt="Velarova Tours Logo" />
            </Link>

            {/* Desktop Links */}
            <div className="navbar-links">
                <Link to="/" className={location.pathname === '/' ? 'nav-active' : ''}>Home</Link>
                <Link to="/Transport" className={location.pathname === '/Transport' ? 'nav-active' : ''}>Transport</Link>
                <Link to="/AboutPage" className={location.pathname === '/AboutPage' ? 'nav-active' : ''}>About</Link>
                <Link to="/Tourgallery" className={location.pathname === '/Tourgallery' ? 'nav-active' : ''}>Tours</Link>
            </div>

            {/* Mobile Hamburger */}
            <button
                className="navbar-hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
            >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Drawer */}
            <div className={`navbar-mobile-drawer ${menuOpen ? 'drawer-open' : ''}`}>
                <Link to="/" className={location.pathname === '/' ? 'nav-active' : ''}>Home</Link>
                <Link to="/Transport" className={location.pathname === '/Transport' ? 'nav-active' : ''}>Transport</Link>
                <Link to="/AboutPage" className={location.pathname === '/AboutPage' ? 'nav-active' : ''}>About</Link>
                <Link to="/Tourgallery" className={location.pathname === '/Tourgallery' ? 'nav-active' : ''}>Tours</Link>
                <a
                    href="https://wa.me/919103115848?text=Hello%20Velarova%20Tours,%20I%20want%20to%20book%20a%20trip!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar-cta drawer-cta"
                >
                    Book on WhatsApp
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
